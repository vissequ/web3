const splitPayment = false; // Master variable to control payment behavior

// DOM Elements
const connectMetaMaskButton = document.getElementById('connectMetaMask');
const connectKeplrButton = document.getElementById('connectKeplr');
const walletInfo = document.getElementById('walletInfo');
const paymentForm = document.getElementById('paymentForm');
const recipientInput = document.getElementById('recipientInput');
const setRecipientButton = document.getElementById('setRecipientButton');
const recipientAddressInput = document.getElementById('recipientAddressInput');
const recipientDetails = document.getElementById('recipientDetails');
const displayRecipientAddress = document.getElementById('displayRecipientAddress');
const networkSelect = document.getElementById('networkSelect');
const message = document.getElementById('message');



// Handle network selection change
// networkSelect.addEventListener('change', async () => {
//     const network = networkSelect.value;
//     if (network === 'osmosis') {
//         walletInfo.textContent = 'Wallet not connected';
//         connectWalletButton.style.display = 'block';

//         alert('Please connect your Keplr wallet for Osmosis.');
//     }
// });


// Validate EVM address
const isValidEVMAddress = (address) => {
    try {
        ethers.utils.getAddress(address);
        return true;
    } catch {
        return false;
    }
};

// Validate Osmosis address (starts with 'osmo1')
const isValidOsmosisAddress = (address) => {
    return /^osmo1[a-z0-9]{38}$/.test(address);
};

// Detect recipient type (EVM or Osmosis)
const getRecipientType = (address) => {
    if (isValidEVMAddress(address)) return 'evm';
    if (isValidOsmosisAddress(address)) return 'osmosis';
    return null;
};

// Set recipient manually
setRecipientButton.addEventListener('click', () => {
    const enteredAddress = recipientAddressInput.value.trim();
    const addressType = getRecipientType(enteredAddress);

    if (addressType) {
        displayRecipientAddress.textContent = enteredAddress;
        recipientDetails.style.display = 'block';
        paymentForm.style.display = 'block';
        recipientInput.style.display = 'none';
        message.textContent = '';
    } else {
        message.textContent = 'Invalid recipient address. Enter valid EVM or Osmosis address.';
    }
});

// Initialize form based on URL
window.addEventListener('load', () => {
    const query = new URLSearchParams(window.location.search);
    const address = query.get('recipient');
    const addressType = getRecipientType(address);

    if (addressType) {
        displayRecipientAddress.textContent = address;
        recipientDetails.style.display = 'block';
        paymentForm.style.display = 'block';
    } else {
        recipientInput.style.display = 'block';
    }
});

// Connect MetaMask
connectMetaMaskButton.addEventListener('click', async () => {
    if (!window.ethereum) {
        walletInfo.textContent = "MetaMask is not installed!";
        return;
    }
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        walletInfo.textContent = `Connected: ${accounts[0]}`;
    } catch (error) {
        walletInfo.textContent = `Error: ${error.message}`;
    }
});

// Connect Keplr
connectKeplrButton.addEventListener('click', async () => {
    try {
        if (!window.keplr) {
            alert('Keplr wallet is not installed!');
            return;
        }
        await window.keplr.enable('osmosis-1');
        const offlineSigner = window.getOfflineSigner('osmosis-1');
        const accounts = await offlineSigner.getAccounts();
        walletInfo.textContent = `Connected: ${accounts[0].address}`;
    } catch (error) {
        walletInfo.textContent = `Error: ${error.message}`;
    }
});

// Payment Submission
paymentForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const network = networkSelect.value;
    const recipientAddress = displayRecipientAddress.textContent;
    const amount = document.getElementById('amount').value;

    if (network === 'osmosis') {
        if (splitPayment) {
            message.textContent = "Split payment not supported on Osmosis.";
            return;
        }
        try {
            const offlineSigner = window.getOfflineSigner('osmosis-1');
            const accounts = await offlineSigner.getAccounts();

            const fee = { amount: [{ denom: "uosmo", amount: "2500" }], gas: "200000" };

            const msg = {
                typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                value: {
                    fromAddress: accounts[0].address,
                    toAddress: recipientAddress,
                    amount: [{
                        denom: "uosmo",
                        amount: (parseFloat(amount) * 1_000_000).toString()
                    }]
                }
            };

            const result = await window.KeplrClient.signAndBroadcast(accounts[0].address, [msg], fee);
            message.innerHTML = `Transaction sent: <a href="https://www.mintscan.io/osmosis/tx/${result.transactionHash}" target="_blank">${result.transactionHash}</a>`;
        } catch (error) {
            message.textContent = `Error: ${error.message}`;
        }
        return;
    }

    // Existing EVM logic for other networks
    if (!window.ethereum) {
        message.textContent = "MetaMask is not installed!";
        return;
    }

    try {
        await switchNetwork(network);

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const parsedAmount = ethers.utils.parseEther(amount);

        if (splitPayment) {
            const contract = new ethers.Contract(
                networks[network].contractAddress,
                contractABI,
                signer
            );

            const tx = await contract.splitPayment(recipientAddress, parsedAmount, {
                value: parsedAmount,
                gasLimit: ethers.BigNumber.from("300000")
            });

            message.innerHTML = `Transaction sent: <a href="${networks[network].blockExplorerUrls[0]}/tx/${tx.hash}" target="_blank">${tx.hash}</a>`;
        } else {
            const tx = await signer.sendTransaction({
                to: recipientAddress,
                value: parsedAmount
            });

            message.innerHTML = `Payment sent: <a href="${networks[network].blockExplorerUrls[0]}/tx/${tx.hash}" target="_blank">${tx.hash}</a>`;
        }
    } catch (error) {
        console.error(error);
        message.textContent = `Error: ${error.message}`;
    }
});



// Network Switching Logic
const switchNetwork = async (network) => {
    try {
        const { chainId, chainName, nativeCurrency, rpcUrls, blockExplorerUrls } = networks[network];

        // Request MetaMask to switch to the selected network
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId }]
        });
    } catch (error) {
        if (error.code === 4902) {
            // Add the network to MetaMask if it is not already available
            const { chainId, chainName, nativeCurrency, rpcUrls, blockExplorerUrls } = networks[network];

            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainId,
                            chainName,
                            nativeCurrency,
                            rpcUrls,
                            blockExplorerUrls
                        }
                    ]
                });
            } catch (addError) {
                console.error("Error adding network:", addError);
                throw addError;
            }
        } else {
            console.error("Error switching network:", error);
            throw error;
        }
    }
};

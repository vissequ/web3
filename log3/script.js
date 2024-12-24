const contractAddress = "0xb29b723b6200006c88172f50725265180ef6dabf";
const contractABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "postId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "message",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "CommentCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "commentId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "liker",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "liked",
				"type": "bool"
			}
		],
		"name": "CommentLiked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_postId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_message",
				"type": "string"
			}
		],
		"name": "createComment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_header",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_message",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_hasPaywall",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "_paywallAmount",
				"type": "uint256"
			}
		],
		"name": "createPost",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_commentId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_like",
				"type": "bool"
			}
		],
		"name": "likeComment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_postId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_like",
				"type": "bool"
			}
		],
		"name": "likePost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "header",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "message",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "hasPaywall",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "paywallAmount",
				"type": "uint256"
			}
		],
		"name": "PostCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "postId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "liker",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "liked",
				"type": "bool"
			}
		],
		"name": "PostLiked",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "commentCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "comments",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "postId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "message",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "likes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "dislikes",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasDislikedComment",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasDislikedPost",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasLikedComment",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasLikedPost",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "postCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "posts",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "header",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "message",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "likes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "dislikes",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "hasPaywall",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "paywallAmount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let provider;
let signer;
let contract;
let paywallEnabled = false;

// Check if MetaMask is connected
async function isMetaMaskConnected() {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        return accounts.length > 0; // Returns true if connected
    }
    return false;
}

// Connect to MetaMask
document.getElementById("connectButton").addEventListener("click", async () => {
    if (window.ethereum) {
        try {
            provider = new ethers.BrowserProvider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            signer = await provider.getSigner();
            const walletAddress = await signer.getAddress();
            contract = new ethers.Contract(contractAddress, contractABI, signer);

            // Display wallet address
            const walletAddressDisplay = document.getElementById("walletAddress");
            walletAddressDisplay.style.display = "block";
            walletAddressDisplay.textContent = `Connected: ${walletAddress}`;

            // Load posts once connected
            loadPosts();
        } catch (error) {
            console.error("Error connecting to MetaMask:", error);
            alert("Failed to connect to MetaMask.");
        }
    } else {
        alert("Please install MetaMask to use this application.");
    }
});

// Toggle Paywall Button
document.getElementById("togglePaywallButton").addEventListener("click", () => {
    const paywallContainer = document.getElementById("paywallAmountContainer");
    paywallEnabled = !paywallEnabled;
    paywallContainer.style.display = paywallEnabled ? "block" : "none";
});

// Create Post
document.getElementById("postForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const header = document.getElementById("postHeader").value;
    const message = document.getElementById("postMessage").value;
    const paywallAmount = paywallEnabled
        ? ethers.parseEther(document.getElementById("postPaywallAmount").value)
        : 0;

    if (!contract) {
        alert("Please connect to MetaMask first.");
        return;
    }

    try {
        const tx = await contract.createPost(header, message, paywallEnabled, paywallAmount, {
            value: paywallAmount,
        });
        await tx.wait();

        // Alert success and reload posts
        alert("Post created successfully!");
        loadPosts();
    } catch (error) {
        console.error("Error creating post:", error);
        alert("Error creating post.");
    }
});

async function loadPosts() {
    if (!contract) {
        console.warn("MetaMask is not connected. Posts will not be loaded.");
        return;
    }

    const postList = document.getElementById("postList");
    postList.innerHTML = "";

    try {
        // Fetch the total number of posts (BigInt)
        const postCountBigInt = await contract.postCount();
        const postCount = Number(postCountBigInt); // Convert BigInt to a number
        console.log("Total Posts:", postCount);

        // Iterate from the most recent post to the oldest
        for (let i = postCount; i >= 1; i--) {
            const post = await contract.posts(i); // Fetch post details
            const timestamp = Number(post.timestamp); // Convert BigInt to number for date calculations

            const postDiv = document.createElement("div");
            postDiv.className = "post";
            postDiv.innerHTML = `
                <h3>${post.header}</h3>
                <p><strong>Message:</strong> ${post.message}</p>
                <p><strong>Creator:</strong> ${post.creator}</p>
                <p><strong>Timestamp:</strong> ${new Date(timestamp * 1000).toLocaleString()}</p>
                <p><strong>Paywall:</strong> ${post.hasPaywall ? "Yes" : "No"}</p>
                <p><strong>Paywall Amount:</strong> ${
                    post.hasPaywall ? ethers.formatEther(post.paywallAmount) + " POL" : "N/A"
                }</p>
                <a href="/?article=${post.id}">Read More</a>
            `;
            postList.appendChild(postDiv);
        }
    } catch (error) {
        console.error("Error loading posts:", error);
    }
}



// Optional: Show posts without requiring MetaMask if the user is not connected
window.onload = async () => {
    const connected = await isMetaMaskConnected();
    if (connected) {
        console.log("MetaMask is connected. Loading posts.");
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        contract = new ethers.Contract(contractAddress, contractABI, signer);
        loadPosts();
    } else {
        console.log("MetaMask is not connected. Waiting for user to connect.");
    }
};

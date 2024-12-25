document.addEventListener("DOMContentLoaded", () => {
    const CONTRACT_ADDRESS = "0xE7bD100E131a392a1Db25d7191891100f4df74B3";
    const ABI = [
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
					"name": "_message",
					"type": "string"
				}
			],
			"name": "createPost",
			"outputs": [],
			"stateMutability": "nonpayable",
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
		}
    ];

    let userAccount;
    let provider;
    let contract;
    let isWalletConnected = false;

    // Function to connect or disconnect the wallet
    async function toggleWalletConnection() {
        if (isWalletConnected) {
            const confirmDisconnect = confirm("Are you sure you want to disconnect?");
            if (confirmDisconnect) {
                disconnectWallet();
            }
        } else {
            connectWallet();
        }
    }

    async function connectWallet() {
        if (typeof window.ethereum === "undefined") {
            alert("MetaMask is not installed. Please install MetaMask to use this site.");
            return;
        }

        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            provider = new ethers.providers.Web3Provider(window.ethereum);
            const accounts = await provider.listAccounts();

            if (!accounts || accounts.length === 0) {
                alert("No accounts found. Please unlock MetaMask and connect an account.");
                return;
            }

            userAccount = accounts[0];
            document.getElementById("walletAddress").innerText = `Connected Wallet: ${userAccount}`;

            contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider.getSigner());

            isWalletConnected = true;
            document.getElementById("connectWallet").innerText = "Disconnect";
            alert("Wallet connected successfully!");
            loadPosts();
        } catch (error) {
            console.error("Error connecting wallet:", error);
            alert("Failed to connect wallet. Please try again.");
        }
    }

    function disconnectWallet() {
        userAccount = null;
        isWalletConnected = false;
        document.getElementById("walletAddress").innerText = "";
        document.getElementById("connectWallet").innerText = "Connect Wallet";
        alert("Wallet disconnected.");
    }

    function showLoadingModal() {
        const loadingModal = document.getElementById("loadingModal");
        if (loadingModal) loadingModal.style.display = "flex";
    }

    function hideLoadingModal() {
        const loadingModal = document.getElementById("loadingModal");
        if (loadingModal) loadingModal.style.display = "none";
    }

    const ROOT_FOLDER = "memes"; // Replace with your actual root folder
    const memeText = "[elon-shades]";
    const memeImage = `${ROOT_FOLDER}/elon-shades.gif`;

    let activeTextArea = null;

    // Create the meme button dynamically
    const memeButton = document.createElement("button");
    memeButton.innerHTML = `<img src="${memeImage}" alt="Elon Shades Meme" style="width: 25px; height: auto;">`;
    memeButton.style.display = "none"; // Initially hide the button
    memeButton.style.position = "absolute";
    memeButton.style.zIndex = "1000";

    document.body.appendChild(memeButton);

    // Show the meme button below the selected textarea
    function showMemeButton(textArea) {
        activeTextArea = textArea;
        const rect = textArea.getBoundingClientRect();
        memeButton.style.left = `${rect.left}px`;
        memeButton.style.top = `${rect.bottom + window.scrollY}px`;
        memeButton.style.display = "inline-block";
    }

    // Hide the meme button
    function hideMemeButton() {
        activeTextArea = null;
        memeButton.style.display = "none";
    }

    // Insert meme text into the textarea
    function insertMemeText() {
        if (activeTextArea) {
            const startPos = activeTextArea.selectionStart;
            const endPos = activeTextArea.selectionEnd;
            const text = activeTextArea.value;

            activeTextArea.value =
                text.substring(0, startPos) +
                memeText +
                text.substring(endPos);
            activeTextArea.focus();
            activeTextArea.setSelectionRange(
                startPos + memeText.length,
                startPos + memeText.length
            );
        }
    }

    memeButton.addEventListener("click", (event) => {
        event.preventDefault();
        insertMemeText();
        hideMemeButton(); // Optionally hide after insertion
    });

    document.addEventListener("focusin", (event) => {
        if (event.target.tagName === "TEXTAREA") {
            showMemeButton(event.target);
        }
    });

    document.addEventListener("focusout", (event) => {
        if (event.target.tagName === "TEXTAREA" && !memeButton.contains(event.relatedTarget)) {
            hideMemeButton();
        }
    });

    async function loadPosts() {
		if (!userAccount) {
			alert("Please connect your wallet first.");
			return;
		}
	
		try {
			const postCount = await contract.postCount();
			const postsDiv = document.getElementById("posts");
	
			// Clear previous content
			postsDiv.innerHTML = "";
	
			// Add a spacer or horizontal line
			const spacer = document.createElement("div");
			spacer.style.margin = "20px 0"; // Adds vertical space
			postsDiv.appendChild(spacer);
	
			for (let i = postCount; i >= 1; i--) {
				const post = await contract.posts(i);
				const postMessage = post.message.replaceAll(
					"[elon-shades]",
					`<img src="memes/elon-shades.gif" alt="Elon Shades Meme" style="width: 75px; height: auto;">`
				);
	
				const postHTML = `
					<div id="post-${post.id}">
						<hr style="border: 1px solid #ccc; margin: 20px 0;"> <!-- Horizontal bar -->
						<h3>${postMessage}</h3>
						<p>By: ${post.creator}</p>
						<p>Likes: ${post.likes}, Dislikes: ${post.dislikes}</p>
						<button onclick="likePost(${post.id}, true)">Like</button>
						<button onclick="likePost(${post.id}, false)">Dislike</button>
						<button class="load-comments-button" data-post-id="${post.id}">
							Load Comments
						</button>
						<div id="comments_${post.id}" style="margin-top: 10px;"></div>
						<textarea id="comment_${post.id}" placeholder="Your comment" rows="2" style="resize: none;"></textarea>
						<button class="comment-button" data-post-id="${post.id}">Comment</button>
					</div>
				`;
				postsDiv.innerHTML += postHTML;
			}
	
			document.querySelectorAll(".load-comments-button").forEach((button) => {
				button.addEventListener("click", (e) => {
					const postId = e.target.getAttribute("data-post-id");
					loadComments(postId);
				});
			});
	
			document.querySelectorAll(".comment-button").forEach((button) => {
				button.addEventListener("click", (e) => {
					const postId = e.target.getAttribute("data-post-id");
					createComment(postId);
				});
			});
		} catch (error) {
			console.error("Error loading posts:", error);
			alert("Failed to load posts. Please try again.");
		}
	}
	

    document.getElementById("connectWallet").addEventListener("click", toggleWalletConnection);
});

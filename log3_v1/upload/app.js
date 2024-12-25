document.addEventListener("DOMContentLoaded", () => {
    const CONTRACT_ADDRESS = "0xE7bD100E131a392a1Db25d7191891100f4df74B3";
    const ABI = [{
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
	}];

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

    // Function to connect MetaMask
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

    // Function to disconnect the wallet
    function disconnectWallet() {
        userAccount = null;
        isWalletConnected = false;
        document.getElementById("walletAddress").innerText = "";
        document.getElementById("connectWallet").innerText = "Connect Wallet";
        alert("Wallet disconnected.");
    }

    // Function to show the "Please Wait" modal
    function showLoadingModal() {
        const loadingModal = document.getElementById("loadingModal");
        if (loadingModal) loadingModal.style.display = "flex";
    }

    // Function to hide the "Please Wait" modal
    function hideLoadingModal() {
        const loadingModal = document.getElementById("loadingModal");
        if (loadingModal) loadingModal.style.display = "none";
    }

    // Function to load posts
    async function loadPosts() {
        if (!userAccount) {
            alert("Please connect your wallet first.");
            return;
        }

        try {
            const postCount = await contract.postCount();
            const postsDiv = document.getElementById("posts");
            postsDiv.innerHTML = ""; // Clear previous posts

            for (let i = postCount; i >= 1; i--) {
                const post = await contract.posts(i);
                const commentCount = await countCommentsForPost(i);

                const postHTML = `
                    <div id="post-${post.id}">
                        <h3>${post.message}</h3>
                        <p>By: ${post.creator}</p>
                        <p>Likes: ${post.likes}, Dislikes: ${post.dislikes}</p>
                        <button onclick="likePost(${post.id}, true)">Like</button>
                        <button onclick="likePost(${post.id}, false)">Dislike</button>
                        <button class="load-comments-button" data-post-id="${post.id}">
                            Load Comments (${commentCount})
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

    // Helper function to count comments for a post
    async function countCommentsForPost(postId) {
        const commentCount = await contract.commentCount();
        let count = 0;

        for (let j = 1; j <= commentCount; j++) {
            const comment = await contract.comments(j);
            if (comment.postId == postId) {
                count++;
            }
        }
        return count;
    }

    // Function to load comments
    async function loadComments(postId) {
        try {
            const commentsDiv = document.getElementById(`comments_${postId}`);
            commentsDiv.innerHTML = "<p>Loading comments...</p>";

            const commentCount = await contract.commentCount();
            let commentsLoaded = false;

            for (let j = 1; j <= commentCount; j++) {
                const comment = await contract.comments(j);
                if (comment.postId == postId) {
                    commentsLoaded = true;
                    const commentHTML = `
                        <div class="comment">
                            <p><strong>${comment.creator}:</strong> ${comment.message}</p>
                            <p>Likes: ${comment.likes}, Dislikes: ${comment.dislikes}</p>
                            <button onclick="likeComment(${comment.id}, true)">Like</button>
                            <button onclick="likeComment(${comment.id}, false)">Dislike</button>
                        </div>
                    `;
                    commentsDiv.innerHTML += commentHTML;
                }
            }

            if (!commentsLoaded) {
                commentsDiv.innerHTML = "<p>No comments yet. Be the first to comment!</p>";
            }
        } catch (error) {
            console.error(`Error loading comments for post ${postId}:`, error);
            alert("Failed to load comments. Please try again.");
        }
    }

    // Function to like/dislike a post
    async function likePost(postId, like) {
        if (!userAccount) return alert("Please connect your wallet first.");

        try {
            const tx = await contract.likePost(postId, like);
			showLoadingModal();
            await tx.wait();
            alert("Your reaction to the post has been recorded!");
            loadPosts();
        } catch (error) {
            console.error("Error liking/disliking post:", error);
            alert("Failed to record your reaction. Please try again.");
        } finally {
            hideLoadingModal();
        }
    }

    // Function to like/dislike a comment
    async function likeComment(commentId, like) {
        if (!userAccount) return alert("Please connect your wallet first.");

        try {
            const tx = await contract.likeComment(commentId, like);
			showLoadingModal();
            await tx.wait();
            alert("Your reaction to the comment has been recorded!");
            loadPosts();
        } catch (error) {
            console.error("Error liking/disliking comment:", error);
            alert("Failed to record your reaction. Please try again.");
        } finally {
            hideLoadingModal();
        }
    }

    // Function to create a post
    async function createPost() {
        if (!userAccount) return alert("Please connect your wallet first.");
        const message = document.getElementById("postMessage").value;

        if (!message) {
            alert("Please enter a message.");
            return;
        }

        try {
            const tx = await contract.createPost(message);
			showLoadingModal();
            await tx.wait();
            alert("Post created successfully!");
            loadPosts();
        } catch (error) {
            console.error("Error creating post:", error);
            alert("Failed to create post. Please try again.");
        } finally {
            hideLoadingModal();
        }
    }

    // Function to create a comment
    async function createComment(postId) {
        if (!userAccount) return alert("Please connect your wallet first.");
        const message = document.getElementById(`comment_${postId}`).value;

        if (!message) {
            alert("Please enter a comment.");
            return;
        }

        try {
            const tx = await contract.createComment(postId, message);
			showLoadingModal();
            await tx.wait();
            alert("Comment added successfully!");
            loadPosts();
        } catch (error) {
            console.error("Error adding comment:", error);
            alert("Failed to add comment. Please try again.");
        } finally {
            hideLoadingModal();
        }
    }

    // Expose functions globally
    window.likePost = likePost;
    window.likeComment = likeComment;

    document.getElementById("connectWallet").addEventListener("click", toggleWalletConnection);
    document.getElementById("createPostButton").addEventListener("click", createPost);
});

document.addEventListener("DOMContentLoaded", () => {
    const lightThemeButton = document.getElementById("lightThemeButton");
    const darkThemeButton = document.getElementById("darkThemeButton");

    // Apply saved theme preference on load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.toggle("dark-theme", savedTheme === "dark");
    }

    // Apply light theme
    lightThemeButton.addEventListener("click", () => {
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
    });

    // Apply dark theme
    darkThemeButton.addEventListener("click", () => {
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
    });
});


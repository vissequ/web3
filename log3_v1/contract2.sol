// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SocialBoard {
    struct Post {
        uint id;
        string message;
        address creator;
        uint timestamp;
        uint likes;
        uint dislikes;
    }

    struct Comment {
        uint id;
        uint postId;
        string message;
        address creator;
        uint timestamp;
        uint likes;
        uint dislikes;
    }

    uint public postCount = 0;
    uint public commentCount = 0;

    mapping(uint => Post) public posts;
    mapping(uint => Comment) public comments;

    // Track likes and dislikes for posts
    mapping(uint => mapping(address => bool)) public hasLikedPost;
    mapping(uint => mapping(address => bool)) public hasDislikedPost;

    // Track likes and dislikes for comments
    mapping(uint => mapping(address => bool)) public hasLikedComment;
    mapping(uint => mapping(address => bool)) public hasDislikedComment;

    event PostCreated(uint id, string message, address creator, uint timestamp);
    event CommentCreated(uint id, uint postId, string message, address creator, uint timestamp);
    event PostLiked(uint postId, address liker, bool liked);
    event CommentLiked(uint commentId, address liker, bool liked);

    function createPost(string calldata _message) external {
        postCount++;
        posts[postCount] = Post(postCount, _message, msg.sender, block.timestamp, 0, 0);
        emit PostCreated(postCount, _message, msg.sender, block.timestamp);
    }

    function createComment(uint _postId, string calldata _message) external {
        require(posts[_postId].id > 0, "Post does not exist");
        commentCount++;
        comments[commentCount] = Comment(commentCount, _postId, _message, msg.sender, block.timestamp, 0, 0);
        emit CommentCreated(commentCount, _postId, _message, msg.sender, block.timestamp);
    }

    function likePost(uint _postId, bool _like) external {
        require(posts[_postId].id > 0, "Post does not exist");

        if (_like) {
            require(!hasLikedPost[_postId][msg.sender], "You have already liked this post");
            hasLikedPost[_postId][msg.sender] = true;

            // Remove dislike if it exists
            if (hasDislikedPost[_postId][msg.sender]) {
                hasDislikedPost[_postId][msg.sender] = false;
                posts[_postId].dislikes--;
            }

            posts[_postId].likes++;
        } else {
            require(!hasDislikedPost[_postId][msg.sender], "You have already disliked this post");
            hasDislikedPost[_postId][msg.sender] = true;

            // Remove like if it exists
            if (hasLikedPost[_postId][msg.sender]) {
                hasLikedPost[_postId][msg.sender] = false;
                posts[_postId].likes--;
            }

            posts[_postId].dislikes++;
        }

        emit PostLiked(_postId, msg.sender, _like);
    }

    function likeComment(uint _commentId, bool _like) external {
        require(comments[_commentId].id > 0, "Comment does not exist");

        if (_like) {
            require(!hasLikedComment[_commentId][msg.sender], "You have already liked this comment");
            hasLikedComment[_commentId][msg.sender] = true;

            // Remove dislike if it exists
            if (hasDislikedComment[_commentId][msg.sender]) {
                hasDislikedComment[_commentId][msg.sender] = false;
                comments[_commentId].dislikes--;
            }

            comments[_commentId].likes++;
        } else {
            require(!hasDislikedComment[_commentId][msg.sender], "You have already disliked this comment");
            hasDislikedComment[_commentId][msg.sender] = true;

            // Remove like if it exists
            if (hasLikedComment[_commentId][msg.sender]) {
                hasLikedComment[_commentId][msg.sender] = false;
                comments[_commentId].likes--;
            }

            comments[_commentId].dislikes++;
        }

        emit CommentLiked(_commentId, msg.sender, _like);
    }
}

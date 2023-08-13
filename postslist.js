function openModal() {
    document.getElementById('signupModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('signupModal').style.display = 'none';
}

function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}



function openDeleteModal(postId) {
    selectedPostId = postId; // Store the selected post's ID
    document.getElementById('deleteModal').style.display = 'block';
}

let selectedPostId; // Store the ID of the post to be deleted

// Open the delete confirmation modal
function openDeleteModal(postId) {
    selectedPostId = postId; // Store the selected post's ID
    document.getElementById('deleteModal').style.display = 'block';
}

// Close the delete confirmation modal
function closeDeleteModal() {
    document.getElementById('deleteModal').style.display = 'none';
}

// Delete the post and close the modal
function deletePost() {
    // Implement the logic to delete the post (e.g., API call)
    
    // After successful deletion:
    // Remove the post element from the DOM
    const postElement = document.getElementById(selectedPostId);
    if (postElement) {
        postElement.remove();
    }
    
    // Close the modal
    closeDeleteModal();
}

// post deletion

function openDeleteModal(postId) {
    selectedPostId = postId;
    document.getElementById('deleteModal').style.display = 'block';
    
    // Add an event listener to the "Yes" button
    document.getElementById('confirmDeleteButton').addEventListener('click', deletePost);
}

function closeDeleteModal() {
    document.getElementById('deleteModal').style.display = 'none';
    
    // Remove the event listener when closing the modal
    document.getElementById('confirmDeleteButton').removeEventListener('click', deletePost);
}

function deletePost() {
    // Implement the logic to delete the post (e.g., API call)
    
    // After successful deletion:
    // Remove the post element from the DOM
    const postElement = document.getElementById(selectedPostId);
    if (postElement) {
        postElement.remove();
    }
    
    // Close the modal
    closeDeleteModal();
}
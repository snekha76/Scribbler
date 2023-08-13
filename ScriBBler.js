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


function validateSignIn() {
    var username = document.getElementById('usernameLoginInput').value;
    var password = document.getElementById('passwordLoginInput').value;

    if (username === '' || password === '') {
        document.getElementById('loginErrorMessage').textContent = 'Please fill out all fields.';
    } else {
        document.getElementById('loginErrorMessage').textContent = '';
        // Proceed with sign-in logic
    }
}

// Open the "Create Post" modal
function openCreatePostModal() {
    document.getElementById('createPostModal').style.display = 'block';
}

// Close the "Create Post" modal
function closeCreatePostModal() {
    document.getElementById('createPostModal').style.display = 'none';
}



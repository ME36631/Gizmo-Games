// Function to load profile from Local Storage
function loadProfile() {
  const name = localStorage.getItem('name');
  const profilePic = localStorage.getItem('profilePic');

  // Set profile picture and name if they exist
  if (name && profilePic) {
    document.getElementById('profile-name').innerText = name;
    document.getElementById('profile-pic').src = profilePic;
  } else {
    document.getElementById('profile-name').innerText = 'Guest';
    document.getElementById('profile-pic').src = '';
  }
}

// Function to save profile to Local Storage
function saveProfile() {
  const name = document.getElementById('name-input').value;
  const fileInput = document.getElementById('file-input');
  const file = fileInput.files[0];

  if (name && file) {
    // Convert file to data URL
    const reader = new FileReader();
    reader.onloadend = function() {
      const profilePic = reader.result;
      
      // Save to Local Storage
      localStorage.setItem('name', name);
      localStorage.setItem('profilePic', profilePic);
      
      // Update the profile bar
      loadProfile();
    };
    
    reader.readAsDataURL(file);
  } else {
    alert('Please provide a name and a profile picture');
  }
}

// Load profile when the page loads
window.onload = function() {
  loadProfile();
};

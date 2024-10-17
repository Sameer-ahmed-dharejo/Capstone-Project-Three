let userDetails=document.getElementById('userDetails');
userDetails.addEventListener('submit', function (event) {
    event.preventDefault();
    let userName = document.getElementById("userName").value;
      let userEmail = document.getElementById("userEmail").value;
      let userPassword = document.getElementById("userPassword").value;
      let comfirmPassword = document.getElementById("comfirmPassword").value;

      localStorage.setItem('Name', userName)
      localStorage.setItem('Email', userEmail)
      localStorage.setItem('Password', userPassword)
      localStorage.setItem('Confirm', comfirmPassword)
      
window.location.href="/pages/login.html"
})
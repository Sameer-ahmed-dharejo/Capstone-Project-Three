let form = document.getElementById('userDetail');
let userName = document.getElementById("userName");
let userPassword = document.getElementById("userPassword");


let getUserDetail = localStorage.getItem('created-user');

let parseDetail = getUserDetail ? JSON.parse(getUserDetail) : null;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let name = userName.value;
  let password = userPassword.value;
  if (parseDetail && parseDetail.userName === name && parseDetail.userPassword === password) {
    window.location.href = "/pages/index.html";
  } else {
    alert('Something went wrong');
  }
});


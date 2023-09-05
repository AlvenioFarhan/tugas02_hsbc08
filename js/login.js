const loginForm = document.getElementById("loginForm");
const loginUsername = document.getElementById("username");
const loginPassword = document.getElementById("password");

//Dummy data
const users = [
  { username: "user1", password: "123456" },
  { username: "user2", password: "123456" },
];

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = loginUsername.value;
  const password = loginPassword.value;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    alert("Login Berhasil!");
    window.location.href = "../components/home.html";
  } else {
    alert("Username dan Password anda salah");
  }

});

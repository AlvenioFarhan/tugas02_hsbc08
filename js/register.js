const registerForm = document.getElementById("registerForm");
const registerUsername = document.getElementById("username");
const registerName = document.getElementById("name");
const registerPassword = document.getElementById("password");
const registerAddress = document.getElementById("address");
const registerGender = document.getElementById("gender");
const registerDate = document.getElementById("date");
const registerEmail = document.getElementById("email");

//Dummy data
const users = [
  {
    username: "user1",
    name: "Alvenio Farhan Prayogo",
    password: "123456",
    address: "Semarang",
    gender: "Pria",
    date: "09/05/2023",
    email: "alvenio@gmail.com",
  },
  {
    username: "user2",
    name: "Jokowidodo",
    password: "123456",
    address: "Solo",
    gender: "Pria",
    date: "09/05/2023",
    email: "jokowi@gmail.com",
  },
];

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = registerUsername.value;
  const password = registerPassword.value;

  const existingUser = users.find((u) => u.username === username);

  if (existingUser) {
    alert("Username telah terdaftar. Buatlah username baru.");
  } else {
    users.push({ username, password });
    alert("Registration successful!");
    window.location.href = "../login.html";
  }
});

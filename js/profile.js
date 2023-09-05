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

let userList = document.getElementById("user-profiles");

for (let i = 0; i < users.length; i++) {
  let userProfile = users[i];
  let listItem = document.createElement("li");
  listItem.innerHTML = `
                <p><strong>Nama: </strong> ${userProfile.name}</p>
                <p><strong>Alamat: </strong> ${userProfile.address}</p>
                <p><strong>Kelamin: </strong> ${userProfile.gender}</p>
                <p><strong>Tanggal Ulang Tahun: </strong> ${userProfile.date}</p>
                <p><strong>Email: </strong> ${userProfile.email}</p>
                <hr>
                <br>
            `;
  userList.appendChild(listItem);
}

// // Get user data from the query parameter and display it on the profile page
// const profileData = document.getElementById("profileData");
// const urlParams = new URLSearchParams(window.location.search);
// const usernameParam = urlParams.get("username");

// if (usernameParam) {
//     const user = users.find((u) => u.username === usernameParam);
//     if (user) {
//         profileData.innerHTML = `
//             <h2>Name: ${user.name}</h2>
//             <p>Username: ${user.username}</p>
//             <p>Email: ${user.email}</p>
//         `;
//     } else {
//         profileData.innerHTML = "User not found.";
//     }
// }

// const profileData = document.getElementById("users")

// for (let i=0; i< users.length; i++) {
//     let userProfile = users[i];
//     let listItem = document.createElement("li");
//     listItem.innerHTML = `
//     <p>Nama : ${userProfile.nama}</p>
//     <p>Email : ${userProfile.email}</p>
//     <p>Alamat : ${userProfile.address}</p>
//     `;
//     profileData.appendChild(listItem);
// }



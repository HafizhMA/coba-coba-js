// function getUsers(isOffline) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = ["adam", "nabil", "akbar"];

//       if (isOffline) {
//         reject(new Error("gagal, layanan sedang offline"));
//         return;
//       }

//       resolve(user);
//     }, 3000);
//   });
// }

// getUsers(true)
//   .then((users) => console.log(users))
//   .catch((err) => console.log(err.message));

// contoh lain
// function watchMovie() {
//   withDrawMoney(10)
//     .then((money) => buyCinemaTicket(money))
//     .then((ticket) => goInsideCinema(ticket))
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error.message));
// }

// contoh lain
const { withDrawMoney, buyCinemaTicket, goInsideCinema } = require("./util");

async function watchMovie(amount) {
  try {
    const money = await withDrawMoney(amount);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);
    return result;
  } catch (error) {
    throw error;
  }
}

watchMovie(100)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

watchMovie(5)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

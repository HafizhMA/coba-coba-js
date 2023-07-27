function withDrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount < 100) {
        reject(new Error(`uangnya kurang untuk di withdraw`));
      }
      resolve(amount);
    }, 1000);
  });
}

function buyCinemaTicket(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money < 10) {
        reject(new Error(`uangnya kurang untuk membeli tiket`));
      }
      resolve("Ticket-1");
    }, 1000);
  });
}

function goInsideCinema(ticket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ticket) {
        reject(new Error(`tidak ada tiket tidak boleh masuk`));
      } else {
        resolve("selamat menikmati filmnya");
      }
    }, 1000);
  });
}

module.exports = { withDrawMoney, buyCinemaTicket, goInsideCinema };

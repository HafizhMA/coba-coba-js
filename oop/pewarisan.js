// class MailService {
//   constructor(sender) {
//     this.sender = sender;
//   }

//   sendMessage(message, receiver) {
//     console.log(`${this.sender} sent ${message} to ${receiver}`);
//   }
// }

// class WhatsAppService extends MailService {
//   sendBroadcastMessage(message, receivers) {
//     for (const receiver of receivers) {
//       this.sendMessage(message, receiver);
//     }
//   }
// }

// class EmailService extends MailService {
//   sendDelayedMessage(message, receiver, delay) {
//     setTimeout(() => {
//       this.sendMessage(message, receiver);
//     }, delay);
//   }
// }

// const whatsApp = new WhatsAppService("+6222222222222");
// const email = new EmailService("tes@tes.com");

// whatsApp.sendMessage("halo", "+6333333333");
// whatsApp.sendBroadcastMessage("hallo", ["+624444444", "+62555555555"]);
// // whatsApp.sendDelayedMessage(); error

// email.sendMessage("halooo", "johan@johan.com");
// email.sendDelayedMessage("haloooo", "bigwang@bigwang.com", 3000);
// // email.sendBroadcastMessage(); error

// console.log(whatsApp);
// console.log(email);

class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

class WhatsAppService extends MailService {
  constructor(sender, isBussines) {
    super(sender);
    this.isBussines = isBussines;
  }

  sendMessage(message, receiver) {
    super.sendMessage(message, receiver);
    console.log(`${this.sender} sent ${message} to ${receiver} from WhatsApp`);
  }
}

const mail = new MailService("hafizh");
const wa = new WhatsAppService("+6234567", true);

console.log(mail);
console.log(wa);

mail.sendMessage("oi", "azhar");
wa.sendMessage("halo", "+690000");

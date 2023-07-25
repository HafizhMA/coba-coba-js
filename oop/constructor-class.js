class motor {
  constructor(merek, warna, kecepatan) {
    this.merek = merek;
    this.warna = warna;
    this.kecepatan = kecepatan;
  }

  maju() {
    console.log(`${this.merek} berwarna ${this.warna} melaju`);
  }
  mundur() {
    console.log(`${this.merek} berwarna ${this.warna} mundur`);
  }
}

const motor1 = new motor("pcx", "merah", 150);
const motor2 = new motor("supra bapak", "hitam", 1000);

console.log(motor1);
console.log(motor2);
console.log(motor2.merek);

motor2.maju();

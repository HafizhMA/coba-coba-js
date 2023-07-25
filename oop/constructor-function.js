function motor(merek, warna, kecepatan) {
    this.merek = merek;
    this.warna = warna;
    this.kecepatan = kecepatan;
}

motor.prototype.drive = function () {
    console.log(`${this.merek} berwarna ${this.warna} is driving`);
}

motor.prototype.maju = function () {
    console.log(`${this.merek} berwarna ${this.warna} melaju`);
}

motor.prototype.mundur = function () {
    console.log(`${this.merek} berwarna ${this.warna} mundur`);
}

const motor1 = new motor('pcx', 'merah', 150);
const motor2 = new motor('beat', 'hitam', 120);
const motor3 = new motor('supra bapak', 'hitam', 1000);

console.log(motor);
console.log(motor1);
console.log(motor2);
console.log(motor3);
console.log(motor3.warna);

motor3.drive();
motor3.maju();
motor3.mundur();
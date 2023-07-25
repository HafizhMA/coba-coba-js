// class motor {
//     constructor(merek, warna, kecepatan) {
//         this.merek = merek;
//         this.warna = warna;
//         this.kecepatan = kecepatan;
//         // menambahkan random plat
//         this.plat = `${merek}-${Math.floor(Math.random() * 1000)+1}`
//     }

//     maju() {
//         console.log(`${this.merek} berwarna ${this.warna} melaju`);
//     }
//     mundur() {
//         console.log(`${this.merek} berwarna ${this.warna} mundur`);
//     }
// };

// const motor1 = new motor('pcx', 'merah', 150);
// const motor2 = new motor('supra bapak', 'hitam', 1000);

// console.log(motor1);
// console.log(motor2);
// console.log(motor2.merek);

// motor2.maju();



// class Data {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     set fullName(fullName) {
//         const [firstName, lastName] = fullName.split(' ');
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// };

// const data = new Data('hafizh', 'M Azhar');
// console.log(data);
// console.log(data.fullName);
// data.fullName = 'kaneki cahyo';
// console.log(data);
// console.log(data.fullName);



// class Bio {
//     constructor(nama, makananFavorit, minumanFavorit, gender) {
//         this.nama = nama;
//         this.makananFavorit = makananFavorit;
//         this.minumanFavorit = minumanFavorit;
//         this._gender = this.validateGender(gender);
//         this.umur = `${nama} berumur ${Math.floor(Math.random() * 100) + 1} tahun`;
//     }

//     get gender() {
//         return this._gender;
//     }

//     set gender(gender) {
//         console.log(`kamu gabisa modifikasi ini`);
//     }

//     validateGender(gender) {
//         return ['laki-laki', 'perempuan', ].includes(gender) ? gender : 'tidak ditentukan, tolong isi dengan "laki-laki" atau "perempuan"';
//     }
// }

// const bio = new Bio('hafizh', 'tempe goreng', 'teh');

// console.log(bio);
// console.log(bio.gender);
// bio.gender = 'kipas angin';



class Motor {
    constructor(merek, warna, kecepatan) {
        this.merek = merek;
        this.warna = warna;
        this.kecepatan = kecepatan;
        this._plat = `${merek}-${Math.floor(Math.random()* 1000) + 1}`;
    }

    get plat() {
        return this._plat;
    }

    set plat(plat) {
        console.log(`data tidak bisa diubah`);
    }
}

const motor1 = new Motor('supra bapak', 'hitam', 1000);
console.log(motor1);
console.log(motor1.plat);
motor1.plat = 'BMW-1';
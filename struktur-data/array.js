// const belanja = ['telor', 24];

// const user = {
//     nama: 'hafizh',
//     umur: 22,
// }

// const alamat = {
//     kota: 'tangerang',
//     negara: 'backroom'
// }


// user.belanja = belanja;
// user.alamat = alamat;
// console.log(user);
// console.log(user.belanja[0] === 'telor' && user.belanja[1] === 24 ? 'belanjaan betul' : 'belanjaan salah');
// console.log(user.alamat.kota === 'lv 999' || user.alamat.negara === 'backroom' ? 'welcome to backroom' : 'gatau mau ngisi apa intinya ini else');

// const belanja2 = ['apel', 5];
// console.log(`beli ${belanja2[0]} dengan jumlah ${belanja2[1]}`);

// belanja2.splice(1, 0, '4');
// console.log(`beli ${belanja2[0]} dengan jumlah ${belanja2[1]}`);


let evenNumber = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenNumber.push(i);
    }
}

console.log(evenNumber);
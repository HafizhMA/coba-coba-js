const mobil = {
    brand: 'wuling',
    pilihanWarna: {
        warna1: 'hijau',
        warna2: 'biru'
    },
    harga: 100000000,

    maju: () => {
        console.log('berjalan maju');
    },
    nyalakanMesin: () => {
        console.log('menyalakan mesin');
    },
    matikanMesin: () => {
        console.log('mematikan mesin');
    }
};

console.log(mobil.brand);
console.log(mobil.pilihanWarna.warna2);
console.log(mobil.harga);
mobil.maju();
mobil.nyalakanMesin();
mobil.matikanMesin();
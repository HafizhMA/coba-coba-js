// const arr = ["hafizh", "adam", "nabil"];
// const myArr = [];

// for (let i = 0; i < arr.length; i++) {
//   myArr.push(`${arr[i]}!`);
// }

// console.log(myArr);

// const arr = ["april", "akbar", "ilham"];
// const myArr = arr.map((arr) => `${arr}!`);

// console.log(myArr);

// const myArr = [1, "hafizh", "azhar", true].map((name) => {
//   return `${name}!`;
// });
// console.log(myArr);

// const myArr = [1, "hafizh", "azhar", true, 0, 17].filter((item) =>
//   Boolean(item)
// );
// console.log(myArr);

// const myObjs = [
//   {
//     nama: "Hafizh",
//     nilai: 80,
//   },
//   {
//     nama: "Adam",
//     nilai: 90,
//   },
//   {
//     nama: "nabil",
//     nilai: 100,
//   },
// ];

// const obj = myObjs.filter((myObj) => myObj.nilai >= 90);
// console.log(obj);

// const students = [
//   {
//     nama: "Hafizh",
//     nilai: 80,
//   },
//   {
//     nama: "Adam",
//     nilai: 90,
//   },
//   {
//     nama: "nabil",
//     nilai: 100,
//   },
// ];

// const totalNilai = students.reduce((acc, student) => acc + student.nilai, 0);
// console.log(totalNilai);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const genap = arr.some((elemen) => elemen % 2 == 0);
// console.log(genap);

// const students = [
//   {
//     nama: "hafizh",
//   },
//   {
//     nama: "nabil",
//   },
//   {
//     nama: "adam",
//     nilai: 100,
//   },
// ];

// const findAdam = students.find((student) => student.nama === "adam");
// console.log(findAdam);

// const names = ["adam", "nabil", "akbar"];

// names.forEach((name) => {
//   console.log(`halo ${name}`);
// });

const books = [
  {
    judul: "windah and the bocil kemation",
    author: "windah",
    sales: 10000000,
  },
  {
    judul: "miawaug and the bocil kehidupan",
    author: "miawaug",
    sales: 10000000,
  },
  {
    judul: "idk",
    sales: 1,
  },
];

const greatAuthors = books
  .filter((book) => book.sales >= 1000000)
  .map(
    (book) =>
      `author ${book.author} adalah penulis buku ${book.judul} yang hebat dan bukunya terjual sebanyak ${book.sales}`
  );

console.log(greatAuthors);

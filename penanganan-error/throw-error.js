// const json = {
//   nama: "hafizh",
//   umur: 22,
// };

// try {
//   console.log(json.nama);
//   console.log(json.umur);
// } catch (error) {
//   console.log(error.nama);
//   console.log(error.message);
// }

// tes catch
// const json = { bad json };

// try {
//   console.log(json.nama);
//   console.log(json.umur);
// } catch (error) {
//   console.log(error.nama);
//   console.log(error.message);
// }

// tes catch json
// const json = '{ "age": 20 }';

// try {
//   const user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError("'name' is required.");
//   }

//   console.log(user.name); // undefined
//   console.log(user.age); // 20
// } catch (error) {
//   console.log(`JSON Error: ${error.message}`);
// }

//tes catch json kedua
// const json = '{ "name": "Yoda", "age": 20 }';

// try {
//   const user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError("'name' is required.");
//   }

//   errorCode;

//   console.log(user.name); // Yoda
//   console.log(user.age); // 20
// } catch (error) {
//   console.log(`JSON Error: ${error.message}`);
// }

// membuat custom error
// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = ValidationError;
//   }
// }

// const json = '{"age":30}';

// try {
//   const user = JSON.parse(json);

//   if (!user.name) {
//     throw new ValidationError("'name' is required.");
//   }
//   if (!user.age) {
//     throw new ValidationError("'age' is required.");
//   }
//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   if (error instanceof SyntaxError) {
//     console.log(`JSON syntax error: ${error.message}`);
//   } else if (error instanceof ValidationError) {
//     console.log(`invalid data ${error.message}`);
//   } else if (error instanceof ReferenceError) {
//     console.log(error.message);
//   } else {
//     console.log(error.stack);
//   }
// }

// contoh lain
// class ValidasiError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidasiError";
//   }
// }

// const penjumlahan = (a, b) => {
//   if (typeof a !== "number") {
//     throw new ValidasiError("'a' tidak boleh selain number");
//   } else if (typeof b !== "number") {
//     throw new ValidasiError("'b' tidak boleh selain number");
//   }
//   return a + b;
// };

// try {
//   const hasilPenjumlahan = penjumlahan(1, 2);
//   console.log("Hasil Penjumlahan:", hasilPenjumlahan);
// } catch (error) {
//   if (error instanceof ValidasiError) {
//     console.log(`terjadi custom error: ${error.message}`);
//   } else {
//     console.log(error);
//   }
// }

// contoh lain
class ValidasiError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidasiError";
  }
}

function namaLengkap(depan, belakang) {
  if (typeof depan !== "string" || typeof belakang !== "string") {
    throw new ValidasiError("Nama depan dan belakang harus berupa string");
  }
}

const inputNama = (depan, belakang) => {
  try {
    namaLengkap(depan, belakang);
    return `Nama depan ${depan} nama belakang ${belakang}`;
  } catch (error) {
    return error.message;
  }
};

const firstName = "hafizh";
const lastName = "azhar";

console.log(inputNama(firstName, lastName));
console.log(inputNama("adam", "ray"));
console.log(inputNama("april", true));
console.log(inputNama(null, true));

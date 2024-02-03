// Soal Homework
// - Buatlah 100 nilai random (1 sampai 50) pada 1 array
// - Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil, gunakan method push() untuk menambahkan
// nilai baru pada array
// - Gunakan 2 array yang telah dibuat untuk mendapatkan
// - Min
// - Max
// - Total
// - Rata rata
// - Bandingkan kedua buah array, contoh
// - Min lebih besar array genap
// - Max lebih besar array ganjil
// - Total memiliki nilai sama antara array genap dan ganjil
// - Rata rata lebih besar array ganjil
// Output dari aplikasi:
// - Array dengan jumlah index 100
// - Array genap dengan jumlah index 50
// - Array ganjil dengan jumlah index 50
// - Min, Max, Total, Rata rata pada setiap array (genap dan ganjil)
// - Perbandingan nilai min, max, total dan rata rata
// Catatan :
// - Dilarang menggunakan fungsi bawaan untuk min, max, total dan rata rata
// - Buatlah menjadi beberapa fungsi agar kode dapat digunakan kembali
// - Push ke REPO dan upload link REPO, tolong repo dalam status public

const calculate = (array) => {
  let formCalculate = {
    total : 0, average: 0
  };
  for (let index = 0; index < array.length; index++) {
    if (array[index] > formCalculate.max || !formCalculate.max) {
      formCalculate.max = array[index];
    }
    if (array[index] < formCalculate.min || !formCalculate.min) {
      formCalculate.min = array[index];
    }
    formCalculate.total += array[index];
  }
  formCalculate.average = formCalculate.total / array.length;
  return formCalculate;
};

const array = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 50) + 1
);
console.log("array");
console.log(array);
console.log(`array length: ${array.length}`);
let oddArray = [];
let evenArray = [];

for (let index = 0; index < array.length; index++) {
  index % 2 == 0 ? evenArray.push(array[index]) : oddArray.push(array[index]);
}
console.log("array of odd index (odd array): ");
console.log(oddArray);
console.log(`odd array length: ${oddArray.length}`);
const calculateOddArray = calculate(oddArray)
const maxOddArray = calculateOddArray.max
const minOddArray = calculateOddArray.min
const totalOddArray = calculateOddArray.total
const averageOddArray = calculateOddArray.average
console.log(`max of odd array = ${maxOddArray}`)
console.log(`min of odd array = ${minOddArray}`)
console.log(`total of odd array = ${totalOddArray}`)
console.log(`average of odd array = ${averageOddArray}`)


console.log("array of even index (even array): ");
console.log(evenArray);
console.log(`even array length: ${evenArray.length}`);

const calculateEvenArray = calculate(evenArray)
const maxEvenArray = calculateEvenArray.max
const minEvenArray = calculateEvenArray.min
const totalEvenArray = calculateEvenArray.total
const averageEvenArray = calculateEvenArray.average
console.log(`max of even array = ${maxEvenArray}`)
console.log(`min of even array = ${minEvenArray}`)
console.log(`total of even array = ${totalEvenArray}`)
console.log(`average of even array = ${averageEvenArray}`)


const comparison = (array1, array2) => {};
// const maxOddArray = Math.max(...oddArray)
// const minOddArray = Math.min(...oddArray)
// const totalOddArray = oddArray.reduce((prev, current) => prev + current, 0)
// const averageOddArray = totalOddArray / oddArray.length

// const maxEvenArray = Math.max(...evenArray)
// const minEvenArray = Math.min(...evenArray)
// const totalEvenArray = evenArray.reduce((prev, current) => prev + current, 0)
// const averageEvenArray = totalEvenArray / evenArray.length

// console.log(`Min, Max, Total, Rata rata pada setiap array ganjil adalah min number = ${minOddArray}, max number = ${maxOddArray}, total number = ${totalOddArray}, dan rata rata number = ${averageOddArray}`)

// console.log(`Min, Max, Total, Rata rata pada setiap array genap adalah min number = ${minEvenArray}, max number = ${maxEvenArray}, total number = ${totalEvenArray}, dan rata rata number = ${averageEvenArray}`)

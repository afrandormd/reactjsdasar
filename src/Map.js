import React from "react";

const foods = [
  {
    nama: "Soto",
    harga: 12000,
  },
  {
    nama: "Bakso",
    harga: 10000,
  },
  {
    nama: "Siomay",
    harga: 5000,
  },
  {
    nama: "Nasi Goreng",
    harga: 13000,
  },
];

// -------------- Reduce ---------------------------
// Reduce -> digunakan untuk jika kita ingin menghitung total dari harga
// const total_bayar = foods.reduce((total_harga, food) => {
//     return total_harga+food.harga;
// }, 0);
// format penulisan lain jika tidak menggunakan return
const total_bayar = foods.reduce((total_harga, food) => total_harga+food.harga, 0);

// ------------- Map -------------------------------
const Map = () => {
  return (
    <div>
      <h2>Map Sederhana</h2>
      <ul>
        {foods.map((food, index) => (
          <li>
            {index + 1}. {food.nama} - Harga {food.harga}
          </li>
        ))}
      </ul>


      <h2>Map filter harga yang lebih dari 11000</h2>
      <ul>
        {foods
          .filter((food) => food.harga > 11000)
          .map((food, index) => (
            <li>
              {index + 1}. {food.nama} - Harga {food.harga}
            </li>
          ))}
      </ul>

      <h3>Total Harga : {total_bayar}</h3>
    </div>
  );
};

export default Map;

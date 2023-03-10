/*
Membeli makan siang dan menabung

Rusli adalah seorang anak sekolah di SD Beever
Setiap harinya, Rusli diberikan uang jajan oleh orang tuanya 
sebesar Rp. 10.000,- rupiah.

Rusli bisa menabung atau membeli makanan di sekolahnya untuk
makan siang. Kita telah diberikan catatan keuangan Rusli
dalam bentuk text biasa, dan kita diminta menghitung
jumlah uang tabungan Rusli per harinya dan total tabungannya.

OUTPUT:
{
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
}

*/

function jumlahTabungan(_listHarga, _history) {
  // Write your code here

  var buyHistory = _history.split('.');
  var tabungan = {};
  var totalTabungan = 0;
  for (var i = 0; i < buyHistory.length; i++) {
    var pembelian = buyHistory[i].split('-');
    var hari = pembelian[0];
    var listPembelian = pembelian[1].split(',');
    var harga = 0;
    for (var j = 0; j < listPembelian.length; j++) {
      var makanan = listPembelian[j];
      for (var k = 0; k < _listHarga.length; k++) {
        if (_listHarga[k].nama === makanan) {
          harga += _listHarga[k].harga;
          break;
        }
      }
    }
    tabungan[hari] = 10000 - harga;
    totalTabungan += tabungan[hari];
  }
  tabungan["TotalTabungan"] = totalTabungan;
  return tabungan;
}

var hargaMakanan = [
  {
    nama: "ayam",
    harga: 5000
  },
  {
    nama: "nasi",
    harga: 2000
  },
  {
    nama: "cola",
    harga: 1000
  },
  {
    nama: "chiki",
    harga: 1500
  },
  {
    nama: "hotdog",
    harga: 3000
  },
  {
    nama: "aqua",
    harga: 2000
  }
]

var historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`
console.log(jumlahTabungan(hargaMakanan, historyPembelian))

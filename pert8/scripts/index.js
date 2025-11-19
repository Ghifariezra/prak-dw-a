const btnKirim = document.getElementById('btn-kirim');
const namaProduk = document.getElementById('product-name');
const hargaProduk = document.getElementById('product-price');
const tBody = document.querySelector('tbody');

function addProduk(btnKirim) {
    btnKirim.addEventListener('click', function (event) {
        event.preventDefault();

        console.log('Tombol kirim ditekan');

        const nama = namaProduk.value;
        const harga = hargaProduk.value;

        console.log(`Nama Produk: ${nama}`);
        console.log(`Harga Produk: ${harga}`);

        const barisBaru = document.createElement('tr');
        barisBaru.innerHTML = `
            <th scope="row">${tBody.rows.length + 1}</th>
            <td>${nama}</td>
            <td>${harga}</td>
        `;

        // Tambahkan baris baru ke tbody
        tBody.appendChild(barisBaru);

        // (Opsional) reset form setelah submit
        namaProduk.value = '';
        hargaProduk.value = '';
    });
}


document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM siap');

    addProduk(btnKirim);
});

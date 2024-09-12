let productList = [];
let total = 0;

function addProduct() {
    var name = document.getElementById('productName').value;
    var quantity = parseInt(document.getElementById('productQuantity').value);
    var price = parseInt(document.getElementById('productPrice').value);

    if (name && quantity && price) {
        var subTotal = quantity * price;
        productList.push({ name, quantity, price, subTotal });

        updateTable();
    } else {
        alert("Vui long dien du thong tin");
    }
}

function updateTable() {
    var tableBody = document.querySelector('#productTable tbody');
    tableBody.innerHTML = '';

    total = 0;

    productList.forEach((product, index) => {
        var row = `<tr>
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>${product.price}$</td>
            <td>${product.subTotal}$</td>
        </tr>`;
        // document.getElementById("productTable").innerHTML += row; lặp DL cũ
        tableBody.insertAdjacentHTML('beforeend', row);
        total += product.subTotal;
    });

    document.getElementById('totalPrice').textContent = `${total}$`;
}

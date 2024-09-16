//let cho phép biến có phạm vị trong khối lệnh (chỉ tồn tại trong khối, câu lệnh hoặc biểu thức được sử dụng)
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
    // lấy phần tử <tbody> trong bảng có ID là productTable để thao tác
    tableBody.innerHTML = '';
    //xóa toàn bộ nội dung hiện tại trong phần <tbody>
    total = 0;

    productList.forEach((product, index) => {
        var row = `<tr>
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>${product.price}</td>
            <td>${product.subTotal}</td>
        </tr>`;
        // document.getElementById("productTable").innerHTML += row; lặp DL cũ
        tableBody.insertAdjacentHTML('beforeend', row);
        //tạo (row) vào phần cuối của phần tử <tbody>
        total += product.subTotal;
    });

    document.getElementById('totalPrice').textContent = total;
}

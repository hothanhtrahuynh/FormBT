function Calculate() {

    var numberInput1 = $('#num1').val();
    var numberInput2 = $('#num2').val();
    numberInput1 = parseFloat(numberInput1);
    numberInput2 = parseFloat(numberInput2);
    var notif = document.getElementById("notif");
    notif.innerHTML = "";
    if (Number.isNaN(numberInput1) == true && Number.isNaN(numberInput2) == true) {
        notif.innerHTML = "<p>Giá trị nhập ở ô <span>Số thứ nhất và Số thứ hai</span> không phải là số</p>";

    } else if (Number.isNaN(numberInput1) == true) {
        notif.innerHTML = "<p>Giá trị nhập ở ô <span>Số thứ nhất</span> không phải là số</p>";
    } else if (Number.isNaN(numberInput2) == true) {
        notif.innerHTML = "<p>Giá trị nhập ở ô <span>Số thứ hai</span> không phải là số</p>";
    } else {

        var calc = document.querySelector('input[name="calcRadios"]:checked').value;
        var result = 0;
        switch (calc) {
            case "add":
                result = numberInput1 + numberInput2;
                break;
            case "sub":
                result = numberInput1 - numberInput2;
                break;
            case "mul":
                result = numberInput1 * numberInput2;
                break;
            case "div":
                result = numberInput1 / numberInput2;
                break;
        }
        document.getElementById("result").value = result;
    }

}
<script>

function func() {
    var boo = true;
    var str = "";
    var input = document.getElementById("myform");

    // Bringing values
    var fname = input.fname.value.trim();
    var birthday = input.birthday.value;
    var gender = input.gender.value.trim();
    var phone = input.phone.value.trim();
    var email = input.email.value.trim();

    // Validating
    if (fname === "") {
        boo = false;
        str += "The name field is empty\n";
    } else if (fname.match(/^\d/)) {
        boo = false;
        str += "The name starts with a number.. change it please\n";
    }

    if (birthday === "") {
        boo = false;
        str += "The birthday field is empty\n";
    } else if (birthday.match(/^(201[7-9]|202[0-3])-\d{2}-\d{2}$/)) {
        boo = false;
        str += "The children younger than 6 years old can not take courses\n";
    }

    if (gender === "") {
        boo = false;
        str += "The gender field is empty\n";
    }

    if (phone === "") {
        boo = false;
        str += "The phone field is empty\n";
    } else if (!phone.match(/^\d{10}/)) {
        boo = false;
        str += "The phone number should consist of 10 numbers.. change it please\n";
    }

    if (email === "") {
        boo = false;
        str += "The email field is empty\n";
    }

    if (!boo) {
        alert(str);
    } else {
        localStorage.setItem("ChildName", fname);
        var so = (gender === "Female") ? "girl.png" : "boy.png"; 

        var printPage = "<div style=\"border: 2px solid black; padding: 10px;\"><img src='" + so + "' alt=\"Child Photo\" style=\"width: 200px; height: auto;\"><p>Child Name: " + fname + "</p><p>DOB: " + birthday + "</p><p>Gender: " + gender + "</p><p>Phone: " + phone + "</p><p>Email: " + email + "</p></div>";

        var printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Child Information</title></head><body>');
        printWindow.document.write(printPage);
        printWindow.document.write('</body></html>');

setTimeout(function() {
    printWindow.print();
}, 3000);
    }
}
</script>
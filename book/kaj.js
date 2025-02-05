const hello = () => {
    const name1 = document.getElementById("i1");
    const email = document.getElementById("i2");
    const mno = document.getElementById("i3");


    document.getElementById("e1").innerHTML = "";
    document.getElementById("e2").innerHTML = "";
    document.getElementById("e3").innerHTML = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (name1.value.length <= 4) {
        document.getElementById("e1").innerHTML = "Name size must be greater than 4.";
    }

    if (!emailRegex.test(email.value)) {
        document.getElementById("e2").innerHTML =
            "Please enter a valid email address (e.g., example@gmail.com).";
    }
    if (mno.value.length !== 10 || isNaN(mno.value)) {
        document.getElementById("e3").innerHTML = "Enter a valid 10-digit mobile number.";
    }
};
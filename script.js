document.addEventListener('DOMContentLoaded', function () {
    const elementGerak = document.getElementById("gerak");
    const elementAutoTyping1 = document.getElementById("auto-typing1");
    const elementAutoTyping2 = document.getElementById("auto-typing2");

    const text1 = "Welcome My Profile";
    const typingSpeed1 = 100; // Kecepatan mengetik dalam milidetik
    let i1 = 0;

    function typeWriter1() {
        if (i1 < text1.length) {
            elementAutoTyping1.innerHTML += text1.charAt(i1);
            i1++;
            setTimeout(typeWriter1, typingSpeed1);
        }
    }
    typeWriter1();

    let isRekayasa = false;

    setInterval(function () {
        if (isRekayasa) {
            elementGerak.innerHTML = "Software Engineering";
        } else {
            elementGerak.innerHTML = "Rekayasa Perangkat Lunak";
        }
        isRekayasa = !isRekayasa;
    }, 2000);
});

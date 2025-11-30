function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "abdi&eky" && (pass === "18 11 2024" || pass === "06 04 2008")) {

        document.getElementById("cute-sound").play();

        document.getElementById("login-box").style.display = "none";
        document.getElementById("main").style.display = "block";

    } else {
        alert("Username atau password salah!");
    }
}

let theme = 0;
function toggleTheme() {
    theme = (theme + 1) % 4;

    let themes = ["", "dark", "cute", "aesthetic"];
    document.body.className = themes[theme];
}

function secretMode() {
    alert("💗 Mode Rahasia Diaktifkan! 💗");

    document.body.style.transform = "rotate(360deg)";
    setTimeout(() => {
        document.body.style.transform = "rotate(0deg)";
    }, 500);
}

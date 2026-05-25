function toggleTheme() {
    let body = document.getElementById("page-body");

    if (body.className === "theme-clair") {
        body.className = "theme-sombre";
    } else {
        body.className = "theme-clair";
    }
}
var document;
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
    document.documentElement.classList.add("js-enabled");
}
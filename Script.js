let Mobile_icon = document.getElementById("Mobile_icon");
let main_menu = document.getElementById("main_menu");

Mobile_icon.addEventListener("click", () => {
    main_menu.classList.toggle('hidden');
})
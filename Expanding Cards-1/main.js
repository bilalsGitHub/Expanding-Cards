const panels = document.querySelectorAll(".panel");

panels.forEach((item) => {
    item.addEventListener("click", () => {
        if (item.classList.contains("active")) {
            item.classList.remove("active");
        } else {
            item.classList.add("active");
        }
    });
});
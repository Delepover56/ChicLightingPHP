// filter menu start
document.addEventListener("DOMContentLoaded", () => {
    let menuOpen = document.getElementById("hoverHere");
    let menu = document.getElementById("categMenu");

    // Show the menu on hover
    menuOpen.addEventListener("mouseenter", () => {
        menu.style.display = "block";
    });

    // Hide the menu when the mouse leaves the button or the menu
    menuOpen.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!menu.matches(":hover")) {
                menu.style.display = "none";
            }
        }, 100);
    });

    menu.addEventListener("mouseleave", () => {
        menu.style.display = "none";
    });
});
// filter menu end
;
// user menu start
document.addEventListener("DOMContentLoaded", () => {
    let userOpen = document.getElementById("userOpen");
    let userMenu = document.getElementById("userMenu");

    userOpen.addEventListener("mouseenter", () => {
        userMenu.style.display = "block";
    });

    userOpen.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!userOpen.matches(":hover") && !userMenu.matches(":hover")) {
                userMenu.style.display = "none";
            }
        }, 100);
    });

    userMenu.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!userOpen.matches(":hover") && !userMenu.matches(":hover")) {
                userMenu.style.display = "none";
            }
        }, 100);
    });
});

// user menu end
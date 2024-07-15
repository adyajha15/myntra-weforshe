// JavaScript to toggle the dropdown menu
document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown");

    dropdown.addEventListener("click", function() {
        this.querySelector(".dropdown-content").classList.toggle("show");
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function(event) {
        if (!event.target.matches(".dropbtn")) {
            const dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains("show")) {
                    openDropdown.classList.remove("show");
                }
            }
        }
    });
});

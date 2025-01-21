// JavaScript for interactivity
document.addEventListener("DOMContentLoaded", () => {
    // Toggle mobile navigation menu
    const navToggle = document.querySelector(".nav_toggle");
    const mobileNav = document.querySelector(".mobile_nav");

    navToggle.addEventListener("click", () => {
        mobileNav.classList.toggle("visible");
    });

    // Search functionality
    const searchBoxes = document.querySelectorAll(".search_box");
    searchBoxes.forEach((box) => {
        const searchInput = box.querySelector(".searching");
        const searchButton = box.querySelector("button");

        searchButton.addEventListener("click", () => {
            const query = searchInput.value.trim();
            if (query) {
                alert(`You searched for: ${query}`);
            } else {
                alert("Please enter a search term.");
            }
        });
    });

    // Join room button functionality
    const joinButtons = document.querySelectorAll(".join_button");
    joinButtons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("You joined the room!");
        });
    });

    // Add new room dynamically
    const roomList = document.querySelector(".room_list");
    const newRoomButton = document.createElement("button");
    newRoomButton.textContent = "Add New Room";
    newRoomButton.style.marginTop = "20px";

    newRoomButton.addEventListener("click", () => {
        const newRoom = document.createElement("div");
        newRoom.className = "room";
        newRoom.innerHTML = `
        <div class="room_name">New Room</div>
        <div class="creator">
          <img src="./downloadedImage.png" alt="Creator">
          <div>
            <div class="creator_name">New Creator</div>
            <div class="creator_level">Lv.1</div>
          </div>
          <img src="./downloadedImage.png" alt="Game icon" class="game_icon">
        </div>
        <div class="players">0/10</div>
        <button class="join_button">Join room</button>
      `;
        roomList.appendChild(newRoom);

        // Attach join button functionality to the new room
        const joinButton = newRoom.querySelector(".join_button");
        joinButton.addEventListener("click", () => {
            alert("You joined the new room!");
        });
    });

    roomList.parentNode.appendChild(newRoomButton);

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll("nav a, .mobile_nav a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

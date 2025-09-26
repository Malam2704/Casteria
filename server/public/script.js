console.log("Hello from client-side JS!");

document.addEventListener("DOMContentLoaded", () => {
    // we get all elements with the .character-class

    const classTags = document.querySelectorAll('.character-class');
    // console.log(classTags)
    classTags.forEach(tag => {
        const value = tag.textContent.trim().toLowerCase();
        // console.log(value)
        switch (value) {
            case "support":
                tag.style.backgroundColor = "#4cafef"; // blue
                tag.style.color = "white";
                break;
            case "tank":
                tag.style.backgroundColor = "#8e44ad"; // purple
                tag.style.color = "white";
                break;
            case "warrior":
                tag.style.backgroundColor = "#e74c3c"; // red
                tag.style.color = "white";
                break;
            case "mage":
                tag.style.backgroundColor = "#3498db"; // lighter blue
                tag.style.color = "white";
                break;
            case "healer":
                tag.style.backgroundColor = "#2ecc71"; // green
                tag.style.color = "white";
                break;
            default:
                tag.style.backgroundColor = "#555"; // fallback gray
                tag.style.color = "white";
                break;
        }
    });

    const cards = document.querySelectorAll(".character-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const titleEl = card.querySelector("h3");
            if (!titleEl) return;

            const name = titleEl.textContent.trim().toLowerCase();

            switch (name) {
                case "max the hero":
                    window.location.href = "/character/1";
                    break;
                case "shara the ranger":
                    window.location.href = "/character/2";
                    break;
                case "marden the dwarf":
                    window.location.href = "/character/3";
                    break;
                case "casitra the wise":
                    window.location.href = "/character/4";
                    break;
                case "sparrow the root":
                    window.location.href = "/character/5";
                    break;
                default:
                    window.location.href = "/character/unknown"; // fallback route
                    break;
            }
        });
    });
});
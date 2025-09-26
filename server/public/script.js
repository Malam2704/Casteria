console.log("Hello from client-side JS!");

document.addEventListener("DOMContentLoaded", () => {
    // we get all elements with the .character-class

    const classTags = document.querySelectorAll('.character-class');
    // console.log(classTags)
    classTags.forEach(tag => {
        const value = tag.textContent.trim().toLowerCase();
        // console.log(value)
        switch(value){
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
});
const pageTitle = document.title;
console.log(pageTitle);
console.log(document.getElementsByClassName('page-wrapper')[0])

document.addEventListener("DOMContentLoaded", () => {
    switch (pageTitle) {
        case "Max The Hero":
            document.getElementsByClassName("page-wrapper")[0].style.background =
                "linear-gradient(135deg, #1e1e2f, #e74c3c)";
            break;
        case "Shara The Ranger":
            document.getElementsByClassName("page-wrapper")[0].style.background =
                "linear-gradient(135deg, #1e1e2f, #264e2dff)";
            break;
        case "Marden The Dwarf":
            document.getElementsByClassName("page-wrapper")[0].style.background =
                "linear-gradient(135deg, #1e1e2f, #4cafef)";
            break;
        case "Casitra The Wise":
            document.getElementsByClassName("page-wrapper")[0].style.background =
                "linear-gradient(135deg, #1e1e2f, #3498db)";
            break;
        case "Sparrow The Root":
            document.getElementsByClassName("page-wrapper")[0].style.background =
                "linear-gradient(135deg, #1e1e2f, #8e44ad)";
            break;
        default:
            document.getElementsByClassName("page-wrapper")[0].style.background =
                "linear-gradient(135deg, #1e1e2f, #555)";
            break;
    }

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
});
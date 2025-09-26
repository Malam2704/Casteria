const pageTitle = document.title;
console.log(pageTitle);
console.log(document.getElementsByClassName('page-wrapper')[0])

document.addEventListener("DOMContentLoaded", () => {
    switch(pageTitle){
        case "Max The Hero":
            document.getElementsByClassName("page-wrapper")[0].style.background = 
        "linear-gradient(135deg, #1e1e2f, #e74c3c)";
        case "Shara The Ranger":
            document.getElementsByClassName("page-wrapper")[0].style.background = 
        "linear-gradient(135deg, #1e1e2f, #264e2dff)";
        case "Marden The Dwarf":
            document.getElementsByClassName("page-wrapper")[0].style.background = 
        "linear-gradient(135deg, #1e1e2f, #4cafef)";
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
});
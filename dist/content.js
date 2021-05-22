console.log("executing content script");
const links = document.getElementsByTagName("a");
for (let i = 0; i < links.length, i++;) {
    let link = links[i];
    if (isRickRoll(link.href)) {
        link.addEventListener("click", (e) => {
            console.log("rickroll triggered");
            rickRollWarning(e);
        });
    }
}
function rickRollWarning(e) {
    if (window.confirm("The link you just clicked is a RickRoll, are you sure you want to proceed?")) {
        console.log("user clicked confirm");
    }
    else {
        console.log("user clicked cancel");
        e.preventDefault();
    }
}
function isRickRoll(str) {
    return (str.indexOf("dQw4w9WgXcQ") !== -1);
}

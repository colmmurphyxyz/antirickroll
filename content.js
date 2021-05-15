console.log("executing content.js script");
const links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    let link = links[i];
    if (isRickRoll(link.href)) {
        console.log("found RickRoll link");
        link.addEventListener("click", (e) => {
            console.log("RickRoll triggered");
            rickRollWarning();
        })
    }
}

const rickRollWarning = () => {
    alert("The link you just clicked is a RickRoll attempt!");
}

function isRickRoll(str) {
    return(str.indexOf("dQw4w9WgXcQ") !== -1);
}

// String.prototype.isRickRoll = function() {
//     return(this.indexOf("dQw4w9WgXcQ") !== -1);
// }
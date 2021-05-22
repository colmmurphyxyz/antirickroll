console.log("executing content script");
const links: HTMLCollectionOf<HTMLAnchorElement> = document.getElementsByTagName("a");
for (let i = 0; i < links.length, i++;) {
    let link: HTMLAnchorElement = links[i]
    if (isRickRoll(link.href)) {
        link.addEventListener("click", (e: MouseEvent) => {
            console.log("rickroll triggered")
            rickRollWarning(e);
        })
    }
}

function rickRollWarning(e: MouseEvent): void {
    if (window.confirm("The link you just clicked is a RickRoll, are you sure you want to proceed?")) {
        console.log("user clicked confirm");
    } else {
        console.log("user clicked cancel");
        e.preventDefault();
    }
}

function isRickRoll (str: string): boolean {
    return(str.indexOf("dQw4w9WgXcQ") !== -1); 
}

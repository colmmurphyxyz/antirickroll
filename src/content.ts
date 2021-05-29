console.log("executing content script");
const links: HTMLCollectionOf<HTMLAnchorElement> = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
    let link: HTMLAnchorElement = links[i];

    link.onclick = (ev: MouseEvent): void => {
        if (isRickRoll(link.href)) {
            rickRollWarning(ev);
        }
    }

    link.onauxclick = (ev: MouseEvent): void => {
        if (isRickRoll(link.href)) {
            rickRollWarning(ev);
        }
    }
}

function rickRollWarning(e: MouseEvent): void {
    if (window.confirm("The link you just clicked is a RickRoll, are you sure you want to proceed?")) {
        console.log("user clicked confirm");
    } else {
        console.log("user clicked cancel, RickRoll prevented");
        e.preventDefault();
        e.stopImmediatePropagation();
        add1ToPreventions();
    }
}

function isRickRoll (str: string): boolean {
    return(str.indexOf("dQw4w9WgXcQ") !== -1); 
}

function add1ToPreventions(): void {
    chrome.storage.sync.get( "rickRollPreventions",
        (items: { [key: string]: number;} ): void => {
            let rickRollPreventions: number = items.rickRollPreventions + 1;
            console.log("setting rickRollPreventions to: " + rickRollPreventions);
            chrome.storage.sync.set({ rickRollPreventions });
        });
}

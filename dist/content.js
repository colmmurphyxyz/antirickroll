console.log("executing content script");
const links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.onclick = (ev) => {
        if (isRickRoll(link.href)) {
            rickRollWarning(ev);
        }
    };
    link.onauxclick = (ev) => {
        if (isRickRoll(link.href)) {
            rickRollWarning(ev);
        }
    };
}
function rickRollWarning(e) {
    if (window.confirm("The link you just clicked is a RickRoll, are you sure you want to proceed?")) {
        console.log("user clicked confirm");
    }
    else {
        console.log("user clicked cancel, RickRoll prevented");
        e.preventDefault();
        e.stopImmediatePropagation();
        add1ToPreventions();
    }
}
function isRickRoll(str) {
    return (str.indexOf("dQw4w9WgXcQ") !== -1);
}
function add1ToPreventions() {
    chrome.storage.sync.get("rickRollPreventions", (items) => {
        let rickRollPreventions = items.rickRollPreventions + 1;
        console.log("setting rickRollPreventions to: " + rickRollPreventions);
        chrome.storage.sync.set({ rickRollPreventions });
    });
}

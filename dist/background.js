let color = "#3aa757";
let preventions = 0;
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log("Default background color set to " + color);
});
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log("Tab Updated");
    let newUrl = changeInfo.url;
    if (typeof newUrl == "string" && isRickRollLink(newUrl)) {
        console.log("caught rickroll in tab.onUpdated");
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["rickRollWarning.js"]
        }, () => { });
    }
});
chrome.tabs.onCreated.addListener((tab) => {
    console.log("Tab created!");
    if (isRickRollLink(tab.url)) {
        window.alert("You just got rickrolled!");
    }
});
function isRickRollLink(str) {
    return (str.indexOf("dQw4w9WgXcQ") !== -1);
}

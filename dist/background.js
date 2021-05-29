let color = "#3aa757";
let rickRollPreventions = 1;
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    chrome.storage.sync.set({ rickRollPreventions });
    console.log("Default background color set to " + color);
    console.log("Set rickRollPreventions to " + rickRollPreventions);
});
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log("Tab Updated");
    let newUrl = changeInfo.url;
    if (typeof newUrl == "string" && isRickRollLink(newUrl)) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["rickRollWarning.js"]
        }, () => { });
    }
});
/*
chrome.tabs.onCreated.addListener((tab: chrome.tabs.Tab): void => {
    console.log("Tab created!");
    let pendingUrl = tab.pendingUrl;
    let id = tab.id;
    console.log("PendingUrl: " + pendingUrl);
    console.log(pendingUrl.indexOf("dQw4w9WgXcQ") !== -1);
    if (isRickRollLink(pendingUrl)) {
        chrome.scripting.executeScript(
            {
                target: { tabId: tab.openerTabId },
                function: async (): Promise<void> => {
                    if (window.confirm("You just got rickrolled!")) {
                        console.log("user clicked confirm");
                    } else {
                        await chrome.tabs.remove(id);
                    }
                }
            }
        )
    }
})
*/
function isRickRollLink(str) {
    return (str.indexOf("dQw4w9WgXcQ") !== -1);
}

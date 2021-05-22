let color: string = "#3aa757";
let preventions: number = 0;

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log("Default background color set to " + color);
});

chrome.tabs.onUpdated.addListener((tabId: number, changeInfo: chrome.tabs.TabChangeInfo, tab: chrome.tabs.Tab): void => {
    console.log("Tab Updated");
    let newUrl: string | unknown = changeInfo.url;
    if (typeof newUrl == "string" && isRickRollLink(newUrl as string)) {
        console.log("caught rickroll in tab.onUpdated");
        chrome.scripting.executeScript(
            {
                target: {tabId: tab.id},
                files: ["rickRollWarning.js"]
            },
            (): void => {}
        )
    }
})

chrome.tabs.onCreated.addListener((tab: chrome.tabs.Tab): void => {
    console.log("Tab created!");
    if (isRickRollLink(tab.url as string)) {
        window.alert("You just got rickrolled!")
    }
})

function isRickRollLink (str: string): boolean {
    return(str.indexOf("dQw4w9WgXcQ") !== -1); 
}


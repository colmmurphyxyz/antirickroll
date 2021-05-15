let color = "#3aa757";
let preventions = 0;

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen color: ${color}');
    chrome.storage.sync.set({ preventions });
    console.log("Set rickroll preventions to ${preventions}");
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log("tab updated");
    let newUrl = changeInfo.url;    // will be null if the Url of the tab hasn't changed

});

String.prototype.isRickRoll = function() {
    return(this.indexOf("dQw4w9WgXcQ") !== -1);
}
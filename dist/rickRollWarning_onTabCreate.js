if (window.confirm("The link you just clicked is a RickRoll, are you sure you want to proceed?")) {
    console.log("user clicked confirm");
}
else {
    chrome.tabs.getCurrent((tab) => {
        chrome.tabs.remove(tab.id);
    });
}

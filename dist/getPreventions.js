let preventions;
chrome.storage.sync.get("rickRollPreventions", (items) => {
    preventions = items.rickRollPreventions;
    document.getElementById("foobar").innerHTML = "Prevented " + preventions + " RickRoll attempts";
});

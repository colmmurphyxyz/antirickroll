let preventions: number;
chrome.storage.sync.get( "rickRollPreventions", (items: { [key: string]: number;} ): void => {
        preventions = items.rickRollPreventions;
        document.getElementById("foobar").innerHTML = "Prevented " + preventions + " RickRoll attempts";
    }
);
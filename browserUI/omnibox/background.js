chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
	words = ["air", "apple", "book", "bus"];
	suggestions = [];

	for (i in words) {
		if (words[i].indexOf(text) == 0) {
			suggestions.push({
				content: words[i],
				description: "<match>" + text + "</match>" + "<dim>" + words[i].replace(text, "") + "</dim>"
			});
		}
	}

	suggest(suggestions);
});

chrome.omnibox.onInputEntered.addListener(function(text) {
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.update(tab.id, {url: "https://www.google.com.tw/images?q=" + text});
	});
});
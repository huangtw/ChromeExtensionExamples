function pageOnClick(info, tab) {
	alert("Page is clicked!!");
}

function linkOnClick(info, tab) {
	alert("Link is clicked!!");
}

function imageOnClick(info, tab) {
	alert("Image is clicked!!");
}

function pageLinkOnClick(info, tab) {
	alert("Page or Link is clicked!!");
}

chrome.contextMenus.create({"title": "Page", "contexts":["page"], "onclick": pageOnClick});
chrome.contextMenus.create({"title": "Link", "contexts":["link"], "onclick": linkOnClick});
chrome.contextMenus.create({"title": "Image", "contexts":["image"], "onclick": imageOnClick});
chrome.contextMenus.create({"title": "Page or Link", "contexts":["page", "link"], "onclick": pageLinkOnClick});

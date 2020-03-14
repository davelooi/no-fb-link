console.log('====START====');

console.log('====data-lynx-mode====');
document.querySelectorAll("a[data-lynx-mode").forEach(
  item => {
    console.log("====BEFORE====", item.href);
    url = new URL(item.href);
    rawUrl = url.searchParams.get("u");
    item.href = rawUrl; // set the url back to the original
    item.removeAttribute("data-lynx-mode"); // Get rid of the data tag that triggers the event
    console.log("====AFTER====", item.href);
  }
);

console.log('====l.facebook====');
document.querySelectorAll("a[href^='https://l.facebook.com/l.php']").forEach(
  item => {
    console.log("====BEFORE====", item.href);
    url = new URL(item.href);
    rawUrl = url.searchParams.get("u");
    item.href = rawUrl; // set the url back to the original
    // item.removeAttribute("data-lynx-mode"); // Get rid of the data tag that triggers the event
    console.log("====AFTER====", item.href);
  }
);

console.log('====data-lynx-uri====');
document.querySelectorAll("[data-lynx-uri]").forEach(
  (item, idx) => console.log(item)
);

chrome.tabs.onUpdated.addListener(
  (tabId, changeInfo, tab) => {
    console.log('updated from contentscript');
  }
);

console.log('====END====');

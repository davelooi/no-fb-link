console.log('hello workplace')
document.querySelectorAll("a[data-lynx-mode").forEach(
  (item, idx) => {
    url = new URL(item.href);
    rawUrl = url.searchParams.get("u");
    item.href = rawUrl; // set the url back to the original
    item.removeAttribute("data-lynx-mode"); // Get rid of the data tag that triggers the event
    console.log(item);
  }
);
document.querySelectorAll("[data-lynx-uri]").forEach(
  (item, idx) => console.log(item)
);
window.onload = function () {
  document.getElementById("mail").onclick = function(e) {
    chrome.tabs.create({ url: 'http://www.google.com/mail' });
  };

  document.getElementById("drive").onclick = function(e) {
    chrome.tabs.create({ url: 'http://www.google.com/drive' });
  };

  document.getElementById("search").onclick = function(e) {
    chrome.tabs.create({ url: 'http://www.google.com/images' });
  };
};
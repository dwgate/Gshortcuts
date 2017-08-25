window.onload = () => {
  document.getElementById("mail").onclick = (e) => {
    chrome.tabs.create({ url: 'http://www.google.com/mail' });
  };

  document.getElementById("drive").onclick = (e) => {
    chrome.tabs.create({ url: 'http://www.google.com/drive' });
  };

  document.getElementById("search").onclick = (e) => {
    chrome.tabs.create({ url: 'http://www.google.com/images' });
  };
};
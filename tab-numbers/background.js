const tabs = chrome.tabs;
const numThings = {
  1: '&#10112',
  2: '&#10113',
  3: '&#10114',
  4: '&#10115',
  5: '&#10116',
  6: '&#10117',
  7: '&#10118',
  8: '&#10119',
  9: '&#10120',
};

tabs.onUpdated.addListener(addTabNumber);
tabs.onRemoved.addListener(numberTabs);
tabs.onMoved.addListener(numberTabs);
tabs.onAttached.addListener(numberTabs);

// ********************************************************

function addTabNumber(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    numberTabs();
/*    chrome.windows.getCurrent({populate: true}, (windows) => {
      for (let i = 0; i < 10; i++) {
        const tab = windows.tabs[i];
        if (!tab) break;
        const tabNumber = i + 1;
        const title = tab.title.charAt(1) === ':' ? tab.title.slice(2) : tab.title
        const string = `document.title = '${tabNumber}: ${title}'`;
        tabs.executeScript(tab.id, {code: string});
      }
    });*/

  }
}

// function renumberTabs() {
//   numberTabs();
/*  chrome.windows.getCurrent({populate: true}, (windows) => {
    for (let i = 0; i < 10; i++) {
      const tab = windows.tabs[i];
      if (!tab) break;
      const tabNumber = i + 1;
      const string = `document.title = '${tabNumber}: ${tab.title.slice(2)}'`;
      tabs.executeScript(tab.id, {code: string});
    }
  });*/

// }

function numberTabs() {
  chrome.windows.getCurrent({populate: true}, (windows) => {
    for (let i = 0; i < 9; i++) {
      const tab = windows.tabs[i];
      if (!tab) break;
      const tabNumber = i + 1;
      const title = tab.title.charAt(1) === ':' ? tab.title.slice(2) : tab.title
      const code = `document.title = '${tabNumber}: ${title}'`;
      tabs.executeScript(tab.id, { code });
    }
  });
}

// Tab update













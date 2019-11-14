chrome.runtime.onInstalled.addListener(function () {
  let message = chrome.i18n.getMessage("context_menu_search_with_dict_cn");
  let id = chrome.contextMenus.create({
      "id": 'search',
      "title": message,
      "contexts": ['selection']
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  console.log("info " + info.menuItemId + " was clicked");
  window.open("http://dict.cn/" + info.selectionText);
});
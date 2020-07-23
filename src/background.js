



chrome.runtime.onInstalled.addListener(function() {

  chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {

      setTimeout(() =>{
        sendResponse('alive')
      }, 500)

      return true
    }
  );

});
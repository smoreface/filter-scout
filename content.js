// content.js

if (window.mute === undefined) { window.mute = {} };


$(function() {

  window.mute.tweetTriggerTextFilter(window.mute.triggerWords);
  var filterIntervalID = window.setInterval(window.mute.tweetTriggerTextFilter(window.mute.triggerWords), 1000);

});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.status === "clicked_browser_action" ) {

      // clearInterval(filterIntervalID)

    };

    // chrome.runtime.sendMessage({"foo-message": "message contents"});

  }
);

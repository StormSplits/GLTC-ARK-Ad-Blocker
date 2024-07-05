document.addEventListener('DOMContentLoaded', function() {
  const blockButton = document.getElementById('blockButton');
  const pauseButton = document.getElementById('pauseButton');

  blockButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: blockAds
      });
    });
  });

  pauseButton.addEventListener('click', function() {
    chrome.storage.sync.get(['paused'], function(result) {
      const newPausedState = !result.paused;
      chrome.storage.sync.set({ paused: newPausedState }, function() {
        pauseButton.textContent = newPausedState ? 'Resume' : 'Pause';
      });
    });
  });

  chrome.storage.sync.get(['paused'], function(result) {
    pauseButton.textContent = result.paused ? 'Resume' : 'Pause';
  });
});

function blockAds() {
  const adSelectors = [
    '.ad',                  
    '.advertisement',       
    '.ad-banner',           
    '[id^="ad"]',           
    '[class^="ad"]',        
    'div[aria-label="Ad"]'  
  ];

  adSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(ad => {

      ad.parentNode.removeChild(ad);

      ad.onclick = null;

      ad.style.height = '0';
      ad.style.overflow = 'hidden';
    });
  });
}

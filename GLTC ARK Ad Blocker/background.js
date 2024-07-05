chrome.webNavigation.onCompleted.addListener(function(details) {
  chrome.storage.sync.get(['paused'], function(result) {
    if (!result.paused) {
      chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        func: blockAds
      });
    }
  });
}, { url: [{ schemes: ['http', 'https'] }] });

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

const s = document.createElement('script');
s.src = chrome.runtime.getURL('script.js');

(document.head || document.documentElement).appendChild(s);

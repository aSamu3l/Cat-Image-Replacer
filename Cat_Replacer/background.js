chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ lastUpdated: Date.now() });
});
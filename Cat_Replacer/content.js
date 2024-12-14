const CAT_API_URL = "https://api.thecatapi.com/v1/images/search";

async function fetchRandomCatImage() {
  try {
    const response = await fetch(CAT_API_URL);
    const data = await response.json();
    return data[0]?.url;
  } catch (error) {
    console.error("Failed to fetch cat image:", error);
    return null;
  }
}

async function replaceImagesWithCats() {
  const catImageUrl = await fetchRandomCatImage();
  if (!catImageUrl) return;

  document.querySelectorAll("img").forEach((img) => {
    img.src = catImageUrl;
  });
}

chrome.storage.local.get("lastUpdated", async (data) => {
  const now = Date.now();
  const oneDay = 24 * 60 * 60 * 1000;

  if (!data.lastUpdated || now - data.lastUpdated > oneDay) {
    chrome.storage.local.set({ lastUpdated: now });
    await replaceImagesWithCats();
  }
});

replaceImagesWithCats();
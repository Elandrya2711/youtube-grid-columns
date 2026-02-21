"use strict";

const STYLE_ID = "yt-grid-override";
const DEFAULT_COLUMNS = 6;

function buildCSS(n) {
  const gap = Math.max(4, Math.min(16, Math.round(64 / n)));
  return `
ytd-rich-grid-renderer {
  --ytd-rich-grid-items-per-row: ${n} !important;
}
ytd-rich-grid-renderer #contents.ytd-rich-grid-renderer {
  display: grid !important;
  grid-template-columns: repeat(${n}, minmax(0, 1fr)) !important;
  gap: ${gap}px !important;
}
ytd-rich-item-renderer {
  width: 100% !important;
  max-width: unset !important;
  min-width: 0 !important;
  margin: 0 !important;
}
ytd-rich-grid-row #contents.ytd-rich-grid-row {
  display: contents !important;
}`.trim();
}

function applyColumns(n) {
  let style = document.getElementById(STYLE_ID);
  if (!document.head) {
    waitForHead(() => applyColumns(n));
    return;
  }
  if (!style) {
    style = document.createElement("style");
    style.id = STYLE_ID;
    document.head.appendChild(style);
  }
  style.textContent = buildCSS(n);
}

function waitForHead(callback) {
  const observer = new MutationObserver(() => {
    if (document.head) {
      observer.disconnect();
      callback();
    }
  });
  observer.observe(document.documentElement, { childList: true });
}

chrome.storage.sync.get({ columns: DEFAULT_COLUMNS }, (result) => {
  applyColumns(result.columns);
});

window.addEventListener("yt-navigate-finish", () => {
  chrome.storage.sync.get({ columns: DEFAULT_COLUMNS }, (result) => {
    applyColumns(result.columns);
  });
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.columns) {
    applyColumns(changes.columns.newValue);
  }
});

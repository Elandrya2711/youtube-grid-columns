# YouTube Grid Columns

A Chrome/Brave extension that lets you control the number of video columns on YouTube's home page.

## Installation

> The extension is not yet on the Chrome Web Store, so installation requires a few manual steps. It takes about two minutes.

**Step 1 — Download**

1. Go to the [Releases page](https://github.com/Elandrya2711/youtube-grid-columns/releases/latest)
2. Under **Assets**, click the `.zip` file to download it
3. Extract the ZIP — you'll get a folder with the extension files

**Step 2 — Load the extension**

1. Open Chrome or Brave and go to `chrome://extensions` (or `brave://extensions`)
2. Enable **Developer mode** using the toggle in the top-right corner
3. Click **Load unpacked**
4. Select the folder you extracted in Step 1

The extension icon will appear in your browser toolbar. You're done.

## Usage

Click the extension icon in the toolbar, then use the slider to set 1–12 columns.

## How it works

The extension injects CSS that overrides YouTube's `--ytd-rich-grid-items-per-row` variable and the grid layout directly. Settings are saved via `chrome.storage.sync`.

## Development

No build step required. Edit files and reload the extension in the browser.

## Troubleshooting

- **Grid not changing**: Try reloading the YouTube page after adjusting the slider
- **Settings lost**: Make sure the extension has storage permissions

# YouTube Grid Columns

A Chrome/Brave extension that lets you control the number of video columns on YouTube's home page.

## Installation

1. Open `brave://extensions` or `chrome://extensions`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select this folder

## Usage

Click the extension icon in the toolbar, then use the slider to set 1–12 columns.

## How it works

The extension injects CSS that overrides YouTube's `--ytd-rich-grid-items-per-row` variable and the grid layout directly. Settings are saved via `chrome.storage.sync`.

## Development

No build step required. Edit files and reload the extension in the browser.

## Troubleshooting

- **Grid not changing**: Try reloading the YouTube page after adjusting the slider
- **Settings lost**: Make sure the extension has storage permissions

const slider = document.getElementById('columns-slider');
const display = document.getElementById('columns-display');

document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get({ columns: 6 }, (data) => {
    slider.value = data.columns;
    display.textContent = data.columns;
  });
});

slider.addEventListener('input', () => {
  const value = parseInt(slider.value);
  display.textContent = value;
  chrome.storage.sync.set({ columns: value });
});

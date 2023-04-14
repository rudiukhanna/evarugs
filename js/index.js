let dynamicText = document.getElementById('dynamic-text');

function changeText() {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      dynamicText.textContent = 'у вашому місці';
    } else if (window.matchMedia('(max-width: 768px)').matches) {
      dynamicText.textContent = 'ваше місто';
    } 
  }

  window.addEventListener('load', changeText);
  window.addEventListener('resize', changeText);


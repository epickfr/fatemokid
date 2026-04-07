const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ascii = document.getElementById('ascii');
const ctx = canvas.getContext('2d', { willReadFrequently: true });

const chars = ' .´`^",:;Il!i><~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$';

let width = 120;
let height = 68;

function startAscii() {
  if (!video.videoWidth) {
    video.addEventListener('loadedmetadata', startAscii, { once: true });
    return;
  }

  height = Math.round(width * video.videoHeight / video.videoWidth);
  canvas.width = width;
  canvas.height = height;

  video.play().catch(e => {
    console.log("Autoplay blocked", e);
  });

  drawAscii();
}

function drawAscii() {
  if (video.paused || video.ended) {
    setTimeout(drawAscii, 100);
    return;
  }

  ctx.drawImage(video, 0, 0, width, height);
  
  const imgData = ctx.getImageData(0, 0, width, height);
  const data = imgData.data;
  
  let output = '';
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const brightness = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      const idx = Math.floor(brightness / 255 * (chars.length - 1));
      output += chars[idx] || ' ';
    }
    output += '\n';
  }
  
  ascii.textContent = output;
  
  requestAnimationFrame(drawAscii);
}

window.addEventListener('load', startAscii);

video.addEventListener('ended', () => {
  video.currentTime = 0;
  video.play();
});
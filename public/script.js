const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snapButton = document.getElementById('snap');
const photos = document.getElementById('photos');

async function setupCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (err) {
    console.error('Error accessing camera', err);
  }
}

snapButton.addEventListener('click', () => {
  const context = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const image = document.createElement('img');
  image.src = canvas.toDataURL('image/png');
  photos.appendChild(image);
});

setupCamera();

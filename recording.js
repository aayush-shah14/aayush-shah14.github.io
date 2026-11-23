// Upload the matching MP3 to recordings/ to enable the player on this page.
const player = document.querySelector('audio[data-recording]');

async function showRecording() {
  try {
    const response = await fetch(player.dataset.recording, { method: 'HEAD' });
    if (response.ok && !response.headers.get('Content-Type')?.includes('text/html')) {
      player.src = player.dataset.recording;
      player.hidden = false;
      document.querySelector('.pending').hidden = true;
    }
  } catch {
    // The listening notes remain available offline.
  }
}
showRecording();

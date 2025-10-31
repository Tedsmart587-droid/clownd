const btn = document.getElementById("telegram-btn");

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  btn.style.pointerEvents = 'none';

  try {
    const res = await fetch('/.netlify/functions/revealTelegram', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'reveal' })
    });

    if (!res.ok) throw new Error('Server error: ' + res.status);
    const json = await res.json();
    if (!json || !json.url) throw new Error('No URL returned');

    window.open(json.url, '_blank', 'noopener');
  } catch (err) {
    console.error(err);
    btn.style.pointerEvents = 'auto';
  }
});
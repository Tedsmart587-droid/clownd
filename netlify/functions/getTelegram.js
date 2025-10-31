// netlify/functions/revealTelegram.js
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  // Basic referer/origin check - replace with your domain
  const origin = (event.headers.origin || event.headers.referer || '');
  if (!origin.includes('your-site.netlify.app')) {
    return { statusCode: 403, body: JSON.stringify({ error: 'Forbidden' }) };
  }

  // Optionally check a small action token in body
  try {
    const body = JSON.parse(event.body || '{}');
    if (!body || body.action !== 'reveal') {
      return { statusCode: 400, body: JSON.stringify({ error: 'Bad request' }) };
    }
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Bad request' }) };
  }

  // Only return the Telegram URL here
  const telegramUrl = 'https://t.me/I_am_brootz';
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: telegramUrl })
  };
};
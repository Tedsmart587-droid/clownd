exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const origin = (event.headers.origin || event.headers.referer || '');
  if (!origin.includes('clownd.netlify.app')) {
    return { statusCode: 403, body: JSON.stringify({ error: 'Forbidden' }) };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    if (body.action !== 'reveal') {
      return { statusCode: 400, body: JSON.stringify({ error: 'Bad request' }) };
    }
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Bad request' }) };
  }

  // Your real Telegram link here -- hidden on the server only
  const telegramUrl = 'https://t.me/I_am_brootz';
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: telegramUrl })
  };
};
exports.handler = async (event) => {
  const origin = event.headers.origin || event.headers.referer || '';
  if (!origin.includes('clownds.netlify.app')) {
    return { statusCode: 403, body: 'Forbidden' };
  }

  // ✅ Server-side redirect -- Telegram hidden from X
  return {
    statusCode: 302,
    headers: {
      Location: 'https://wa.me/19382527529'
    }
  };
};
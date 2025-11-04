exports.handler = async (event) => {
  const origin = event.headers.origin || event.headers.referer || '';
  
  // ✅ Only allow requests from your site
  if (!origin.includes('clownd.netlify.app')) {
    return { statusCode: 403, body: 'Forbidden' };
  }

  // ✅ Base64 encoded Telegram deep link
  const encoded = "dGc6Ly9yZXNvbHZlP2RvbWFpbj1DcnlwdG9laWx6"; // tg://resolve?domain=Cryptoeilz

  // ✅ Decode server-side (X cannot see the real link)
  const url = Buffer.from(encoded, 'base64').toString('utf8');

  return {
    statusCode: 302,
    headers: {
      Location: url
    }
  };
};
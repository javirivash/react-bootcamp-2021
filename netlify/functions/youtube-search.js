exports.handler = async (event) => {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Missing YOUTUBE_API_KEY' }),
      };
    }

    const qs = event.queryStringParameters || {};
    const params = new URLSearchParams();

    params.set('key', apiKey);
    params.set('part', qs.part || 'snippet');
    params.set('type', qs.type || 'video');
    params.set('maxResults', qs.maxResults || '50');

    if (qs.q) {
      params.set('q', qs.q);
    }

    const url = `https://www.googleapis.com/youtube/v3/search?${params.toString()}`;
    const res = await fetch(url);

    const bodyText = await res.text();

    return {
      statusCode: res.status,
      headers: {
        'content-type': res.headers.get('content-type') || 'application/json',
      },
      body: bodyText,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: String(err) }),
    };
  }
};

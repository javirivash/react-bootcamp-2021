const restoreCharacters = (text = '') =>
  text
    .replace(/&#34;|&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&#38;|&amp;/g, '&');

const toSelectedVideoShape = (videoId, snippet) => {
  const thumb =
    snippet?.thumbnails?.medium?.url ||
    snippet?.thumbnails?.high?.url ||
    snippet?.thumbnails?.default?.url ||
    '';

  return {
    id: videoId,
    title: restoreCharacters(snippet?.title || ''),
    description: restoreCharacters(snippet?.description || ''),
    channelTitle: restoreCharacters(snippet?.channelTitle || ''),
    thumbnail: thumb,
    isFavorite: null,
  };
};

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
    const videoId = qs.videoId;
    const includeRelated = qs.includeRelated === 'true';

    if (!videoId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing videoId' }),
      };
    }

    // 1) Fetch video details
    const detailsParams = new URLSearchParams({
      key: apiKey,
      part: 'snippet',
      id: videoId,
    });

    const detailsRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?${detailsParams.toString()}`,
    );
    const detailsJson = await detailsRes.json();

    if (!detailsRes.ok) {
      return {
        statusCode: detailsRes.status,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(detailsJson),
      };
    }

    const item = detailsJson?.items?.[0];
    const selectedVideo = item?.snippet
      ? toSelectedVideoShape(videoId, item.snippet)
      : null;
    if (!selectedVideo) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Video not found' }),
      };
    }

    // 2) Optionally fetch related videos (q=title)
    let relatedItems = [];
    if (includeRelated) {
      const searchParams = new URLSearchParams({
        key: apiKey,
        part: 'snippet',
        type: 'video',
        maxResults: '50',
        q: selectedVideo.title,
      });

      const searchRes = await fetch(
        `https://www.googleapis.com/youtube/v3/search?${searchParams.toString()}`,
      );
      const searchJson = await searchRes.json();

      if (searchRes.ok) {
        relatedItems = searchJson.items || [];
      }
    }

    return {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ selectedVideo, relatedItems }),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};

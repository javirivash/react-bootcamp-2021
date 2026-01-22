export async function youtubeSearch({ q }) {
  const params = new URLSearchParams({
    part: 'snippet',
    type: 'video',
    maxResults: '50',
  });

  if (q) {
    params.set('q', q);
  }

  const res = await fetch(
    `/.netlify/functions/youtube-search?${params.toString()}`,
  );

  if (!res.ok) {
    throw new Error(`YouTube proxy failed: ${res.status}`);
  }

  return res.json();
}

export async function youtubeVideos({ videoId, includeRelated }) {
  const qs = new URLSearchParams({
    videoId,
    includeRelated: includeRelated ? 'true' : 'false',
  });

  const res = await fetch(
    `/.netlify/functions/youtube-player-data?${qs.toString()}`,
  );
  if (!res.ok) throw new Error(`youtube-player-data failed: ${res.status}`);

  return res.json();
}

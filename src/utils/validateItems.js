const validateItems = (items) => {
  const filteredItems = items.filter((item) => {
    return item.snippet && item.id?.videoId;
  });

  const restoreQuotes = (text) => {
    return text.replace(/&#34;/g, '"').replace(/&#39;/g, "'");
  };

  const validatedItems = filteredItems.slice(0, 24).map((item) => {
    const {
      title,
      description,
      channelTitle,
      thumbnails: {
        medium: { url },
      },
    } = item.snippet;

    return {
      id: item.id.videoId,
      title: restoreQuotes(title),
      description: restoreQuotes(description),
      channelTitle: restoreQuotes(channelTitle),
      thumbnail: url,
    };
  });
  return validatedItems;
};

export default validateItems;

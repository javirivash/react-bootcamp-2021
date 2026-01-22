const validateItems = (items) => {
  let validatedItems = [];
  const filteredItems = items.filter((item) => {
    return item.snippet && item.id?.videoId;
  });

  const restoreQuotes = (text) => {
    return text.replace(/&#34;/g, '"').replace(/&#39;/g, "'");
  };

  filteredItems.slice(0, 24).forEach((item) => {
    const {
      title,
      description,
      channelTitle,
      thumbnails: {
        medium: { url },
      },
    } = item.snippet;

    const newItem = {
      id: item.id.videoId,
      title: restoreQuotes(title),
      description: restoreQuotes(description),
      channelTitle: restoreQuotes(channelTitle),
      thumbnail: url,
    };

    validatedItems.push(newItem);
  });

  return validatedItems;
};

export default validateItems;

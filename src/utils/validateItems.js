const validateItems = (items) => {
  const validatedItems = items.filter((item) => {
    return item.snippet && item.id?.videoId;
  });
  return validatedItems.slice(0, 24);
};

export default validateItems;

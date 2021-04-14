const validateItems = (items) => {
  const validatedItems = items.filter((item) => {
    return item.snippet && item.id?.videoId;
  });
  return validatedItems.slice(0, 24);
};

// let items;
// .forEach((item)=>{
//   item.snippet.channelTitle.replace(/&#34;/g, '"').replace(/&#39;/g, ''')
//   item.snippet.channelTitle.replace(/&#34;/g, '"').replace(/&#39;/g, ''')
//   item.snippet.channelTitle.replace(/&#34;/g, '"').replace(/&#39;/g, ''')
// });

export default validateItems;

// simple url tester
export const isValidUrl = (urlString: string) => {
  var urlPattern = new RegExp(/^((https?|data):)/, 'i');
  return !!urlPattern.test(urlString);
};

export const getDefaultTitle = (url: string) => {
  const [title] = url.split('/').slice(-1);
  return title;
};

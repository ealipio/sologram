// simple url tester
export const isValidUrl = (urlString: string) => {
  var urlPattern = new RegExp(/^((https?|data):)/, 'i');
  return !!urlPattern.test(urlString);
};

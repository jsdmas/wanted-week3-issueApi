// eslint-disable-next-line
function addAd(data: any[]) {
  const ad = {
    image:
      'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100',
    link: 'https://www.wanted.co.kr/',
    alt: 'this_is_ad_alt',
    isAd: true,
  };

  for (let i = 4; i <= data.length; i += 5) {
    data.splice(i, 0, { ad });
  }

  return data;
}
export default addAd;

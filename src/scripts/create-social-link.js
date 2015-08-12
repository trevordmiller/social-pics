export default function createSocialLink(type, url, text, hashtag) {
  let link = '';

  if(type === 'twitter') {
    link = `https://twitter.com/share?url=${url}&text=${text}&hashtags=${hashtag}`;
  }

  if(type === 'linkedIn') {
    link = `https://linkedin.com/shareArticle?url=${url}&title=${text}%20%23${hashtag}`;
  }

  return link;
}

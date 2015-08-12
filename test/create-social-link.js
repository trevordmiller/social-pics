import {assert} from 'chai';
import createSocialLink from '../src/scripts/create-social-link';

describe('createSocialLink', () => {

  describe('#default()', () => {

    let socialData = [
      'facebook',
      'www.youtube.com',
      'Broadcast Yourself',
      'videos'
    ];

    it('should be a function', () => {
      assert.isFunction(createSocialLink);
    });

    it('should return a string', () => {
      assert.isString(createSocialLink());
    });

    it('should return the twitter link patterns', () => {
      socialData[0] = 'twitter';
      assert.equal(createSocialLink(...socialData), 'https://twitter.com/share?url=www.youtube.com&text=Broadcast Yourself&hashtags=videos');
    });

    it('should return the linkedIn link patterns', () => {
      socialData[0] = 'linkedIn';
      assert.equal(createSocialLink(...socialData), 'https://linkedin.com/shareArticle?url=www.youtube.com&title=Broadcast Yourself%20%23videos');
    });
  });
});

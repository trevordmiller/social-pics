import {assert} from 'chai';
import createSocialLink from '../src/scripts/create-social-link';

describe('createSocialLink', () => {

  describe('#default()', () => {

    it('should be a function', () => {
      assert.isFunction(createSocialLink);
    });
  });
});

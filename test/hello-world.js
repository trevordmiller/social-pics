import assert from 'assert';
import helloWorld from '../src/scripts/hello-world';

describe('helloWorld', () => {

  describe('#init()', () => {

    it('should return hello world', () => {
      assert.equal(helloWorld.init(), 'hello world');
    });
  });
});

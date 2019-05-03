const countThe = require('./countThe');

describe('countThe', () => {
  it('should report 0 thes when there are none', () => {
    expect(countThe('hello')).toBe(0);
  });

  it('should find 1', () => {
    expect(countThe('the one')).toBe(1);
  });

  it('should find 2', () => {
    expect(countThe('the the asdf asdf')).toBe(2);
  });

  it('should not count it when "the" is embedded in another word', () => {
    expect(countThe('the the asthedf asdf')).toBe(2);
  });
});
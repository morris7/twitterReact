jest.dontMock('../TweetUtils');

describe('Tweet utilities module', function () {

   it('returns an array of tweet ids', function () {

       var TweetUtils = require('../TweetUtils');
       var tweetMock = {
           tweet1: {},
           tweet2: {},
           tweet3: {}
       };
       var expectedListOfTweetIds = [ 'tweet1', 'tweet2', 'tweet3' ];
       var actualListOfTweetIds = TweetUtils.getListOfTweetIds(tweetMock);

       expect(actualListOfTweetIds).toEqual(expectedListOfTweetIds);
   });
});
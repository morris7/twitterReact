var React.require('react');
var SnapkiteStreamClient = require('snapkite-stream-client');
var StreamTweet = require('./StreamTweet.react');
var Header = require('./Header.react');

var Stream = React.createClass({

    getInitialState: function () {
        return {
            tweet: null
        }
    },

    componentDidMount: function () {
        SnapkiteStreamClient.initializeSream(this.handleNewTweet);
    },

    componentWillUnmount: function () {
        SnapkiteStreamClient.destroyStream();
    },

    handleNewTweet: function () {
        this.setState({
            tweet: tweet
        });
    },

    render: function () {
        var tweet = this.state.tweet;

        if(tweet) {
            return (
                <StreamTweet
                    tweet={tweet}
                    onAddTweetToCollection={this.props.onAddTweetToCollection} />
            );
        }

        return (
            <Header text="Waiting for public photos from Twitter..." />
        )
    }

});

module.exports = Stream;
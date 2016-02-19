var React = require('react');
var ReactDOM = require('react-dom');
var WebAPIUtils = require('./utils/WebAPIUtils');
var Application = require('./components/Application.react');

WebAPIUtils.initializeStreamOfTweets();

ReactDOM.render(<Application />, document.getElementById('react-application'));
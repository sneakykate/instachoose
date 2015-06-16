var React = require('react');
var Feed = require('./Feed');
var StyleSheet = require('react-style');

var App = React.createClass({
  render: function() {
    return (
      <div styles={styles.container}>
        <Feed/>
      </div>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

React.render(<App/>, document.body);
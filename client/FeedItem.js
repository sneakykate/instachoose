var React = require('react');
var StyleSheet = require('react-style');

// FeedItem should consist of an image (src contained in the data from the AJAX request)
var FeedItem = React.createClass({
  render: function() {
    // put render logic here
    return (
      <div styles={styles.container}>
      </div>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    border: "1px solid black",
    height: 100,
    width: "100%",
    flex: 1,
  }
});

module.exports = FeedItem;

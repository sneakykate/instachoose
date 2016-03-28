const React = require('react');
const StyleSheet = require('react-style');

// FeedItem should consist of an image (src contained in the data from the AJAX request)
const FeedItem = React.createClass({
  render() {
    // put render logic here
    return (
      <div styles={styles.container}>
      </div>
    );
  },
});

const styles = StyleSheet.create({
  container: {
    border: '1px solid black',
    height: 100,
    width: '100%',
    flex: 1,
  },
});

module.exports = FeedItem;

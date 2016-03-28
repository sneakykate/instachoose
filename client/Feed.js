const React = require('react');
const StyleSheet = require('react-style');
const FeedItem = require('./FeedItem');

// Feed contains multiple FeedItems
// Put AJAX in this Component
const Feed = React.createClass({
  getInitialState() {
    return {
      urls: [],
    };
  },
  componentDidMount() {

  },
  render() {
    // put render logic here
    return (
      <div styles={styles.container}>
        <FeedItem />
      </div>
    );
  },
});

const styles = StyleSheet.create({
  container: {
    border: '1px black solid',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
});

module.exports = Feed;

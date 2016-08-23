const React = require('react');
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
    $.get(this.props.url, (data) => {this.setState({urls: data})
  });
  },


  render() {
    // put render logic here
    return (
      <div id="feed" styles={styles.container}>
        <FeedItem urls = {this.state.urls}/>
      </div>
    );
  },
});

const styles = {
  container: {
    border: '1px black solid',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
};

module.exports = Feed;

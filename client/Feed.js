const React = require('react');
const ChoiceItem = require('./ChoiceItem');

// Feed contains multiple FeedItems
// Put AJAX in this Component
const Feed = React.createClass({
  getInitialState() {
    
    return {
      choices: [],
    };
  },

  componentDidMount() {
    $.get(this.props.url, (data) => {this.setState({choices: data})
  });
  },


  render() {
    // put render logic here
    return (
      <div id="feed" styles={styles.container}>
        <ChoiceItem urls = {this.state.choices}/>
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

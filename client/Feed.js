const React = require('react');
const FeedItem = require('./FeedItem');

// Feed contains multiple FeedItems
// Put AJAX in this Component
const Feed = React.createClass({
  getInitialState() {
    
    return {
      data: {},
      urls: [],
    };
  },
  componentDidMount() {
    this.serverRequest = $.getJSON(this.props.url,function(data){
    const newState = getthings(data);
     return newState;
    //totes stuck here, keeps telling me setState isn't a thing.
    });
    function getthings(data){
        const temp = {};
        temp.data = data;
      $.each(data, function(index, imgurl){
        temp.urls = [];
        temp.urls.push(imgurl);
      });
      return temp;
    }
   this.setState(newState);
    // console.log(this.state);
    // this.setState(temp);
  },

  

  render() {
    // put render logic here
    console.log("Feed render " + this.props.url);
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

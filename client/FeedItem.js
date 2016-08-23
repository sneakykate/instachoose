const React = require('react');

// FeedItem should consist of an image (src contained in the data from the AJAX request)
const FeedItem = React.createClass({
  render() {
    // put render logic here
    const imageElems = []; 
    this.props.urls.forEach(function(link){
      let key = Math.random() + link.charAt(0);
      console.log($.get(link));
      imageElems.push(<div key = {key} className="imageInFeed"><img key = {key} src={link} /></div>)
    });
    
    return (

      <div styles={styles.container}>
        {imageElems}
      </div>
    );
  },
});

const styles = {
  container: {
    border: '1px solid black',
    height: 100,
    width: '100%',
    flex: 1,
  },
};

module.exports = FeedItem;

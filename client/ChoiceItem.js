const React = require('react');

// FeedItem should consist of an image (src contained in the data from the AJAX request)
const ChoiceItem = React.createClass({
  render() {
    // put render logic here
    const choiceItems = []; 
    this.props.choices.forEach(function(item){
      let project = item.projname;
      let rating = item.rating;
      let id = item._id;
      let chosen = item.chosen;
      // console.log(item.projname);
      choiceItems.push(<div key={id} className="item">{project} : {rating} : {chosen}</div>);
    });
    
    return (

      <div styles={styles.container}>
        {choiceItems}
      </div>
    );
  }
});


const styles = {
  container: {
    border: '1px solid black',
    height: 100,
    width: '100%',
    flex: 1,
  },
};

module.exports = ChoiceItem;

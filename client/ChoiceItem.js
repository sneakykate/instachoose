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
      let link = item.htmlLink;
      let chosen = item.chosen;
      let chosenSym = 'x'
      if(chosen === false){
        chosenSym = 'x';
      }
      if(chosen === true){
        chosenSym = '√'
      }
      // console.log(item.projname);
      choiceItems.push(
        <div key={id} className="item">
          <div className="projectinfo"><a href={link}>{project}</a></div>
          <div className="rating">{rating}</div>
          <div className="chosen">{chosenSym}</div>
        </div>
      );
    });
    
    return (
      <div >
        {choiceItems}
      </div>
    );
  }
});


// const styles = {
//   container: {
//     border: '1px solid black',
//     height: 100,
//     width: '100%',
//     flex: 1,
//   },
// };

module.exports = ChoiceItem;

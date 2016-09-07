const React = require('react');

// FeedItem should consist of an image (src contained in the data from the AJAX request)
const ChoiceItem = React.createClass({
  updateSort: function(field){
    this.props.sortfunc(field);
  },

  render() {
    // put render logic here
    const choiceItems = []; 
    let submitter = this.props.submitter;
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
      if(submitter===false){
        chosenSym = <input type="checkbox" onChange={function(){item.chosen=!item.chosen; this.props.updateChosen.bind(null, item)}}></input>
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
      <div className="container" >
        <div className="projectinfo header" onClick={this.updateSort.bind(this, 'projname')}>Items</div>
        <div className="rating header" onClick={this.updateSort.bind(this, 'rating')}>Score</div>
        <div className="chosen header" onClick={this.updateSort.bind(this, 'chosen')}>Chosen</div>
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

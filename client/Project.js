const React = require('react');
const ChoiceItem = require('./ChoiceItem');


// Project, Contains multiple ChoiceItems

const Project = React.createClass({
  getInitialState() {
    return {
      submitter: true,
      choices: [],
    };
  },

  componentDidMount() {
    // go get API items
    this.getData();
    console.log('submitter is ' + this.state.submitter)
  },

  getData(){
    $.get(this.props.url, (data) => {this.setState({choices: data});
  });
  },

  handleSubmit: function(event) {
    event.preventDefault()
    var description = this.refs.description.value;
    var rating = this.refs.rating.value;
    var link = this.refs.link.value;
    this.refs.description.value = '';
    this.refs.rating.value = '';
    this.refs.link.value = '';
    //alert('trying to create an item with description ' + description + 'rating' + rating);
    this.addItem(description, link, rating);
  },

  addItem: function(itemDescription, link, rating){
    var testData = {"projname": itemDescription, "htmlLink": link, "rating": rating, "chosen": false };
    var creationRequest = 
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/add',
        data: JSON.stringify(testData),
        contentType: 'application/json',
        // dataType: 'json',
        processData: false
      });
      console.log("addItem Called");
    creationRequest.done(this.getData());
  },

  changeUser: function() {
    console.log("submitter is" + this.state.submitter);
    let temp = {};
    temp.submitter=!this.state.submitter;
    this.setState(temp);
    console.log("submitter is" + this.state.submitter);
  },

  render() {
    // put render logic here
    var viewing;
    if(this.state.submitter===true){
      viewing = <div>
        <button className="toggler" onClick={this.changeUser}>Switch User</button>
        <form id="add-form" onSubmit={this.handleSubmit}>
          <input id="create" ref="description" type="textarea" placeholder="Add Something to the list!" />
          <input ref="link" type="text" placeholder="link" />
          <input ref="rating" type="text" placeholder="rating" />
          <button type="submit">Submit</button> 
        </form>
          
        </div>
    }
    else{
      viewing = <div><button className="toggler" onClick={this.changeUser}>Switch User</button></div>
    }
    
    return (
      <div id="project" styles={styles.container}>
        {viewing}
        
        <ChoiceItem choices = {this.state.choices}/>
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

module.exports = Project;

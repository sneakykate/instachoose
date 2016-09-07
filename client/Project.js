const React = require('react');
const ChoiceItem = require('./ChoiceItem');


// Project, Contains multiple ChoiceItems

const Project = React.createClass({
  getInitialState() {
    
    return {
      choices: [],
    };
  },

  componentDidMount() {
    // go get API items
    this.getData();
  },

  getData(){
    $.get(this.props.url, (data) => {this.setState({choices: data});
  });
  },

  handleSubmit: function(event) {
    event.preventDefault()
    var description = this.refs.description.value;
    var rating = this.refs.rating.value;
    this.refs.description.value = '';
    this.refs.rating.value = '';
    //alert('trying to create an item with description ' + description + 'rating' + rating);
    this.addItem(description, rating);
  },

  addItem: function(itemDescription, rating){
    var testData = {"projname": itemDescription, "rating": rating, "chosen": false };
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
  render() {
    // put render logic here
    return (
      <div id="project" styles={styles.container}>
        <form id="add-form" onSubmit={this.handleSubmit}>
          <input id='create' ref="description" type='text' placeholder='Add Something to the list!' />
          <input id='create' ref="rating" type='text' placeholder='rating' />
          <button type='submit'>Submit</button>
        </form>
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

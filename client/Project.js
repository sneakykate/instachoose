import React from 'react';
import ChoiceItem from './ChoiceItem';

// Project, Contains multiple ChoiceItems

const Project = ({state}) =>{

}
  getInitialState() {
    return {
      submitter: true,
      choices: [],
    };
  },

  componentDidMount() {
    // go get API items
    this.getData();
  },

  getData(){
    $.get(this.props.url, (data) => {
      this.setState({ choices: data });
    });
  },

  handleSubmit: function(event) {
    event.preventDefault()
    var description = this.refs.description.value;
    var rating = this.refs.rating.value;
    var link = this.refs.link.value;
    var price = this.refs.price.value;
    this.refs.description.value = '';
    this.refs.rating.value = '';
    this.refs.link.value = '';
    this.refs.price.value='';
    //alert('trying to create an item with description ' + description + 'rating' + rating);
    this.addItem(description, link, rating, price);
  },

  addItem: function(itemDescription, link, rating, price){
    var testData = {"projname": itemDescription, "htmlLink": link, "rating": rating, "chosen": false , "price": price};
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

 

  sortfunc: function(field){
        var x = this.state.choices;
        x.sort(function(a, b){
          a[field] < b[field];
        });
        console.log(x[0][field]);
        console.log(x);
        this.setState({choices: x})
      },
  
  updateChosen: function(item){
    var creationRequest = 
      $.ajax({
      type: 'PUT',
      url: 'http://localhost:3000/choose',
      data: JSON.stringify(item),
      contentType: 'application/json',
      processData: false
      });
    },

  render() {
    var viewing;
    if(this.state.submitter===true){
      viewing = <div>
        <button className="toggler" onClick={this.changeUser}>Switch User</button>
        <form id="add-form" onSubmit={this.handleSubmit}>
          <input id="create" ref="description" type="textarea" placeholder="Add Something to the list!" />
          <input ref="link" type="text" placeholder="link" />
          <input ref="price" type="text" placeholder="price (ex. $4.00)" />
          <input ref="rating" type="text" placeholder="recommended 1-10" />
          <button type="submit">Submit</button> 
        </form>
          
        </div>
    }
    else{

      viewing = <div>
      <div className="newhead"><h1>Choose!</h1></div>
      <button className="toggler" onClick={this.changeUser}>Switch User</button>
        
      </div>
    }
    
    return (
      <div id="project" styles={styles.container} >
        {viewing}
        
        <ChoiceItem choices = {this.state.choices} sortBy = {this.state.sortBy} sortfunc={this.sortfunc} submitter={this.state.submitter} updateChosen={this.updateChosen}/>
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

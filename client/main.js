import React from 'react';
import ReactDOM from 'react-dom';
import {Desklamp, Container} from 'desklamp';

import Project from './Project';

// const Form = require('./Form');
// const Form = require('./ChoiceItem');


const url = 'http://localhost:3000/api';

// App consists of one feed area, one form
const App = () => {
  // App state decides whether to show feed, form or both
}
const initialState = {
      form_showing: true,
      allItems_showing: true,
      project_props:{
        url: url,
      }
  }

const funcs = {
   changeUser: function() {
    let temp = {};
    temp.submitter=!state.submitter;
    Desklamp.updateState(temp);
  },
    getData(){
    $.get(this.props.url, (data) => {
      Desklamp.updateState({ choices: data });
    });
  },
}
componentDidMount() {
    // go get API items
    this.funcs.getData();
  },

  render() {
    return (
      <div styles={styles.container}>
          <Project url={url} />
      </div>
    );
  },
});

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
};

// Render an <App> component to the #app div in the body
ReactDOM.render(
  (<Container>
    <App />
  </Container>), document.getElementById('app'));

  Desklamp.on(initialState, funcs);

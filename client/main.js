const React = require('react');
const ReactDOM = require('react-dom');
const Project = require('./Project');
// const Form = require('./Form');
// const Form = require('./ChoiceItem');


const url = 'http://localhost:3000/api';

// App consists of one feed area, one form
const App = React.createClass({
  // App state decides whether to show feed, form or both
  getInitialState() {
    return {
      form_showing: true,
      allItems_showing: true,
    };
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
ReactDOM.render(<App />, document.getElementById('app'));

const React = require('react');
const ReactDOM = require('react-dom');
const Feed = require('./Feed');
const StyleSheet = require('react-style');

const url = 'https://codesmith-precourse.firebaseio.com/instagram/-JqL35o8u6t3dTQaFXSV.json';

// App consists of one feed
const App = React.createClass({
  render() {
    return (
      <div styles={styles.container}>
        <Feed />
      </div>
    );
  },
});

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

// Render an <App> component to the #app div in the body
ReactDOM.render(<App />, document.getElementById('app'));

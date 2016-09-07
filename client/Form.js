// const React = require('react');
// const Form = React.createClass({
//   getInitialState() {
//     //change which form elements are visible depending if user is shopper or decider
//     return {
//       choices: [],
//     };
//   },

//   componentDidMount() {
//     $.get(this.props.url, (data) => {this.setState({choices: data});
//   });
//   },

//   render() {
//     // put render logic here
//     return (
//       <div id="form" styles={styles.container}>
//         <form>
//           <input type="text" placeholder="Project Name" value={this.props.projName}>Stuff</input>
//           <input type="checkbox" checked={this.props.chosen} />
//           <input type="submit"></input>
          
//         </form>
//       </div>
//     );
//   },
// });

// const styles = {
//   container: {
//     border: '1px black solid',
//     width: '50%',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '10px',
//   },
// };

// module.exports = Form;
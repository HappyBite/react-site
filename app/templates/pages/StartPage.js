import React from 'react';

const StartPage = (props) => {
  // console.log('DATA: ', props.data);
  // console.log('PROPS: ', props.pathname);
  return (
    <div className="starter-template">
      <h1>Bootstrap starter template</h1>
      <p className="lead">Use this document as a way to quickly start any new project.<br /> All you get is this text and a mostly barebones HTML document.</p>
    </div>
  );
};

export default StartPage;

// class StartPage extends React.Component {
//   constructor(props) {
//     super(props);
//     // console.log('DATA: ', this.props.data);
//   }
  
//   render() {
//     return (
//       <div className="starter-template">
//         <h1>Bootstrap starter template</h1>
//         <p className="lead">Use this document as a way to quickly start any new project.<br /> All you get is this text and a mostly barebones HTML document.</p>
//       </div>
//     );
//   }
// }

// export default StartPage;

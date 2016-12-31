import React from 'react';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';

import LayoutDefault from './app/layouts/LayoutDefault';
import StartPage from './app/templates/pages/StartPage.js';
import SubPage from './app/templates/pages/SubPage.js';
import Blog from './app/templates/blog';
import Portfolio from './app/templates/portfolio';
import NoMatch from './app/templates/pages/NoMatch.js';

// import getData from './client/get-data';
var helper = require('./data-store/helper.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getRoutes = this.getRoutes.bind(this);
    // this.state = {
    //  data: this.props.data
    // };
  }
  
  componentWillReceiveProps() {
    // getData(function(err, res) {
    //   var data = helper.getPathData(location.pathname);
    //   this.setState({data});
    // }.bind(this));
    
    // var data = helper.getPathData(location.pathname);
    // this.setState({data});
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    // if (nextState.data.url !== nextProps.data.url) {
    //   return true;
    // }
    return true;
  }
  
  getRoutes(data) {
    const routes = Object.keys(data.pages).map(function(key, index) {
      var page = data.pages[key];
      if (page.attributes.start_page) {
        return <Match key={index} exactly pattern={key} render={(props) => <StartPage {...props} data={data} />} />;
      } else if (page.meta.item_type.data.id === 'blog') {
        return <Match key={index} exactly pattern={key} render={(props) => <Blog {...props} data={data} />} />;
      } else if (page.meta.item_type.data.id === 'portfolio') {
        return <Match key={index} exactly pattern={key} render={(props) => <Portfolio {...props} data={data} />} />;
      } else if (page.meta.item_type.data.id === 'sub-page') {
        return <Match key={index} exactly pattern={key} render={(props) => <SubPage {...props} data={data} />} />;
      }
    });
    return routes;
  }
  
  render() {
    let url = typeof location !== 'undefined' ?
              location.pathname :
              this.props.url;
    let data = helper.getPathData(url);
    if (!data.current_page) {
      console.log('NO DATA AGAIN');
      return false;
    }
    return (
      <div>
        <LayoutDefault data={data} />
        <div className="container">
          {this.getRoutes(data)}
          <Miss render={(props) => <NoMatch {...props} data={data} />} />
        </div>
      </div>
    );
  }
}

export default App;

// const App = ({data}) => {
//   return (
//     <div>
//       <LayoutDefault data={data} />
//       <div className="container">
//         <Match exactly pattern="/" render={(props) => <Home {...props} data={data} />} />
//         <Match pattern="/sida-1" render={(props) => <SubPage {...props} data={data} />} />
//         <Match pattern="/sida-1/undersida-1" render={(props) => <SubPage {...props} data={data} />} />
//         <Match pattern="/blog" render={(props) => <Blog {...props} data={data} />} />
//         <Match pattern="/contact" render={(props) => <SubPage {...props} data={data} />} />
//         <Miss render={(props) => <NoMatch {...props} data={data} />} />
//       </div>
//     </div>
//   );
// }
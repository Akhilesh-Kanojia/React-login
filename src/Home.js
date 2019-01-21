import React from 'react';
import imgb from '../images/event.jpg';

console.log(imgb);
class Home extends React.Component {
   render() {
      return (
         <div className="container">
            <h1>Home</h1>
            <img src={imgb} />
         </div>
      );
   }
}

export default Home;
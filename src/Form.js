import React from 'react';
import { Prompt } from 'react-router-dom';


class Form extends React.Component {
   constructor() {
      super();
      this.state = {
         isChanged: false
      };
   }
   
   render() {
      return (
         <div className="container-fluid">
            <Prompt when={this.state.isChanged} message="Are you sure want to leave?" />
            <input type="text" className="form-control"
               onChange={
                  () => {
                     this.setState({
                        isChanged: true
                     });
                  }
               }
            />
           
         </div>
         
      );

   }
}

export default Form;
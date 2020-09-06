import React, { Component } from "react";

class HelloWorld extends Component {
   
  render() {
      
      return (
            <div>
                {/* Hello World {this.props.myname}<br></br> {this.props.hisname} */}
                Hello World
                <br></br>
                
                <button >Update Number</button>
            </div>
      )
  }
}

export default HelloWorld;

import CollegeSection from "./component/CollegeSection";
import React from "react";
import { Component } from "react";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
       <CollegeSection heading="School" site="https://www.google.com"/>
       <CollegeSection heading="Admin" site="https://www.facebook.com"/>
       <CollegeSection heading="Faculty" site="https://www.bing.com"/>
    
       </div>
      </div>
    );
  }
}
export default App
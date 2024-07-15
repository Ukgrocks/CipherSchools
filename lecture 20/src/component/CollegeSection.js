import { Component } from "react";
import '../App.css';
class CollegeSection extends Component {

    render() {
        return (
<div className="college-section" >
                
                <h2>{this.props.heading}</h2>
                <p>Hello welcome to the University </p>
    <a href={this.props.site}>
  <button>Click me</button>
</a>
            </div>
        );
    }
}
export default CollegeSection
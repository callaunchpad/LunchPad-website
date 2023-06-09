import React, { Component } from "react";
class UploadImage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        image: null
      };
  
     // if we are using arrow function binding is not required
     //  this.onImageChange = this.onImageChange.bind(this);
    }
    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          this.setState({
            image: URL.createObjectURL(img)
          });
        }
      };
    
      render() {
        return (
          <div>
            <div>
              <div>
                <img src={this.state.image} />
                <p>Select Image</p>
                <input type="file" name="myImage" onChange={this.onImageChange} />
              </div>
            </div>
          </div>
        );
      }
    }
    export default UploadImage;
  
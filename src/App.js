import React, { Component } from "react";
import Photos from "./components/photo";
import axios from "axios";

class App extends Component {
  state = {
    photos: []
  };
  shuffle(arra1) {
    var ctr = 15,
      temp,
      index;
      var newarr = [];

    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
      newarr[ctr]=arra1[ctr];

    }
    document.getElementById("spinner").parentNode.removeChild(document.getElementById("spinner"));

    return newarr;
  }
  componentDidMount() {
    axios({
      method: "get",
      url: "https://salty-springs-26389.herokuapp.com/home"

      // Safari fix
    })
      .then(res => {
        const photos = this.shuffle(res.data);
        this.setState({ photos });
        console.log(photos);
      })
      .catch(console.log);
  }
  render() {
    return <Photos photos={this.state.photos} />;
  }
}
export default App;

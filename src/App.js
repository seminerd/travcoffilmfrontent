import React, { Component } from 'react'
import Photos from './components/photo'
import axios from 'axios'

class App extends Component {
  state = {
    photos: [],
   
  }
  shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
  componentDidMount() {
    axios({
      method:'get',
      url:'https://salty-springs-26389.herokuapp.com/home',
      
       // Safari fix
    })
    .then(res => {
      const photos = this.shuffle(res.data);
      this.setState({ photos });
      console.log(photos);
    })
    .catch(console.log)
  }
  render(
  
  )
  {
    return ( <Photos photos={this.state.photos} /> );
  }
}
export default App;


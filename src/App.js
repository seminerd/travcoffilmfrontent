import React, { Component } from 'react'
import Photos from './components/photo'
import axios from 'axios'

class App extends Component {
  state = {
    photos: [],
   
  }
  componentDidMount() {
    axios({
      method:'get',
      url:'https://salty-springs-26389.herokuapp.com/home',
      
       // Safari fix
    })
    .then(res => {
      const photos = res.data;
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


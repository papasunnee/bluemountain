import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
export default class Video extends Component {
  render () {
    return <ReactPlayer width="inherit" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
  }
}
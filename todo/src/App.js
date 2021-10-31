import React, { Component } from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import ToDo from "./components/ToDo"

export default class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <>
      <Header />
      <ToDo />
      <Footer /> 
      </>
    );
  }
}

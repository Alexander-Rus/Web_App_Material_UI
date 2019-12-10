import React, { Component, Fragment } from 'react'
import { Header, Sub_Header, Footer } from './Layouts'
import Main_Content from './Main_Content'
import {muscles, exercises } from '../store'


export default class extends Component {
  state = {
    exercises
  }

getExercisesByMusicles() {
  return this.state.exercises[0] 
  
}

  render() {
    console.log(this.getExercisesByMusicles())
    return <Fragment>
      <Header/>

      <Sub_Header
      />

      <Footer/>
    </Fragment>
  }
}
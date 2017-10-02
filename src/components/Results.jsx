import React, { Component } from 'react'
import Navbar from './Navbar'
import Sunset from '../pk2-pro-html-v2/assets/img/sections/bruno-abatti.jpg'
import Background from '../pk2-pro-html-v2/assets/img/sections/mika-matin.jpg'
import Homes from '../pk2-pro-html-v2/assets/img/sections/fabio-mangione.jpg'

export const background = {
  backgroundImage: `url( ${ Background } )`
}

const sunset = {
  backgroundImage: `url( ${ Sunset } )`
}

const homes = {
  backgroundImage: `url( ${ Homes } )`
}

export class Results extends React.Component {
  constructor(props){
    super(props)

  }

  drawResult(result) {
    return (
      <li>{result.firstName} {result.lastName}</li>
    )
  }

  renderResults() {
    console.log("This is the props", this.props.results)
    var results = this.props.results
    var newResults = <li>No new results!</li>
    if (results) {
       newResults = results.map((n) =>{
        return this.drawResult(n)
      })
    }
    return newResults
  }

  render() {
    return (
      <div className="wrapper">
        <div className="col-md-6 col-xs-2" >
          <h4>Results</h4>
          <ul>
            {this.renderResults()}
          </ul>
        </div>
      </div>
    )
  }
}

export default Results

import React from 'react'
import { Link } from 'react-router'

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, Redux, and React-Router for Super Responsive Web Apps</p>
        <Link to="about" className="btn btn-primary btn-large">Learn More</Link>
      </div>
    )
  }
}

export default HomePage

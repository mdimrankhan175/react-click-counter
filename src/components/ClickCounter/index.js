// Write your code here

// Write your code here

import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`you clicked ${prevState.count} times`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="counter-card">
          <h1>
            The button has been clicked
            <span className="count-color"> {count} </span> times
          </h1>
          <p>click the button to increase the count</p>
          <button onClick={this.onIncrement} className="button">
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter

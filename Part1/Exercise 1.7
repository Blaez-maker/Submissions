import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)


  const Average = (props) => {
    if (props.all === 0) {
      return (
        <div>
          No average yet.
        </div>
      )
    }
    return (
      <div>average {(good - bad) / all} 
      </div>
    )
  }

  const Positive = (props) => {
    if (props.all === 0) {
      return (
        <div>
          No positive yet.
        </div>
      )
    }
    return (
      <div>positive {(good / all) * 100} %
      </div>
    )
  }
  
  const Button = ({ handleAlignmentClick, text }) => (
      <button onClick={handleAlignmentClick}>
        {text}
      </button>)

  const setGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setAll(updatedGood + neutral + bad)

  }

  const setNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAll(good + updatedNeutral + bad)

  }

  const setBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAll(good + neutral + updatedBad)

  }

  return (
    <div>

        <h1>give feedback</h1>

      <Button handleAlignmentClick={setGoodClick} text='good' />
      <Button handleAlignmentClick={setNeutralClick} text='neutral' />
      <Button handleAlignmentClick={setBadClick} text='bad' />
      <h1>statistics</h1>

    good {good}<br />
    neutral {neutral}<br />
    bad {bad}<br />
    all {all}<br />
    <Average all={all} />
    <Positive all={all} />
 
    </div>
  )
}

export default App

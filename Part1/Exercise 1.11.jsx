import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleAlignmentClick}>{props.text}</button>
)

const StatisticLine = ({stats, text}) => {
  return(
        <tr>
        <td>{text}</td>
        <td>{stats}</td>
        </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const Statistic = (props) => {
    if (props.all === 0) {
      return (
        <div>
          < br/>
          No feedback given
        </div>
      )
    }
    return (
        <table>
          <tbody>
        <StatisticLine text="good" stats={good} />
        <StatisticLine text="neutral" stats={neutral} />
        <StatisticLine text="bad" stats={bad} />
        <StatisticLine text="all" stats={all} />
        <StatisticLine text="average" stats={(good - bad) / all} />
        <StatisticLine text="positive" stats={(good / all) * 100 + '%' } />
          </tbody>
        </table>
    )
  }

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
    <Statistic all={all} td/>

 
    </div>
  )
}

export default App

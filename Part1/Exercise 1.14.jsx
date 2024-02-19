import { useState } from 'react'

const TopVote = ({anecdotes, votes}) => {
  const topVoteCount = Math.max(...votes)
  const topVoteIndex = votes.indexOf(topVoteCount)
  const topvote = anecdotes[topVoteIndex]
  if (topVoteCount === 0) {
    return (
      <p>no votes</p>
    )
  }
  return (
    <div>
        {topvote}<br/>
      has {topVoteCount} votes
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleVoteClick = () => {
    const newAllVotes = [...votes]
    newAllVotes[selected] += 1
    setVotes(newAllVotes)
  }

  const handleAnecdoteClick = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
    }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br/>
        has {votes[selected]} votes <br/>
      <button onClick={handleVoteClick}>
        vote
      </button>
      <button onClick={handleAnecdoteClick}>
        ancedote
      </button>
      <h1>Anecdote with most votes</h1>
      <TopVote anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App

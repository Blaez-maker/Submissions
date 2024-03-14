const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  courses[1].parts[0].exercises
  
  const sum = courses.parts.reduce((s, p) => 
    s + p.exercises, 0, 
  )

  const Course = ({ nomen }) => {
    return (
          nomen.parts.map(coursesarbi => <p key={coursesarbi.id}>
            {coursesarbi.name} {coursesarbi.exercises}</p>)
          )
  }
  return (
  <div>
    <h1>{courses.name}</h1>
    <Course nomen={courses} />
    <b>total of {sum} exercises</b>
  </div>
  )
}

export default App

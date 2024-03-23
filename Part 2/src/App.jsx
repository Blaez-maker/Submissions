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

  const sum = 
  
  courses[0].parts.reduce((s, p) => 
    s + p.exercises, 0, 
  )

  const Course = ({ nomen }) => {
    return (
          nomen.map(coursearbi => <div key={coursearbi.id}>
            <h1>{coursearbi.name}</h1>
            {coursearbi.parts.map((item, index) => (
              <p key={`item-${index}`}>{item.name} {item.exercises}
              </p>
            ))}
            <b>total of {coursearbi.parts.reduce((s,p) => 
            s + p.exercises, 0,)} exercises</b>
            </div>
            ))}
  return (
  <div>
    <Course nomen={courses} />
  </div>
  )
}

export default App

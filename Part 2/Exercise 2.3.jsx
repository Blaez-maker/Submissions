const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
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
  }

  const sum = course.parts.reduce((s, p) => 
    s + p.exercises, 0, 
  )

  const Course = ({ nomen }) => {
    return (
          nomen.parts.map(courses => <p key={courses.id}>
            {courses.name} {courses.exercises}</p>)
          )
  }
  return (
  <div>
    <h1>{course.name}</h1>
    <Course nomen={course} />
    <b>total of {sum} exercises</b>
  </div>
  )
}

export default App

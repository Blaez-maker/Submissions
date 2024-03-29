const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  
  const Header = () => {
    return (
        <p>
        Hello, the name of this course is {course.name}!
        </p>
    )
  }

  const sum = (p1, p2, p3) => {
    return p1 + p2 + p3
  }

  const Content = () => {
    return (
      <div>
        <p>
        The name of the first part is {course.parts[0].name} and there are {course.parts[0].exercises} exercises in it!
        </p>
        <p>
        The name of the second part is {course.parts[1].name} and there are {course.parts[1].exercises} exercises in it!
        </p>
        <p>
        The name of the last part is {course.parts[2].name} and there are {course.parts[2].exercises} exercises in it!
        </p>
      </div>
    )
  }

  const Total = () => {
    return (
      sum(course.parts[0].exercises, course.parts[1].exercises, course.parts[2].exercises)
    )
  } 

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
      </div>
  )
}

export default App

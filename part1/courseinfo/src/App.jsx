
const Header = (course) => {
  return(
    <h1>
      {course.course}
    </h1>
  )
}

const Total = (total) =>{
  return(
    <p>Number of exercises {total.total}</p>
  )
}

const Part  = (input) => {
  console.log(input)
  return(
    <p>
      {input.input.part} {input.input.exercises}
    </p>
  )
}

const Content  = (exersisesArr) => {
  return (
    <div>
    <Part input={exersisesArr.exersisesArr[0]}/>
    <Part input={exersisesArr.exersisesArr[1]}/>
    <Part input={exersisesArr.exersisesArr[2]}/>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  let ex1 = {part: part1, exercises: exercises1}
  let ex2 = {part: part2, exercises: exercises2}
  let ex3 = {part: part3, exercises: exercises3}
  let exersisesArr = [ex1,ex2,ex3]
  return (
    <div>
      <Header course={course}/>
      <Content exersisesArr={exersisesArr} />
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App
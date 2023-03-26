export const SumCard = (props) => {
  // console.log(props)
  //console.log({ props }) //Object Shorthand property- When we are console logging somehing we can console it as an object.
  //When object key and values are same. We just created an object with props as props.
  //{props : props}

  const { num1, num2 } = props;
  //we can also destructure, in the place where we are taking props
  const myStyle = {
    fontSize: "20px"
  }
  return (
    <>
      <h1 style={{ color: "green" }}>Sum Of Numbers</h1>
      <p>Number One: <span style={myStyle}>{num1}</span></p>
      <p>Number Two: <span style={myStyle}>{num2}</span></p>
      <p>Sum: <span style={myStyle}>{num1 + num2}</span></p>
    </>
  )
}
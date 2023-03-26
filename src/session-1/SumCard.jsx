export const SumCard = ({ num1, num2 }) => {
  return (
    <>
      <h1>Sum Of Numbers</h1>
      <p>Number One: {num1}</p>
      <p>Number Two: {num2}</p>
      <p>Sum: {num1 + num2}</p>
    </>
  )
}
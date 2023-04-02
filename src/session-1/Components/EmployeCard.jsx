export const EmployeCard = () => {
  return (
    <>
      <h1>Yash</h1>
      <p><span style={{ color: "red" }}>Designation</span>: Software Engineer</p>
      <p><span style={{ color: "blue" }}>Experience</span>: <span style={{ fontSize: "18px" }}>10years</span></p>
      <p>Team: Microsoft</p>
    </>
  )
}

const employees = [
  { id: "E1", name: "Arpit Jain", workExperience: 6 },
  { id: "E2", name: "Monica Jaiswal", workExperience: 4 },
  { id: "E3", name: "Priya Shetty", workExperience: 9 },
  { id: "E4", name: "Aman Sen", workExperience: 1 }
];

export const EmpCard = () => {
  return (
    <ul>
      {employees.map(({ name, workExperience }) => <li style={{ color: workExperience > 5 ? "Green" : "black" }}>Name: {name} Experience: {workExperience}</li>)}
    </ul>
  )
}
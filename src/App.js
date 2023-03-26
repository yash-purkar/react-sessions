import './App.css';
import { SumCard } from './session-1/SumCard';

import { EmployeeCard } from './session-1/EmployeeCard';;

function App() {
  return (
    <div className="App">
      {/* Session One */}
      <SumCard num1={4} num2={5} />
      <hr />
      <EmployeeCard />
      <hr />
    </div>
  );
}

export default App;

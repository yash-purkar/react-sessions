import './App.css';
import { SumCard } from './session-1/SumCard';

import { EmployeCard } from './session-1/EmployeCard';;

function App() {
  return (
    <div className="App">
      {/* Session One */}
      <SumCard num1={4} num2={5} />
      <hr />
      <EmployeCard />
      <hr />
    </div>
  );
}

export default App;

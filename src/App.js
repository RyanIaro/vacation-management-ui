import './App.css';
import { Header } from './components/Header';
import { EmployeeList } from './components/EmployeeList';
import { VacationList } from './components/VacationList';

function App() {
  return (
    <div className="App">
      <Header/>
      <EmployeeList/>
      <VacationList/>
    </div>
  );
}

export default App;

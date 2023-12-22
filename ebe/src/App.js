import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';


const zadanie=[{
  nazwaZadania: "Zrobić zakupy",
},
{
  nazwaZadania: "Kupic mleko",
}]

function App() {
  const [tasks, setTasks] = useState(zadanie);

  return (
    <div className='Main'>

      <div className='NavBar'>
        <h1>Lista rzeczy do zrobienia!</h1>
      </div>

      <div className='MainContent'>

        <div className='ContentLeft'>
          <WypisanieZadan taskk={tasks} onSetTask={setTasks} />
        </div>

        <div className='ContentRight'>
          <DodawanieZadan taskkk={tasks} onSetTaskk={setTasks}/>
        </div>

      </div>

    </div>
  );
}



function WypisanieZadan({taskk, onSetTask}){
  const toggleTask = (index) => {  // Funkcja zmieniająca stan zadania na zrobione/nie zrobione
    const updatedTasks = [...taskk]; // Tworzenie kopii tablicy tasks za pomocą operatora rozpraszania(...)
    updatedTasks[index].done = !updatedTasks[index].done;
    onSetTask(updatedTasks);
  };

  return(
    <div>
      <h2>Twoje zadania:</h2>

      <ul className='zadanLista'>
        <div>
          {zadanie.map((task, index) => (
            <li key={index} style={{ textDecoration: task.done ? 'line-through' : 'none' }}>{task.nazwaZadania}{' '} <button className='btn btn-dark btn-sm' onClick={() => toggleTask(index)}>{task.done ? 'Niezrobione' : 'Zrobione'}</button></li>
          ))}
          
        </div>
      </ul>
    </div>
  );
}

function DodawanieZadan({taskkk, onSetTaskk}){
  return(
    <div>
      <form className='form1'>
        <div className='form-group'>
          <label for='InputName'>Nazwa zadania:</label>
          <input type='text' className='form-control' id='InputName' onChange={e => onSetTaskk(e.target.value)} placeholder='Wpisz nazwe zadania: ' />
        </div>
        <button type='button' className='btn btn-dark' onClick={console.log(taskkk.toString())}>Dodaj</button>
      </form>
    </div>
  );
}
export default App;

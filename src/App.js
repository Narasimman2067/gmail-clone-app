import './App.css';
import EmailLists from './Components/Emaillists/EmailLists';
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/SideBar/SideBar';




function App() {
  return (
<div className="App">
<NavBar />

<div className='app-body'>
<SideBar/>
<EmailLists />


</div>






    
    </div>
  );
}

export default App;

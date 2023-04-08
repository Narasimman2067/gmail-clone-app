
import './App.css';
import Compose from './Components/Compose/Compose';
import EmailLists from './Components/Emaillists/EmailLists';
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/SideBar/SideBar';
import { selectSendMessageIsOopen } from './features/mailSlice';
import {useSelector} from "react-redux";


function App() {

  const isMessageOpen =useSelector(selectSendMessageIsOopen)
  console.log(isMessageOpen)
  return (
<div className="App">
<NavBar />


<div className='app-body'>
<SideBar/>
<EmailLists />
{
  isMessageOpen && <Compose/>  
}

</div>






    
    </div>
  );
}

export default App;

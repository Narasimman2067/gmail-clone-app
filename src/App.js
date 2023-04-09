
import { useEffect } from 'react';
import './App.css';
import Compose from './Components/Compose/Compose';
import EmailLists from './Components/Emaillists/EmailLists';
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/SideBar/SideBar';
import { selectSendMessageIsOopen } from './features/mailSlice';
import {useSelector} from "react-redux";


function App() {
  // conect that front and backend
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzI2MTA3OTRmM2RjYzI3ZTliYjUwYiIsImlhdCI6MTY4MTA2MzE3NywiZXhwIjoxNjgxNjY3OTc3fQ.WZ4opYKCdczDLZTUSih5YI8jBlmFZgUJMVn-CRZWV4s";
  useEffect(() => {
    const getContent = async () => {
      try {
        const response = await fetch(`https://gmailclone-backend-j7ay.onrender.com/user/alluser`, {
          method: "GET",
          headers: {
            "Content-Type": "applications/json",
            "x-auth-token":token
          }
         
        })
        const data =await response.json()
        console.log(data.message)
      } catch (error) {
        console.log(error)
      }
    };
    getContent();
  }, []);


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

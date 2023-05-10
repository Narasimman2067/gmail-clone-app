import { useEffect, useState} from "react";
import "./App.css";
import Main from "./components1/Main";
import Register from "./components1/Register";
import Login from "./components1/Login";
import { Route, Routes} from "react-router-dom";
import Header from "./components1/Header";

function App() {
  // conect that front and backend
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzI2MTA3OTRmM2RjYzI3ZTliYjUwYiIsImlhdCI6MTY4MTA2MzE3NywiZXhwIjoxNjgxNjY3OTc3fQ.WZ4opYKCdczDLZTUSih5YI8jBlmFZgUJMVn-CRZWV4s";
  useEffect(() => {
    const getContent = async () => {
      try {
        const response = await fetch(
          `https://gmailclone-backend-j7ay.onrender.com/user/alluser`,
          {
            method: "GET",
            headers: {
              "Content-Type": "applications/json",
              "x-auth-token": token,
            },
          }
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getContent();
  }, []);


  const [openDrawer, setOPenDrawer] =useState(true)
  const toggleDrawer = () =>{

    setOPenDrawer(prevState =>!prevState);

  }

  return (
   
    <div className="App" >
     
    
      <Header 
      toggleDrawer={toggleDrawer}
      />
        <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/main" element={ <Main />} /> 
           <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          </Routes>
      
      
   
 


    </div>
    
  );
}

export default App;

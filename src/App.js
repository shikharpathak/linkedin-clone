import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './features/userSlice'
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
import { login, logout } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user= useSelector(selectUser)
  console.log("User" , user);
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(
            login({
              email: userAuth.email,
              uid: userAuth.uid,
              displayName: userAuth.displayName,
              photoURL: userAuth.photoURL,
            })
          );
      }
      else{
        dispatch(logout());
      }
    })
  },[])
  return (
    <div className="App">
     {/* Header */}
     <Header/>

     {!user ? (<Login/>) : (  
     <div className="appBody">
     <Sidebar/>
     <Feed/>
     <Widgets/>
     </div>
     )
     }
    </div>
  );
}

export default App;

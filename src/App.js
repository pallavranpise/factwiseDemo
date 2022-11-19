import { useEffect, useState } from 'react';
import './App.css';
import usersData from "./celebrities.json"
function App() {

  const [state,setstate] = useState(usersData)
  useEffect(()=>{
  })
  
  return (
    <div>
      {
        usersData && usersData.map((each)=>(<pre key={each.id}>{JSON.stringify(each)}</pre>))
      }      
    </div>
  );
}

export default App;

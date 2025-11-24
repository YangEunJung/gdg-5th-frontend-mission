import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IDCard from './components/IDCard';
import { useState, useEffect} from 'react'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      async function get() {
        try{  
          const url = 'https://reqres.in/api/users?page=1';
          const res = await fetch(url, {
            method: 'GET',
            headers: {
              'x-api-key': 'reqres-free-v1'
            }
          });

            if (res.ok){
              const content = await res.json();
              console.log("데이터 도착 확인:", content.data);
              setUsers(content.data);
            }
            else{
              throw Error("데이터를 가져오지 못했습니다.");
            }
        }
        catch(err){
          console.error(err);
        }
      }

      get();
  }, []);

  return(
    <div className="flex flex-col gap-8">
      {users.map((info) => (
        <IDCard key={info.id} data={info}/>
      ))}
    </div>
  )
}

export default App

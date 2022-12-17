import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { useCallback } from 'react';
function App() {
  const [isUserData, setUserData] = useState([]);
  const [a] = useState();

  const deletePost = useCallback(async (id) => {
    await axios.get(`http://localhost:8080/delete`, { params: { id: id } });
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const UserData = await axios.get(`http://localhost:8080/post`);
        setUserData(UserData?.data)
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchData()
  }, [a])


  console.log(isUserData)



  return (
    <div className="App">
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {isUserData?.map((val) => {
          return (
            <div style={{ margin: 10, background: '#f2f2f2' }} onClick={() => deletePost(val.id)}>
              <h1>{val.id}</h1>
              <p>{val.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default App

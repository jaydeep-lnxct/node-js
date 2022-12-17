import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAction } from './redux/reducer';

function App() {
  const [a] = useState();

  const dispatch = useDispatch()
  const userSelector = useSelector((state) => state?.value)
  const deletePost = useCallback(async (id) => {
    await axios.get(`http://localhost:8080/delete`, { params: { id: id } });
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const UserData = await axios.get(`http://localhost:8080/post`);
        dispatch(userAction(UserData?.data))
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchData()
  }, [a])

  return (
    <div className="App">
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {userSelector?.map((val) => {
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

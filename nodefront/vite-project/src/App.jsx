import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get('http://localhost:8080/post');
      setPost(data.data);
    }
    fetchData()
  }, [])

  console.log(post)

  return (
    <div className="App">
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* {post?.map((val) => {
          return (
            <div >
              <img src={val.thumbnailUrl} alt="New Image" />
              <h1>{val.title}</h1>
            </div>
          );
        })} */} 
      </div>
    </div>
  )
}

export default App

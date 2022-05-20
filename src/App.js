import React, {useEffect} from "react";
import './App.css';
import {useState} from "react";

// Zewnętrzna pseudo baza danych
const data = [
  {
    id: 1,
    title: "Wiadomość nr 1",
    body: "Zawartość wiadomości nr 1"
  },
  {
    id: 2,
    title: "Wiadomość nr 2",
    body: "Zawartość wiadomości nr 2"
  },
]

setInterval(()=> {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomość nr ${index}`,
    body: `Zawartość wiadomości nr ${index}`,
  })
}, 3000)

function App() {

  const [post, setPost] = useState([...data])

  const getData = () => {
    setPost([...data])
  }

  useEffect(()=> {
    setInterval(getData, 1000);
  }, [])

  return (
    <div className="App">
      {post.map(post => (
          <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
      ))}
    </div>
  );
}

export default App;

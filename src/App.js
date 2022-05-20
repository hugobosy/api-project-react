import './App.css';

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

setInterval(()=>{
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomość nr ${index}`,
    body: `Zawartość wiadomości nr ${index}`,
  })
}, 3000)

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;

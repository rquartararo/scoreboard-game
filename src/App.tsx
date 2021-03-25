import './App.css'

function App() {
  const axios = require('axios')

  const hitBackend = () => {
    axios.get('/ping').then((response: any) => {
      console.log(response.data)
    })
  }

  return (
    <div className="App">
      <h1>The Most Boring Game Ever</h1>
      <button onClick={hitBackend}>Send request</button>
    </div>
  )
}

export default App

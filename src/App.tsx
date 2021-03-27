import React, {useState, useEffect} from 'react'
import './App.scss'
import Grid from '@material-ui/core/Grid'
import Form from './components/form'
import Leaderboard from './components/leaderboard'

interface PlayerData {
  name: string
  score: number
}

const App = () => {
  const [players, setPlayers] = useState<PlayerData[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const axios = require('axios')

  // sends get request to set list of players to state when the page loads
  useEffect(() => {
    axios.get('/getplayers').then((response: any) => {
      setPlayers(response.data)
      setLoading(false)
    })
  },[axios, setPlayers]);

  return (
    <div id="app">
      <div className="app-container">
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <h1>The Most Boring Game Ever</h1>
        </Grid>
        <Grid item xs={6}>
          <Form players={players} setPlayers={setPlayers} />
        </Grid>
        <Grid item xs={6}>
          <Leaderboard players={players} loading={loading}/>
        </Grid>
      </Grid>
      </div>
    </div>
  )
}

export default App

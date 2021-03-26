import React, {useState, useEffect} from 'react'
import './App.scss'
import Grid from '@material-ui/core/Grid'
import Form from './components/form'
import Card from './components/card'

const App = () => {

  interface PlayerData {
    name: string
    score: number
  }

  const [players, setPlayers] = useState<PlayerData[]>([])
  const axios = require('axios')

  // semds get request to set list of players to state when the page loads
  useEffect(() => {
    axios.get('/getplayers').then((response: any) => {
      setPlayers(response.data)
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
          <div className="leaderboard">
            <div className="leaderboard-container">
            <h2>Leaderboard</h2>
            <div className="player-list">
              {/* iterates through list of players and renders a card component for each one */}
              {players.sort((a, b) => b.score - a.score).map((player: any, index) => {
                return <Card key={index} score={player.score} name={player.name} />
              })}
            </div>
            </div>
          </div>
        </Grid>
      </Grid>
      </div>
    </div>
  )
}

export default App

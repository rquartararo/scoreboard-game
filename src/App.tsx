import React, {useState, useEffect} from 'react'
import './App.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import { useFormik } from 'formik';

const App = () => {

  interface PlayerData {
    name: string
    score: number
  }

  const [players, setPlayers] = useState<PlayerData[]>([])
  const axios = require('axios')

  useEffect(() => {
    axios.get('/getplayers').then((response: any) => {
      setPlayers(response.data)
    })
  },[axios, setPlayers]);

  // formik makes post request to add player to database and adds new data onto state array
  const formik = useFormik({
    initialValues: {
      name: 'Enter Name',
    },
    onSubmit: (values: any) => {
      const { name } = values
      const score = Math.floor(Math.random() * 2001) - 1000
      axios.post('/addplayer', {
        name: name,
        score: score
      })
      .then((response: any) => {
        setPlayers(players.concat(response.data))
      })
      .catch((error: any) => error)
    },
  });

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>The Most Boring Game Ever</h1>
        </Grid>
        <Grid item xs={8}>
          <div className="form-container">
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="leaderboard-container">
            <h1>Leaderboard</h1>
            <div className="player-list">
              {players.sort((a, b) => b.score - a.score).map((player: any, index) => {
                return <li key={index} className="list-item">{player.name} {player.score}</li>
              })}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default App

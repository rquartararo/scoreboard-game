import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';

const Form = (props: any) => {
  const {players, setPlayers} = props
  const axios = require('axios')
  
  // formik makes post request to add player to database and adds new data onto state array
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: (values: any, actions: any) => {
      // makes post request containing player name and a random number between -1000 and 1000
      const { name } = values
      const score = Math.floor(Math.random() * 2001) - 1000
      axios.post('/addplayer', {
        name: name,
        score: score
      })
      .then((response: any) => {
        // adds new player to leaderboard and resets the formik form
        setPlayers(players.concat(response.data))
        actions.resetForm({ name: '' })
      })
      .catch((error: any) => error)
    },
  });

  return (
    <div className="form-container">
      <form className="form" onSubmit={formik.handleSubmit}>
        <TextField
        className="input"
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <Button className ="button" color="primary" variant="contained" fullWidth type="submit">
          Play Game
        </Button>
      </form>
    </div>
  )
}

export default Form

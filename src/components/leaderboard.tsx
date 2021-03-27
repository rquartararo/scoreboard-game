import React from 'react'
import Card from '../components/card'
import CircularProgress from '@material-ui/core/CircularProgress';

const Leaderboard = (props: any) => {
const {players, loading} = props

  return (
    <div className="leaderboard-container">
      <div className="leaderboard">
      <h2>Leaderboard</h2>
        <div className="player-list">
          {/* iterates through list of players and renders a card component for each one */}
          { !loading ? players.sort((a: any, b: any) => b.score - a.score).map((player: any, index: number) => {
            return <Card key={index} score={player.score} name={player.name} />
          }) : <CircularProgress /> }
        </div>
      </div>
    </div>
  )
}

export default Leaderboard

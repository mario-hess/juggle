import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MusicPlayer from './components/MusicPlayer/MusicPlayer.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <MusicPlayer />
  </React.StrictMode>
)

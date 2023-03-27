import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { colors } from './styles/theme'
import './index.css'

import MusicPlayer from './components/MusicPlayer/MusicPlayer.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider
      theme={{
        colors: colors,
      }}
    >
      <MusicPlayer />
    </ThemeProvider>
  </React.StrictMode>
)

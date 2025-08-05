import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-purple-900 to-black text-white p-8">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">synced.fm</h1>
        <p className="text-lg text-purple-300">
          Find concerts based on your Spotify tastes. ben kim is the pokemon showdown champion ! :3
        </p>
        <button className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-medium text-white transition">
          Log in with Spotify
        </button>
      </div>
    </div>
  );
}

export default App;


import React from 'react'
import Entry from './Entry'
import emojipedia from '../emojipedia'

// 1. Crea Entry component
// 2. Create props to replace hardcoded data
// 3a. Export/ Import the Emojipedia array
// 3b. Map through Emojipedia Array and render Entry components

function createEntry(emoji) {
  return (
    <Entry
      key={emoji.id}
      id={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  )
}

export default App

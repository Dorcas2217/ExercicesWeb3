import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import Footer from './Footer'
import CreateNew from './CreateNew'
import About from './About'
import AnecdoteList from './AnecdoteList'
import Anecdote from './Anecdote'

const Menu = () => {
  const padding = {
    padding: '5px',
    marginRight: '10px',
    textDecoration: 'none',
    color: '#333', 
  }
  return (
    <div>
      <Link style={padding} to="/"> anecdote </Link>
      <Link style={padding} to="/create"> create new</Link>
      <Link style={padding} to="/about">about</Link>
    </div>
  )
}

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))

    if(anecdote) { 
      setTimeout(() => {
        setNotification(`Création de l'anecdote ${anecdote.content} réussit :)`);
       }, 5000);
    }
  }


  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return (
    <Router> 
      <div>
        <h1>Software anecdotes</h1>
        <Menu />

        <Routes>
          <Route path="/" element = {<AnecdoteList anecdotes={anecdotes} notification = {notification} />} />
          <Route path="/create" element = {<CreateNew addNew={addNew} />}/>
          <Route path="/about" element = {  <About/>} />
          <Route path="/anecdote/:id" element = {  <Anecdote anecdotes={anecdotes}/>} />
        </Routes>
    
        <Footer />
      </div>
    </Router>
  )
}

export default App

import { useState } from 'react'
import { generateWorkout } from "./utils/functions"
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"

//pages
import Hero from "./pages/Hero"
import Generator from "./pages/Generator"
import Workout from "./pages/Workout"

function App() {
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element = {<Hero />} />
        <Route path="generate" element = {<Generator 
          poison={poison} 
          setPoison={setPoison} 
          muscles={muscles} 
          setMuscles={setMuscles} 
          goal={goal} 
          setGoal={setGoal} 
          updatedWorkout={updatedWorkout}
        />} />
        <Route path="workout" element = {workout && (
          <Workout workout={workout} />
        )} />
      </Route>
    )
  )

  function updatedWorkout() {
    if (muscles.length < 1) {
      return
    }
    let newWorkout = generateWorkout({ poison, muscles, goal })
    setWorkout(newWorkout)
    window.location.href = "#workout"
  }

  return (
    <main
      className='min-h-screen flex flex-col bg-gradient-to-r 
      from-gray-800 to-gray-950 text-white text-sm sm:text-base'
    >         
      <RouterProvider router={ router } />   
    </main>
  )
}

export default App

import React, {useState} from 'react'
import { Box } from '@mui/system'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

function Home() {
  const [exercises, setexercises] = useState([])
  const [bodyPart, setbodyPart] = useState('all')
  return (
    <Box>
        <HeroBanner />
        <SearchExercises
        setexercises={setexercises}
        bodyPart={bodyPart}
        setbodyPart={setbodyPart}
        />
        <Exercises
        setexercises={setexercises}
        bodyPart={bodyPart}
        exercises={exercises}
        />
    </Box>
  )
}

export default Home

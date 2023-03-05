import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exerciseOptions, fetchData, youtubeOptions} from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercise from '../components/SimilarExercise'

function ExcerciseDetail() {
  const [exerciseDetail, setexerciseDetail] = useState({})
  const [exerciseVideos, setexerciseVideos] = useState([])
  const [targetMuscleExercises, settargetMuscleExercises] = useState({})
  const [equipmentExercises, setequipmentExercises] = useState({})
  const {id} = useParams()

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setexerciseDetail(exerciseDetailData)

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions)
      setexerciseVideos(exerciseVideosData.contents)

      const targetMusleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
      settargetMuscleExercises(targetMusleExercisesData)

      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
      setequipmentExercises(equipmentExercisesData)

    }
    fetchExercisesData()
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercise targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExcerciseDetail
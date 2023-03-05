import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import bodypartImage from '../assets/icons/body-part.png'
import targetImage from '../assets/icons/target.png'
import equipmentImage from '../assets/icons/equipment.png'

function Detail({exerciseDetail}) {

    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail
    const extraDetail = [
      {
        icon: bodypartImage,
        name: bodyPart,
      },
      {
        icon: targetImage,
        name: target,
      },
      {
        icon: equipmentImage,
        name: equipment,
      },
  ]

  return (
    <Stack gap="60px" sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image"/>
        <Stack sx={{gap: {lg: '35px', xs: '20px'}}}>
          <Typography variant="h3">
            {name}
          </Typography>
          <Typography variant="h6">
            Exercises keep you strong. {name} is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
          </Typography>
          {extraDetail?.map((item, index)=>(
            <Stack key={index} direction="row" gap="24px" alignItems="center">
              <Button sx={{background: '#ff2db', borderRadius: '50%', width: '100px', height: '100px'}}>
                <img src={item.icon} alt={bodyPart} style={{width: '50px', height: '50px'}}/>
              </Button>
              <Typography textTransform="capitalize" variant="h5">
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
    </Stack>
  )
}

export default Detail

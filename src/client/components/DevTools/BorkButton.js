import React from 'react'
import { Button } from '@mui/material'
import { inProduction } from '../../util/common'

const BorkButton = () => {
  if (inProduction) return null

  const borkBork = undefined
  return (
    <Button variant="contained" color="secondary" onClick={() => borkBork()()}>
      {' '}
      Break the application{' '}
    </Button>
  )
}

export default BorkButton

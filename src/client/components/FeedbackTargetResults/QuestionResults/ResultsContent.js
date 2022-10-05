import React from 'react'
import { Box, Typography } from '@mui/material'

const ResultsContent = ({ chart, children, description }) => (
  <Box>
    {description && <Typography>{description}</Typography>}
    {chart}
    {children}
  </Box>
)

export default ResultsContent

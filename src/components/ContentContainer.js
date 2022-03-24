import { Box } from '@mui/system'
import React from 'react'

const ContentContainer = (props) => {
  return (
    <Box sx={{margin:'50px 0px 0px 0px'}}>
        {props.children}
    </Box>
  )
}

export default ContentContainer
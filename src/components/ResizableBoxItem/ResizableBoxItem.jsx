// Import React and the Resizable component
import React from 'react'
import { ResizableBox } from 'react-resizable'
import 'react-resizable/css/styles.css'
import { resizeBoxStyle } from './helpers'
import { Button } from '@chakra-ui/react'

const ResizableBoxItem = ({ name, width, height, handleModal }) => {
  return (
    <ResizableBox
      style={resizeBoxStyle}
      width={width}
      height={height}
      resizeHandles={['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw']}
      minConstraints={[0, 0]}
      maxConstraints={[1000, 1000]}
    >
      <Button size='sm' onClick={handleModal}>
        Add User
      </Button>
    </ResizableBox>
  )
}

export default ResizableBoxItem

// Import React and the Resizable component
import React from 'react'
import { ResizableBox } from 'react-resizable'
import 'react-resizable/css/styles.css'
import { resizeBoxStyle } from './helpers'

const ResizableBoxItem = ({ name, width, height }) => {
  return (
    <ResizableBox
      style={resizeBoxStyle}
      width={width}
      height={height}
      resizeHandles={['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw']}
      minConstraints={[0, 0]}
      maxConstraints={[1000, 1000]}
    >
      <div>{name}</div>
    </ResizableBox>
  )
}

export default ResizableBoxItem

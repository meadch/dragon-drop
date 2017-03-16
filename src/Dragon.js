import React from 'react';
import { DragSource } from 'react-dnd';

const ItemTypes = {
  DRAGON: 'dragon'
};

const dragonSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }
}

const Dragon = ({ connectDragSource, isDragging }) => {
  return connectDragSource(<img
      style={{width: '100%', height: '100%'}}
      src="http://www.clker.com/cliparts/5/N/4/N/o/D/red-dragon-hi.png" 
      alt="Dragon" 
      />)
}

export default DragSource(ItemTypes.DRAGON, dragonSource, collect)(Dragon)
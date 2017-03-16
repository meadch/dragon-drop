import React from 'react';
import Dragon from './Dragon';
import { DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './index.css';

const squareTarget = {
  drop(props, monitor) {
    props.updateDragonLocation();
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

const Square = ({ dark, hasDragon, connectDropTarget }) => {
  const fill = (dark) ? 'black' : 'beige';
  return connectDropTarget(
    <div className='square' style={{ background: fill, height: 100, width: 100 }}>
      { (hasDragon) ? <Dragon foo='bar'/> : null }
    </div>
  )
}


export default DropTarget('dragon', squareTarget, collect )(Square);
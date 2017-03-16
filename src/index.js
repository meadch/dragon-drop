import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, DragSource, DropTarget } from 'react-dnd';
import Square from './Square';
import HTML5Backend from 'react-dnd-html5-backend';
import './index.css';

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: [0,1]
    }
    
    this.grid = []

    for(let i = 0; i < props.gridsize; i ++){
      let row = [];
      for (let j = 0; j < props.gridsize; j ++){
        let rowType = i % 2
        let offset = rowType + (j % 2)
        row.push( offset % 2 === 0 );
      }
      this.grid.push(row);
    }

  }
  updateDragonLocaion(coordinates){
    const { row, col } = coordinates;
    this.setState({
      location: [row, col]
    });
  }
  render(){
    const {location} = this.state 
    const grid = this.grid.map((row, rowIdx) => {
      return (
        <div key={rowIdx} className='row'>
        { row.map((val, colIdx) => {
          return <Square 
                      key={colIdx} 
                      dark={val} 
                      hasDragon={ rowIdx === location[0] && colIdx === location[1]}
                      updateDragonLocation={ this.updateDragonLocaion.bind(this, { row: rowIdx, col: colIdx} ) }
                      />
        })}
        </div>
      )
    })
    return <div className='grid'>{grid}</div>
  }
}

const DraggableBoard = DragDropContext(HTML5Backend)(Board);

ReactDOM.render(
  <DraggableBoard gridsize={6}/>,
  document.getElementById('root')
);

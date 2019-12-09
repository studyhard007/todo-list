import React, {Component} from "react";
import "./index.scss";
import Todoitem from '../Todoitem'
import { AppState } from '../../App'
type TodolistProps = {
  listdata: AppState[];
  onDeletelist: (res: any) => any;
  onUpdatelist: (res: any) => any;
}

class Todolist extends Component<TodolistProps> {
  // constructor(props: any) {
  //   super(props);
  // }
  render() {
    const { listdata } = this.props
    return(
     <ul>
       {
         listdata.map((listdata,index) => {
          return (
          <Todoitem
          {...listdata}
          key={index}
          textId= {listdata.id}
          onDeletelist={this.props.onDeletelist}
          onUpdatelist={this.props.onUpdatelist}
          ></Todoitem>
          );
         })
       }
     </ul>
    )
  }
}

export default Todolist;
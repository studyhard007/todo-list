import React, {Component} from "react";
import "./App.scss";
import Todolist from './Components/Todolist';
import Todoadditem from './Components/Todoadditem'

export type AppState = {
  id: string;
  text: string;
};

interface AppItem {
  listdata: AppState[];
}

class App extends Component<AppItem> {
  state: AppItem = {
    listdata: [{
      id: '1',
      text: 'Study Typescript'
    }, {
      id: '2',
      text: 'Studyhard React'
    }]
  }
  // constructor(props: any) {
  //   super(props)
  //   }
  // }

  getId() {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
			var r = (Math.random() * 16) | 0,
				v = c === "x" ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		});
  }
  onDelete = (textId: string) => {
    const {listdata} = this.state;
    this.setState({listdata: listdata.filter(v => v.id !== textId)})
  }
  onUpdate = () => {
  
  }
  onaddTodolist(text: string) {
    let {listdata} = this.state
    const newItem: AppState = {
      id: this.getId(),
      text: text
    };
    listdata.push(newItem);
    this.setState({listdata: listdata})
  }
  render () {
    return(
      <div className='content'>
      <Todolist listdata={this.state.listdata} onDeletelist={this.onDelete} onUpdatelist={this.onUpdate}></Todolist>
      <Todoadditem addTodolist={this.onaddTodolist.bind(this)}></Todoadditem>
      </div>
    );
  }
}

export default App;
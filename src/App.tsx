import React, {Component} from "react";
import "./App.scss";
import Todolist from './Components/Todolist';
import Todoadditem from './Components/Todoadditem';
import Todosearch from './Components/Todosearch'

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
      text: 'Study React'
    }, {
      id: '3',
      text: 'Study Mobx'
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
  onUpdate = (res: {content: string, id: string}) => {
    console.log('on update', res);
    const { listdata } = this.state;
    // const index = listdata.findIndex(v => v.id == res.id);

    // 略繁琐
    // this.setState({
    //   listdata: [...listdata].map((item, i) => {
    //     if (i === index) {
    //       return {...listdata[index], text: res.content}
    //     } else {
    //       return item
    //     }
    //   })
    // })
    this.setState({
      listdata: listdata.map(item => {
        if (item.id === res.id) {
          return {...item, text: res.content}
        } else {
          return item
        }
      })
    })
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
      <Todosearch ></Todosearch>
      <Todolist listdata={this.state.listdata} onDeletelist={this.onDelete} handleOK={this.onUpdate.bind(this)}></Todolist>
      <Todoadditem addTodolist={this.onaddTodolist.bind(this)}></Todoadditem>
      </div>
    );
  }
}

export default App;
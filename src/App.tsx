import React, {Component} from "react";
import "./App.scss";
import TodoItem from "./Components/TodoItem";
import TodoInput from "./Components/TodoInput";

export type AppItemState = {
	id: string;
	text: string;
};

interface AppState {
	data: AppItemState[];
}
class App extends Component<AppState> {
	state: AppState = {
		data: [
			{
				id: "1",
				text: "demo"
			},
			{
				id: "2",
				text: "demo2"
			}
		]
	};
	// constructor(props: any) {
	//   super(props)
	// }
	getId() {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
			var r = (Math.random() * 16) | 0,
				v = c === "x" ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		});
	}

	onaddTodoList(text: string) {
    let {data} = this.state
		const newItem: AppItemState = {
			id: this.getId(),
			text: text
    };
    data.push(newItem)
    this.setState({ data: data })
	}

  onTaskDelete = (textId: string) => {
		const { data } = this.state;
		this.setState({data: data.filter(v => v.id !== textId)})
	}
	render() {
		return (
			<div className="content">
				<TodoItem data={this.state.data} handleClickDelete={this.onTaskDelete.bind(this)}></TodoItem>
				<TodoInput addTodoList={this.onaddTodoList.bind(this)}></TodoInput>
			</div>
		);
	}
}
 
export default App;

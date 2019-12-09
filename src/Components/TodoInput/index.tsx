import React, {Component} from "react";
import {Input, Button} from "antd";
// import {AppItemState} from "../../App";

type TodoInputProps = {
	data?: string;
	addTodoList: (item: any) => void;
};

type TodoInputState = {
	data: string;
};

class TodoInput extends Component<TodoInputProps, TodoInputState> {
	constructor(props: any) {
		super(props);
		this.state = {data: ""};
		this.getvalue = this.getvalue.bind(this);
		this.addTodoList = this.addTodoList.bind(this);
	}
	readonly state = {
	  data: ''
	}
	getvalue(event: any) {
		this.setState({
			data: event.target.value
		});
	}
	addTodoList() {
		const data = this.state.data;
		this.props.addTodoList(data);
	}
	render() {
		return (
			<div>
				<Input
					placeholder="请输入要添加的事件"
					value={this.state.data}
					onChange={this.getvalue}
				/>
				<Button type="primary" onClick={this.addTodoList}>
					添加
				</Button>
			</div>
		);
	}
}

export default TodoInput;

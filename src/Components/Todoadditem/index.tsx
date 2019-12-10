import React, {Component} from "react";
import "./index.scss";
import { Input, Button } from 'antd'

type TodoadditemProps = {
  data?: string;
  addTodolist: (item: any) => void;
}

type TodoadditemState = {
  data: string;
}

class Todoadditem extends Component<TodoadditemProps, TodoadditemState> {
  constructor(props: any) {
    super(props);
    this.state = {data: ""};
    this.getvalue = this.getvalue.bind(this);
    this.addTodolist = this.addTodolist.bind(this);
  }
  getvalue (event: any) {
   this.setState({
     data: event.target.value
   });
  }
   readonly state = {
     data: ''
   }
  addTodolist () {
    const data = this.state.data;
    if (data.trim().length <= 0) {
      alert('请输入代办事件...！');
    }
    else {
    this.props.addTodolist(data);
  }
  this.setState({
    data: ''
  });
  }

  render() {
    return (
      <div>
      <Input  placeholder='请输入代办事件...' value={this.state.data} onChange={this.getvalue}></Input>
      <Button type="primary" onClick={this.addTodolist}>添加</Button>
      </div>
    );
  }
}

export default Todoadditem;
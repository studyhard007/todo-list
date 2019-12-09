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
    this.props.addTodolist(data);
  }

  render() {
    return (
      <div>
      <Input onChange={this.getvalue}></Input>
      <Button type="primary" onClick={this.addTodolist}>添加</Button>
      </div>
    );
  }
}

export default Todoadditem;
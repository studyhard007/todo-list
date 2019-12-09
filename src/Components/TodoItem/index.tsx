import React ,{ Component } from 'react'
import { List, Button} from 'antd'
import { AppItemState } from '../../App';


type TodoItemProps = {
  data: AppItemState[];
  handleClickDelete: (res: any) => any
  textId:string;
}


class TodoItem extends Component<TodoItemProps> {
  constructor(props: any) {
    super(props)
    this.state = ''
    this.handleClickDelete = this.handleClickDelete.bind(this)
  }
  handleClickDelete () {
    this.props.handleClickDelete(this.props.textId)
    console.log(this.props.textId);
  }
  render() {
    const  { data }  = this.props;
    return(
    <div>
      <List
        bordered
        dataSource = { data }
        renderItem = {item => (
        <List.Item textId={item.id}>{item}<Button  type="danger" onClick={this.handleClickDelete}>删除</Button></List.Item>
        )}
      ></List>
    </div>
    )
  }
}

export default TodoItem;
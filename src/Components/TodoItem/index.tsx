import React, {Component} from "react";
import {Row, Col, Button, Modal, Input} from "antd";
import "./index.scss";

interface ItemProps {
	text: string;
	id: string;
	textId: string;
	onDeletelist: (res: any) => any;
	onUpdatelist: (res: { id: string, content: string}) => any;
}

interface ItemState {
	content: string;
	show: boolean;
}

class Todoitem extends Component<ItemProps,ItemState> {
	constructor(props:any) {
		super(props);
		this.state ={
			content: '',
			show: false
		}
		this.onDeletelist = this.onDeletelist.bind(this);
		this.getvalue = this.getvalue.bind(this);
		this.onUpdatelist = this.onUpdatelist.bind(this);
	}
	onDeletelist () {
		this.props.onDeletelist(this.props.textId);
	}
	onUpdatelist () {
		const content = this.state.content;
		const { id } = this.props;
		console.log(content);
		console.log(id);
		this.showModal();
		
		this.props.onUpdatelist({content, id});
	}

  showModal = () => {
    this.setState({
      show: true,
		});
		// this.props.onDeletelist(this.props.textId)
	};

	handleOK = (event: any) => {
		console.log(event);
    this.setState({
			show: false
		});
		// console.log(this.state.content);
	}

	handleCancel = (event: any) => {
		console.log(event);
		this.setState({
			show: false,
		});
		// console.log(this.state.content);
	}

	getvalue (event: any) {
    this.setState({
			content: event.target.value
		})
	}

	render() {
		const text = this.props.text;
		// const id = this.props.id;
		return (
			<li>
				<Row>
					<Col>{text}</Col>
					<Button type="primary" onClick={this.onUpdatelist}>修改</Button>
					<Modal
          title="请输入修改内容"
          visible={this.state.show}
          onOk={this.handleOK}
          onCancel={this.handleCancel}
        >
					<Input onChange={this.getvalue}></Input>
        </Modal>
					<Button type="danger" onClick={this.onDeletelist}>删除</Button>
				</Row>
			</li>
		);
	}
}

export default Todoitem;

import React, {Component} from "react";
import "./index.scss";
import { Input } from "antd";
const { Search } = Input;

// interface TodosearchState {
// 	searchText: string;
// }

interface TodosearchState {
	onSearchlist: any;
}

class Totosearch extends Component {
	constructor(props: any) {
		super(props);
    this.state = {
			searchText: ''
		};
	};

  getvalue (event: any) {
    this.setState({
			searchText: event.target.value
		})
	}

	// onSearchlist () {
	// 	this.props.onSearchlist(this.props.searchText);
	// }
	
	render() {
		return (
			<div>
				<Search
					placeholder="input search text"
					onChange = {this.getvalue}
					onSearch={value => console.log(value)}
					style={{width: 400}}
				/>
			</div>
		);
	}
}

export default Totosearch;
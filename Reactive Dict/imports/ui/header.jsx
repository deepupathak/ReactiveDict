import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

export default class Header extends Component {
	handleChange(ev){
		ev.preventDefault();
		const data = this.refs.dataValue.value;
		if(data == 'show'){
			this.props.dict.set('visible', 'show')
		}else if(data == 'hide'){
			this.props.dict.set('visible', 'hide')
		}
		console.log("Header dict =>", this.props.dict.get('visible'))
	}
	render() {
		return (
			<div className="container">
				<header>
					<h1>Example Reactive Dict</h1>
					<select className="form-control" ref="dataValue" onChange={this.handleChange.bind(this)}>
						<option value="">-- Select --</option>
						<option value="show">Show Extra Fields</option>
						<option value="hide">Hide Extra Fields</option>
					</select>
					{/*<div className="dropdown">
					<button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Dropdown &nbsp;
					<span className="caret"></span></button>
					<ul className="dropdown-menu">
					<li><a href="/">Page 1</a></li>
					<li><a href="/page2">Page 2</a></li>
					</ul>
					</div>*/}
				</header>
			</div>
		);
	}
}
/*export default createContainer((props) => {
	return {
	}
}, Header)*/
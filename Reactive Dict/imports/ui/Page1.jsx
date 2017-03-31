import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ShowModal from '/imports/ui/ShowModal.jsx';

class Page1 extends Component {
	render() {
		// console.log("Page1 Visibility **==>>", this.props.dict.get('visible'))
		return (
			<div className="container">
				<h1>Page 1</h1>
				{ 
					this.props.dict.get('visible') == 'show' ?
						<div className="form-group">
						<label htmlFor="Text">Extra Field</label>
						<input type="text" id="Text" className="form-control" />
						</div>
					: <div></div>
				}
				<p>Dict Value: {this.props.dict.get('visible')}</p>
				<button type="button" className="btn btn-default" data-toggle="modal" data-target="#myModal">Open Demo Modal</button>
				<ShowModal dict={this.props.dict} id={ Meteor.uuid() } />
			</div>
		);
	}
}
export default createContainer((props) => {
	console.log("Page 1 dict =>", props.dict.get('visible'))
	return {
		dict: props.dict
	}
}, Page1);
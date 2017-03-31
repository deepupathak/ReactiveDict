import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';


export default class ShowModal extends Component {
	render() {
		return (
			<div id="myModal" className="modal fade" role="dialog">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal">&times;</button>
							<h4 className="modal-title">Modal Header</h4>
						</div>
						<div className="modal-body">
							<p>Reactive Dict Value: {this.props.dict.get('visible')}</p>
							<p>Id by Props: {this.props.id}</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

/*export default createContainer((props) => {
	console.log("ShowModal Props =>", props)
	// console.log("ShowModal Visibility =>", props.dict.get('visible'))
	return {
	}
}, ShowModal);*/
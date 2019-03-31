import React from 'react';

class Listitem extends React.Component{
	//子组件调用父组件传过来的方法
	/*constructor(props){
		super(props);
		this.handldelete = this.handldelete.bind(this);

	}*/
	handledelete(){
		this.props.delete(this.props.index);
	}

	render(){
		const {content} = this.props;
		return (
			<div onClick={this.handledelete.bind(this)}>{this.props.content}</div>
		)
	}
}
export default Listitem;
import React, { Component } from 'react';
import Listitem from './Listitem';

class Test_list extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      inputvalue: ''
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handldelete = this.handldelete.bind(this);
    this.handleinputchange = this.handleinputchange.bind(this);
  }

  handleButtonClick(){
    this.setState({
      list: [...this.state.list,this.state.inputvalue],
      inputvalue: ''
    })
    
  }
  handleinputchange(e){
    this.setState({
      inputvalue: e.target.value
    })
  }
  

  handldelete(index){
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list:list
    })
  }

  gettest_item(){
    return (
      this.state.list.map((item,index)=>{
        return (
          <Listitem 
          delete={this.handldelete}
           key={index}
           content={item}
           index ={index}/>
          );
              
      })
    )
  }

//父组件通过属性的参数像子组件传参
//子组件通过props接受参数
  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputvalue} onChange={this.handleinputchange} />
          <button className='red-btn'  onClick={this.handleButtonClick}>add</button>
        </div>
        <ul>
          {this.gettest_item()}
        </ul>
          
      </div>
    );
  }
}

export default Test_list;

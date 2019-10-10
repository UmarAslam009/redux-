import React from 'react';
import {connect} from 'react-redux'
import {anotherName,addWish} from './actions/actions'
import './App.css';

function App(props) {
    const myWish=props.myWish.map(item=>{
      return <h2>{item}</h2>})

    return (
    <div>
    <button onClick={()=>{props.changeName()}}>change</button>
    <button onClick={()=>{props.addWish()}}>Add wish</button>
    <p>i will do this a my name is {props.name} </p>
    {myWish}
    </div>
    
    );
}

const mapDispatchToProps=(dispatch)=>{
  return{
    changeName:()=>{dispatch(anotherName())},
    addWish:()=>{dispatch(addWish())}
  }
}
const mapStateToStore=(state)=>{
  return {
    name:state.name,
    myWish:state.wish
  }


}
export default connect(mapStateToStore,mapDispatchToProps)(App);
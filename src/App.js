import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux';
import * as actionCreator from './store/actions/action'
//import { addArticle } from "./store/actions/actions2"
//import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputval: ""
    }
    this.selectval = this.selectval.bind(this);
    this.postData = this.postData.bind(this);
  };
  selectval = (event) => {
    this.setState({
      inputval: event.target.value
    });
  }

  postData() {
    const title = this.state.inputval;
    this.props.addArticle(title);
  }
  render() {
    console.log(this.state.inputval)

    return (
      <div>

        <div>{this.props.age}</div>
        <button onClick={this.props.onageUp} > Add </button>
        <input type="number" value={this.state.inputval} onChange={this.selectval} />
        <button onClick={this.props.onageDown}>Down</button>
        <button onClick={this.props.reSet}>reset</button>

        <button type="submit" className="btn btn-success btn-lg" onClick={this.postData}>
          SAVE
        </button>

      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,

  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    onageUp: () => dispatch(actionCreator.numberUp(1)),
    onageDown: () => dispatch(actionCreator.numberDown(1)),
    reSet: () => dispatch(actionCreator.resetNumber(0)),
    addArticle: (article) => dispatch(actionCreator.addArticle(article))

  }
}

// function matchDispatchToProps(dispatch) {
//   return bindActionCreators({ inputNumber: actionCreator.inputNumber }, dispatch)
// }

export default connect(mapStateToProps, mapDispatchToProps)(App)
import React, { Component, Fragment } from 'react';
import { thisExpression } from '@babel/types';

class MyName extends Component {
  /* defaultProps: props의 기본값 설정 */
  static defaultProps = {
    name: '은지혜'
  }


  /* class fields 사용한 state 설정법. 
  constructor도 사용되었다면 class fields가 더 늦게 설정됨. */
  state = {
    number: 0
  }
  /* 메소드 선언 방식 1 */
  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    })
  }
  /* ------------------
    메소드 선언 방식 2 */
  handleDecrease() {
    this.setState({
      number: this.state.number - 1
    })
  }
  constructor(props){
    super(props);
    /* constructor를 사용한 state 설정법. */
    this.state = {
      number: 1
    }
    // -------------------------------- */
    this.handleDecrease = this.handleDecrease.bind(this); // 화살표 함수 사용하지 않을 시, 함수가 버튼의 클릭이벤트로 전달되는 과정에서 this와 연결이 끊겨 undefined로 나타나기 때문에 props를 상속받아 바인딩 시켜줘야함.
  }
  // ------------------ */
  render() {
    return (
      <Fragment>
        <div>
          하이 내 이름은 <b>{this.props.name}</b>이다.
        </div>
        <div>지금은 {this.state.number}이야</div>
        <button type="button" onClick={this.handleDecrease}>빼기</button>
        <button type="button" onClick={this.handleIncrease}>더하기</button>
      </Fragment>
    )
  }
}

// 기본 props를 밖에서 선언하는 방법. 클래스 내부에서 설정한 것보다 나중에 설정되나봄
MyName.defaultProps = {
  name: '진짜 은지혜'
}

export default MyName;
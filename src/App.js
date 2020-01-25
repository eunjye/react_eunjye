import React, { Component, Fragment } from 'react';
import MyName from './MyName';
// import logo from './logo.svg';
// import './App.css';

function App() {
  /* const: 바뀌지 않는 값. let: 바뀌는 값 => 
  var는 scope가 함수 단위이지만, const와 let은 블록단위.
  ES6에서는 var를 사용X */
  const name = 'react',
    depth = 1,
    style = {
      backgroundColor: '#000',
      color: '#fff',
      fontSize: '24px',
      fontWeight: 'bold',
      padding: '5px'
    };
  return (
    /* 무조건 하나의 엘리먼트로 감싸져있어야한다. => 이를 해결하기위해 Fragment 도입 (v16.2) 
    Fragment를 사용하려면 Component와 추가적으로 Fragment도 import 필요 */
    <Fragment>
      <div style={style}>
        Hello {name}!<br></br>
        <MyName name="디해" />
      </div>
      {
        /* 삼항연산자 */
        1 + 3 === 3
          ? (<div>Bye</div>)
          : (<span>가 아님</span>)
      }
      {
        /* AND 연산자 */
        name === 'react' && (<strong>{name}</strong>)
      }
      {
        (()=>{ /* 화살표 함수(ES6): this, arguments, super 개념이 없음 */
          /* if, switch는 IIFE 내부에서 사용. 복잡한 조건은 웬만하면 JSX 밖에서 작성하자 */
          if (depth === 1) return (<h1>depth {depth}</h1>);
          if (depth === 2) return (<h2>depth {depth}</h2>);
        })()
      }
      
    </Fragment>
  );
}


/* 작성한 컴포넌트를 다른 곳에서 불러와서 사용할 수 있도록 내보내줌 */
export default App;

import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// 웹사이트 화면 출력
class App extends Component{
  render() {
  return (
    <div className="gray-background">
      <img src="logo" alt="logo" />
      <h2>Let's develop management system!</h2>
    </div>
  );
}
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Content from './components/Content';

function App() {
  window.onscroll = function() {myFunction()};

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  const toggleDir = () => {
    const dir = document.querySelector('.bottom .directory');

    if (dir.style.display == '' || dir.style.display == 'none') {
      dir.style.display = 'block';
    } else {
      dir.style.display = 'none';
    }
  }

  return (
    <div className="App">
        <div className="Header">
          <nav className="navbar fixed-top justify-content-between">
              <a className="navbar-brand"><img src="https://media.giphy.com/media/hXOZLNfrMwQhEyAzdT/giphy.gif"/></a>
              <form className="form-inline">
                <img className="mr-sm-2" src="https://icon-library.net/images/github-icon-png/github-icon-png-29.jpg"/>
              </form>
              <div class="progress-container">
                <div class="progress-bar" id="myBar"></div>
              </div> 
          </nav>
          
        </div>
        <div className="banner">
            <h1>ALGORITHMS</h1>
            <h1>ON THE GO</h1>
            <div className="right">
              <div className="directory">
                <ul>
                  <li><a href="#">FizzBuzz</a></li>
                  <li><a href="#">Palindromes</a></li>
                  <li><a href="#">Steps</a></li>
                  <li><a href="#">Anagrams</a></li>
                  <li><a href="#">Fibonacci</a></li>
                </ul>
              </div>
            </div>
            <div className="bottom">
              <h4>The largest collection of the most popular algorithms</h4>
              <p>Heres 5 to get you going</p>
              <button onClick={toggleDir} className="btn btn-primary">Toggle directory</button>
              <div className="directory responsive">
                <ul>
                  <li><a href="#">FizzBuzz</a></li>
                  <li><a href="#">Palindromes</a></li>
                  <li><a href="#">Steps</a></li>
                  <li><a href="#">Anagrams</a></li>
                  <li><a href="#">Fibonacci</a></li>
                </ul>
              </div>
            </div>
        </div>
        <br/>
        <img className="arrow-down" src="https://doc109.co.nz/wp-content/uploads/2014/03/arrow-down-gif.gif"/>
        <br/>
        <Content/>
        <br/>
      </div>
  );
}

export default App;

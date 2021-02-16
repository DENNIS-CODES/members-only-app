import './App.css';
import './index.css';
import SigninDisplay from './display/signindisplay';
import RegisterDisplay from './display/RegisterDisplay';
function App() {
  return (
    <div className="App">
      <h1>Members only</h1>
      <div className="grid-container"></div>
      <header className="App-header">
        <div className="container-fluid">
          <div className="nav-bar">
            <ul className="navbar-right navbar">
             <a href = "/login-in">
               <h2>sign in</h2>
               </a>
               <a href = "/log-out">
                 <h2>Sign Out</h2>
                 </a> 
            </ul>
        </div>
        </div>
      </header>
      <div className="content">
      <Route path= "/register"  component={RegisterDisplay}></Route>
      <Route path= "/signin"  component={SigninDisplay}></Route>
      </div>
      <footer className="footer">All right reserved</footer>
    </div>
  );
}

export default App;

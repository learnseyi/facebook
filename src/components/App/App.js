import NavigationBar from '../Navigation/NavigationBar';
import Posts from '../Post/Posts';
import './App.css';

function App() {
  return (
    <div className="App">
    <NavigationBar/>
    <div className='post'>
    <Posts/>
    </div>
    </div>
  );
}

export default App;

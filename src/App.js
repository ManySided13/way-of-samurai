import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer.jsx'
import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div className="wrapper">
    	<Header />
    	<Sidebar />
    	<div className="wrapper-content">
    		<Main />
    	</div>    	
    	<Footer />
    </div>
  );
}

export default App;

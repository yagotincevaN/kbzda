import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Nav";
import Profile from "./components/Profile";

function App() {
    return (
        <div className="site-wrapper">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;

import './App.css';
import Navbar from "./components/Nav"
import Footer from "./components/Footer"
function App() {
    return(
        <div>
            <meta name="Little Lemon" content="A Bolivian restaurant"/>
            <meta name="og:title" content="Little Lemon"/>
            <meta name="og:description" content="A place to eat top Bolivian Food"/>
            <Navbar/>
            <Footer/>
        </div>

    )
}

export default App;

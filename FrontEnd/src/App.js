import SideBar from './Components/SideBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/HomePage/Home';
import Boutique from './Components/Article/Boutique'
import User from './Components/Users/user'
import Fournisseur from './Components/Fournisseur/Fournisseur'
import Commande from './Components/Commande/Commande'
import Feedback from './Components/FeedBack/feedback'
import Historique from './Components/Historique/historique'
import Message from './Components/Message/message'
import NavBar from './Components/Navbar';

function App() {
  return (
      <Router>
        <div className="App">
        <NavBar />
            <div className="d-flex align-items-stretch">
            <SideBar />
              <div className="page-holder bg-gray-100">
                <Route exact path="/" component={Home} />
                <Route exact path="/boutique" component = {Boutique} />
                <Route exact path="/user" component={User} />
                <Route exact path="/fournisseur" component={Fournisseur} />
                <Route exact path="/commande" component={Commande} />
                <Route exact path="/feedback" component={Feedback} />
                <Route exact path="/historique" component={Historique} />
                <Route exact path="/message" component={Message} />
              </div>
            </div>
        </div>
      </Router>
  );
}

export default App;

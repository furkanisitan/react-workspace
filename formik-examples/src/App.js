import {Link, Route, Switch} from 'react-router-dom';
import SemanticRegisterForm from './components/User/SemanticRegisterForm';
import './App.css';

function App() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">SemanticRegisterForm</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path={['/', '/semantic-register-form']} component={SemanticRegisterForm}/>
            </Switch>
        </div>
    );
}

export default App;

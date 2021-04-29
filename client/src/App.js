import './App.css';
import Layout from './layouts/Layout';
import { Switch, Route } from 'react-router-dom'
import {useState} from 'react'
import SignIn from './screens/SignIn';
import { loginUser } from './services/auth';




function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleSignIn = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
  }
  return (
    <div className="App">
      <Layout >
        <Switch>
          <Route path= '/SignIn'>
            <SignIn
              handleSignIn={handleSignIn}
            />
          </Route>
        </Switch>

      </Layout>
    </div>
  );
}

export default App;

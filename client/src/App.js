import './App.css';
import Layout from './layouts/Layout';
import { useHistory,Switch, Route } from 'react-router-dom'
import {useState} from 'react'
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import { loginUser, registerUser } from './services/auth';
// import axios from 'axios'




function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // const history = useHistory()

  const handleSignIn = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    // history.push('/')

  }

  const handleSignUp = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    // history.push('/')
  }

  return (
    <div className="App">
      <Layout >
        <Switch>
          
          <Route path= '/signIn'>
            <SignIn
              handleSignIn={handleSignIn}
            />
          </Route>

          <Route path= '/signUp'> 
          <SignUp
              handleSignUp={handleSignUp}
            />
          </Route> 

        </Switch>

      </Layout>
    </div>
  );
}

export default App;

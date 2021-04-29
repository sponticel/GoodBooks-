import './App.css';
import Layout from './layouts/Layout';
import { useHistory,Switch, Route } from 'react-router-dom'
import {useState, useEffect} from 'react'
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import { loginUser, registerUser, verifyUser } from './services/auth';





function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify()
  }, [])

  const handleSignIn = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/')

  }

  const handleSignUp = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/')
  }

  return (
    <div className="App">
      <Layout currentUser={currentUser}>
        <Switch>
          
          <Route path= '/SignIn'>
            <SignIn
              handleSignIn={handleSignIn}
            />
          </Route>

          <Route path= '/SignUp'> 
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

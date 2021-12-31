

import TopBar from './components/topbar/TopBar'
import Account from './pages/account/Account'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
    Link 
} from 'react-router-dom'


function App() {
    const user = false;
    return (
			<Router>
				<TopBar />
				<Routes>
					<Route index element={<Home />} />

					<Route path="register" element={user ? <Home /> : <Register />} />
					<Route path="login" element={user ? <Home /> : <Login />} />
					<Route path="write" element={user ?<Write />: <Login />} />
					<Route path="account" element={user ? <Account /> : <Login />} />
					<Route path="post/:postId" element={<Single />} />
				</Routes>
			</Router>
		);
}

export default App


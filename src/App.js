import './App.css'
import styles from './index.module.css'

import Header from "./components/Header//Header"
import Nav from "./components/Nav/Nav"
import Profile from "./components/Profile/Profile"
import Messages from './components/Profile/Messages/Messages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
	return (
		<BrowserRouter>
			<div className={styles.page}>

				<Header/>

				<Nav/>

				<div className={styles.grid}>
					<Routes>
						<Route path="/profile" element={<Profile/>}/>
						<Route path="/messages" element={<Messages/>}/>
					</Routes>
				</div>
				
			</div>
		</BrowserRouter>
	)
}

export default App;
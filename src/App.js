import './App.css'
import styles from './index.module.css'

import Header from "./components/Header//Header"
import Nav from "./components/Nav/Nav"
import Profile from "./components/Profile/Profile"
import Messages from './components/Profile/Messages/Messages'
import { Route, Routes } from 'react-router-dom'

const App = (props) => {
	return (
		<div className={styles.page}>

			<Header/>

			<Nav state={props.state.nav}/>

			<div className={styles.grid}>
				<Routes>
					<Route path="" element={<Profile state={props.state.profile}/>}/>
					<Route path="/profile/*" element={<Profile state={props.state.profile}/>}/>
					<Route path="/messages/*" element={<Messages state={props.state.messages}/>}/>
				</Routes>
			</div>
			
		</div>
	)
} 

export default App;
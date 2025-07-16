import React, {useState} from 'react'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import { Route, Routes } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'

const App = () => {

	return (
		<div>
			<Routes>
				<Route
					path='/'
					element={<ContactScreen/>}
				/>
				<Route 
					path='/messages' 
					element={<ChatScreen/>} 
				/>
				
			</Routes>

		</div>
	)
}






export default App


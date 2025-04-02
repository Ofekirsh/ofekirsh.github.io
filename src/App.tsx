import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './router/routes'
import Navbar from './components/Navbar'

function App() {

  return (
		<BrowserRouter>
			<Navbar />
			<main>
				<AppRoutes />
			</main>
		</BrowserRouter>
  )
}

export default App

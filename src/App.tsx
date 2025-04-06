import { HashRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './router/routes'
import Navbar from './components/Navbar'

function App() {

  return (
		<HashRouter>
			<Navbar />
			<main>
				<AppRoutes />
			</main>
		</HashRouter>
  )
}

export default App

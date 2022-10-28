import { Footer } from './components/Footer'
import { Form } from './components/Form'
import { Header } from './components/Header'
import './styles/main.css'

function App() {
	return (
		<>
			<Header />
			<main className="mt-8 flex items-start justify-center px-24 text-text">
				<div className="max-w-screen-2xl w-[100%]">
               <Form />
				</div>
			</main>
         <Footer />
		</>
	)
}

export default App

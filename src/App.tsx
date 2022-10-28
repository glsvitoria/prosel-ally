import { Footer } from './components/Footer'
import { Form } from './components/Form/Form'
import { Header } from './components/Header'
import './styles/main.css'

function App() {
	return (
		<>
			<Header />
			<main className="mt-8 flex items-start justify-center px-24 text-text">
				<div className="max-w-screen-2xl w-[100%]">
					<h2 className='text-2xl mb-8'>Complete your profile and choose your destinations</h2>

               <Form />
				</div>
			</main>
         <Footer />
		</>
	)
}

export default App

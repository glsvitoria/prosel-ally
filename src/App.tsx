import { Footer } from './components/Footer'
import { Form } from './components/Form'
import { Header } from './components/Header'
import './styles/main.css'

function App() {
	return (
		<>
			<Header />
			<main className="pt-8 pb-8 flex items-start justify-center laptop:px-24 tablet:px-12 px-6 text-text min-h-[80vh] max-w-7xl mx-auto">
				<div className="max-w-screen-2xl w-[100%]">
               <Form />
				</div>
			</main>
         <Footer />
		</>
	)
}

export default App

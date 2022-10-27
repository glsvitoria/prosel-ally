import { Form } from './Form/Form'
import './styles/main.css'

function App() {
	return (
		<>
			<header className="h-[10vh] flex items-start justify-center text-3xl bg-header text-white font-font px-24">
				<div className="max-w-screen-2xl w-full h-full flex items-center">
					<h1>
						Welcome to Interest
						<span className="text-yellow text-3xl">.</span>
						Destinations
					</h1>
				</div>
			</header>
			<main className="mt-8 flex items-start justify-center px-24 text-text">
				<div className="max-w-screen-2xl w-[100%]">
					<h2 className='text-2xl mb-8'>Complete your profile and choose your destination</h2>

               <Form />
				</div>
			</main>
		</>
	)
}

export default App

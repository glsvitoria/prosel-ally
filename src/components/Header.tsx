import { HandWaving } from 'phosphor-react'

export function Header() {
	return (
		<header className="h-[10vh] flex items-start justify-center bg-header text-white font-font px-8">
			<div className="max-w-screen-2xl w-full h-full flex items-center justify-center text-center">
				<HandWaving size={48} className="mr-4 tablet:block hidden" />
				<h1 className='tablet:text-3xl text-lg'>
					Welcome to Interest
					<span className="text-yellow text-3xl">.</span>
					Destinations
				</h1>
			</div>
		</header>
	)
}

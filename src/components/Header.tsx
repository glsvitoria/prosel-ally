import { HandWaving } from 'phosphor-react'

export function Header() {
	return (
		<header className="h-[10vh] flex items-start justify-center text-3xl bg-header text-white font-font px-24">
			<div className="max-w-screen-2xl w-full h-full flex items-center">
				<HandWaving size={36} className="mr-4" />
				<h1>
					Welcome to Interest
					<span className="text-yellow text-3xl">.</span>
					Destinations
				</h1>
			</div>
		</header>
	)
}

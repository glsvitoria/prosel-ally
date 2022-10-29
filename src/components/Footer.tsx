import { Copyright } from 'phosphor-react'

export function Footer() {
	return (
		<footer className="flex flex-col items-center justify-center h-[10vh] tablet:text-lg text-sm bg-header text-white">
			<p className="flex items-center">
				<Copyright size={20} className="mr-2" /> Copyright 2022 Interest
				Destinations
			</p>
			<p>All rights reserved</p>
		</footer>
	)
}

import { Dispatch, SetStateAction } from 'react'

import { AirplaneTilt, X } from 'phosphor-react'

import { IDestination } from "./FormDestination"

interface ChosenDestinationsProps {
   value: IDestination[]
   setValue: Dispatch<SetStateAction<IDestination[]>>
}

export function ChosenDestinations({ value, setValue }: ChosenDestinationsProps) {
   function removeDestiny(city: string) {
		const destinationsFiltered = value.filter(
			(destination) => destination.city != city
		)

		setValue(destinationsFiltered)
	}
   
	return (
		<>
			{value.length > 0 && (
				<div className="w-full overflow-y-auto max-h-56 col-span-2 row-span-2 -mt-8">
					<h2 className="text-2xl mb-2 flex items-center">
						<AirplaneTilt size={24} className="mr-2" />
						Chosen destinations
					</h2>
					<ul className="flex flex-col items-start justify-center w-[60%]">
						{value.map((destination) => (
							<li
								key={destination.city}
								className="flex items-center justify-start gap-4 bg-header text-white p-6 py-2 rounded-lg w-full mt-2"
							>
								<p>{destination.country}</p>
								<p className="overflow-hidden">{destination.city}</p>
								<button
									type="button"
									className="ml-auto"
									onClick={() => removeDestiny(destination.city)}
								>
									<X
										size={20}
										color="#ebbcbc"
										weight="bold"
										className="hover:brightness-75 duration-200"
									/>
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	)
}

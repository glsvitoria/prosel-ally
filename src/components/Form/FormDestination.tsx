import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import api from '../../api/api'
import { Select } from './Select'
import { Plus, AirplaneTilt, X } from 'phosphor-react'

interface ICountry {
	code: string
	name: string
	name_ptbr: string
}

interface ICity {
	id: number
	code: string
	name: string
	country_code: string
	created_at: string
	updated_at: string
	name_ptbr: string
	lat: string
	log: string
	url1: null | string
	url2: null | string
}

export interface IDestination {
	country: string
	city: string
}

interface FormDestinationProps {
	value: IDestination[]
	setValue: Dispatch<SetStateAction<IDestination[]>>
}

export function FormDestination({ value, setValue }: FormDestinationProps) {
	const [countries, setCountries] = useState<ICountry[]>([])
	const [cities, setCities] = useState<ICity[]>([])

	const [loading, setLoading] = useState(false)
	const [loadingCity, setLoadingCity] = useState(true)

	useEffect(() => {
		setLoading(true)
		api.get<ICountry[]>('/country').then((response) => {
			const countriesSort = response.data.sort((a, b) =>
				a.name_ptbr.toLowerCase() > b.name_ptbr.toLowerCase()
					? 1
					: b.name_ptbr.toLowerCase() > a.name_ptbr.toLowerCase()
					? -1
					: 0
			)
			setCountries(response.data)
		})
		setLoading(false)
	})

	async function handleCountryToChooseCity(event: any) {
		setLoadingCity(true)
		await api.get<ICity[]>('/city').then((response) => {
			const citiesFromThisCountry = response.data.filter(
				(opt: ICity) => opt.country_code === event.target.value
			)
			setCities(citiesFromThisCountry)
			setCountrySelected(event.target.value)
		})
		setLoadingCity(false)
	}
	const [countrySelected, setCountrySelected] = useState('')
	const [citySelected, setCitySelected] = useState('')

	function handleAddDestination() {
		if (citySelected && countrySelected) {
			const isDuplicate = value.find((a) => a.city == citySelected)

			if (!isDuplicate) {
				const newDestination: IDestination = {
					country: countrySelected,
					city: citySelected,
				}
				setValue([...value, newDestination])
				console.log(value)
			}
		}
	}

	function removeDestiny(city: string) {
		const destinationsFiltered = value.filter(
			(destination) => destination.city != city
		)

		setValue(destinationsFiltered)
	}

	return (
		<div className="grid grid-cols-2 gap-8 grid-rows-4">
			<Select
				name="country"
				label="Country"
				onChange={handleCountryToChooseCity}
				disabled={loading}
			>
				<option
					key="default"
					disabled
					value="DEFAULT"
					className="!max-w-[100%]"
				>
					Choose a country
				</option>
				{countries.map((country) => (
					<option
						key={country.code}
						value={country.code}
						className="!max-w-[100%]"
					>
						{country.name_ptbr}
					</option>
				))}
			</Select>
			<Select
				name="city"
				label="City"
				onChange={(event: any) => {
					setCitySelected(event.target.value)
				}}
				disabled={loadingCity}
			>
				{cities.length == 0 ? (
					<option disabled value="DEFAULT">
						No city found
					</option>
				) : (
					<>
						<option value="null" className="max-w-[100%]">
							Choose a city
						</option>
						{cities.map((city) => (
							<option
								key={city.id}
								value={city.name_ptbr ? city.name_ptbr : city.name}
								className="max-w-[100%]"
							>
								{city.name_ptbr ? city.name_ptbr : city.name}
							</option>
						))}
					</>
				)}
			</Select>

			<button
				type="button"
				className="bg-white text-button text-lg font-bold rounded px-8 py-1 hover:bg-button hover:text-white border-2 border-button duration-200 mr-auto hover:cursor-pointer placeholder:text-button col-span-2 max-h-12 flex items-center"
				onClick={handleAddDestination}
			>
				<Plus size={24} className="mr-6" />
				Add destiny
			</button>

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
		</div>
	)
}

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import api from '../../api/api'
import { Select } from './Select'
import { Plus } from 'phosphor-react'
import { ChosenDestinations } from './ChosenDestinations'

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
			}
		}
	}

	return (
		<div className="grid grid-cols-2 gap-8 grid-rows-4">
			<Select
				name="country"
				label="Country"
            placeholder="Choose a country"
				onChange={handleCountryToChooseCity}
				disabled={loading}
			>
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
            placeholder="Choose a city"
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

			<ChosenDestinations value={value} setValue={setValue} />
		</div>
	)
}

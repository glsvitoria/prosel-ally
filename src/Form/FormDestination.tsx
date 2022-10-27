import { useEffect, useState } from 'react'
import api from '../api/api'
import { Select } from './Select'

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

interface IDestination {
   country: string
   city: string
}

export function FormDestination() {
	const [countries, setCountries] = useState<ICountry[]>([])
	const [cities, setCities] = useState<ICity[]>([])

   const [loading, setLoading] = useState(false)
   const [loadingCity, setLoadingCity] = useState(true)

	useEffect(() => {
      setLoading(true)
		api.get<ICountry[]>('/country').then((response) =>
			setCountries(response.data)
		)
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

	const [destionationsSelected, setDestionationsSelected] = useState<IDestination[]>([])

   function handleAddDestination() {
      if(citySelected && countrySelected){
         const newDestination:IDestination = {
            country: countrySelected,
            city: citySelected
         }
         setDestionationsSelected([...destionationsSelected, newDestination])
      }
   }

	return (
		<div className="flex flex-col items-center justify-start gap-8">
			<Select
				name="country"
				label="País"
				onChange={handleCountryToChooseCity}
            disabled={loading}
			>
				<option key="default" disabled value="DEFAULT">
					Escolha um país
				</option>
				{countries.map((country) => (
					<option key={country.code} value={country.code}>
						{country.name_ptbr}
					</option>
				))}
			</Select>
			<Select name="city" label="City" onChange={(event: any) => {
            setCitySelected(event.target.value)
         }} disabled={loadingCity}>
				{cities.length == 0 ? (
					<option disabled value="DEFAULT">
						Nenhuma cidade encontrada
					</option>
				) : (
               <>
               <option value="null">Escolha uma cidade</option>
					{cities.map((city) => (
						<option key={city.id} value={city.name_ptbr ? city.name_ptbr : city.name}>
							{city.name_ptbr ? city.name_ptbr : city.name}
						</option>
					))}
               </>
               
				)}
			</Select>

			<button className="bg-white text-button text-lg font-bold rounded px-8 py-1 hover:bg-button hover:text-white border-2 border-button duration-200 mr-auto" onClick={handleAddDestination}>
				Adicionar destino
			</button>

         {destionationsSelected.length > 0 && <ul className='flex flex-col items-start justify-center w-full bg-header text-white p-4 rounded-lg'>
            <h2 className='text-xl mb-4'>Destinos definidos</h2>
            {destionationsSelected.map(destination => (
               <li key={destination.city} className="flex items-center justify-start gap-4">
                  <p>{destination.country}</p>
                  <p>{destination.city}</p>
               </li>
            ))}
         </ul>}
		</div>
	)
}

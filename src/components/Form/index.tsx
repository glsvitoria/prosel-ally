import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FormDestination, IDestination } from './FormDestination'
import { Input } from './Input'
import { SentButton } from './SentButton'

import db from '../../api/db'

export function Form() {
   const navigate = useNavigate()

	const [name, setName] = useState('')
	const [nameError, setNameError] = useState('')

	const [email, setEmail] = useState('')
	const [emailError, setEmailError] = useState('')

	const [phone, setPhone] = useState('')
	const [phoneError, setPhoneError] = useState('')

	const [cpf, setCpf] = useState('')
	const [cpfError, setCpfError] = useState('')

	const [loading, setLoading] = useState(false)

	const [destionationsSelected, setDestionationsSelected] = useState<IDestination[]>([])

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		if (!name) {
			setNameError('The name is required')
		}

		if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) {
			setEmailError('E-mail invalid')
		}
		if (!email) {
			setEmailError('The e-mail is required')
		}

		if (!/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/.test(phone)) {
			setPhoneError('Phone invalid')
		}
		if (!phone) {
			setPhoneError('The phone is required')
		}

		if (!/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/.test(cpf)) {
			setCpfError('CPF invalid')
		}
		if (!cpf) {
			setCpfError('The CPF is required')
		}

		if (!nameError && !emailError && !phoneError && !cpfError && destionationsSelected.length > 0){
			setLoading(true)
			await db
				.post('/destination', {
					name,
					email,
					phone,
					cpf,
					destinations: destionationsSelected,
				})
				.then((response) => console.log(response))
			setLoading(false)
         location.reload()
		}
	}

	return (
		<>
			<h2 className="tablet:text-2xl text-xl mb-8 text-center tablet:text-left">
				Complete your profile and choose your destinations
			</h2>
			<form name="destination" className="tablet:grid tablet:grid-cols-2 flex flex-col" onSubmit={onSubmit}>
				<div className="flex flex-col w-[100%] gap-8">
					<Input
						id="name"
						label="Name"
						type="text"
						error={nameError}
						onChange={(event) => {
							setName(event.target.value)
							setNameError('')
						}}
					/>
					<Input
						id="email"
						label="E-mail"
						type="text"
						error={emailError}
						onChange={(event) => {
							setEmail(event.target.value)
							setEmailError('')
						}}
					/>
					<Input
						id="phone"
						label="Phone (DDD + number)"
						type="text"
						error={phoneError}
						onChange={(event) => {
							setPhone(event.target.value)
							setPhoneError('')
						}}
					/>
					<Input
						id="cpf"
						label="CPF"
						type="text"
						error={cpfError}
						onChange={(event) => {
							setCpf(event.target.value)
							setCpfError('')
						}}
					/>
				</div>

				<FormDestination
					value={destionationsSelected}
					setValue={setDestionationsSelected}
				/>

				<SentButton loading={loading} />
			</form>
		</>
	)
}

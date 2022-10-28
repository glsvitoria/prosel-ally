import { Input } from './Input'

import { FormDestination, IDestination } from './FormDestination'
import { FormEvent, useState } from 'react'
import { CheckCircle } from 'phosphor-react'
import db from '../../api/db'

export function Form() {
	const [name, setName] = useState('')
	const [nameError, setNameError] = useState('')

	const [email, setEmail] = useState('')
	const [emailError, setEmailError] = useState('')

	const [phone, setPhone] = useState('')
	const [phoneError, setPhoneError] = useState('')

	const [cpf, setCpf] = useState('')
	const [cpfError, setCpfError] = useState('')

	const [destionationsSelected, setDestionationsSelected] = useState<
		IDestination[]
	>([])

	function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		if (!name) {
			setNameError('The name is required')
		}

		if (!email) {
			setEmailError('The e-mail is required')
		}
		if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) {
			setEmailError('E-mail invalid')
		}

		if (!phone) {
			setPhoneError('The phone is required')
		}
		if (
			!/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/.test(phone)
		) {
			setPhoneError('Phone invalid')
		}

		if (!cpf) {
			setCpfError('The cpf is required')
		}
		if (
			!/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/.test(
				cpf
			)
		) {
			setCpfError('CPF invalid')
		}

		if (
			!nameError &&
			!emailError &&
			!phoneError &&
			!cpfError &&
			destionationsSelected.length > 0
		) {
			db.post('/destination', {
				name,
				email,
				phone,
				cpf,
				destinations: destionationsSelected,
			}).then((response) => console.log(response))
		}
	}

	return (
		<form className="grid grid-cols-2" onSubmit={onSubmit}>
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

			<button
				className="bg-button text-white text-2xl font-bold rounded px-16 py-2 hover:bg-white hover:text-button border-2 border-button duration-200 hover:cursor-pointer flex items-center justify-center col-span-2 w-[25%] mx-auto mt-8 mb-20"
				type="submit"
			>
				<CheckCircle size={32} className="mr-4" />
				Sent
			</button>
		</form>
	)
}

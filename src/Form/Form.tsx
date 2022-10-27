import { useForm, SubmitHandler } from 'react-hook-form'
import { Input } from './Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { FormDestination } from './FormDestination'

type CreateDestinyFormData = {
	name: string
	email: string
	phone: string
	cpf: string
}

const createDestinyFormSchema = yup.object().shape({
	name: yup.string().required('Nome obrigatório'),
	email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
	phone: yup
		.string()
		.required('Telefone obrigatório')
		.min(11, 'O telefone precisa conter 11 dígitos'),
	cpf: yup
		.string()
		.required('CPF obrigatório')
		.min(11, 'O CPF precisa conter 11 dígitos'),
})

export function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(createDestinyFormSchema),
	})

	const handleCreateDestiny: SubmitHandler<CreateDestinyFormData> = async ({
		name,
		email,
		phone,
		cpf,
	}) => {
		await new Promise((resolve) => setTimeout(resolve, 2000))
	}

	return (
		<form
			className="grid grid-cols-2 relative"
			onSubmit={handleSubmit(handleCreateDestiny)}
		>
			<div className="flex flex-col w-[100%] gap-8">
				<Input
               id="name"
					label="Name"
					type="text"
					error={errors.name}
					{...register('name')}
				/>
				<Input
					id="email"
					label="E-mail"
					type="text"
					error={errors.email}
					{...register('email')}
				/>
				<Input
				ide="phone"
					label="Telefone"
					type="text"
					error={errors.phone}
					{...register('phone')}
				/>
				<Input
					id="cpf"
					label="CPF"
					type="text"
					error={errors.cpf}
					{...register('cpf')}
				/>
			</div>

			<FormDestination />

			{errors.exampleRequired && <span>This field is required</span>}

			<button className="bg-button absolute -bottom-20 right-[calc(50%-96px)] text-white text-2xl font-bold rounded px-16 py-2 hover:bg-white hover:text-button border-2 border-button duration-200" type="submit">
				Enviar
			</button>
		</form>
	)
}

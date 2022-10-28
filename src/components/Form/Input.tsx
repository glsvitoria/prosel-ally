import {
	FormControl,
	FormLabel,
	Input as ChakraInput,
	FormErrorMessage,
	InputProps as ChakraInputProps,
} from '@chakra-ui/react'
import {
	forwardRef,
	ForwardRefRenderFunction,
} from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
	id: string
	label: string
	error: string
}

const InputBase: ForwardRefRenderFunction<
	HTMLInputElement,
	InputProps
> = ({ id, label, error, ...rest }, ref) => {
	return (
		<FormControl isInvalid={!!error} className="flex flex-col gap-2" width="80%">
			<FormLabel htmlFor={id}>{label}</FormLabel>
			<ChakraInput
				name={id}
				id={id}
				ref={ref}
				{...rest}
			/>
			{!!error && <p>{error}</p>}
		</FormControl>
	)
}

export const Input = forwardRef(InputBase)

// <div className="flex flex-col gap-2">
		// 	<label htmlFor={name}>{label}</label>
		// 	<input
		// 		className="w-[30vh] border-text border-[1px] rounded p-2 focus:outline-button"
		// 		name={name}
		// 		id={name}
		// 		ref={ref}
		// 		{...rest}
		// 	/>
		// 	{!!error && <span>{error.message}</span>}
		// </div>

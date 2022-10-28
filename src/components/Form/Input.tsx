import {
	FormControl,
	FormLabel,
	Input as ChakraInput,
	FormErrorMessage,
	InputProps as ChakraInputProps,
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
	id: string
	label: string
	error: string
}

export function Input({ id, label, error, ...rest }: InputProps) {
	return (
		<FormControl isInvalid={!!error} className="flex flex-col gap-2" width="80%">
			<FormLabel htmlFor={id}>{label}</FormLabel>
			<ChakraInput
				name={id}
				id={id}
				{...rest}
			/>
			{!!error && <FormErrorMessage>{error}</FormErrorMessage>}
		</FormControl>
	)
}


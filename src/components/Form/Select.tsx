import { ReactNode } from 'react'
import { Select as ChakraSelect } from '@chakra-ui/react'

interface SelectProps {
	name: string
	label: string
	placeholder: string
	children: ReactNode
	onChange: ((event: any) => Promise<void>) | ((event: any) => void)
	disabled: true | false
}

export function Select({
	name,
	label,
	placeholder,
	children,
	onChange,
	disabled,
	...rest
}: SelectProps) {
	return (
		<div className="flex flex-col items-start justify-center gap-4 w-full">
			<label htmlFor={name}>{label}</label>
			<ChakraSelect
				name={name}
				id={name}
				onChange={onChange}
				className="w-full rounded-md px-2 py-1 overflow-hidden"
				placeholder={placeholder}
				disabled={disabled}
				variant="filled"
				{...rest}
			>
				{children}
			</ChakraSelect>
		</div>
	)
}

import { ReactNode } from 'react'

interface SelectProps {
   name: string
   label: string
	children: ReactNode 
   onChange: ((event: any) => Promise<void>) | ((event: any) => void)
   disabled: true | false
}

export function Select({name, label, children, onChange, disabled, ...rest }: SelectProps) {
	return (
		<div className="flex flex-col items-start justify-center gap-4 w-full">
			<label htmlFor={name}>{label}</label>
			<select
				name={name}
				id={name}
				onChange={onChange}
				className="w-[50%] max-w-[50%] border-2 border-text rounded-md px-2 py-1"
				defaultValue="DEFAULT"
            disabled={disabled}
            {...rest}
			>
				{children}
			</select>
		</div>
	)
}

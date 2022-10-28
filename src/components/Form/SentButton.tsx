import { CheckCircle } from 'phosphor-react'
import { Button } from '@chakra-ui/react'

interface SentButtonProps {
   loading: boolean
}

export function SentButton({loading}: SentButtonProps) {
	return (
		<>
			{!loading ? (
				<button
					className="bg-button text-white text-2xl font-bold rounded px-16 py-2 hover:bg-white hover:text-button border-2 border-button duration-200 hover:cursor-pointer flex items-center justify-center col-span-2 w-80 mx-auto mt-8 mb-20"
					type="submit"
				>
					<CheckCircle size={32} className="mr-4" />
					Sent Form
				</button>
			) : (
				<Button
					isLoading
					loadingText="Loading"
					colorScheme="teal"
					variant="outline"
					spinnerPlacement="start"
					className="bg-white text-button text-2xl font-bold rounded py-6 border-2 border-button hover:cursor-wait col-span-2 w-80 mx-auto mt-8 mb-20"
				>
					Loading
				</Button>
			)}
		</>
	)
}

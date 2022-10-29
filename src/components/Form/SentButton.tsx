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
					className="bg-button text-white tablet:text-2xl text-lg font-bold rounded tablet:px-16 px-0 py-2 hover:bg-white hover:text-button border-2 border-button duration-200 hover:cursor-pointer flex items-center justify-center col-span-2 tablet:w-80 w-[80%] mx-auto mt-8"
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
					className="bg-white text-button tablet:text-2xl text-lg font-bold rounded py-6 border-2 border-button hover:cursor-wait col-span-2 tablet:w-80 w-[80%] mx-auto mt-8"
				>
					Loading
				</Button>
			)}
		</>
	)
}

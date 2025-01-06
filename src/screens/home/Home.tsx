import { useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ActionMenu } from '../../components/ActionMenu'
import { Input } from '../../components/ui/Input'

export interface FormValues {
	from: string
	title: string
	message: string
}

export const Home = () => {
	const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState<boolean>(false)
	const editableDivRef = useRef<HTMLDivElement>(null)

	const { handleSubmit, register, setValue, reset } = useForm<FormValues>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<FormValues> = data => {
		console.log(data)
		reset()
		if (editableDivRef.current) {
			editableDivRef.current.innerHTML = ''
		}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='rounded-xl w-1/2 bg-dark-100 flex flex-col gap-3 form'
		>
			<div className='flex flex-col p-4 gap-3'>
				<Input register={register} name='from' title='From:' type='email' />
				<Input register={register} name='title' title='Title:' type='text' />

				<div
					contentEditable
					id='editableDiv'
					ref={editableDivRef}
					onInput={() =>
						setValue(
							'message',
							document.getElementById('editableDiv')?.innerHTML || ''
						)
					}
					className='resize-none h-52 outline-none bg-transparent placeholder:text-dark-300 p-2 border border-dark-200 rounded'
				/>
			</div>

			<ActionMenu
				editableDivRef={editableDivRef}
				setValue={setValue}
				reset={reset}
				isEmojiPickerOpen={isEmojiPickerOpen}
				setIsEmojiPickerOpen={setIsEmojiPickerOpen}
			/>
		</form>
	)
}

import EmojiPicker from 'emoji-picker-react'
import { Bold, Italic, Paperclip, ScanLine, Smile, Trash2 } from 'lucide-react'
import { Dispatch, RefObject, SetStateAction } from 'react'
import { UseFormReset, UseFormSetValue } from 'react-hook-form'

import { FormValues } from '../screens/home/Home'

import { changeText } from '../utils/changeText'

import { Button } from './ui/Button'

interface Props {
	setValue: UseFormSetValue<FormValues>
	reset: UseFormReset<FormValues>
	editableDivRef: RefObject<HTMLDivElement>
	setIsEmojiPickerOpen: Dispatch<SetStateAction<boolean>>
	isEmojiPickerOpen: boolean
}

export const ActionMenu = ({
	setValue,
	reset,
	editableDivRef,
	setIsEmojiPickerOpen,
	isEmojiPickerOpen
}: Props) => {
	return (
		<div className='flex bg-dark-200 p-4 rounded-b-xl justify-between relative'>
			<Button
				isLight
				type='button'
				onClick={() => {
					reset()
					if (editableDivRef.current) {
						editableDivRef.current.innerHTML = ''
					}
				}}
			>
				<Trash2 />
			</Button>

			<div className='flex items-center gap-2'>
				<Button
					isLight
					type='button'
					onClick={() => changeText({ setValue, type: 'weight' })}
				>
					<Bold />
				</Button>

				<Button
					isLight
					type='button'
					onClick={() => changeText({ setValue, type: 'italic' })}
				>
					<Italic />
				</Button>

				<Button
					isLight
					type='button'
					onClick={() => changeText({ setValue, type: 'crossed' })}
				>
					<ScanLine />
				</Button>
			</div>

			<div className='emoji'>
				<EmojiPicker
					open={isEmojiPickerOpen}
					width={300}
					height={350}
					onEmojiClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
				/>
			</div>

			<div className='flex gap-2'>
				<Button
					isLight
					type='button'
					onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
				>
					<Smile />
				</Button>

				<Button isLight type='button'>
					<Paperclip />
				</Button>

				<Button className='text-dark-200' type='submit'>
					Send
				</Button>
			</div>
		</div>
	)
}

import { UseFormSetValue } from 'react-hook-form'

import { FormValues } from '../screens/home/Home'

interface Props {
	emoji: string
	setValue: UseFormSetValue<FormValues>
}

export const addEmoji = ({ emoji, setValue }: Props) => {
	const selection = window.getSelection()
	const range = selection?.getRangeAt(0)

	const element = document.createElement('span')
	element.textContent = emoji

	range?.deleteContents()
	range?.insertNode(element)

	setValue('message', document.getElementById('editableDiv')?.innerHTML || '')
}

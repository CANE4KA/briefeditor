import { UseFormSetValue } from 'react-hook-form'

import { FormValues } from '../screens/home/Home'

interface Props {
	setValue: UseFormSetValue<FormValues>
	type: 'weight' | 'italic' | 'crossed'
}

export const changeText = ({ setValue, type }: Props) => {
	const selection = window.getSelection()
	if (selection && selection.rangeCount > 0) {
		const range = selection.getRangeAt(0)
		const selectedText = selection.toString()

		if (selectedText.length > 0) {
			const tags = {
				crossed: 'del',
				italic: 'i',
				weight: 'b'
			}

			const element = document.createElement(tags[type])
			element.textContent = selectedText

			range.deleteContents()
			range.insertNode(element)

			setValue(
				'message',
				document.getElementById('editableDiv')?.innerHTML || ''
			)
		}
	}
}

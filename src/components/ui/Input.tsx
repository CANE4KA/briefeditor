import { InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import { FormValues } from '../../screens/home/Home'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
	title?: string
	name: keyof FormValues
	register: UseFormRegister<FormValues>
}

export const Input = ({ className, title, register, name, ...rest }: Props) => {
	return (
		<div className='flex items-center border-b border-dark-200'>
			<p className='text-dark-400'>{title}</p>
			<input
				{...register(name, { required: true })}
				className={twMerge(
					'w-full outline-none p-2 bg-transparent placeholder:text-dark-300',
					className
				)}
				{...rest}
			/>
		</div>
	)
}

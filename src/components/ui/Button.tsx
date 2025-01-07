import { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	children?: ReactNode
	isLight?: boolean
}

export const Button = ({ children, className, isLight, ...rest }: Props) => {
	return (
		<button
			className={twMerge(
				'rounded-lg bg-dark-500 transition-colors',
				isLight
					? 'bg-transparent hover:text-dark-600'
					: 'hover:bg-dark-400 px-4 py-2',
				className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}

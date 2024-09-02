import React from 'react';

interface SocialButtonIconProps {
	href: string;
	label?: string;
	icon: React.ReactNode;
}

export const SocialButtonIcon: React.FC<SocialButtonIconProps> = ({
	href,
	label,
	icon,
}) => {
	return (
		<a
			href={href}
			aria-label={label}
			className='border border-gray-300 h-10 w-10 grid place-content-center rounded-full bg-white'
		>
			{icon}
		</a>
	);
};

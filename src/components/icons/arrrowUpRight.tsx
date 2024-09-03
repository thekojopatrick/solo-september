'use client';

interface Props {
	size?: string;
}

const ArrrowUpRight = ({ size = '16' }: Props) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M11.3333 4.66663L4 12M7.33333 4.08796C7.33333 4.08796 11.0893 3.7713 11.6587 4.3413C12.2287 4.91063 11.912 8.66663 11.912 8.66663'
				stroke='black'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default ArrrowUpRight;

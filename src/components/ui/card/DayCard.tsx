import { ArrrowUpRight } from '@/components/icons';
import { Link } from 'next-view-transitions';
import NextLink from 'next/link';
import React from 'react';

interface DayCardProps {
	label: string;
	href?: URL | string;
	props?: React.ComponentProps<typeof NextLink>;
	status?: 'Done' | 'Not yet' | 'WIP' | 'On hold';
}

const StatusComp = ({ status }: { status: string }) => {
	return (
		<span
			className={`border border-gray-300 block self-start rounded-full px-4 py-1 text-xs ${status === 'Done' ? 'text-gray-600' : 'text-gray-400'}`}
		>
			{status}
		</span>
	);
};

export const DayCard: React.FC<DayCardProps> = ({
	label,
	status,
	href,
	props,
}) => {
	return (
		<Link
			href={`${href}`}
			className='p-2 border border-gray-200 bg-gradient-to-tr group/edit from-neutral-500/10 to-white hover:from-inherit max-h-[150px]  min-h-[127px] max-w-[250px] flex flex-col rounded-2xl cursor-pointer'
			{...props}
		>
			<span
				className={`border border-gray-300 rounded-full px-4 py-1 text-xs text-right self-end flex gap-2 invisible group-hover/edit:visible`}
			>
				View project
				<ArrrowUpRight />
			</span>
			<span className='font-serif text-3xl self-center justify-self-center w-full text-center my-auto'>
				{label}
			</span>
			<StatusComp status={status || 'Not yet'} />
		</Link>
	);
};

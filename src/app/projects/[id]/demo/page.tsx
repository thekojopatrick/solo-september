'use client';

import { CloseIcon } from '@/components/icons';
import React from 'react';
import { slideInOut } from '@/components/animations';
import { useTransitionRouter } from 'next-view-transitions';

const Page = () => {
	const router = useTransitionRouter();

	return (
		<section className='flex w-screen border border-red-200 relative'>
			<button
				className='items-center flex gap-2 absolute right-0 '
				onClick={(e) => {
					e.preventDefault();
					router.back();
				}}
			>
				<CloseIcon />
				Close Demo
			</button>
		</section>
	);
};

export default Page;

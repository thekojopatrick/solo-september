'use client';

import { CloseIcon } from '@/components/icons';
import React from 'react';
import { useRouter } from 'next/navigation';

const Page = ({ params }: { params: { id: string } }) => {
	const router = useRouter();

	return (
		<main className='min-h-screen w-full p-4 md:p-6 flex justify-center'>
			<section className='container max-w-screen-lg w-full bg-white border border-gray-300 rounded-xl p-4 md:p-6'>
				<button className='text-right' onClick={() => router.back()}>
					<CloseIcon />
				</button>
				<div className='flex'>/Ep0{params.id}</div>
			</section>
		</main>
	);
};

export default Page;

'use client';

import { ArrrowUpRight, CloseIcon, GithubIcon } from '@/components/icons';

import React from 'react';
import { SocialButtonIcon } from '@/components/ui';
import { slideInOut } from '@/components/animations';
import { useTransitionRouter } from 'next-view-transitions';

const Page = ({ params }: { params: { id: string } }) => {
	const router = useTransitionRouter();

	return (
		<main className='min-h-screen w-full p-4 md:p-6 flex justify-center'>
			<section className='container max-w-screen-lg w-full bg-white border border-gray-300 rounded-xl p-4 md:p-6'>
				<button
					className='text-right'
					onClick={(e) => {
						e.preventDefault();
						router.push('/', {
							// Optional custom transition
							onTransitionReady: slideInOut,
						});
					}}
				>
					<CloseIcon />
				</button>
				<div className='flex w-full'>
					<div className='flex justify-between w-full'>
						<div className='title'>
							<span>/Ep0{params.id}</span>
							<h1 className='text-3xl font-serif'>Solo September</h1>
						</div>
						<div className='actions flex items-center gap-2'>
							<SocialButtonIcon href='/' icon={<GithubIcon />} />
							<button
								onClick={(e) => {
									e.preventDefault();
									router.push(`/projects/${params.id}/demo`, {
										// Optional custom transition
										onTransitionReady: slideInOut,
									});
								}}
								className={`border border-gray-300 rounded-full px-4 py-2 text-md text-right items-center flex gap-2`}
							>
								View demo
								<ArrrowUpRight size='20' />
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Page;

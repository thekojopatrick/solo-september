import {
	BehanceIcon,
	DribbleIcon,
	GithubIcon,
	InstagramIcon,
	LinkedInIcon,
	XIcon,
} from '@/components/icons';

import { SocialButtonIcon } from '@/components/ui';

export default function Home() {
	return (
		<main className='min-h-screen p-6 sm:p-24 border border-red-200 flex justify-center '>
			<section className='container max-w-screen-lg w-full sm:grid grid-cols-12 flex gap-8 flex-col'>
				<div className='z-10 w-full max-w-xl flex flex-col gap-8 col-span-6'>
					<h2 className='font-serif text-3xl'>
						Solo September: One Challenge at a Time.
					</h2>
					<div className='space-y-2'>
						<div className='flex flex-col gap-4'>
							<h1 className='font-serif text-2xl'>
								🤘 Hey, I&apos;m <span className='italic'>Kojo</span>Patrick.
							</h1>
							<p className='mb-4'>
								I&apos;m all about design, code & interaction, and I&apos;m
								rebooting my passion to create, build, and explore. Kicking
								things off with this month&apos;s solo challenge.
							</p>
						</div>
						<div className='flex flex-row gap-3 items-center mt-8'>
							<SocialButtonIcon
								href='/'
								icon={<BehanceIcon />}
								label='Behance'
							/>
							<SocialButtonIcon
								href='/'
								icon={<DribbleIcon />}
								label='Dribbble'
							/>
							<SocialButtonIcon
								href='/'
								icon={<InstagramIcon />}
								label='Instagram'
							/>
							<SocialButtonIcon href='/' icon={<GithubIcon />} label='Github' />
							<SocialButtonIcon href='/' icon={<XIcon />} label='X' />
							<SocialButtonIcon
								href='/'
								icon={<LinkedInIcon />}
								label='LinkedIn'
							/>
						</div>
					</div>
				</div>

				<div className='col-span-6 border border-red-500 min-h-40'></div>

				<div className='mb-32 min-h-40 col-span-full h-full grid text-center lg:mb-0 lg:w-full lg:grid-cols-4 lg:text-left border border-red-500'></div>
			</section>
		</main>
	);
}

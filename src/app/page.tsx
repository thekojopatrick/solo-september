import {
	BehanceIcon,
	DribbleIcon,
	GithubIcon,
	InstagramIcon,
	LinkedInIcon,
	XIcon,
} from '@/components/icons';
import { DayCard, SocialButtonIcon } from '@/components/ui';

export default function Home() {
	return (
		<main className='min-h-screen p-6 sm:p-24 border border-red-200 flex justify-center '>
			<section className='container max-w-screen-lg w-full flex gap-5 flex-col'>
				{/*Start of Top Section*/}
				<div className='flex flex-col lg:flex-row gap-5'>
					<div className='max-w-lg flex flex-col gap-8'>
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
							<div className='flex flex-row gap-1 sm:gap-3 items-center mt-8'>
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
								<SocialButtonIcon
									href='/'
									icon={<GithubIcon />}
									label='Github'
								/>
								<SocialButtonIcon href='/' icon={<XIcon />} label='X' />
								<SocialButtonIcon
									href='/'
									icon={<LinkedInIcon />}
									label='LinkedIn'
								/>
							</div>
						</div>
					</div>
					<li className=' grid gap-5 grid-cols-2 w-full'>
						<DayCard label='1' status='Done' />
						<DayCard label='2' />
						<DayCard label='3' />
						<DayCard label='4' />
					</li>
				</div>
				{/* End of Top Section*/}

				{/* Start of Bottom Section*/}
				<li className='min-h-40 col-span-full h-full grid text-center grid-cols-2 lg:mb-0 lg:w-full lg:grid-cols-4 lg:text-left gap-5'>
					{Array.from({ length: 16 }, (v, i) => (
						<DayCard key={i} label={`${i + 5}`} />
					))}
				</li>
				{/* End of Bottom Section*/}
			</section>
		</main>
	);
}

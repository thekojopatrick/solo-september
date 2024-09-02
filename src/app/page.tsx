export default function Home() {
	return (
		<main className='min-h-screen flex gap-8 flex-col p-6 sm:p-24 border border-red-200 sm:grid grid-cols-12'>
			<div className='z-10 w-full max-w-xl flex flex-col gap-8 col-span-6'>
				<h2 className='font-serif text-3xl'>
					Solo September: One Challenge at a Time.
				</h2>
				<div className='space-y-2'>
					<h1 className='font-serif text-2xl'>
						🤘 Hey, I&apos;m <span className='italic'>Kojo</span>Patrick.
					</h1>
					<p className=''>
						I&apos;m all about design, code & interaction, and I&apos;m
						rebooting my passion to create, build, and explore. Kicking things
						off with this month&apos;s solo challenge.
					</p>
				</div>
			</div>

			<div className='col-span-6 border border-red-500 min-h-40'></div>

			<div className='mb-32 min-h-40 col-span-full h-full grid text-center lg:mb-0 lg:w-full lg:grid-cols-4 lg:text-left border border-red-500'></div>
		</main>
	);
}

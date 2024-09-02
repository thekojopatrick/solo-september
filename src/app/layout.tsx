import './globals.css';

import { Instrument_Sans } from 'next/font/google';
import type { Metadata } from 'next';

const instrument_Sans = Instrument_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Solo September',
	description: 'September Design & code challenge by Kojo Patrick',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={instrument_Sans.className}>{children}</body>
		</html>
	);
}

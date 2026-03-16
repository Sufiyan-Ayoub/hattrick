import { APP_DESCRIPTION, APP_NAME } from "@/config";
import type { Metadata } from "next"
// import { Geist, Geist_Mono } from "next/font/google";
import Wrapper from "./Wrapper"
import "@/app/css/app.scss"

export const metadata: Metadata = {
	title: APP_NAME,
	description: APP_DESCRIPTION,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={`anonymous`}/>
				<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&amp;display=swap" rel="stylesheet"/>
			</head>
			<body>
				<Wrapper>{children}</Wrapper>
			</body>
		</html>
	);
}

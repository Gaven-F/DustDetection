import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "粉尘检测平台",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="zh-cn">
			<body className="font-mono">{children}</body>
		</html>
	);
}

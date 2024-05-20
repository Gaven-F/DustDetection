"use client";

import { Card, CardContent, CardHeader, Paper, Stack, SvgIcon, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { LineChart, PieChart } from "@mui/x-charts";
import { times, random } from "lodash";
import { ZCOOL_KuaiLe } from "next/font/google";
import WidgetsTwoToneIcon from "@mui/icons-material/WidgetsTwoTone";

const font = ZCOOL_KuaiLe({ weight: ["400"], subsets: ["latin"] });

export default function () {
	return (
		<Stack
			direction={"row"}
			gap={2}
			className="h-full">
			<Paper className="h-full w-96">
				<Stack
					gap={2}
					className="px-2">
					<Paper className="p-2">
						<Typography
							variant="h6"
							textAlign={"center"}>
							HEADER
						</Typography>
						<Typography variant="body1">User Information......</Typography>
					</Paper>
					{times(5, (i) => (
						<Stack
							alignItems={"center"}
							key={i}
							gap={4}
							direction={"row"}
							className="w-full h-16 px-2 border-2 rounded-lg cursor-pointer hover:bg-slate-300 transition-all transform-gpu">
							<SvgIcon
								color="primary"
								className="h-8 w-8">
								<WidgetsTwoToneIcon></WidgetsTwoToneIcon>
							</SvgIcon>
							<Typography variant="subtitle1">Menu {i + 1}</Typography>
						</Stack>
					))}
				</Stack>
			</Paper>
			<Paper className="h-full w-full overflow-hidden">
				<Grid2
					spacing={2}
					container>
					<Grid2 xs={7}>
						<Card variant="outlined">
							<CardHeader title={<span className={font.className}>近期粉尘检测状态</span>}></CardHeader>
							<CardContent>
								<LineChart
									height={210}
									series={[{ data: times(30, (i) => random(10, 100)).sort() }]}
									grid={{ horizontal: true, vertical: true }}></LineChart>
							</CardContent>
						</Card>
					</Grid2>

					<Grid2 xs={5}>
						<Card
							variant="outlined"
							className="h-full w-full">
							<PieChart
								series={[
									{ data: times(4, (i) => ({ id: i, value: random(17, 33), label: "series " + (i + 1) })) },
								]}></PieChart>
						</Card>
					</Grid2>

					<Grid2 xs={7}>
						<Card variant="outlined">
							<CardHeader title={<span className={`${font.className}`}>近期粉尘检测状态</span>}></CardHeader>
							<CardContent>
								<LineChart
									height={210}
									series={[{ data: times(30, (i) => random(10, 100)).sort() }]}
									grid={{ horizontal: true, vertical: true }}></LineChart>
							</CardContent>
						</Card>
					</Grid2>
				</Grid2>
			</Paper>
		</Stack>
	);
}

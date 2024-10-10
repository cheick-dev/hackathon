// "use client";

// import React, { useState } from "react";
// import { Bar, Line, Pie, Scatter } from "react-chartjs-2";
// import {
// 	Chart as ChartJS,
// 	CategoryScale,
// 	LinearScale,
// 	BarElement,
// 	LineElement,
// 	PointElement,
// 	ArcElement,
// 	Title,
// 	Tooltip,
// 	Legend,
// } from "chart.js";
// import {
// 	Card,
// 	CardContent,
// 	CardDescription,
// 	CardHeader,
// 	CardTitle,
// } from "@/components/ui/card";
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Switch } from "@/components/ui/switch";
// import { AlertCircle, Download, Moon, Search, Sun } from "lucide-react";

// ChartJS.register(
// 	CategoryScale,
// 	LinearScale,
// 	BarElement,
// 	LineElement,
// 	PointElement,
// 	ArcElement,
// 	Title,
// 	Tooltip,
// 	Legend
// );

// // Données factices pour la démonstration
// const mockData = {
// 	totalStudents: 1000,
// 	averageGrade: 14.5,
// 	successRate: 0.85,
// 	subjectsPerformance: {
// 		Math: 15.2,
// 		Science: 14.8,
// 		Literature: 13.9,
// 		History: 14.1,
// 	},
// 	classesPerformance: {
// 		"Class A": 15.5,
// 		"Class B": 14.2,
// 		"Class C": 13.8,
// 		"Class D": 14.7,
// 	},
// 	gradeDistribution: {
// 		"0-5": 20,
// 		"6-10": 100,
// 		"11-15": 500,
// 		"16-20": 380,
// 	},
// 	timeSeriesData: [
// 		{ month: "Jan", average: 13.5 },
// 		{ month: "Feb", average: 14.0 },
// 		{ month: "Mar", average: 14.2 },
// 		{ month: "Apr", average: 14.5 },
// 		{ month: "May", average: 14.8 },
// 	],
// };

// export default function StudentDashboard() {
// 	const [darkMode, setDarkMode] = useState(false);
// 	const [selectedFilter, setSelectedFilter] = useState("all");

// 	const toggleDarkMode = () => {
// 		setDarkMode(!darkMode);
// 		// Ici, vous pouvez ajouter la logique pour changer le thème de l'application
// 	};

// 	const handleFilterChange = (value: string) => {
// 		setSelectedFilter(value);
// 		// Ici, vous pouvez ajouter la logique pour filtrer les données
// 	};

// 	const handleExport = () => {
// 		// Logique pour exporter les données
// 		console.log("Exporting data...");
// 	};

// 	return (
// 		<div
// 			className={`min-h-screen p-8 ${
// 				darkMode
// 					? "bg-gray-900 text-white"
// 					: "bg-gray-100 text-gray-900"
// 			}`}
// 		>
// 			<div className="max-w-7xl mx-auto">
// 				<header className="flex justify-between items-center mb-8">
// 					<h1 className="text-3xl font-bold">
// 						Tableau de bord des résultats étudiants
// 					</h1>
// 					<div className="flex items-center space-x-4">
// 						<Button onClick={handleExport} variant="outline">
// 							<Download className="mr-2 h-4 w-4" /> Exporter
// 						</Button>
// 						<Switch
// 							checked={darkMode}
// 							onCheckedChange={toggleDarkMode}
// 						/>
// 						{darkMode ? (
// 							<Moon className="h-5 w-5" />
// 						) : (
// 							<Sun className="h-5 w-5" />
// 						)}
// 					</div>
// 				</header>

// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// 					<Card>
// 						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// 							<CardTitle className="text-sm font-medium">
// 								Total Étudiants
// 							</CardTitle>
// 						</CardHeader>
// 						<CardContent>
// 							<div className="text-2xl font-bold">
// 								{mockData.totalStudents}
// 							</div>
// 						</CardContent>
// 					</Card>
// 					<Card>
// 						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// 							<CardTitle className="text-sm font-medium">
// 								Moyenne Générale
// 							</CardTitle>
// 						</CardHeader>
// 						<CardContent>
// 							<div className="text-2xl font-bold">
// 								{mockData.averageGrade.toFixed(1)}/20
// 							</div>
// 						</CardContent>
// 					</Card>
// 					<Card>
// 						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// 							<CardTitle className="text-sm font-medium">
// 								Taux de Réussite
// 							</CardTitle>
// 						</CardHeader>
// 						<CardContent>
// 							<div className="text-2xl font-bold">
// 								{(mockData.successRate * 100).toFixed(1)}%
// 							</div>
// 						</CardContent>
// 					</Card>
// 					<Card>
// 						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// 							<CardTitle className="text-sm font-medium">
// 								Performance Globale
// 							</CardTitle>
// 						</CardHeader>
// 						<CardContent>
// 							<div className="text-2xl font-bold flex items-center">
// 								{mockData.averageGrade >= 15
// 									? "Bon"
// 									: mockData.averageGrade >= 12
// 									? "Moyen"
// 									: "Faible"}
// 								<AlertCircle
// 									className={`ml-2 h-5 w-5 ${
// 										mockData.averageGrade >= 15
// 											? "text-green-500"
// 											: mockData.averageGrade >= 12
// 											? "text-yellow-500"
// 											: "text-red-500"
// 									}`}
// 								/>
// 							</div>
// 						</CardContent>
// 					</Card>
// 				</div>

// 				<div className="flex justify-between items-center mb-6">
// 					<Select onValueChange={handleFilterChange}>
// 						<SelectTrigger className="w-[180px]">
// 							<SelectValue placeholder="Filtrer par" />
// 						</SelectTrigger>
// 						<SelectContent>
// 							<SelectItem value="all">Tous</SelectItem>
// 							<SelectItem value="class">Classe</SelectItem>
// 							<SelectItem value="subject">Matière</SelectItem>
// 						</SelectContent>
// 					</Select>
// 					<div className="flex items-center">
// 						<Input
// 							type="text"
// 							placeholder="Rechercher un étudiant"
// 							className="mr-2"
// 						/>
// 						<Button variant="ghost" size="icon">
// 							<Search className="h-4 w-4" />
// 						</Button>
// 					</div>
// 				</div>

// 				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
// 					<Card>
// 						<CardHeader>
// 							<CardTitle>Distribution des Notes</CardTitle>
// 						</CardHeader>
// 						<CardContent>
// 							<Bar
// 								data={{
// 									labels: Object.keys(
// 										mockData.gradeDistribution
// 									),
// 									datasets: [
// 										{
// 											label: "Nombre d'étudiants",
// 											data: Object.values(
// 												mockData.gradeDistribution
// 											),
// 											backgroundColor:
// 												"rgba(75, 192, 192, 0.6)",
// 										},
// 									],
// 								}}
// 								options={{
// 									responsive: true,
// 									plugins: {
// 										legend: {
// 											position: "top" as const,
// 										},
// 										title: {
// 											display: true,
// 											text: "Distribution des Notes",
// 										},
// 									},
// 								}}
// 							/>
// 						</CardContent>
// 					</Card>
// 					<Card>
// 						<CardHeader>
// 							<CardTitle>Évolution des Moyennes</CardTitle>
// 						</CardHeader>
// 						<CardContent>
// 							<Line
// 								data={{
// 									labels: mockData.timeSeriesData.map(
// 										(d) => d.month
// 									),
// 									datasets: [
// 										{
// 											label: "Moyenne",
// 											data: mockData.timeSeriesData.map(
// 												(d) => d.average
// 											),
// 											borderColor: "rgb(75, 192, 192)",
// 											tension: 0.1,
// 										},
// 									],
// 								}}
// 								options={{
// 									responsive: true,
// 									plugins: {
// 										legend: {
// 											position: "top" as const,
// 										},
// 										title: {
// 											display: true,
// 											text: "Évolution des Moyennes",
// 										},
// 									},
// 								}}
// 							/>
// 						</CardContent>
// 					</Card>
// 				</div>

// 				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// 					<Card>
// 						<CardHeader>
// 							<CardTitle>Performance par Matière</CardTitle>
// 						</CardHeader>
// 						<CardContent>
// 							<Pie
// 								data={{
// 									labels: Object.keys(
// 										mockData.subjectsPerformance
// 									),
// 									datasets: [
// 										{
// 											data: Object.values(
// 												mockData.subjectsPerformance
// 											),
// 											backgroundColor: [
// 												"rgba(255, 99, 132, 0.6)",
// 												"rgba(54, 162, 235, 0.6)",
// 												"rgba(255, 206, 86, 0.6)",
// 												"rgba(75, 192, 192, 0.6)",
// 											],
// 										},
// 									],
// 								}}
// 								options={{
// 									responsive: true,
// 									plugins: {
// 										legend: {
// 											position: "top" as const,
// 										},
// 										title: {
// 											display: true,
// 											text: "Performance par Matière",
// 										},
// 									},
// 								}}
// 							/>
// 						</CardContent>
// 					</Card>
// 					<Card>
// 						<CardHeader>
// 							<CardTitle>Performance par Classe</CardTitle>
// 						</CardHeader>
// 						<CardContent>
// 							<Scatter
// 								data={{
// 									datasets: [
// 										{
// 											label: "Classes",
// 											data: Object.entries(
// 												mockData.classesPerformance
// 											).map(([label, value], index) => ({
// 												x: index,
// 												y: value,
// 											})),
// 											backgroundColor:
// 												"rgba(75, 192, 192, 0.6)",
// 										},
// 									],
// 								}}
// 								options={{
// 									responsive: true,
// 									plugins: {
// 										legend: {
// 											position: "top" as const,
// 										},
// 										title: {
// 											display: true,
// 											text: "Performance par Classe",
// 										},
// 									},
// 									scales: {
// 										x: {
// 											type: "linear",
// 											position: "bottom",
// 											ticks: {
// 												callback: function (
// 													value,
// 													index,
// 													values
// 												) {
// 													return Object.keys(
// 														mockData.classesPerformance
// 													)[index];
// 												},
// 											},
// 										},
// 									},
// 								}}
// 							/>
// 						</CardContent>
// 					</Card>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

"use client";

import { Bar, Line, Pie } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	LineElement,
	PointElement,
	ArcElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { AlertCircle, Moon, Sun } from "lucide-react";

import { mockData } from "@/constant/Data";
import SideBar from "@/components/SideBar";
import { useThemeStore } from "@/store/ThemeStore";
import { useSelectedStore } from "@/store/SelectedStore";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	LineElement,
	PointElement,
	ArcElement,
	Title,
	Tooltip,
	Legend
);
export default function StudentDashboard() {
	const { theme, toggleTheme } = useThemeStore();
	const { selectedLevel, selectedSpecialty, activeTab } = useSelectedStore();

	// bg-gray-100
	return (
		<div
			className={`flex min-h-screen ${
				theme == "dark"
					? "bg-gray-800 text-white"
					: "bg-white text-gray-800"
			}`}
		>
			<SideBar />
			<main className="flex-1 p-8">
				<header className="flex justify-between items-center mb-8">
					<h1 className="text-3xl font-bold">
						Résultats des étudiants - {selectedLevel} -{" "}
						{selectedSpecialty}
					</h1>
					<div className="flex items-center space-x-4">
						<Switch
							checked={theme == "dark" ? false : true}
							onCheckedChange={toggleTheme}
						/>
						{theme ? (
							<Moon className="h-5 w-5" />
						) : (
							<Sun className="h-5 w-5" />
						)}
					</div>
				</header>
				{activeTab === "Vue d'ensemble" && (
					<>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
							<Card>
								<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
									<CardTitle className="text-sm font-medium">
										Total Étudiants
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="text-2xl font-bold">
										{
											mockData.totalStudents[
												selectedLevel
											][selectedSpecialty]
										}
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
									<CardTitle className="text-sm font-medium">
										Moyenne Générale
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="text-2xl font-bold">
										{mockData.averageGrade[selectedLevel][
											selectedSpecialty
										].toFixed(1)}
										/20
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
									<CardTitle className="text-sm font-medium">
										Taux de Réussite
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="text-2xl font-bold">
										{(
											mockData.successRate[selectedLevel][
												selectedSpecialty
											] * 100
										).toFixed(1)}
										%
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
									<CardTitle className="text-sm font-medium">
										Performance Globale
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="text-2xl font-bold flex items-center">
										{mockData.averageGrade[selectedLevel][
											selectedSpecialty
										] >= 15
											? "Bon"
											: mockData.averageGrade[
													selectedLevel
											  ][selectedSpecialty] >= 12
											? "Moyen"
											: "Faible"}
										<AlertCircle
											className={`ml-2 h-5 w-5 ${
												mockData.averageGrade[
													selectedLevel
												][selectedSpecialty] >= 15
													? "text-green-500"
													: mockData.averageGrade[
															selectedLevel
													  ][selectedSpecialty] >= 12
													? "text-yellow-500"
													: "text-red-500"
											}`}
										/>
									</div>
								</CardContent>
							</Card>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
							<Card>
								<CardHeader>
									<CardTitle>
										Évolution des Moyennes
									</CardTitle>
								</CardHeader>
								<CardContent>
									<Line
										data={{
											labels: mockData.timeSeriesData[
												selectedLevel
											].map((d: any) => d.month),
											datasets: [
												{
													label: "Moyenne",
													data: mockData.timeSeriesData[
														selectedLevel
													].map(
														(d: any) => d.average
													),
													borderColor:
														"rgb(75, 192, 192)",
													tension: 0.1,
												},
											],
										}}
										options={{
											responsive: true,
											plugins: {
												legend: {
													position: "top" as const,
												},
												title: {
													display: true,
													text: "Évolution des Moyennes",
												},
											},
										}}
									/>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>
										Performance par Matière
									</CardTitle>
								</CardHeader>
								<CardContent>
									<Pie
										data={{
											labels: Object.keys(
												mockData.subjectsPerformance[
													selectedLevel
												]
											),
											datasets: [
												{
													data: Object.values(
														mockData
															.subjectsPerformance[
															selectedLevel
														]
													),
													backgroundColor: [
														"rgba(255, 99, 132, 0.6)",
														"rgba(54, 162, 235, 0.6)",
														"rgba(255, 206, 86, 0.6)",
														"rgba(75, 192, 192, 0.6)",
													],
												},
											],
										}}
										options={{
											responsive: true,
											plugins: {
												legend: {
													position: "top" as const,
												},
												title: {
													display: true,
													text: "Performance par Matière",
												},
											},
										}}
									/>
								</CardContent>
							</Card>
						</div>
					</>
				)}
				{activeTab === "Statistiques par matière" && (
					<div className="grid grid-cols-1 gap-6">
						<Card>
							<CardHeader>
								<CardTitle>
									Détail des performances par matière
								</CardTitle>
							</CardHeader>
							<CardContent>
								<Bar
									data={{
										labels: Object.keys(
											mockData.subjectsPerformance[
												selectedLevel
											]
										),
										datasets: [
											{
												label: "Moyenne",
												data: Object.values(
													mockData
														.subjectsPerformance[
														selectedLevel
													]
												),
												backgroundColor:
													"rgba(75, 192, 192, 0.6)",
											},
										],
									}}
									options={{
										responsive: true,
										plugins: {
											legend: {
												position: "top" as const,
											},
											title: {
												display: true,
												text: "Performances par matière",
											},
										},
										scales: {
											y: {
												beginAtZero: true,
												max: 20,
											},
										},
									}}
								/>
							</CardContent>
						</Card>
					</div>
				)}
				{activeTab === "Comparaison" && (
					<div className="grid grid-cols-1 gap-6">
						<Card>
							<CardHeader>
								<CardTitle>
									Comparaison des performances entre
									spécialités
								</CardTitle>
							</CardHeader>
							<CardContent>
								<Bar
									data={{
										labels: [
											"Informatique",
											"Mathématiques",
											"Physique",
										],
										datasets: [
											{
												label: "Moyenne générale",
												data: [
													mockData.averageGrade[
														selectedLevel
													]["Informatique"],
													mockData.averageGrade[
														selectedLevel
													]["Mathématiques"],
													mockData.averageGrade[
														selectedLevel
													]["Physique"],
												],
												backgroundColor:
													"rgba(75, 192, 192, 0.6)",
											},
											{
												label: "Taux de réussite",
												data: [
													mockData.successRate[
														selectedLevel
													]["Informatique"] * 20,
													mockData.successRate[
														selectedLevel
													]["Mathématiques"] * 20,
													mockData.successRate[
														selectedLevel
													]["Physique"] * 20,
												],
												backgroundColor:
													"rgba(255, 99, 132, 0.6)",
											},
										],
									}}
									options={{
										responsive: true,
										plugins: {
											legend: {
												position: "top" as const,
											},
											title: {
												display: true,
												text: "Comparaison entre spécialités",
											},
										},
										scales: {
											y: {
												beginAtZero: true,
												max: 20,
											},
										},
									}}
								/>
							</CardContent>
						</Card>
					</div>
				)}
				{activeTab === "Notifications" && (
					<div className="grid grid-cols-1 gap-6">
						<Card>
							<CardHeader>
								<CardTitle>Notifications et Alertes</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-4">
									<li className="flex items-center space-x-2">
										<AlertCircle className="text-red-500" />
										<span>
											Baisse significative des
											performances en Mathématiques pour
											la Licence 2 Informatique.
										</span>
									</li>
									<li className="flex items-center space-x-2">
										<AlertCircle className="text-yellow-500" />
										<span>
											Le taux de réussite en Physique pour
											le Master 1 est inférieur à la
											moyenne des années précédentes.
										</span>
									</li>
									<li className="flex items-center space-x-2">
										<AlertCircle className="text-green-500" />
										<span>
											Amélioration notable des résultats
											en Anglais pour toutes les
											spécialités de Licence 3.
										</span>
									</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				)}
			</main>
		</div>
	);
}

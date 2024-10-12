"use client";

import React, { useEffect, useState } from "react";
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

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

import {
	Download,
	Home,
	Settings,
	ChevronLeft,
	ChevronRight,
	Bell,
	BarChart2,
	BookOpen,
	LogOut,
} from "lucide-react";

import { useThemeStore } from "@/store/ThemeStore";
import { useSelectedStore } from "@/store/SelectedStore";
import { links } from "@/constant/Data";
import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { avatar } from "@/services/appwrite.config";

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

function SideBar() {
	const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
	const { user, logout } = useAuthStore();
	const router = useRouter();

	const { theme } = useThemeStore();
	const {
		handleLevelChange,
		handleSpecialtyChange,
		activeTab,
		handleActiveTabChange,
	} = useSelectedStore();

	const handleExport = () => console.log("Exporting data...");

	const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

	useEffect(() => {
		const localUser = localStorage.getItem("user");
		if (!user) router.push("/login");
	}, [user]);

	return (
		<aside
			className={`${
				sidebarCollapsed ? "w-20 p-1" : "w-64 p-4"
			}  transition-all duration-300 ease-in-out h-[100vh] sticky top-0 ${
				theme == "dark"
					? "bg-gray-100 text-gray-800"
					: "bg-gray-800 text-white"
			}`}
		>
			<div className="mt-2 mb-4">
				<Popover>
					<PopoverTrigger className="flex items-center">
						<Avatar>
							<AvatarImage src={avatar.getInitials()} />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						{!sidebarCollapsed && (
							<p className="text-lg font-bold ml-2">
								{user?.name}
							</p>
						)}
					</PopoverTrigger>
					<PopoverContent>
						{/* <Link href="/register">
							<Button variant="outline" className="w-full">
								<LogOut className="mr-2" />
								Inscription
							</Button>
						</Link>
						<div className="h-2" />
						<Link href="/login">
							<Button variant="outline" className="w-full">
								<LogOut className="mr-2" />
								Connexion
							</Button>
						</Link>
						<div className="h-2" /> */}
						<Button
							variant="outline"
							className="w-full"
							onClick={logout}
						>
							<LogOut className="mr-2" />
							Déconnexion
						</Button>
					</PopoverContent>
				</Popover>
			</div>
			<div className="flex justify-between items-center mb-8">
				{!sidebarCollapsed && (
					<h2 className="text-xl font-bold">Dashboard</h2>
				)}
				<button onClick={toggleSidebar} className="text-white ">
					{sidebarCollapsed ? (
						<ChevronRight
							color={theme == "dark" ? "black" : "white"}
							className="mt-4 ml-5"
						/>
					) : (
						<ChevronLeft
							color={theme == "dark" ? "black" : "white"}
						/>
					)}
				</button>
			</div>
			{!sidebarCollapsed && (
				<>
					<div className="mb-4">
						<Select onValueChange={handleLevelChange}>
							<SelectTrigger>
								<SelectValue placeholder="Niveau" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="Licence 1">
									Licence 1
								</SelectItem>
								<SelectItem value="Licence 2">
									Licence 2
								</SelectItem>
								<SelectItem value="Licence 3">
									Licence 3
								</SelectItem>
								<SelectItem value="Master 1">
									Master 1
								</SelectItem>
								<SelectItem value="Master 2">
									Master 2
								</SelectItem>
								<SelectItem value="Doctorat">
									Doctorat
								</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="mb-8">
						<Select onValueChange={handleSpecialtyChange}>
							<SelectTrigger>
								<SelectValue placeholder="Spécialité" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="Informatique">
									Informatique
								</SelectItem>
								<SelectItem value="Mathématiques">
									Mathématiques
								</SelectItem>
								<SelectItem value="Physique">
									Physique
								</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</>
			)}
			<nav>
				<ul className="space-y-2 mb-6">
					{links.map((Link) => (
						<Button
							key={Link.name}
							variant="ghost"
							className={`w-full ${
								sidebarCollapsed
									? "justify-center"
									: "justify-start"
							} hover:bg-gray-400 ${
								activeTab === Link.name
									? "bg-gray-700 text-white"
									: ""
							}`}
							onClick={() => handleActiveTabChange(Link.name)}
						>
							{Link.icon == "Home" && <Home className="mr-2" />}
							{Link.icon == "BookOpen" && (
								<BookOpen className="mr-2" />
							)}
							{Link.icon == "BarChart2" && (
								<BarChart2 className="mr-2" />
							)}
							{Link.icon == "Bell" && <Bell className="mr-2" />}
							{!sidebarCollapsed && Link.name}
						</Button>
					))}
				</ul>
			</nav>

			<div className="mt-auto text-black ">
				<Button
					variant="outline"
					className="w-full mb-2"
					onClick={handleExport}
				>
					<Download className="mr-2" />
					{!sidebarCollapsed && "Exporter"}
				</Button>
				{/* <Button variant="outline" className="w-full">
					<Settings className="mr-2" />
					{!sidebarCollapsed && "Paramètres"}
				</Button> */}
			</div>
		</aside>
	);
}

export default SideBar;

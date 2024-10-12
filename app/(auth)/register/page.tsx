"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

import { Mail, Lock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

export default function SignupPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { isLoading, error, register, user } = useAuthStore();
	const router = useRouter();
	const { toast } = useToast();
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (error)
			toast({
				title: "error",
				description: error,
			});
		await register(email, password, name);
		toast({
			title: "Ok",
			description: "Inscription réussie",
		});
	};
	useEffect(() => {
		if (user) router.push("/");
	}, [user]);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
				<div className="text-center">
					<h2 className="mt-6 text-3xl font-bold text-gray-900">
						Créer un compte
					</h2>
					<p className="mt-2 text-sm text-gray-600">
						Ou{" "}
						<Link
							href="/login"
							className="font-medium text-primary hover:text-primary/80"
						>
							connectez-vous à votre compte
						</Link>
					</p>
				</div>
				<form className="mt-8 space-y-8" onSubmit={handleSubmit}>
					<div className="rounded-md shadow-sm space-y-px">
						<div className="">
							<Label htmlFor="name" className="sr-only">
								Nom complet
							</Label>
							<div className="relative">
								<Input
									id="name"
									name="name"
									type="text"
									autoComplete="name"
									required
									className="pl-10"
									placeholder="Nom complet"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
								<User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
							</div>
						</div>
						<div className="h-2" />
						<div className="">
							<Label htmlFor="email-address" className="sr-only">
								Adresse e-mail
							</Label>
							<div className="relative">
								<Input
									id="email-address"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="pl-10"
									placeholder="Adresse e-mail"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
							</div>
						</div>
						<div className="h-2" />
						<div className="">
							<Label htmlFor="password" className="sr-only">
								Mot de passe
							</Label>
							<div className="relative">
								<Input
									id="password"
									name="password"
									type="password"
									autoComplete="new-password"
									required
									className="pl-10"
									placeholder="Mot de passe"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
								<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
							</div>
						</div>
					</div>

					<div>
						<Button
							type="submit"
							className="w-full flex justify-center items-center"
							disabled={isLoading}
						>
							S'inscrire
							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

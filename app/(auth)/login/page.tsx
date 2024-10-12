"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { isLoading, error, login, user } = useAuthStore();
	const router = useRouter();
	const { toast } = useToast();
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (error) {
			toast({
				title: "error",
				description: error,
			});
		}
		await login(email, password);
		toast({
			title: "Ok",
			description: "Connexion réussie",
		});
		router.push("/");
	};
	useEffect(() => {
		if (user) router.push("/");
	}, [user]);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
				<div className="text-center">
					<h2 className="mt-6 text-3xl font-bold text-gray-900">
						Connexion
					</h2>
					<p className="mt-2 text-sm text-gray-600">
						Ou{" "}
						<Link
							href="/register"
							className="font-medium text-primary hover:text-primary/80"
						>
							créez un compte
						</Link>
					</p>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<div className="rounded-md shadow-sm -space-y-px">
						<div className="mb-4">
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
						<div>
							<Label htmlFor="password" className="sr-only">
								Mot de passe
							</Label>
							<div className="relative">
								<Input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
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

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
							/>
							<Label
								htmlFor="remember-me"
								className="ml-2 block text-sm text-gray-900"
							>
								Se souvenir de moi
							</Label>
						</div>

						<div className="text-sm">
							<a
								href="#"
								className="font-medium text-primary hover:text-primary/80"
							>
								Mot de passe oublié ?
							</a>
						</div>
					</div>

					<div>
						<Button
							type="submit"
							className="w-full flex justify-center items-center"
							disabled={isLoading}
						>
							Se connecter
							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

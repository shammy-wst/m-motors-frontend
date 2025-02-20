"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Input, Button } from "@/components/ui/Form";
import Image from "next/image";

export default function RegisterPage() {
  const { register } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      phone: formData.get("phone") as string,
    };

    try {
      await register(data);
    } catch (error: unknown) {
      console.error("Register error:", error);
      setError("Une erreur est survenue lors de l'inscription");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <div className="flex flex-col items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-black font-rem mb-8"
            >
              M-MOTORS
            </Link>
            <h2 className="text-3xl font-bold text-gray-900 font-rem">
              Créer un compte
            </h2>
            <p className="mt-2 text-sm text-gray-600 font-inter text-center">
              Déjà inscrit ?{" "}
              <Link href="/auth/login" className="text-black hover:underline">
                Se connecter
              </Link>
            </p>
          </div>

          <div className="mt-10">
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg font-inter text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Prénom"
                name="firstName"
                type="text"
                required
                autoComplete="given-name"
              />
              <Input
                label="Nom"
                name="lastName"
                type="text"
                required
                autoComplete="family-name"
              />
              <Input
                label="Email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
              <Input
                label="Téléphone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
              />
              <Input
                label="Mot de passe"
                name="password"
                type="password"
                required
                autoComplete="new-password"
              />

              <Button type="submit" isLoading={isLoading} className="w-full">
                S&apos;inscrire
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:flex flex-1">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/images/backgrounds/auth-bg.jpg"
          alt="Authentication background"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
    </div>
  );
}

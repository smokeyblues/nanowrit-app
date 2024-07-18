import Image from "next/image";
import { SignupForm } from "@/components/login-form";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-4xl font-bold text-center mb-8 font-inter">
          Welcome to the login page, Storyteller!
        </h1>
        <SignupForm />
      </div>
    </main>
  );
}

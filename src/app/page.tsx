import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-4xl font-bold text-center mb-8 font-inter">
          Welcome, Storyteller!
        </h1>
        <div className="flex justify-center">
        <Button className="flex justify-center">
          <Link href="/dashboard">
            Enter
          </Link>
        </Button>
        </div>
      </div>
    </main>
  );
}

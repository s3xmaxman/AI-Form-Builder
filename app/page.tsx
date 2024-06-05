import Header from "@/components/ui/header";
import { SessionProvider } from "next-auth/react";
import { db } from "@/db";
import LandingPage from "./landing-page";

export default async function Home() {
  return (
    <>
      <SessionProvider>
        <Header />
        <main className="flex min-h-screen flex-col items-centers">
          <LandingPage />
        </main>
      </SessionProvider>
    </>
  );
}

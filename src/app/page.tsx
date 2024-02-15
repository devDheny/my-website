
import { LinkedInLogoIcon as LinkedIn, GitHubLogoIcon as GitHub } from "@radix-ui/react-icons";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-col items-center justify-center p-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <h1 className="text-6xl md:text-8xl font-bold font-mono text-center text-slate-100"><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 animate-pulse">&#123;</span>Denilo<br />Feitosa<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 animate-pulse">&#125;</span></h1>
      <p className="text-lg font-bold font-arial text-center text-slate-100 px-4 py-1 mt-2 text-slate-800 rounded bg-gradient-to-r from-pink-500 to-violet-500">Front-end Dev</p>
    </main>
  );
}

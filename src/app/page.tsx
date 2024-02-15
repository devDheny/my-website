
import { LinkedInLogoIcon as LinkedIn, GitHubLogoIcon as GitHub } from "@radix-ui/react-icons";
<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap')
</style>

export default function Home() {
  return (
    <main id="home" className="flex min-h-screen flex-col md:flex-row items-center justify-center p-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <h1 className="text-6xl md:text-8xl font-bold text-center text-slate-100">Dheny<span className="text-3xl md:text-4xl font-light font-arial text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 uppercase">&#46;Dev</span></h1>
    </main>
  );
}

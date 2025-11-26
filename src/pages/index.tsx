import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${inter.className} flex min-h-screen items-center justify-center bg-white font-sans dark:bg-zinc-950`}
    >
      <main className="flex flex-col items-center gap-8 p-8 text-center">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          TRT Tracker Support
        </h1>
        <div className="flex flex-col gap-4">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Need help? Have questions or feedback?
          </p>
          <p className="text-lg text-zinc-900 dark:text-zinc-50">
            Contact us at:{' '}
            <a
              href="mailto:support@trttracker.com"
              className="font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
            >
              support@trttracker.app
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

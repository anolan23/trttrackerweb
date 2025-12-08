import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function Privacy() {
  return (
    <div
      className={`${inter.className} flex min-h-screen items-center justify-center bg-white font-sans dark:bg-zinc-950`}
    >
      <main className="flex max-w-3xl flex-col gap-6 p-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Privacy Policy for TRT Tracker iOS App
        </h1>

        <div className="flex flex-col gap-2">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Version 1.0
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Last Updated: November 29, 2025
          </p>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Data Storage
          </h2>
          <p className="text-base text-zinc-700 dark:text-zinc-300">
            TRT Tracker uses iCloud to store and sync your data across all your
            devices signed in with the same Apple ID. Your data is stored in
            your private iCloud account and processed by Apple in accordance
            with Apple&apos;s Privacy Policy.
          </p>
          <p className="text-base text-zinc-700 dark:text-zinc-300">
            We do not collect, access, or transmit your data to our own servers.
            All data remains private to you and is accessible only through your
            Apple ID. You maintain full control over your data through your
            iCloud account settings.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            HealthKit Data
          </h2>
          <p className="text-base text-zinc-700 dark:text-zinc-300">
            The app may optionally access your HealthKit clinical lab records
            with your permission. This data is stored in your iCloud account
            (along with your other app data) and is never shared with us or
            third parties.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            No Third-Party Sharing
          </h2>
          <p className="text-base text-zinc-700 dark:text-zinc-300">
            We do not share, sell, or transmit your data to any third parties.
            Apple processes your iCloud data as part of their iCloud services.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Contact
          </h2>
          <p className="text-base text-zinc-700 dark:text-zinc-300">
            If you have questions about this privacy policy, please contact{' '}
            <a
              href="mailto:support@trttracker.app"
              className="font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
            >
              support@trttracker.app
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}

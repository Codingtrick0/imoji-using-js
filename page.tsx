import { Toolbar } from "./toolbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex bg-black min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full text-white justify-center border-b bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:bg-zinc-800/30">
          Loom&apos;s Emoji Reaction Toolbar
        </p>
        <div className="fixed bottom-0 left-0 flex h-20 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center text-white gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://x.com/mfts0"
            target="_blank"
            rel="noopener noreferrer">
            by @mfts0
          </a>
        </div>
      </div>

      <div className="relative flex flex-col gap-y-4 sm:gap-x-8 sm:flex-row items-center">
        <Toolbar />
      </div>

      <div className="flex flex-col gap-y-4 items-center justify-center text-center mb-20">
       
      </div>
    </main>
  );
}

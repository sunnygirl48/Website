import Image from "next/image";
import Link from "next/link";
import { isHidden } from "@/lib/flags";
import splash from "../../public/images/splash.jpg";

export default function Home() {
  return (
    <div className="relative min-h-dvh w-full">
      <Image
        src={splash}
        alt=""
        priority
        sizes="100vw"
        className="object-splash h-auto min-h-dvh w-full object-cover"
      />
      <Link
        href="/"
        className="px-safe pt-safe fixed left-0 top-0 z-10 inline-flex min-h-tap items-center text-fluid-lg italic tracking-tight text-white drop-shadow-lg"
      >
        Sanya Mittal
      </Link>
      <div className="pb-safe fixed inset-x-0 bottom-0 z-10 flex justify-center">
        <Link
          href={isHidden("/work") ? "/projects" : "/work"}
          className="inline-flex min-h-tap items-center px-gutter text-fluid-sm tracking-wide text-white underline underline-offset-4 drop-shadow-lg transition-opacity hover:opacity-70"
        >
          enter here
        </Link>
      </div>
    </div>
  );
}

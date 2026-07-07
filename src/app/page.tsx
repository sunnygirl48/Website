import Image from "next/image";
import Link from "next/link";
import splash from "../../public/images/splash.jpg";

export default function Home() {
  return (
    <div className="relative min-h-svh w-full">
      <Image
        src={splash}
        alt=""
        priority
        sizes="100vw"
        className="h-auto w-full"
      />
      <div className="fixed left-0 top-0 z-10 p-8 text-lg italic tracking-tight text-white drop-shadow-lg">
        Sanya Mittal
      </div>
      <div className="fixed inset-x-0 bottom-8 z-10 flex justify-center">
        <Link
          href="/work"
          className="text-sm tracking-wide text-white underline underline-offset-4 drop-shadow-lg transition-opacity hover:opacity-70"
        >
          enter here
        </Link>
      </div>
    </div>
  );
}

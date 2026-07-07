import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-svh flex-col">
      <Nav />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}

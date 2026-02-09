import MemberCard from "@/components/layout/MemberCard";
import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import execs from "@/data/execs.json";

export default function Team() {
  return (
    <main className="w-full md:pt-38 pt-30 flex min-h-screen flex-col items-center justify-between">
      <Navigation />
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-6xl font-serif text-white text-center md:text-left mb-8">Meet the Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center sm:justify-items-stretch">
          {execs.map((exec) => (
            <MemberCard
              key={exec.name}
              title={exec.name}
              description={exec.title}
              imgUrl={exec.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

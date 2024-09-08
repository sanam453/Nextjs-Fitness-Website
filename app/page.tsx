import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="px-8">
      <div className="absolute inset-0 bg-[url('/cover.png')] bg-no-repeat bg-cover w-full h-screen">
        <div className="text-center grid place-items-center h-screen">
          <div>
            <h1 className="md:text-7xl text-4xl font-bold">More Confident</h1>
            <p className="text-center max-w-4xl mt-4 mb-10">
              Embracing a consistent workout routine not only enhances your
              physical appearance but also strengthens your mental resilience,
              fostering a more assured and empowered version of yourself.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-white opacity-90 text-gray-900 hover:opacity-100 hover:bg-white transition-opacity"
              >
                Start Now
              </Button>
              <Button size="lg" className="border">
                Download App
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

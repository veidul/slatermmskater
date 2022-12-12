export default function Hero() {
  return (
    <div
      className="bg-[url('../public/slater-banner.png')] bg-cover bg-center bg-no-repeat
    "
    >
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className=" text-6xl my-12 font-bold text-amber-900">
            Slater MM Skater
          </div>
          <p className="mt-8 text-xl font-bold tracking-tight text-orange-700 sm:text-5xl lg:text-4xl">
            Amateur Skateboarder
          </p>
        </div>
      </div>
    </div>
  );
}

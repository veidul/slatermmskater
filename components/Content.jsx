import Carousel from "./Carousel";
import Image from "next/image";
export default function Content() {
  return (
    <>
      <Carousel />
      <div className="relative">
        <div className="lg:absolute content-center lg:inset-0">
          <div className="pt-14 ml-52">
            <Image
              src="https://i.ibb.co/pjgTSmV/slater-5th.png"
              alt="Slater contest 5th place"
              width={572}
              height={763}
            />
          </div>
        </div>
        <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
              <h2 className="font-semibold leading-6 text-orange-700">
                Amateur skateboarder
              </h2>
              <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-amber-900 sm:text-4xl">
                Slater
              </h3>
              <p className="mt-8 text-lg text-orange-700 font-semibold">
                Slater is a 10 year old skateboarder from Southern California.
              </p>
              <div className="prose prose-indigo mt-5 text-orange-700 font-semibold">
                <p>
                  First stepping on a skateboard at the age of 2 years old. He
                  has since become obsessed with skateboard progression. Pushing
                  the limits of what a 10 year old body is capable of. He skates
                  competitively in contests all over California.
                </p>
                <p>
                  Slater has two companies that support his skateboard
                  lifestyle. Surfside sports which is a board sport retailer
                  located in Newport Beach, CA. S1 helmets is a helmet and pad
                  company located in Los Angeles, CA.
                </p>
                <p>
                  Slater in 2021 placed 5th in CASL national championship in
                  vert skating at Woodward West.
                </p>
                <p>
                  Slater enjoys skating with friends and competing against the
                  best in his age group of 8-12 year olds. On his free time
                  Slater also practices Brazilian Jiu-Jitsu, playing Fortnite,
                  collecting pokemon cards, snowboarding, and hanging with
                  friends.
                </p>
                <p>
                  Slater's favorite drink is sweet tea. Some of his favorite
                  thing's to eat are steak, pasta with parmesan, and chicken
                  nuggets.
                </p>
                <p>
                  He dreams of making it to the Olympics to represent his
                  country against the best skateboarders in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { ElfsightWidget } from "react-elfsight-widget";

export default function Mid() {
  return (
    <>
      <div className="relative bg-yellow-600 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-lg font-semibold text-gray-900">
            <a href="https://www.instagram.com/slatermmskater/">
              Follow Slater
            </a>
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            @SlaterMMSkater
          </p>
        </div>
      </div>
      <ElfsightWidget widgetID="1838dc00-6666-4259-aa88-77fc8589d462" />
    </>
  );
}

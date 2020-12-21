import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl sm:text-6xl lg:text-6xl mt-10 md:mt-24 leading-none font-bold tracking-tight text-center">
        Rapidly build modern websites without ever leaving your HTML.
      </h1>

      <div className="grid w-full grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-4 mt-4 md:mt-10">
        <Card href="/nextjs" imgSrc="/img/nextjs.svg" layoutId="nextjs-logo" />
        <Card
          href="/tailwindcss"
          imgSrc="/img/tailwind.svg"
          layoutId="tailwind-logo"
        />
        <Card
          href="/framermotion"
          imgSrc="/img/framermotion.svg"
          layoutId="framermotion-logo"
        />
      </div>
    </div>
  );
}

import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-blue-noise">
      <div className="m-auto flex flex-col items-center">
        <h2 className="mb-24 mt-8 text-center text-xl">
          Ein Film von <br /> Eric Schirl and Christian Kogler
        </h2>
        <Image src="/bubble.png" alt="Sujet Image" width={807} height={762} priority />
        <h1>
          <Image
            className="mt-24"
            src="/logo.svg"
            alt="Wirf dein Herz ins Meer"
            width={1017}
            height={61}
          />
        </h1>
        <p className="mt-16 max-w-6xl text-center">
          "Wirf dein Herz ins Meer" ist ein Dokumentarfilm über das menschliche Dilemma, dass nichts
          jemals sicher ist. Er ist in 4 Teile gegliedert - OCD (Zwangsstörung) als individueller
          Versuch eines "Auswegs", die Auswirkung des Dilemmas auf unsere Gesellschaften vor allem
          im Zusammenhang mit "Risikovermeidung", der Bezug dieses Dilemmas zu Religion und einer
          möglichen "Heilung“.
        </p>
      </div>
    </main>
  );
}

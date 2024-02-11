import Image from "next/image";
import prisma from "./utils/prisma";


export default async function Home() {
  const visitors = await prisma.visitorCounter.findMany();
  return (
    <main>
    <h1 className="font-bold">Visitors</h1>
    <ul>
      {visitors.map((visitorCounter) => (
        <li key={visitorCounter.id}>{visitorCounter.visitorNumber}</li>
      ))}
    </ul>
  </main>
  );
}


import Image from "next/image";
import prisma from "./utils/prisma";
import "./quotes/page"
import { Zitat, Button } from "./quotes/page";
import "./header/header"

export default async function Home() {
  // Increment visitor number in the database
  await prisma.visitorCounter.update({
    where: { id: 1 }, // Assuming id 1 is the specific visitor you want to update
    data: {
      visitorNumber: {
        increment: 1
      }
    }
  });

  // Fetch all visitor numbers
  const visitors = await prisma.visitorCounter.findMany();
  
  // Calculate the sum of visitor numbers
  const sumVisitorNumbers = visitors.reduce((acc, visitor) => acc + visitor.visitorNumber, 0);

  return (
   
    <main>
      <h1 className="font-bold">Visitors</h1>
      <Zitat />
      <ul>
        {visitors.map((visitorCounter) => (
          <li key={visitorCounter.id}>{visitorCounter.visitorNumber}</li>
        ))}
        Total: {sumVisitorNumbers}
      </ul>
    </main>
  );
}

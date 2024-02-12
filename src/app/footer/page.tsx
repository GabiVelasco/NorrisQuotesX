/**
 * Footer component for the application.
 * This component increments the visitor number in the database every time the page is loaded.
 * It also displays a list of visitor numbers and calculates the sum of visitor numbers.
 * As long as the site does not have a login yet, it calculates both the number of times one visitor visited the page
 * and the total number of unique visitors who visited the page.
 * Both numbers are initially the same due to the absence of a login feature.
 * @returns {ReactElement} The footer element with visitor information.
 */

import React from "react";
import prisma from "../utils/prisma";

export async function Footer() {
  // Increment visitor number in the database
  await prisma.visitorCounter.update({
    where: { id: 1 }, // ID 1 is the specific identifier for the site and updates the number of visitors.
    data: {
      visitorNumber: {
        increment: 1
      }
    }
  });

  // Fetch all visitor numbers
  const visitors = await prisma.visitorCounter.findMany();
  
  // or as second alternative Calculate the sum of visitor numbers
  const sumVisitorNumbers = visitors.reduce((acc, visitor) => acc + visitor.visitorNumber, 0);

  return (
    <footer className="sticky bottom-0 bg-white text-black p-4">
    
      <div className="visitorsCounter">
        <h1 className="font-bold">Visitors</h1>
        <ul>
          {visitors.map((visitorCounter) => (
            <li key={visitorCounter.id}>{visitorCounter.visitorNumber}</li>
          ))}
          {/* Total: {sumVisitorNumbers} */}
        </ul>
      </div>
      
    </footer>
  );
};

export default Footer;

/**
 * This page component represents the home page of the application.
 * It includes a layout with a header, footer, and a main section.
 * Within the main section, it displays an image and a Chuck Norris quote component.
 * The layout is structured using a Layout component.
 */

import Image from "next/image";
import bild4 from '../app/images/bild4.jpg';
import Header from "./header/page";
import Footer from "./footer/page";
import { Zitat } from "./quotes/page";
import "./quotes/page";
import "./header/page";
import "./footer/page";
import Layout from "./layout";

/**
 * Home page component.
 * @returns {ReactElement} The home page layout.
 */
export default async function Home() {
  return (
    <Layout>
      <Header/>
      <main className="justify-center place-content-center items-center h-screen items-stretch">
        <div className="max-w-[1000px] mx-auto">
          <div className="container relative">
            <div className="absolute justify-start items-center gap-80px inline-flex">
              <Image className="image" src={bild4} alt="Bild 4" width={350} height={350} />
              <div className="text-center">
                <Zitat/><br />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </Layout>
  );
}

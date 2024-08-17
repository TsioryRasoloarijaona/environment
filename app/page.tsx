"use client"
import Header from "./components/heroes/header/Header";
import Footer from "./components/Footer/Footer";
import { StickyScroll } from "./components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Cards from "./components/cards/Cards";
import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";
import TutorCarousel from "./components/carousel/Carousel";
 
const content = [
  {
    title: "Reforestation Efforts",
    description:
      "Join hands in the fight against deforestation. Through reforestation, we can restore lost forests, combat climate change, and protect biodiversity. Our platform connects you with local and global initiatives, helping you contribute to a greener planet.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--brown-500))] flex items-center justify-center text-white">
        Reforestation Efforts
      </div>
    ),
  },
  {
    title: "The Dangers of Deforestation",
    description:
      "Deforestation poses a severe threat to our planet, leading to loss of habitats, increased carbon emissions, and disrupted ecosystems. Learn about the dangers and take action. Awareness is the first step toward preservation.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/deforestation.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Deforestation impact"
        />
      </div>
    ),
  },
  {
    title: "Community-Led Environmental Initiatives",
    description:
      "Communities can thrive by leading environmental initiatives. Discover how rebuilding ecosystems, planting trees, and preserving nature not only protect the environment but also foster stronger, healthier communities. Be part of the change.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--green-500))] flex items-center justify-center text-white">
        Community Initiatives
      </div>
    ),
  },
  {
    title: "Sustainable Living",
    description:
      "Adopt sustainable practices in daily life to support environmental restoration. From reducing waste to planting trees, every effort counts. Explore tips, resources, and community stories that inspire a sustainable future.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--yellow-500))] flex items-center justify-center text-white">
        Sustainable Living
      </div>
    ),
  },
];


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoading(false); 
    }, 3000); 
    return () => clearTimeout(timer); 
}, []);
  return (
    <>
    <Loader isLoading={isLoading} />
      <main className="bg-gray-primary">
        <Header/>
        <Cards/>
        <StickyScroll content={content}/>
        <TutorCarousel/>
        <Footer/>
      </main>
    </>
  );
}

import Image from "next/image";
import CardComponent from "./components/Card";

export default function Home() {
  return (
    <main className="bg-gray-primary">
      <div className="grid grid-cols-3 w-[80vw] mx-auto py-16">
        <div className="mx-auto">
          <CardComponent />
        </div>
        <div className="mx-auto">
          <CardComponent />
        </div>
        <div className="mx-auto ">
          <CardComponent />
        </div>
        <div className="mx-auto">
          <CardComponent />
        </div>
        <div className="mx-auto">
          <CardComponent />
        </div>
        <div className="mx-auto">
          <CardComponent />
        </div>
        
       
      </div>
    </main>
  );
}

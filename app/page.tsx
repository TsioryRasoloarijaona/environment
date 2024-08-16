import CardComponent from "./components/Card";
import Header from "./components/heroes/header/Header";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className="bg-gray-primary">
      <Header/>
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
      <Footer/>
    </main>
  );
}

import CardComponent from "../Card";

const Cards =() => {
    return (
      <>
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
      </>
    );
  }

  export default Cards;
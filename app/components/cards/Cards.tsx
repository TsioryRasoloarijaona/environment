import { SimpleGrid, Box } from "@chakra-ui/react";
import CardComponent from "../Card";
const cardData = [
    {
      heading: "Reforestation Initiative",
      src: "https://t4.ftcdn.net/jpg/07/15/05/81/360_F_715058129_S5ac1iQnquKYT3FdrM20GMXFCFtAQMv4.jpg",
      title: "Planting Trees for Future",
      description: "Join us in our mission to restore forests and combat climate change through community-driven reforestation efforts.",
    },
    {
      heading: "Sustainable Living",
      src: "https://t4.ftcdn.net/jpg/07/15/05/81/360_F_715058129_S5ac1iQnquKYT3FdrM20GMXFCFtAQMv4.jpg",
      title: "Eco-Friendly Communities",
      description: "Learn how communities around the world are embracing sustainable living practices to protect the environment.",
    },
    {
      heading: "Community Engagement",
      src: "https://t4.ftcdn.net/jpg/07/15/05/81/360_F_715058129_S5ac1iQnquKYT3FdrM20GMXFCFtAQMv4.jpg",
      title: "Working Together for a Greener Tomorrow",
      description: "Explore how collective action and community involvement are essential for a sustainable future.",
    },
  ];  
  
const Cards =() => {
    return (
      <>
        <Box w="80vw" mx="auto" py="16">
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 3 }} 
        spacing={8}
      >
        {cardData.map((card, index) => (
          <CardComponent
            key={index}
            heading={card.heading}
            src={card.src}
            title={card.title}
            description={card.description}
          />
        ))}
      </SimpleGrid>
    </Box>
      </>
    );
  }

  export default Cards;
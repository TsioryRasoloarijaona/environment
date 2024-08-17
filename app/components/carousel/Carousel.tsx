import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Image,
  Flex,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 800,
  autoplaySpeed: 8000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function TutorCarousel() {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      title: "Pinus",
      text: "Pinus is essential for the fight against erosion and for the reforestation of degraded areas. Its needles and resin have multiple uses, ranging from paper production to traditional medicine.",
      image:
        "https://img.freepik.com/photos-gratuite/vue-rapprochee-arbre-noel-nu_23-2150960503.jpg?t=st=1723794998~exp=1723798598~hmac=60d591f4224829a4671c204943a741d5e577a6ffde1302e8f59f570ecf2c073f&w=826",
    },
    {
      title: "Norfolk Araucaria",
      text: "Plant the Norfolk Araucaria! It is a beautiful tree that helps fight climate change by capturing carbon. Its wood is also useful for carpentry and construction. Together, let's protect our planet!",
      image:
        "https://i.pinimg.com/564x/0d/71/fb/0d71fba218f76289a74d79135f4e6d31.jpg",
    },
    {
      title: "Eucalyptus",
      text: "Eucalyptus is a fast-growing tree used for the production of wood and paper. It also has antiseptic properties and helps purify the air with its essential oils.",
      image:
        "https://img.freepik.com/photos-gratuite/fond-eucalyptus-elegant_23-2149425027.jpg?t=st=1723794128~exp=1723797728~hmac=883e6d0d492b37e0af25f258b77d2e7ee082765fff9f434d93c843ec012b5a37&w=740",
    },
    {
      title: "Ravintsara",
      text: "Discover Ravintsara, a tree with medicinal leaves. It promotes your health while preserving biodiversity by providing habitat for many species. Adopt it for your well-being and that of the planet!",
      image:
        "https://i.pinimg.com/564x/c3/27/2c/c3272c9c4ec9beb64c130271b3b7211d.jpg",
    },
    {
      title: "Margousier",
      text: "Neem, is widely used for its natural insecticidal properties, reducing the need for chemical pesticides. In addition, its leaves and seeds are used in traditional medicine and cosmetics, making it a multifunctional tree",
      image:
        " https://i.pinimg.com/564x/7d/de/e9/7ddee97f0ff1e2382fe7acc49d690b90.jpg",
    },
    {
      title: "Bamboo",
      text: "Bamboo is a fast-growing plant that plays an important role in preventing soil erosion and regenerating degraded land. It is also used in construction, crafting and as a food source.",
      image:
        "https://i.pinimg.com/564x/dd/d6/e3/ddd6e3b8e9a9694ecdd96335021b2f53.jpg",
    },
    {
      title: "Tamarind",
      text: "The Tamarind tree is a fruit tree whose pods are used in cooking for their tangy pulp. It also contributes to soil improvement thanks to its deep roots which aerate the soil.",
      image:
        "https://i.pinimg.com/564x/4f/76/36/4f76366a069d6a55c99f297a9df14c1e.jpg",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"500px"}
      width={"full"}
      overflow={"hidden"}
      className="rounded-2xl"
      color="black"
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box key={index} height={"6xl"} position="relative">
            <Container
              size="container"
              height="600px"
              position="relative"
              display="flex"
              alignItems="center"
            >
              <Flex
                direction={{ base: "column", md: "row" }}
                alignItems="center"
                justifyContent="space-between"
                width="full"
                height="auto"
                gap="6px"
              >
                <Stack spacing={6} maxW={"lg"} alignItems="flex-start">
                  <Heading
                    fontSize={{ base: "4xl", md: "3xl", lg: "4xl" }}
                    color="black"
                  >
                    {card.title}
                  </Heading>
                  <Text color="black">{card.text}</Text>
                </Stack>
                <Image
                  src={card.image}
                  alt="Image"
                  boxSize={{ base: "full", md: "200px" }}
                  objectFit="cover"
                  ml={{ base: 0, md: 4 }}
                  className="rounded-xl"
                />
              </Flex>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

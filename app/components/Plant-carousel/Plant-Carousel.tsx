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
        "https://i.pinimg.com/564x/32/a5/3c/32a53c7807489ca001ce4b2673a64bab.jpg",
      image2:
        "https://img.freepik.com/photos-gratuite/vue-rapprochee-arbre-noel-nu_23-2150960503.jpg?t=st=1723794998~exp=1723798598~hmac=60d591f4224829a4671c204943a741d5e577a6ffde1302e8f59f570ecf2c073f&w=826",
    },
    {
      title: "Norfolk Araucaria",
      text: "Plant the Norfolk Araucaria! It is a beautiful tree that helps fight climate change by capturing carbon. Its wood is also useful for carpentry and construction. Together, let's protect our planet!",
      image:
        "https://i.pinimg.com/564x/32/a5/3c/32a53c7807489ca001ce4b2673a64bab.jpg",
      image2:
        "https://i.pinimg.com/564x/57/2a/4d/572a4ddeefa76d5b25f6da7fab239dc7.jpg",
    },
    {
      title: "Eucalyptus",
      text: "Eucalyptus is a fast-growing tree used for the production of wood and paper. It also has antiseptic properties and helps purify the air with its essential oils.",
      image:
        "https://i.pinimg.com/564x/32/a5/3c/32a53c7807489ca001ce4b2673a64bab.jpg",
      image2:
        "https://img.freepik.com/photos-gratuite/fond-eucalyptus-elegant_23-2149425027.jpg?t=st=1723794128~exp=1723797728~hmac=883e6d0d492b37e0af25f258b77d2e7ee082765fff9f434d93c843ec012b5a37&w=740",
    },
    {
      title: "Ravintsara",
      text: "Discover Ravintsara, a tree with medicinal leaves. It promotes your health while preserving biodiversity by providing habitat for many species. Adopt it for your well-being and that of the planet!",
      image:
        "https://i.pinimg.com/564x/32/a5/3c/32a53c7807489ca001ce4b2673a64bab.jpg",
      image2:
        "https://i.pinimg.com/564x/c3/27/2c/c3272c9c4ec9beb64c130271b3b7211d.jpg",
    },
    {
      title: "Margousier",
      text: "Neem, is widely used for its natural insecticidal properties, reducing the need for chemical pesticides. In addition, its leaves and seeds are used in traditional medicine and cosmetics, making it a multifunctional tree",
      image:
        "https://i.pinimg.com/564x/32/a5/3c/32a53c7807489ca001ce4b2673a64bab.jpg",
      image2:
        " https://i.pinimg.com/564x/9e/40/47/9e40473a36d3ff7e93dc999f9bf5585e.jpg",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
      className="p-1 rounded-4xl"
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
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Container
              size="container.lg"
              height="600px"
              width="1000px"
              position="relative"
              display="flex"
              alignItems="center"
            >
              <Flex
                direction={{ base: "column", md: "row" }}
                alignItems=""
                justifyContent="space-between"
                width="full"
              >
                <Stack spacing={6} maxW={"lg"} alignItems="flex-start">
                  <Heading
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    color="black"
                  >
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: "md", lg: "lg" }} color="black">
                    {card.text}
                  </Text>
                </Stack>
                <Image
                  position="absolute"
                  src="https://i.pinimg.com/564x/88/85/d3/8885d331b0b125d06525e697f79872f2.jpg"
                  alt="img"
                  boxSize={{ base: "100px", md: "150px" }}
                  objectFit="cover"
                  ml={{ base: 0, md: 4 }}
                  bottom="0"
                  left="0"
                  className="rounded-r-full"
                ></Image>
                <Image
                  position="absolute"
                  src={card.image2}
                  alt="Image2"
                  boxSize={{ base: "110px", md: "200px" }}
                  objectFit="cover"
                  ml={{ base: 0, md: 4 }}
                  bottom="0"
                  right="0"
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

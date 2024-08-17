import React, { useEffect, useState } from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import { Card, Stack, CardBody, Text, CardFooter } from "@chakra-ui/react";
import ButtonComponent from "@/app/components/buttons/ButtonComponent";
import Image from "next/image";

interface Activity {
  id: string;
  date: string;
  image: string | null;
  name: string;
  idLocation: string;
  idUser: string;
  idTreeType: string;
}

export default function Activities() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      const decodedToken: { sub: string } = jwtDecode(token);
      const idUser = decodedToken.sub;

      axios.get<Activity[]>(`https://environment-pyv8.onrender.com/plants/${idUser}`)
        .then(response => {
          setActivities(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {activities.length === 0 ? (
        <p>No activities found.</p>
      ) : (
        activities.map(activity => (
          <Card
            key={activity.id}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            mb="4" 
          >
            <div className="w-[250px] relative">
              <Image
                src={activity.image ? `https://environment-pyv8.onrender.com/${activity.image}` : "https://i.pinimg.com/564x/2b/b6/f9/2bb6f9b59bd5c43c76b31f3f135be7bc.jpg"} 
                alt={activity.name || "Activity Image"}
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0"
              />
            </div>

            <Stack>
              <CardBody>
                <div className="flex gap-3">
                  <div className="border px-3 rounded-full">
                    <Text py="2">{activity.name}</Text>
                  </div>
                  <div className="border px-3 rounded-full">
                    <Text py="2">Date - {activity.date}</Text>
                  </div>
                </div>
              </CardBody>

              <CardFooter>
                <ButtonComponent text="Location" />
              </CardFooter>
            </Stack>
          </Card>
        ))
      )}
    </div>
  );
}

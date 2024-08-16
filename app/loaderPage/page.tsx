"use client";

import { Box } from "@chakra-ui/react";
import Loader from "../components/loader/Loader";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {jwtDecode} from "jwt-decode"; 

interface DecodedToken {
  scope: string;
}


export default function LoaderPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

const token = localStorage.getItem("token")

  useEffect(() => {
    if (token) {
      try {
        const decoded: DecodedToken = jwtDecode(token);
        if (decoded.scope === "admin") {
          router.push("/dashboard");
        } else if (decoded.scope === "employee") {
          router.push("/employeeSection");
        } else {
          router.push("/customerSection");
        }
      } catch (error) {
        console.error("Invalid token:", error);
        router.push("/"); 
      }
    } else {
      router.push("/");
    }
  }, [token, router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <Loader isLoading={isLoading} />
    </Box>
  );
}

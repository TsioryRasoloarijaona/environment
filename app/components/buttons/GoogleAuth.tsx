"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {auth} from '@/app/storageConfig/config'
import { Button } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {create} from "zustand"

interface User {
  displayName: string;
  photoURL: string | StaticImport;
  email: string;
}

interface userState {
  name: string ;
  email: string ;
  image : string
  updateName: (name: string) => void;
  updateEmail: (email: string) => void;
  updateImg: (image: string) => void;
}

export const usePersonStore = create<userState>((set) => ({
  name: '',
  email: '',
  image:'',
  updateName: (name : string ) => set(() => ({ name : name })),
  updateEmail: (email : string ) => set(() => ({ email: email })),
  updateImg: (image : string ) => set(() => ({ image: image  })),
}))


export default function GoogleAuth() {
  const {  updateName, updateEmail , updateImg } = usePersonStore((state) => ({
    updateName: state.updateName,
    updateEmail: state.updateEmail,
    updateImg : state.updateImg
  }));

  const provider = new GoogleAuthProvider();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        if (user) {
         updateName(user.displayName || '')
         updateEmail(user.email || '')
         updateImg(user.photoURL || '')
        }
      })
      .catch((error) => {
        error.code;
        error.message;
        error.customData.email;
        GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <Button width={"fit-content"} onClick={signIn} rounded={"full"}>
      <FcGoogle className="mr-3 text-xl" /> Google information
    </Button>
  );
}

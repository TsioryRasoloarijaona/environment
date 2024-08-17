'use client'

import { jwtDecode } from "jwt-decode";

interface DecodedTokenInterface {
    sub: string;
  }
export default function getDecodedId (){
    const token = localStorage.getItem('token');
    const decodedToken: DecodedTokenInterface = jwtDecode(token || '');
    const id = decodedToken.sub;
    return id ; 
}

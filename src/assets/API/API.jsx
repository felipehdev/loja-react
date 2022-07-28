import { React, useEffect, useState } from "react";
import S from './API.module.css'

const API = () => {
    const getProduts = async (page) => {
        const response = await fetch (`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`)
        const data = await response.json();
        console.log((data));

    }
    getProduts(1)



    return (
      123
    );
};

export default API;


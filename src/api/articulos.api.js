import axios from "axios";

export const getArticulosRequest = async () =>
    await axios.get('http://localhost:1234/articulos');

export const getArticuloRequest = async (id) =>
    await axios.get(`http://localhost:1234/articulos/${id}`);
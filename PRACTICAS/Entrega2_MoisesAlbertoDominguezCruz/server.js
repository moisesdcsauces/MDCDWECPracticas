import http from "node:http";
import { readFile, writeFile, rename } from "node:fs/promises";

const archivoInventario = new URL("./inventario.json", import.meta.url);

let inventario = JSON.parse(await readFile(archivoInventario, "utf-8"));
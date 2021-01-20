import Bouilloire from "./class/bouilloire.js";
import Remplire from "./function/remplire.js";
import Chauffer from "./function/chauffer.js";

let bouilloire = new Bouilloire("vide", 0)

console.log(`La bouilloire est ${bouilloire.etat}`);

Remplire(bouilloire);

console.log(`La bouilloire est ${bouilloire.etat} et l'eau est a ${bouilloire.temperature}`);

Chauffer(bouilloire.temperature);
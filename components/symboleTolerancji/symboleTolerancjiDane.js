import prosliniowosc from './img/prostoliniowosc.png';
import plaskosc from './img/plaskosc.png';
import okraglosc from './img/okraglosc.png';
import walcowosc from './img/walcowosc.png';
import zarysPrzekrojuWzdluznego from './img/krsztaltuWyznaczonego.png';
import krztaltuPowierzchnii from './img/krztaltuPowierzchnii.png';
import rownoleglosc from './img/rownoleglosc.png';
import prostopadlosc from './img/prostopadlosc.png';
import nachylenia from './img/nachylenia.png';
import pozycji from './img/pozycji.png';
import wspolosiowosc from './img/wspolosiowosc.png';
import symetria from './img/symetria.png';
import biciaPromieniowe from './img/biciaPromieniowe.png';
import biciaOsiowe from './img/biciaOsiowe.png';


import plaskoscOpis from './img/plaskoscOpis.png';

export const imagesData = [
  {
    kategoria: 'Kształtu',
    name: 'Prostoliniowosc',
    source: prosliniowosc,
    description: "Tolerancja ograniczona równoległymi liniami oddalonymi od siebie o wartość tolerancji",
    modalImage: prosliniowosc
  },
  {
    kategoria: 'Kształtu',
    name: 'Płaskość',
    source: plaskosc,
    description: `Tolerancja ograniczona dwiema płaszczyznami oddalonymi od siebie o wartość tolerancji`,
    modalImage: plaskoscOpis
  },
  {
    kategoria: 'Kształtu',
    name: 'Okrągłość',
    source: okraglosc,
    description: `Tolerancja ograniczona dwiema płaszczyznami oddalonymi od siebie o wartość tolerancji`,
    modalImage: okraglosc
  },
  {
    kategoria: 'Kształtu',
    name: 'Walcowość',
    source: walcowosc,
    description: `Tolerancja ograniczona dwiema płaszczyznami oddalonymi od siebie o wartość tolerancji`,
    modalImage: walcowosc
  },
  // ===============================================================================
  {
    kategoria: 'Kierunku',
    name: 'Równoległość',
    source: rownoleglosc,
    description: `Dwie płaszczyzny oddalone od siebie o wartość, równoległe do bazy. Powierzchnia musi zawrzeć się pomiędzy tymi płaszczyznami.`,
    modalImage: rownoleglosc
  },
  
  {
    kategoria: 'Kierunku',
    name: 'Prostopadłość',
    source: prostopadlosc,
    description: `Dwie płaszczyzny oddalone od siebie o wartość, równoległe do bazy. Powierzchnia musi zawrzeć się pomiędzy tymi płaszczyznami.`,
    modalImage: prostopadlosc
  },
  {
    kategoria: 'Kierunku',
    name: 'Nachylenia',
    source: nachylenia,
    description: `Odchyłka zawiera się pomiędzy równoległymi płaszczyznami oddalonymi od siebie o wartość tolerancji oraz biegnącymi pod nominalnym kątem do powierzchni – bazy`,
    modalImage: nachylenia
  },
    // ==== Tolerancja położenia=======
    {
      kategoria: 'Tolerancja położenia',
      name: 'Odchyłka wyznaczonego obrysu',
      source: pozycji,
      description: `Odchyłka pozycji, oś otworu powinna zawierać się wewnątrz walca o średnicy 0,2 mm. Oś tego walca znajduję sie pozycji nominalnej tj. 15 i 20 mm od rogu.`,
      modalImage: pozycji
    },
    {
      kategoria: 'Tolerancja położenia',
      name: 'Odchyłka wyznaczonego obrysu',
      source: wspolosiowosc,
      description: `Odchyłka pozycji, oś otworu powinna zawierać się wewnątrz walca o średnicy 0,2 mm. Oś tego walca znajduję sie pozycji nominalnej tj. 15 i 20 mm od rogu.`,
      modalImage: wspolosiowosc
    },

    {
      kategoria: 'Tolerancja położenia',
      name: 'Odchyłka wyznaczonego obrysu',
      source: symetria,
      description: `Odchyłka pozycji, oś otworu powinna zawierać się wewnątrz walca o średnicy 0,2 mm. Oś tego walca znajduję sie pozycji nominalnej tj. 15 i 20 mm od rogu.`,
      modalImage: symetria
    },
    // ==== Tolerancja Bicia=======
    {
      kategoria: 'Tolerancja bicia',
      name: 'Bicie',
      source: biciaPromieniowe,
      description: `Odchyłka pozycji, oś otworu powinna zawierać się wewnątrz walca o średnicy 0,2 mm. Oś tego walca znajduję sie pozycji nominalnej tj. 15 i 20 mm od rogu.`,
      modalImage: biciaPromieniowe
    },
    {
      kategoria: 'Tolerancja bicia',
      name: 'Bicie całkowite',
      source: biciaOsiowe,
      description: `Odchyłka pozycji, oś otworu powinna zawierać się wewnątrz walca o średnicy 0,2 mm. Oś tego walca znajduję sie pozycji nominalnej tj. 15 i 20 mm od rogu.`,
      modalImage: biciaOsiowe
    },
  // ==== Tolerancja kształtu wyznaczonej powierzchni lub wyznaczonego zarysu =======
  {
    kategoria: 'Tolerancja kształtu wyznaczonej powierzchni lub wyznaczonego zarysu',
    name: 'Odchyłka wyznaczonego obrysu',
    source: zarysPrzekrojuWzdluznego,
    description: `Odchyłka wyznaczonego zarysu zawiera się między krzywymi odległymi o wartość tolerancji.`,
    modalImage: zarysPrzekrojuWzdluznego
  },
  {
    kategoria: 'Tolerancja kształtu wyznaczonej powierzchni lub wyznaczonego zarysu',
    name: 'Odchyłka wyznaczonej powierzchni',
    source: krztaltuPowierzchnii,
    description: `Odchyłka symetrii, odchyłka pomiędzy osią/płaszczyzną a powierzchnią bazową; przedział tolerancji ograniczony jest 2 płaszczyznami.`,
    modalImage: krztaltuPowierzchnii
  },
  

];

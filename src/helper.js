//obtenemos la diferencia del a;o
export function getYearDifference(year) {
  return new Date().getFullYear() - year;
}

//calculamos el total a pagar segun la marca

export function estimatebyBrand(brand) {
  let increment;

  switch (brand) {
    case "audi":
      increment = 1.3;
      break;
    case "porshe":
      increment = 1.25;
      break;
    case "toyota":
      increment = 1.2;
      break;
    case "citroen":
      increment = 1.15;
      break;
    case "fiat":
      increment = 1.05;
      break
    default:
      break;
  }
  return increment;
}

//calculamos en base al plan

export function estimatebyPlan(plan) {
  return( plan === "basic") ? 1.2 : 1.5;
}
export function primerMayuscula( texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
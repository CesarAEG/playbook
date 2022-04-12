// Ejemplo 6: Uso de map para mostrar las primeras 3 letras de cada elemento en mayúsculas
const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries6.map((country) =>
  country.toUpperCase().slice(0, 3) // el método slice obtiene solo la longitud marcada del string
)
console.log("Ejemplo 6: Uso de map para mostrar las primeras 3 letras de cada elemento en mayúsculas")
console.log(countriesFirstThreeLetters)
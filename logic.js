const prices = [1045.0,234,456.98,238.98,3455,234,1045.0,234];
const sum_total = prices.reduce((sum, number) => sum + number, 0);// Total amount
const average = sum_total/prices.length; // Average
const max_value = Math.max(...prices); // Maximum value

const conditional_sum = () =>{ // Function that adds the values ​​that are less than 1500
    return prices.reduce((sum, number) => sum + (number < 1500 ? number : 0), 0);
};
const moda = () => { // Function that calculates the number that repeats the most
    const counter = {};
    prices.forEach((value) => {
    counter[value] = !counter[value] ? 1 : counter[value]+=1;
    });
    return Object.keys(counter).map(item => (
        {number: item, times: counter[item]}
    ))
    .sort((a,b) => b.times - a.times)
    .slice(0,1)
};
const {number, times} = moda()[0];

console.log(`La suma total es:  ${sum_total}$
El promedio es: ${average}$
El valor máximo es: ${max_value}$
Suma de valores menores a 1500$: ${conditional_sum()}$
El número que mas se repite es ${number} y se repite ${times} veces
`);
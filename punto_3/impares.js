function numerosImpares(numero) {
    if (numero < 1) {
      throw new Error('Ingrese un número entero positivo mayor o igual a 1.');
    }

    if (!Number.isInteger(numero)) {
        throw new Error(`Ingrese un número entero positivo,no un "${typeof numero}"`);
    }
  
    const impares = [];
  
    for (let i = 1; i <= numero; i += 2) {
      impares.push(i);
    }
  
    return impares;
  }
  
  const numeroEntrada = 430;
  const resultado = numerosImpares(numeroEntrada);
  console.log(resultado);
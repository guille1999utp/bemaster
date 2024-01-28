// sin((x+y)*z)
function funcionMatematicaSenoProducto(x, y, z) {
    let sumaXY = x + y;
    let productoSumaZ = sumaXY * z;
    let senoDelProducto = Math.sin(productoSumaZ);
    return senoDelProducto;
}


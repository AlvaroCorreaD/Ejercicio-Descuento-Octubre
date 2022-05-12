btnabonar.addEventListener("click", () => {
  let dato1 = document.getElementById("datomonto");
  let dato2 = document.getElementById("datocantidad");
  let dato3 = document.getElementById("datomes");
  let monto: number = dato1.value;
  let cantidad: number = dato2.value;
  let montocondescuento: number = 0;
  let descuento: number = 0;
  let valorfinal: number = monto * cantidad;
  let mes: string = dato3.value;
  if (mes == "Octubre") {
    descuento = (valorfinal * 15) / 100;
    montocondescuento = valorfinal - descuento;
    console.log(
      "Se le otorga un 15% de descuento en su compra por abonar en el mes de Octubre." +
        " Valor final: " +
        montocondescuento
    );
  } else {
    console.log("No se aplica descuento." + " Valor Final: " + valorfinal);
  }
});

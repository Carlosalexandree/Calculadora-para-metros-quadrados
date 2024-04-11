function calcular() {
  var forma = document.getElementById("forma").value;
  var lado1 = parseFloat(document.getElementById("lado1").value);
  var lado2 = parseFloat(document.getElementById("lado2").value);
  var resultadoCalculo = document.getElementById("resultado");
  var area, perimetro;

  if (forma === "triangulo") {
    area = (lado1 * lado2) / 2;
    perimetro =
      lado1 + lado2 + Math.sqrt(Math.pow(lado1, 2) + Math.pow(lado2, 2));
  } else if (forma === "quadrado") {
    area = lado1 * lado1;
    perimetro = lado1 * 4;
  } else if (forma === "retangulo") {
    area = lado1 * lado2;
    perimetro = 2 * (lado1 + lado2);
  }

  resultadoCalculo.innerHTML = `<p>Área do terreno: ${area} metros quadrados</p>
                            <p>Perímetro do terreno: ${perimetro} metros</p>`;
}

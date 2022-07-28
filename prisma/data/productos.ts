const productos = [
    {
        nombre: "Café Caramel con Chocolate",
        precio: 59.9,
        imagen: "cafe_01",
        categoriaId: '62e0673501dcc878a6eeb367'
      },
      {
        nombre: "Café Frio con Chocolate Grande",
        precio: 49.9,
        imagen: "cafe_02",
        categoriaId: '62e0673501dcc878a6eeb367'
      },
      {
        nombre: "Latte Frio con Chocolate Grande",
        precio: 54.9,
        imagen: "cafe_03",
        categoriaId: '62e0673501dcc878a6eeb367'
      },
      {
        nombre: "Latte Frio con Chocolate Grande",
        precio: 54.9,
        imagen: "cafe_04",
        categoriaId: '62e0673501dcc878a6eeb367'
      },
      {
        nombre: "Malteada Fria con Chocolate Grande",
        precio: 54.9,
        imagen: "cafe_05",
        categoriaId: '62e0673501dcc878a6eeb367'
      },
      {
        nombre: "Café Mocha Caliente Chico",
        precio: 39.9,
        imagen: "cafe_06",
        categoriaId: '62e0673501dcc878a6eeb367'
      },
      {
        nombre: "Café Mocha Caliente Grande con Chocolate",
        precio: 59.9,
        imagen: "cafe_07",
        categoriaId: '62e0673501dcc878a6eeb367'
      },
      {
        nombre: "Café Caliente Capuchino Grande",
        precio: 59.9,
        imagen: "cafe_08",
        categoriaId: '62e0673501dcc878a6eeb367'
      },
      {
        nombre: "Café Mocha Caliente Mediano",
        precio: 49.9,
        imagen: "cafe_09",
        categoriaId: '62e0673501dcc878a6eeb367'
      },
      {
        nombre: "Café Mocha Frio con Caramelo Mediano",
        precio: 49.9,
        imagen: "cafe_10",
        categoriaId: '62e0673501dcc878a6eeb367'
      },
      {
        nombre: "Café Mocha Frio con Chocolate Mediano",
        precio: 49.9,
        imagen: "cafe_11",
        categoriaId: '62e0673501dcc878a6eeb367'
      },
      {
        nombre: "Café Espresso",
        precio: 29.9,
        imagen: "cafe_12",
        categoriaId: '62e0673501dcc878a6eeb367'
      },
      {
        nombre: "Café Capuchino Grande con Caramelo",
        precio: 59.9,
        imagen: "cafe_13",
        categoriaId: '62e0673501dcc878a6eeb367'
      },
      {
        nombre: "Café Caramelo Grande",
        precio: 59.9,
        imagen: "cafe_14",
        categoriaId: '62e0673501dcc878a6eeb367'
      },
      {
        nombre: "Paquete de 3 donas de Chocolate",
        precio: 39.9,
        imagen: "donas_01",
        categoriaId: '62e0673501dcc878a6eeb36a'
      },
      {
        nombre: "Paquete de 3 donas Glaseadas",
        precio: 39.9,
        imagen: "donas_02",
        categoriaId: '62e0673501dcc878a6eeb36a'
      },
      {
        nombre: "Dona de Fresa ",
        precio: 19.9,
        imagen: "donas_03",
        categoriaId: '62e0673501dcc878a6eeb36a'
      },
      {
        nombre: "Dona con Galleta de Chocolate ",
        precio: 19.9,
        imagen: "donas_04",
        categoriaId: '62e0673501dcc878a6eeb36a'
      },
      {
        nombre: "Dona glass con Chispas Sabor Fresa ",
        precio: 19.9,
        imagen: "donas_05",
        categoriaId: '62e0673501dcc878a6eeb36a'
      },
      {
        nombre: "Dona glass con Chocolate ",
        precio: 19.9,
        imagen: "donas_06",
        categoriaId: '62e0673501dcc878a6eeb36a'
      },
      {
        nombre: "Dona de Chocolate con MÁS Chocolate ",
        precio: 19.9,
        imagen: "donas_07",
        categoriaId: '62e0673501dcc878a6eeb36a'
      },
      {
        nombre: "Paquete de 3 donas de Chocolate ",
        precio: 39.9,
        imagen: "donas_08",
        categoriaId: '62e0673501dcc878a6eeb36a'
      },
      {
        nombre: "Paquete de 3 donas con Vainilla y Chocolate ",
        precio: 39.9,
        imagen: "donas_09",
        categoriaId: '62e0673501dcc878a6eeb36a'
      },
      {
        nombre: "Paquete de 6 Donas",
        precio: 69.9,
        imagen: "donas_10",
        categoriaId: '62e0673501dcc878a6eeb36a'
      },
      {
        nombre: "Paquete de 3 Variadas",
        precio: 39.9,
        imagen: "donas_11",
        categoriaId: '62e0673501dcc878a6eeb36a'
      },
      {
        nombre: "Dona Natural con Chocolate",
        precio: 19.9,
        imagen: "donas_12",
        categoriaId: '62e0673501dcc878a6eeb36a'
      },
      {
        nombre: "Paquete de 3 Donas de Chocolate con Chispas",
        precio: 39.9,
        imagen: "donas_13",
        categoriaId: '62e0673501dcc878a6eeb36a'
      },
      {
        nombre: "Dona Chocolate y Coco",
        precio: 19.9,
        imagen: "donas_14",
        categoriaId: '62e0673501dcc878a6eeb36a'
      },
      {
        nombre: "Paquete Galletas de Chocolate",
        precio: 29.9,
        imagen: "galletas_01",
        categoriaId: '62e0673501dcc878a6eeb36c'
      },
      {
        nombre: "Paquete Galletas de Chocolate y Avena",
        precio: 39.9,
        imagen: "galletas_02",
        categoriaId: '62e0673501dcc878a6eeb36c'
      },
      {
        nombre: "Paquete de Muffins de Vainilla",
        precio: 39.9,
        imagen: "galletas_03",
        categoriaId: '62e0673501dcc878a6eeb36c'
      },
      {
        nombre: "Paquete de 4 Galletas de Avena",
        precio: 24.9,
        imagen: "galletas_04",
        categoriaId: '62e0673501dcc878a6eeb36c'
      },
      {
        nombre: "Galletas de Mantequilla Variadas",
        precio: 39.9,
        imagen: "galletas_05",
        categoriaId: '62e0673501dcc878a6eeb36c'
      },
      {
        nombre: "Galletas de sabores frutales",
        precio: 39.9,
        imagen: "galletas_06",
        categoriaId: '62e0673501dcc878a6eeb36c'
      },
      {
        nombre: "Hamburguesa Sencilla",
        precio: 59.9,
        imagen: "hamburguesas_01",
        categoriaId: '62e0673501dcc878a6eeb368'
      },
      {
        nombre: "Hamburguesa de Pollo",
        precio: 59.9,
        imagen: "hamburguesas_02",
        categoriaId: '62e0673501dcc878a6eeb368'
      },
      {
        nombre: "Hamburguesa de Pollo y Chili",
        precio: 59.9,
        imagen: "hamburguesas_03",
        categoriaId: '62e0673501dcc878a6eeb368'
      },
      {
        nombre: "Hamburguesa Queso y  Pepinos",
        precio: 59.9,
        imagen: "hamburguesas_04",
        categoriaId: '62e0673501dcc878a6eeb368'
      },
      {
        nombre: "Hamburguesa Cuarto de Libra",
        precio: 59.9,
        imagen: "hamburguesas_05",
        categoriaId: '62e0673501dcc878a6eeb368'
      },
      {
        nombre: "Hamburguesa Doble Queso",
        precio: 69.9,
        imagen: "hamburguesas_06",
        categoriaId: '62e0673501dcc878a6eeb368'
      },
      {
        nombre: "Hot Dog Especial",
        precio: 49.9,
        imagen: "hamburguesas_07",
        categoriaId: '62e0673501dcc878a6eeb368'
      },
      {
        nombre: "Paquete 2 Hot Dogs",
        precio: 69.9,
        imagen: "hamburguesas_08",
        categoriaId: '62e0673501dcc878a6eeb368'
      },
      {
        nombre: "4 Rebanadas de Pay de Queso",
        precio: 69.9,
        imagen: "pastel_01",
        categoriaId: '62e0673501dcc878a6eeb36b'
      },
      {
        nombre: "Waffle Especial",
        precio: 49.9,
        imagen: "pastel_02",
        categoriaId: '62e0673501dcc878a6eeb36b'
      },
      {
        nombre: "Croissants De la casa",
        precio: 39.9,
        imagen: "pastel_03",
        categoriaId: '62e0673501dcc878a6eeb36b'
      },
      {
        nombre: "Pay de Queso",
        precio: 19.9,
        imagen: "pastel_04",
        categoriaId: '62e0673501dcc878a6eeb36b'
      },
      {
        nombre: "Pastel de Chocolate",
        precio: 29.9,
        imagen: "pastel_05",
        categoriaId: '62e0673501dcc878a6eeb36b'
      },
      {
        nombre: "Rebanada Pastel de Chocolate",
        precio: 29.9,
        imagen: "pastel_06",
        categoriaId: '62e0673501dcc878a6eeb36b'
      },
      {
        nombre: "Pizza Spicy con Doble Queso",
        precio: 69.9,
        imagen: "pizzas_01",
        categoriaId: '62e0673501dcc878a6eeb369'
      },
      {
        nombre: "Pizza Jamón y Queso",
        precio: 69.9,
        imagen: "pizzas_02",
        categoriaId: '62e0673501dcc878a6eeb369'
      },
      {
        nombre: "Pizza Doble Queso",
        precio: 69.9,
        imagen: "pizzas_03",
        categoriaId: '62e0673501dcc878a6eeb369'
      },
      {
        nombre: "Pizza Especial de la Casa",
        precio: 69.9,
        imagen: "pizzas_04",
        categoriaId: '62e0673501dcc878a6eeb369'
      },
      {
        nombre: "Pizza Chorizo",
        precio: 69.9,
        imagen: "pizzas_05",
        categoriaId: '62e0673501dcc878a6eeb369'
      },
      {
        nombre: "Pizza Hawaiana",
        precio: 69.9,
        imagen: "pizzas_06",
        categoriaId: '62e0673501dcc878a6eeb369'
      },
      {
        nombre: "Pizza Tocino",
        precio: 69.9,
        imagen: "pizzas_07",
        categoriaId: '62e0673501dcc878a6eeb369'
      },
      {
        nombre: "Pizza Vegetales y Queso",
        precio: 69.9,
        imagen: "pizzas_08",
        categoriaId: '62e0673501dcc878a6eeb369'
      },
      {
        nombre: "Pizza Pepperoni y Queso",
        precio: 69.9,
        imagen: "pizzas_09",
        categoriaId: '62e0673501dcc878a6eeb369'
      },
      {
        nombre: "Pizza Aceitunas y Queso",
        precio: 69.9,
        imagen: "pizzas_10",
        categoriaId: '62e0673501dcc878a6eeb369'
      },
      {
        nombre: "Pizza Queso, Jamón y Champiñones",
        precio: 69.9,
        imagen: "pizzas_11",
        categoriaId: '62e0673501dcc878a6eeb369'
      }
]

export {
    productos 
}
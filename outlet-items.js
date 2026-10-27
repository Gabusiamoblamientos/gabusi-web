/*
  ============================================================
  OUTLET GABUSI - listado de productos
  ============================================================
  Para subir un producto: copiá un bloque de abajo, pegalo dentro de la lista
  (separados por coma) y completá los datos. Las fotos van en la carpeta
  images/outlet/ (recomendado .webp, ~1200 px de ancho).

  Campos:
    nombre        Nombre del producto (obligatorio)
    categoria     Para el filtro: "Dormitorio", "Living", "Colchones", "Cocina", etc.
    foto          Ruta de la imagen, ej: "images/outlet/ropero-3-puertas.webp"
    precioAntes   Precio de lista (número, sin puntos ni $). Opcional.
    precioOutlet  Precio de outlet (número, sin puntos ni $). Si se omite, dice "Consultar precio".
    condicion     Ej: "Exhibición", "Caja dañada", "Detalle estético", "Discontinuado", "Nuevo"
    detalle       Texto corto con el detalle, medidas, color, etc. Opcional.
    unidades      Cantidad disponible. Opcional (si es 1 muestra "Última unidad").
    estado        "disponible" (por defecto), "reservado" o "vendido".
                  Los vendidos se muestran al final, atenuados. Cuando ya no
                  quieras mostrarlos, borrá el bloque.

  Ejemplo (borrar los // para activarlo):

  {
    nombre: "Ropero Platinum 3 puertas",
    categoria: "Dormitorio",
    foto: "images/outlet/ropero-platinum-3-puertas.webp",
    precioAntes: 320000,
    precioOutlet: 240000,
    condicion: "Exhibición",
    detalle: "Pequeño roce en el lateral derecho.",
    unidades: 1,
    estado: "disponible"
  },
*/
window.OUTLET_ITEMS = [
  {
    nombre: "Juego de 6 sillas de roble",
    categoria: "Comedor",
    foto: "images/outlet/sillas-roble.webp",
    precioOutlet: 49000,
    condicion: "Nuevas, 2da selección",
    detalle: "Juego de 6 sillas de roble con asiento tapizado. Precio por unidad ($49.000 c/u)."
  },
  {
    nombre: "Juego de 6 sillas cromadas",
    categoria: "Comedor",
    foto: "images/outlet/sillas-cromadas.webp",
    precioOutlet: 49000,
    condicion: "Nuevas, 2da selección",
    detalle: "Juego de 6 sillas cromadas con asiento tapizado. Precio por unidad ($49.000 c/u)."
  },
  {
    nombre: "Juego de 6 sillas con patas de madera",
    categoria: "Comedor",
    foto: "images/outlet/sillas-patas-madera-cuerina.webp",
    precioOutlet: 31500,
    condicion: "Nuevas, 2da selección",
    detalle: "Juego de 6 sillas. Patas de madera, tapizado de cuerina. Precio por unidad ($31.500 c/u)."
  },
  {
    nombre: "Mecedora Guatambú",
    categoria: "Living",
    foto: "images/outlet/mecedora-guatambu.webp",
    precioOutlet: 390000,
    condicion: "Nueva, 2da selección"
  }
];

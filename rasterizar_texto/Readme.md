# Rasterizar Capas de Texto Editables en Adobe Photoshop

Este script de Adobe Photoshop recorre todas las capas del documento activo y rasteriza automáticamente las capas de texto editables. Es útil para convertir texto editable en imágenes rasterizadas, lo que puede ser necesario para ciertos procesos de diseño o exportación.

## Funcionalidad

- **Identificación de Capas de Texto**: Recorre todas las capas del documento para identificar capas de texto editables.
- **Rasterización de Texto**: Rasteriza las capas de texto editables encontradas en el documento.
- **Notificación de Resultados**: Muestra una alerta con el número de capas de texto editables que fueron rasterizadas.

## Instrucciones de Uso

1. **Abrir Photoshop**

   Abre Adobe Photoshop y carga el documento que deseas procesar.

2. **Ejecutar el Script**

   - Abre el panel de Scripts en Photoshop (`Archivo` > `Secuencias de comandos` > `Otro script...`).
   - Selecciona el archivo `.jsx` que contiene el código del script.

3. **Verificar Resultado**

   - El script procesará el documento y rasterizará todas las capas de texto editables.
   - Al finalizar, se mostrará una alerta indicando cuántas capas de texto fueron rasterizadas o si no había capas de texto editables en el documento.

## Requisitos

- Adobe Photoshop

## Detalles del Script

- Verifica si hay un documento abierto en Photoshop.
- Recorre todas las capas y grupos de capas del documento.
- Rasteriza las capas de texto editables.
- Muestra una alerta con el número de capas rasterizadas.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes alguna sugerencia o mejora, por favor crea un `issue` o envía un `pull request`.

## Autor

Alvaro Alexander Simbaqueva

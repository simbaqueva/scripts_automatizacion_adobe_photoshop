# Verificar Capas de Texto en Adobe Photoshop

Este script de Adobe Photoshop recorre todas las capas del documento activo y verifica si hay capas de texto editables. Es útil para identificar capas de texto que deben ser rasterizadas antes de realizar acciones como la creación de un PDF para impresión.

## Funcionalidad

- **Identificación de Capas de Texto**: Recorre todas las capas del documento para identificar capas de texto editables.
- **Contador de Capas de Texto**: Cuenta el número de capas de texto editables encontradas.
- **Notificación de Resultados**: Muestra una alerta con el número total de capas de texto editables encontradas y una advertencia para rasterizarlas antes de crear un PDF para impresión.

## Instrucciones de Uso

1. **Abrir Photoshop**

   Abre Adobe Photoshop y carga el documento que deseas verificar.

2. **Ejecutar el Script**

   - Abre el panel de Scripts en Photoshop (`Archivo` > `Secuencias de comandos` > `Otro script...`).
   - Selecciona el archivo `.jsx` que contiene el código del script.

3. **Verificar Resultado**

   - El script procesará el documento y contará las capas de texto editables.
   - Al finalizar, se mostrará una alerta con el número de capas de texto editables encontradas y una advertencia para rasterizarlas antes de crear un PDF.

## Requisitos

- Adobe Photoshop

## Detalles del Script

- Verifica si hay un documento abierto en Photoshop.
- Recorre todas las capas y grupos de capas del documento.
- Cuenta las capas de texto editables.
- Muestra una alerta con el número de capas de texto editables y una advertencia para rasterizarlas antes de imprimir.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes alguna sugerencia o mejora, por favor crea un `issue` o envía un `pull request`.

## Autor

Alvaro Alexander Simbaqueva

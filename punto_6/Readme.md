## Base de Datos

1. **Nombres de Bases de Datos:**
   - Usa snake_case para mantener consistencia.
   - Ser descriptivo y relacionado con el propósito de la base de datos.

    Ejemplo: `tienda_online_db`

2. **Tablas:**
   - Usa snake_case para nombres de tablas.
   - Evita prefijos o abreviaturas innecesarias.
   - Utiliza nombres singulares y específicos.

    Ejemplo: `producto`, `usuario`, `pedido`

3. **Columnas:**
   - Usa snake_case para nombres de columnas.
   - Ser claro y descriptivo sobre el contenido de la columna.
   - Evita usar tipos de datos como parte del nombre.

    Ejemplo: `nombre_producto`, `fecha_creacion`, `total_pedido`

4. **Claves Primarias:**
   - Prefijo con el nombre de la tabla (en singular).
   - Evita nombres genéricos.

    Ejemplo: `producto_id`, `usuario_id`

5. **Claves Foráneas:**
   - Sigue la convención `<tabla_referenciada>_<columna_referenciada>`.
   - Ser claro sobre la relación entre las tablas.

    Ejemplo: `pedido_usuario_id_fk`, `detalle_pedido_producto_id_fk`

6. **Procedimientos Almacenados y Funciones:**
   - Usa snake_case para procedimientos almacenados y funciones.
   - Ser claro y descriptivo en cuanto a la funcionalidad.

    Ejemplo: `calcular_total_pedido`, `obtener_productos_agotados`

7. **Vistas:**
   - Prefijo con `vw` seguido del nombre descriptivo.
   - Utiliza snake_case para el nombre de la vista.

    Ejemplo: `vw_reporte_ventas_mensuales`

8. **Índices:**
   - Ser descriptivo sobre la columna o el propósito del índice.
   - Evita nombres genéricos.

    Ejemplo: `idx_fecha_creacion_pedido`, `idx_nombre_usuario`

## Variables

1. **Variables en JavaScript/TypeScript:**
   - Usa camelCase para legibilidad.
   - Ser descriptivo y directo para no complicar la lectura.

    Ejemplo: `nombreUsuario`

## Funciones y Métodos

1. **Funciones/Métodos en JavaScript/TypeScript:**
   - Usa camelCase para legibilidad.
   - Ser descriptivo y directo para entender mejor el uso de los metodos.

    Ejemplo: `obtenerDetallesUsuario`

## Clases

1. **Nombres de Clases en JavaScript/TypeScript:**
   - Usa PascalCase.
   - Ser descriptivo y directo.
   - Usa camelCase para legibilidad en sus metodos internos.

    Ejemplo: `AutenticacionUsuario`

## Git

1. **Nombres de Ramas:**
   - Usa kebab-case.
   - Incluye una referencia a la tarea o función.

    Ejemplo: `feature/nueva_autenticacion`

2. **Nombres de Commits:**
   - Ser descriptivo y directo del desarrollo que se hizo en los ultimos cambios.
   - Usa presente del imperativo.

    Ejemplo: `Añadir funcionalidad de autenticación`

3. **Mensajes de Pull Request:**
   - Ser descriptivo y directo.
   - Incluye contexto sobre el cambio.

    Ejemplo: `Feature: Nuevo Proceso de Autenticación`

## Documentación de Código

1. **Comentarios en Código:**
   - Ser descriptivo y explica las funcionalidades complejas que sean dificiles de entender.
   - Evita comentarios obvios o redundantes.

2. **Documentación de Funciones/Clases:**
   - Incluye descripciones claras.
   - Especifica tipos de parámetros y retorno.

    Ejemplo:

    ```typescript
    /**
     * Obtiene detalles del usuario por su ID.
     * @param {string} userId - ID único del usuario.
     * @returns {Object} - Detalles del usuario.
     */
    function getUserDetails(userId) {
      // Implementación...
    }
    ```

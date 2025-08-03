# Sistema de Sílabos - ULEAM

Sistema de gestión de sílabos académicos para la Universidad Laica Eloy Alfaro de Manabí, desarrollado con HTML, CSS, JavaScript y Vue.js.

## 🚀 Características

- **Autenticación de usuarios** con roles diferenciados (Estudiante, Docente, Administrador)
- **Dashboard de estudiantes** para consultar sílabos por carrera
- **Panel de docentes** para gestionar sílabos académicos
- **Panel de administración** para gestión de usuarios
- **Formulario de creación de sílabos** con campos dinámicos
- **Filtros avanzados** para búsqueda de sílabos
- **Interfaz responsiva** y moderna

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y diseño responsivo
- **JavaScript ES6+** - Lógica de negocio
- **Vue.js 3** - Framework de interfaz de usuario
- **LocalStorage** - Persistencia de datos local

## 📁 Estructura del Proyecto

```
SILABOS_SISTEMA/
├── index.html              # Página principal
├── styles.css              # Estilos CSS
├── script.js               # Lógica principal (JavaScript puro)
├── vue-auth-app.js         # Aplicación Vue.js
├── img/                    # Imágenes y recursos
└── README.md              # Documentación
```

## 🔧 Integración de Vue.js

### Componentes Vue Implementados

1. **LoginComponent** - Maneja la autenticación de usuarios
2. **RegisterComponent** - Gestiona el registro de nuevos usuarios
3. **StudentDashboardComponent** - Dashboard reactivo para estudiantes

### Arquitectura Híbrida

El sistema utiliza una arquitectura híbrida que combina:

- **Vue.js** para componentes reactivos y manejo de estado
- **JavaScript puro** para la lógica de negocio y persistencia
- **HTML estático** para las pantallas que no requieren reactividad

### Ventajas de la Integración

- **Reactividad**: Los componentes Vue actualizan automáticamente la interfaz
- **Mantenibilidad**: Código más organizado y reutilizable
- **Performance**: Renderizado eficiente con Virtual DOM
- **Escalabilidad**: Fácil agregar nuevos componentes

## 👥 Roles de Usuario

### Estudiante
- Consultar sílabos de su carrera
- Filtrar por asignatura y docente
- Acceso a documentos PDF

### Docente
- Crear y editar sílabos
- Gestionar borradores
- Publicar contenido académico

### Administrador
- Gestión completa de usuarios
- Estadísticas del sistema
- Control de base de datos

## 🚀 Instalación y Uso

1. **Clonar o descargar** el proyecto
2. **Abrir** `index.html` en un navegador web
3. **Registrarse** con una nueva cuenta o usar las credenciales de prueba

### Credenciales de Prueba

```
Administrador:
- Email: admin@uleam.edu.ec
- Password: admin123

Estudiante TI:
- Email: juan.ti@uleam.edu.ec
- Password: 123456

Estudiante SW:
- Email: maria.sw@uleam.edu.ec
- Password: 123456

Docente:
- Email: carlos.docente@uleam.edu.ec
- Password: 123456
```

## 🔄 Flujo de Trabajo con Vue

1. **Inicialización**: Vue se monta en `#app` y inicializa el sistema
2. **Autenticación**: Los componentes Vue manejan login/registro
3. **Navegación**: Vue controla qué pantalla mostrar según el rol
4. **Datos**: Los componentes reciben datos del sistema JavaScript
5. **Reactividad**: Los cambios se reflejan automáticamente en la UI

## 📝 Próximas Mejoras

- [ ] Convertir más pantallas a componentes Vue
- [ ] Implementar Vuex para manejo de estado global
- [ ] Agregar validaciones más robustas
- [ ] Implementar notificaciones en tiempo real
- [ ] Mejorar la experiencia móvil

## 👨‍💻 Desarrollo

Para contribuir al proyecto:

1. Mantener la arquitectura híbrida Vue + JavaScript puro
2. Seguir las convenciones de nomenclatura
3. Documentar nuevos componentes
4. Probar en diferentes navegadores

## 📄 Licencia

Desarrollado por **Emily Stefanya Gallegos Delgado** - 2025

---

*Sistema de Sílabos - Universidad Laica Eloy Alfaro de Manabí* 
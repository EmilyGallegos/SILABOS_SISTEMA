// Sistema de Gestión de Sílabos - JavaScript Puro
class SilaboSystem {
  constructor() {
    this.currentUser = null
    this.users = []
    this.silabos = [
      // Tecnologías de la Información
      {
        id: "1",
        asignatura: "Redes de Computadoras",
        docente: "Juan Pérez",
        carrera: "Tecnologías de la Información",
        periodo: "2024-I",
        url: "https://aulavirtualmoodle.uleam.edu.ec/pluginfile.php/177801/mod_resource/content/1/TI_5_AplicacionesWebI_PatriciaQuirozPalma.pdf",
      },
      {
        id: "2",
        asignatura: "Base de Datos",
        docente: "Juan Pérez",
        carrera: "Tecnologías de la Información",
        periodo: "2024-I",
        url: "https://aulavirtualmoodle.uleam.edu.ec/pluginfile.php/177801/mod_resource/content/1/TI_5_AplicacionesWebI_PatriciaQuirozPalma.pdf",
      },
      {
        id: "3",
        asignatura: "Minería de Datos",
        docente: "María González",
        carrera: "Tecnologías de la Información",
        periodo: "2023-II",
        url: "https://aulavirtualmoodle.uleam.edu.ec/pluginfile.php/177801/mod_resource/content/1/TI_5_AplicacionesWebI_PatriciaQuirozPalma.pdf",
      },
      {
        id: "4",
        asignatura: "Sistemas Digitales",
        docente: "Diego Tumbaco",
        carrera: "Tecnologías de la Información",
        periodo: "2024-I",
        url: "https://aulavirtualmoodle.uleam.edu.ec/pluginfile.php/177801/mod_resource/content/1/TI_5_AplicacionesWebI_PatriciaQuirozPalma.pdf",
      },
      // Ingeniería de Software
      {
        id: "5",
        asignatura: "Ingeniería de Software I",
        docente: "Carlos López",
        carrera: "Ingeniería de Software",
        periodo: "2024-I",
        url: "https://aulavirtualmoodle.uleam.edu.ec/pluginfile.php/177801/mod_resource/content/1/TI_5_AplicacionesWebI_PatriciaQuirozPalma.pdf",
      },
      {
        id: "6",
        asignatura: "Arquitectura de Software",
        docente: "Ana Martínez",
        carrera: "Ingeniería de Software",
        periodo: "2023-II",
        url: "https://aulavirtualmoodle.uleam.edu.ec/pluginfile.php/177801/mod_resource/content/1/TI_5_AplicacionesWebI_PatriciaQuirozPalma.pdf",
      },
      {
        id: "7",
        asignatura: "Desarrollo Web Avanzado",
        docente: "Genesis Delgado",
        carrera: "Ingeniería de Software",
        periodo: "2024-I",
        url: "https://aulavirtualmoodle.uleam.edu.ec/pluginfile.php/177801/mod_resource/content/1/TI_5_AplicacionesWebI_PatriciaQuirozPalma.pdf",
      },
      {
        id: "8",
        asignatura: "Metodologías Ágiles",
        docente: "Jaime Vera",
        carrera: "Ingeniería de Software",
        periodo: "2023-I",
        url: "https://aulavirtualmoodle.uleam.edu.ec/pluginfile.php/177801/mod_resource/content/1/TI_5_AplicacionesWebI_PatriciaQuirozPalma.pdf",
      },
      {
        id: "9",
        asignatura: "Calidad de Software",
        docente: "Carelys Zambrano",
        carrera: "Ingeniería de Software",
        periodo: "2022-II",
        url: "https://aulavirtualmoodle.uleam.edu.ec/pluginfile.php/177801/mod_resource/content/1/TI_5_AplicacionesWebI_PatriciaQuirozPalma.pdf",
      },
    ]

    this.init()
  }

  init() {
    this.loadUsers()
    this.initializeDefaultUsers()
    this.loadCurrentUser()
    this.setupEventListeners()
    // No mostrar pantalla inicial aquí, Vue se encargará de eso
  }

  // Gestión de Usuarios
  loadUsers() {
    const savedUsers = localStorage.getItem("users")
    this.users = savedUsers ? JSON.parse(savedUsers) : []
  }

  saveUsers() {
    localStorage.setItem("users", JSON.stringify(this.users))
  }

  loadCurrentUser() {
    const savedUser = localStorage.getItem("currentUser")
    this.currentUser = savedUser ? JSON.parse(savedUser) : null
  }

  saveCurrentUser() {
    if (this.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
    } else {
      localStorage.removeItem("currentUser")
    }
  }

  initializeDefaultUsers() {
    if (this.users.length === 0) {
      const defaultUsers = [
        {
          id: "admin-1",
          nombre: "Administrador Sistema",
          email: "admin@uleam.edu.ec",
          password: "admin123",
          rol: "admin",
          fechaRegistro: new Date().toISOString(),
        },
        {
          id: "student-1",
          nombre: "Juan Estudiante TI",
          email: "juan.ti@uleam.edu.ec",
          password: "123456",
          rol: "estudiante",
          carrera: "Tecnologías de la Información",
          fechaRegistro: new Date().toISOString(),
        },
        {
          id: "student-2",
          nombre: "María Estudiante SW",
          email: "maria.sw@uleam.edu.ec",
          password: "123456",
          rol: "estudiante",
          carrera: "Ingeniería de Software",
          fechaRegistro: new Date().toISOString(),
        },
        {
          id: "teacher-1",
          nombre: "Dr. Carlos Docente",
          email: "carlos.docente@uleam.edu.ec",
          password: "123456",
          rol: "docente",
          fechaRegistro: new Date().toISOString(),
        },
      ]

      this.users = defaultUsers
      this.saveUsers()
    }
  }

  // Autenticación
  register(userData) {
    // Verificar si el email ya existe
    if (this.users.some((user) => user.email === userData.email)) {
      return { success: false, message: "El correo ya está registrado" }
    }

    // Crear nuevo usuario
    const newUser = {
      ...userData,
      id: Date.now().toString(),
      fechaRegistro: new Date().toISOString(),
    }

    this.users.push(newUser)
    this.saveUsers()

    return { success: true, message: "Usuario registrado exitosamente" }
  }

  login(email, password) {
    const user = this.users.find((u) => u.email === email && u.password === password)

    if (user) {
      this.currentUser = user
      this.saveCurrentUser()
      return { success: true, user }
    }

    return { success: false, message: "Credenciales incorrectas" }
  }

  logout() {
    this.currentUser = null
    this.saveCurrentUser()
    this.showScreen("login-screen")
  }

  // Navegación
  showScreen(screenId) {
    // Ocultar todas las pantallas
    document.querySelectorAll(".screen").forEach((screen) => {
      screen.classList.remove("active")
    })

    // Mostrar la pantalla solicitada
    const targetScreen = document.getElementById(screenId)
    if (targetScreen) {
      targetScreen.classList.add("active")
    }
  }

  showInitialScreen() {
    // Mostrar pantalla directamente sin simulación de carga
    if (this.currentUser) {
      this.redirectByRole()
    } else {
      this.showScreen("login-screen")
    }
  }

  redirectByRole() {
    if (!this.currentUser) {
      this.showScreen("login-screen")
      return
    }

    switch (this.currentUser.rol) {
      case "estudiante":
        this.showStudentDashboard()
        break
      case "docente":
        this.showTeacherPanel()
        break
      case "admin":
        this.showAdminPanel()
        break
      default:
        this.showScreen("login-screen")
    }
  }

  // Pantallas específicas
  showStudentDashboard() {
    this.showScreen("student-dashboard")
    this.updateStudentInfo()
    this.loadSilabosForStudent()
  }

  showTeacherPanel() {
    this.showScreen("teacher-panel")
    this.updateTeacherInfo()
  }

  showAdminPanel() {
    this.showScreen("admin-panel")
    this.updateAdminInfo()
    this.updateAdminStats()
  }

  // Actualizar información de usuario
  updateStudentInfo() {
    const welcomeEl = document.getElementById("student-welcome")
    const carreraInfoEl = document.getElementById("student-carrera-info")

    if (welcomeEl && this.currentUser) {
      welcomeEl.innerHTML = `Bienvenido, <strong>${this.currentUser.nombre}</strong> 
                <span class="badge badge-secondary">${this.currentUser.carrera}</span>`
    }

    if (carreraInfoEl && this.currentUser) {
      carreraInfoEl.textContent = `Mostrando sílabos para: ${this.currentUser.carrera}`
    }
  }

  updateTeacherInfo() {
    const welcomeEl = document.getElementById("teacher-welcome")
    const titleEl = document.getElementById("teacher-welcome-title")

    if (welcomeEl && this.currentUser) {
      welcomeEl.innerHTML = `Bienvenido, <strong>${this.currentUser.nombre}</strong> 
                <span class="badge badge-primary">Docente</span>`
    }

    if (titleEl && this.currentUser) {
      titleEl.textContent = `¡Bienvenido, ${this.currentUser.nombre}!`
    }
  }

  updateAdminInfo() {
    const welcomeEl = document.getElementById("admin-welcome")

    if (welcomeEl && this.currentUser) {
      welcomeEl.innerHTML = `Bienvenido, <strong>${this.currentUser.nombre}</strong> 
                <span class="badge badge-danger">🛡️ Admin</span>`
    }
  }

  // Gestión de Sílabos para Estudiantes
  loadSilabosForStudent() {
    if (!this.currentUser || this.currentUser.rol !== "estudiante") return

    const silabosPorCarrera = this.silabos.filter((s) => s.carrera === this.currentUser.carrera)

    // Actualizar filtros
    this.updateFilters(silabosPorCarrera)

    // Mostrar sílabos
    this.displaySilabos(silabosPorCarrera)
  }

  updateFilters(silabos) {
    const asignaturaSelect = document.getElementById("filter-asignatura")
    const docenteSelect = document.getElementById("filter-docente")

    if (asignaturaSelect) {
      const asignaturas = ["Todos", ...new Set(silabos.map((s) => s.asignatura))]
      asignaturaSelect.innerHTML = asignaturas.map((a) => `<option value="${a}">${a}</option>`).join("")
    }

    if (docenteSelect) {
      const docentes = ["Todos", ...new Set(silabos.map((s) => s.docente))]
      docenteSelect.innerHTML = docentes.map((d) => `<option value="${d}">${d}</option>`).join("")
    }
  }

  displaySilabos(silabos) {
    const tbody = document.getElementById("silabos-tbody")
    const noResults = document.getElementById("no-results")

    if (!tbody) return

    if (silabos.length === 0) {
      tbody.innerHTML = ""
      if (noResults) noResults.classList.remove("hidden")
      return
    }

    if (noResults) noResults.classList.add("hidden")

    tbody.innerHTML = silabos
      .map(
        (silabo) => `
            <tr>
                <td class="font-medium">${silabo.asignatura}</td>
                <td>${silabo.docente}</td>
                <td>
                    <span class="badge ${silabo.carrera === "Tecnologías de la Información" ? "badge-primary" : "badge-secondary"}">
                        ${silabo.carrera}
                    </span>
                </td>
                <td>${silabo.periodo}</td>
                <td>
                    <a href="${silabo.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.75rem;">
                        Ver Sílabo
                    </a>
                </td>
            </tr>
        `,
      )
      .join("")
  }

  filterSilabos() {
    if (!this.currentUser || this.currentUser.rol !== "estudiante") return

    const asignaturaFilter = document.getElementById("filter-asignatura")?.value || "Todos"
    const docenteFilter = document.getElementById("filter-docente")?.value || "Todos"

    let silabosFiltrados = this.silabos.filter((s) => s.carrera === this.currentUser.carrera)

    if (asignaturaFilter !== "Todos") {
      silabosFiltrados = silabosFiltrados.filter((s) => s.asignatura === asignaturaFilter)
    }

    if (docenteFilter !== "Todos") {
      silabosFiltrados = silabosFiltrados.filter((s) => s.docente === docenteFilter)
    }

    this.displaySilabos(silabosFiltrados)
  }

  // Gestión de Administración
  updateAdminStats() {
    const stats = {
      totalUsuarios: this.users.length,
      estudiantes: this.users.filter((u) => u.rol === "estudiante").length,
      docentes: this.users.filter((u) => u.rol === "docente").length,
      administradores: this.users.filter((u) => u.rol === "admin").length,
      estudiantesTI: this.users.filter((u) => u.carrera === "Tecnologías de la Información").length,
      estudiantesSW: this.users.filter((u) => u.carrera === "Ingeniería de Software").length,
    }

    // Actualizar elementos del DOM
    const elements = {
      "total-users": stats.totalUsuarios,
      "total-students": stats.estudiantes,
      "total-teachers": stats.docentes,
      "total-admins": stats.administradores,
    }

    Object.entries(elements).forEach(([id, value]) => {
      const el = document.getElementById(id)
      if (el) el.textContent = value
    })

    // Actualizar breakdown de estudiantes
    const breakdownEl = document.getElementById("students-breakdown")
    if (breakdownEl) {
      breakdownEl.textContent = `TI: ${stats.estudiantesTI} | SW: ${stats.estudiantesSW}`
    }
  }

  showUsersTable() {
    const tableSection = document.getElementById("users-table-section")
    const manageBtn = document.getElementById("manage-users-btn")

    if (tableSection.classList.contains("hidden")) {
      tableSection.classList.remove("hidden")
      this.loadUsersTable()
      if (manageBtn) manageBtn.textContent = "👥 Ocultar Usuarios"
    } else {
      tableSection.classList.add("hidden")
      if (manageBtn) manageBtn.textContent = "👥 Gestionar Usuarios"
    }
  }

  loadUsersTable() {
    const tbody = document.getElementById("users-table-body")
    const countEl = document.getElementById("users-count")
    const noUsersEl = document.getElementById("no-users")

    if (countEl) countEl.textContent = this.users.length

    if (this.users.length === 0) {
      if (tbody) tbody.innerHTML = ""
      if (noUsersEl) noUsersEl.classList.remove("hidden")
      return
    }

    if (noUsersEl) noUsersEl.classList.add("hidden")

    if (tbody) {
      tbody.innerHTML = this.users
        .map(
          (user) => `
                <tr>
                    <td class="font-medium">${user.nombre}</td>
                    <td>${user.email}</td>
                    <td>
                        <span class="badge ${this.getRoleBadgeClass(user.rol)}">
                            ${this.getRoleDisplayName(user.rol)}
                        </span>
                    </td>
                    <td>
                        ${
                          user.carrera
                            ? `
                            <span class="badge badge-${user.carrera === "Tecnologías de la Información" ? "primary" : "secondary"}">
                                ${user.carrera === "Tecnologías de la Información" ? "TI" : "SW"}
                            </span>
                        `
                            : '<span style="color: #9ca3af; font-size: 0.875rem;">N/A</span>'
                        }
                    </td>
                    <td style="font-size: 0.875rem;">
                        ${new Date(user.fechaRegistro).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                    </td>
                    <td>
                        ${
                          user.id !== this.currentUser.id
                            ? `
                            <button onclick="silaboSystem.deleteUser('${user.id}')" class="btn btn-danger" style="padding: 0.5rem; font-size: 0.75rem;">
                                🗑️
                            </button>
                        `
                            : ""
                        }
                    </td>
                </tr>
            `,
        )
        .join("")
    }
  }

  getRoleBadgeClass(rol) {
    switch (rol) {
      case "admin":
        return "badge-danger"
      case "docente":
        return "badge-primary"
      case "estudiante":
        return "badge-secondary"
      default:
        return "badge-secondary"
    }
  }

  getRoleDisplayName(rol) {
    switch (rol) {
      case "admin":
        return "Administrador"
      case "docente":
        return "Docente"
      case "estudiante":
        return "Estudiante"
      default:
        return rol
    }
  }

  deleteUser(userId) {
    if (confirm("¿Estás seguro de que quieres eliminar este usuario?")) {
      this.users = this.users.filter((u) => u.id !== userId)
      this.saveUsers()
      this.loadUsersTable()
      this.updateAdminStats()
    }
  }

  clearDatabase() {
    if (confirm("¿Estás seguro de que quieres limpiar toda la base de datos local?")) {
      localStorage.removeItem("users")
      localStorage.removeItem("currentUser")
      this.users = []
      this.currentUser = null
      alert("Base de datos limpiada exitosamente")
      this.showScreen("login-screen")
    }
  }

  // Formulario de Sílabos
  showCreateSilaboForm() {
    this.showScreen("create-silabo-screen")
    this.initializeSilaboForm()
  }

  initializeSilaboForm() {
    // Resetear formulario
    const form = document.getElementById("silabo-form")
    if (form) form.reset()

    // Resetear objetivos y criterios dinámicos
    this.resetDynamicSections()
  }

  resetDynamicSections() {
    const objetivosContainer = document.getElementById("objetivos-container")
    const criteriosContainer = document.getElementById("criterios-container")

    if (objetivosContainer) {
      objetivosContainer.innerHTML = `
                <div class="objetivo-item">
                    <div class="form-grid-3">
                        <div class="form-group">
                            <label>Unidad temática</label>
                            <input type="text" placeholder="Unidad temática" class="objetivo-unidad">
                        </div>
                        <div class="form-group">
                            <label>Semanas</label>
                            <input type="text" placeholder="Semanas" class="objetivo-semanas">
                        </div>
                        <div class="form-group">
                            <label>Actividad asociada</label>
                            <input type="text" placeholder="Actividad asociada" class="objetivo-actividad">
                        </div>
                    </div>
                </div>
            `
    }

    if (criteriosContainer) {
      criteriosContainer.innerHTML = `
                <div class="criterio-item">
                    <div class="form-grid-3">
                        <div class="form-group">
                            <label>Criterio de evaluación</label>
                            <input type="text" placeholder="Criterio de evaluación" class="criterio-nombre">
                        </div>
                        <div class="form-group">
                            <label>Ponderación</label>
                            <input type="text" placeholder="Ponderación (%)" class="criterio-ponderacion">
                        </div>
                        <div class="form-group">
                            <label>Semana</label>
                            <input type="text" placeholder="Semana" class="criterio-semana">
                        </div>
                    </div>
                </div>
            `
    }
  }

  addObjetivo() {
    const container = document.getElementById("objetivos-container")
    if (container) {
      const newObjetivo = document.createElement("div")
      newObjetivo.className = "objetivo-item"
      newObjetivo.innerHTML = `
                <div class="form-grid-3">
                    <div class="form-group">
                        <label>Unidad temática</label>
                        <input type="text" placeholder="Unidad temática" class="objetivo-unidad">
                    </div>
                    <div class="form-group">
                        <label>Semanas</label>
                        <input type="text" placeholder="Semanas" class="objetivo-semanas">
                    </div>
                    <div class="form-group">
                        <label>Actividad asociada</label>
                        <input type="text" placeholder="Actividad asociada" class="objetivo-actividad">
                    </div>
                </div>
            `
      container.appendChild(newObjetivo)
    }
  }

  addCriterio() {
    const container = document.getElementById("criterios-container")
    if (container) {
      const newCriterio = document.createElement("div")
      newCriterio.className = "criterio-item"
      newCriterio.innerHTML = `
                <div class="form-grid-3">
                    <div class="form-group">
                        <label>Criterio de evaluación</label>
                        <input type="text" placeholder="Criterio de evaluación" class="criterio-nombre">
                    </div>
                    <div class="form-group">
                        <label>Ponderación</label>
                        <input type="text" placeholder="Ponderación (%)" class="criterio-ponderacion">
                    </div>
                    <div class="form-group">
                        <label>Semana</label>
                        <input type="text" placeholder="Semana" class="criterio-semana">
                    </div>
                </div>
            `
      container.appendChild(newCriterio)
    }
  }

  saveDraft() {
    alert("✅ El formulario ha sido guardado como borrador.")
  }

  submitSilabo(e) {
    e.preventDefault()
    alert("Formulario enviado a revisión exitosamente")
  }

  // Event Listeners
  setupEventListeners() {
    // Navegación entre login y registro
    const showRegisterBtn = document.getElementById("show-register")
    const showLoginBtn = document.getElementById("show-login")

    if (showRegisterBtn) {
      showRegisterBtn.addEventListener("click", (e) => {
        e.preventDefault()
        this.showScreen("register-screen")
      })
    }

    if (showLoginBtn) {
      showLoginBtn.addEventListener("click", (e) => {
        e.preventDefault()
        this.showScreen("login-screen")
      })
    }

    // Formulario de login
    const loginForm = document.getElementById("login-form")
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault()
        this.handleLogin(e)
      })
    }

    // Formulario de registro
    const registerForm = document.getElementById("register-form")
    if (registerForm) {
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault()
        this.handleRegister(e)
      })
    }

    // Mostrar/ocultar campo carrera en registro
    const rolSelect = document.getElementById("register-rol")
    if (rolSelect) {
      rolSelect.addEventListener("change", (e) => {
        const carreraGroup = document.getElementById("carrera-group")
        if (carreraGroup) {
          if (e.target.value === "estudiante") {
            carreraGroup.classList.remove("hidden")
          } else {
            carreraGroup.classList.add("hidden")
          }
        }
      })
    }

    // Botones de logout
    const logoutButtons = ["student-logout", "teacher-logout", "admin-logout", "silabo-logout"]
    logoutButtons.forEach((id) => {
      const btn = document.getElementById(id)
      if (btn) {
        btn.addEventListener("click", () => this.logout())
      }
    })

    // Filtros de sílabos
    const filterAsignatura = document.getElementById("filter-asignatura")
    const filterDocente = document.getElementById("filter-docente")

    if (filterAsignatura) {
      filterAsignatura.addEventListener("change", () => this.filterSilabos())
    }

    if (filterDocente) {
      filterDocente.addEventListener("change", () => this.filterSilabos())
    }

    // Botones del panel de docente
    const createSilaboBtn = document.getElementById("create-silabo-btn")
    if (createSilaboBtn) {
      createSilaboBtn.addEventListener("click", () => this.showCreateSilaboForm())
    }

    const backToPanelBtn = document.getElementById("back-to-panel")
    if (backToPanelBtn) {
      backToPanelBtn.addEventListener("click", () => this.showTeacherPanel())
    }

    // Botones del panel de admin
    const manageUsersBtn = document.getElementById("manage-users-btn")
    if (manageUsersBtn) {
      manageUsersBtn.addEventListener("click", () => this.showUsersTable())
    }

    const clearDatabaseBtn = document.getElementById("clear-database-btn")
    if (clearDatabaseBtn) {
      clearDatabaseBtn.addEventListener("click", () => this.clearDatabase())
    }

    // Formulario de sílabos
    const addObjetivoBtn = document.getElementById("add-objetivo")
    if (addObjetivoBtn) {
      addObjetivoBtn.addEventListener("click", () => this.addObjetivo())
    }

    const addCriterioBtn = document.getElementById("add-criterio")
    if (addCriterioBtn) {
      addCriterioBtn.addEventListener("click", () => this.addCriterio())
    }

    const saveDraftBtn = document.getElementById("save-draft")
    if (saveDraftBtn) {
      saveDraftBtn.addEventListener("click", () => this.saveDraft())
    }

    const silaboForm = document.getElementById("silabo-form")
    if (silaboForm) {
      silaboForm.addEventListener("submit", (e) => this.submitSilabo(e))
    }
  }

  // Manejadores de formularios
  handleLogin(e) {
    const email = document.getElementById("login-email").value
    const password = document.getElementById("login-password").value
    const errorEl = document.getElementById("login-error")
    const btnText = document.getElementById("login-btn-text")

    // Mostrar estado de carga
    if (btnText) btnText.textContent = "Iniciando sesión..."

    setTimeout(() => {
      const result = this.login(email, password)

      if (result.success) {
        this.redirectByRole()
      } else {
        if (errorEl) {
          errorEl.textContent = result.message
          errorEl.classList.remove("hidden")
        }
      }

      if (btnText) btnText.textContent = "Iniciar Sesión"
    }, 1000)
  }

  handleRegister(e) {
    const formData = {
      nombre: document.getElementById("register-nombre").value,
      email: document.getElementById("register-email").value,
      password: document.getElementById("register-password").value,
      confirmPassword: document.getElementById("register-confirm-password").value,
      rol: document.getElementById("register-rol").value,
      carrera: document.getElementById("register-carrera").value,
    }

    const errorEl = document.getElementById("register-error")
    const btnText = document.getElementById("register-btn-text")

    // Validaciones
    if (formData.password !== formData.confirmPassword) {
      if (errorEl) {
        errorEl.textContent = "Las contraseñas no coinciden"
        errorEl.classList.remove("hidden")
      }
      return
    }

    if (formData.rol === "estudiante" && !formData.carrera) {
      if (errorEl) {
        errorEl.textContent = "Debes seleccionar una carrera"
        errorEl.classList.remove("hidden")
      }
      return
    }

    // Mostrar estado de carga
    if (btnText) btnText.textContent = "Registrando..."

    setTimeout(() => {
      const userData = {
        nombre: formData.nombre,
        email: formData.email,
        password: formData.password,
        rol: formData.rol,
      }

      if (formData.rol === "estudiante") {
        userData.carrera = formData.carrera
      }

      const result = this.register(userData)

      if (result.success) {
        // Mostrar mensaje de éxito y redirigir a login
        const loginMessage = document.getElementById("login-message")
        if (loginMessage) {
          loginMessage.textContent = "Registro exitoso. Puedes iniciar sesión."
          loginMessage.classList.remove("hidden")
        }
        this.showScreen("login-screen")
      } else {
        if (errorEl) {
          errorEl.textContent = result.message
          errorEl.classList.remove("hidden")
        }
      }

      if (btnText) btnText.textContent = "Registrarse"
    }, 1000)
  }
}

// Inicializar el sistema cuando se carga la página
let silaboSystem

document.addEventListener("DOMContentLoaded", () => {
  silaboSystem = new SilaboSystem()
})

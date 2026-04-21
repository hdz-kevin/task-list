/**
 * Datos de ejemplo para la lista de tareas.
 * En una aplicación real, estos datos podrían venir de una API o LocalStorage.
 */
const tasks = [
    {
        id: 1,
        title: "Comprar Leche",
        description: "Tengo que comprar leche antes de que anochezca",
        status: "pendiente"
    },
    {
        id: 2,
        title: "Hacer la compra semanal",
        description: "Comprar frutas, verduras, leche y café. No olvidar las bolsas reutilizables.",
        status: "pendiente"
    },
    {
        id: 3,
        title: "Llamar al dentista",
        description: "Pedir cita para la revisión anual. Preferiblemente para un martes por la tarde.",
        status: "pendiente"
    },
    {
        id: 4,
        title: "Reparar la bicicleta",
        description: "Ajustar los frenos delanteros y limpiar la cadena antes de la salida del domingo.",
        status: "pendiente"
    },
    {
        id: 5,
        title: "Actualizar currículum",
        description: "Añadir la última certificación de Diseño de Interfaces y revisar los datos de contacto.",
        status: "pendiente"
    }
];

/**
 * Función para renderizar las tareas en el DOM.
 */
function renderTasks() {
    const taskListContainer = document.getElementById('task-list');
    
    // Limpiar el contenedor antes de renderizar (por si acaso)
    taskListContainer.innerHTML = '';

    tasks.forEach(task => {
        // Crear elemento de la tarjeta
        const card = document.createElement('article');
        card.className = 'task-card';

        // Determinar clases de estado
        const isCompleted = task.status === 'completada';
        const badgeClass = isCompleted ? 'status-completed' : 'status-pending';
        const statusLabel = isCompleted ? 'Completado' : 'En progreso';

        // Construir el contenido HTML
        card.innerHTML = `
            <div>
                <h3>${task.title}</h3>
                <p>${task.description}</p>
            </div>
            <span class="status-badge ${badgeClass}">${statusLabel}</span>
        `;

        // Añadir al DOM
        taskListContainer.appendChild(card);
    });
}

// Ejecutar el renderizado cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema de tareas cargado correctamente.");
    renderTasks();
});


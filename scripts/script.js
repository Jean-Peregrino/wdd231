// Datos completos de los cursos
const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    description: 'This course will introduce students to programming...',
    completed: true,
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    description: 'This course introduces students to the World Wide Web...',
    completed: true,
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    description: 'Students become more organized and efficient...',
    completed: true,
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    description: 'This course introduces classes and objects...',
    completed: true,
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    description: 'Students will learn to create dynamic websites...',
    completed: true,
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    description: 'Focuses on user experience and accessibility...',
    completed: false,
  },
];

// Función para generar lista de cursos
function displayCourses(filter = 'all') {
  const courseList = document.getElementById('courseList');
  const coursesContainer = document.getElementById('courses');
  courseList.innerHTML = '';
  coursesContainer.innerHTML = '';

  let totalCredits = 0;

  // Filtrar cursos según el filtro
  const filteredCourses = filter === 'all' ? courses : courses.filter(course => course.subject === filter);

  filteredCourses.forEach(course => {
    // Crear ítem en lista de Course Work
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      ${course.subject} ${course.number} - ${course.title} -
      <span class="credits">${course.credits} credits</span>
    `;
    courseList.appendChild(listItem);

    // Crear tarjeta para sección de botones
    const courseCard = document.createElement('div');
    courseCard.className = course.completed ? 'completed' : 'not-completed';
    courseCard.textContent = `${course.subject} ${course.number}`;
    coursesContainer.appendChild(courseCard);

    totalCredits += course.credits;
  });

  // Agregar total de créditos al final de la lista
  const totalItem = document.createElement('li');
  totalItem.innerHTML = `<strong>Total Credits:</strong> ${totalCredits} credits`;
  totalItem.style.textAlign = 'right';
  courseList.appendChild(totalItem);
}

// Mostrar todos los cursos al cargar
displayCourses();

// Botones de filtro
document.querySelector('.buttons').addEventListener('click', (event) => {
  const filter = event.target.textContent;
  if (filter === 'All') displayCourses('all');
  if (filter === 'CSE') displayCourses('CSE');
  if (filter === 'WDD') displayCourses('WDD');
});

// Establecer año actual y última modificación
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Update: ${document.lastModified}`;

// Menu toggle functionality
const menuButton = document.getElementById("menu");
const navigationList = document.querySelector("ul.navigation");

menuButton.addEventListener("click", () => {
  navigationList.classList.toggle("open");
  menuButton.classList.toggle("open"); // Toggles icon between ☰ and ❎
});

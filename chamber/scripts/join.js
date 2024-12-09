document.addEventListener('DOMContentLoaded', function () {
    // Define los detalles de los modales
    const modalDetails = {
        np: {
            title: 'NP Membership Benefits',
            benefits: [
                'Free membership for non-profit organizations',
                'Access to networking events',
                'Listing in our online directory',
            ],
        },
        bronze: {
            title: 'Bronze Membership Benefits',
            benefits: [
                'All NP benefits',
                'Quarterly newsletter feature',
                '10% discount on event tickets',
            ],
        },
        silver: {
            title: 'Silver Membership Benefits',
            benefits: [
                'All Bronze benefits',
                'Monthly spotlight on homepage',
                'Access to exclusive training sessions',
                '20% discount on event tickets',
            ],
        },
        gold: {
            title: 'Gold Membership Benefits',
            benefits: [
                'All Silver benefits',
                'Premium listing in online directory',
                'Dedicated account manager',
                '30% discount on event tickets',
                'Speaking opportunities at major events',
            ],
        },
    };

    // Generar modales dinámicamente
    const modalContainer = document.getElementById('modal-container');
    for (const [key, details] of Object.entries(modalDetails)) {
        const modal = document.createElement('div');
        modal.id = `${key}-modal`;
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close" onclick="closeModal('${key}-modal')">&times;</span>
                <h2>${details.title}</h2>
                <ul>
                    ${details.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>
        `;
        modalContainer.appendChild(modal);
    }

    // Agregar eventos a los enlaces de las tarjetas
    const cardLinks = document.querySelectorAll('.membership-cards a[data-modal]');
    cardLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
            const modalKey = this.getAttribute('data-modal');
            openModal(`${modalKey}-modal`);
        });
    });

    // Función para abrir un modal
    window.openModal = function (modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        } else {
            console.error(`Modal with ID '${modalId}' not found.`);
        }
    };

    // Función para cerrar un modal
    window.closeModal = function (modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        } else {
            console.error(`Modal with ID '${modalId}' not found.`);
        }
    };

    // Cerrar modal al hacer clic fuera del contenido
    window.onclick = function (event) {
        if (event.target.className === 'modal') {
            event.target.style.display = 'none';
        }
    };
});
    // Validación de título de la organización
    const orgTitleInput = document.getElementById('orgTitle');
    if (orgTitleInput) {
        orgTitleInput.addEventListener('input', function () {
            const pattern = /^[A-Za-z\s-]{7,}$/;
            if (this.value && !pattern.test(this.value)) {
                this.setCustomValidity(
                    'Please enter at least 7 characters, using only letters, spaces, and hyphens.'
                );
            } else {
                this.setCustomValidity('');
            }
        });
    }

    // Renderizar detalles del formulario si existen en la URL
    const formData = document.getElementById('formData');
    if (formData) {
        const urlParams = new URLSearchParams(window.location.search);
        const requiredFields = [
            { name: 'firstName', label: 'First Name' },
            { name: 'lastName', label: 'Last Name' },
            { name: 'email', label: 'Email' },
            { name: 'phone', label: 'Mobile Phone' },
            { name: 'orgName', label: 'Business/Organization Name' },
            { name: 'timestamp', label: 'Submission Date' },
        ];

        let html = '<ul>';
        requiredFields.forEach(field => {
            const value = urlParams.get(field.name);
            if (value) {
                html += `<li><strong>${field.label}:</strong> ${value}</li>`;
            }
        });
        html += '</ul>';
        formData.innerHTML = html;
    }

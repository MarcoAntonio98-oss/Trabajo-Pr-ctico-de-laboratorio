/* =====================================================
   PROYECTO: CAFÉ & LETRAS
   ARCHIVO: script.js
   DESCRIPCIÓN: Funcionalidades interactivas
   ===================================================== */


/* =====================================================
   1. CITAS LITERARIAS
   ===================================================== */

const quotes = [
    {
        text: 'La literatura es una forma de felicidad.',
        author: 'Jorge Luis Borges'
    },
    {
        text: 'El mundo era tan reciente que muchas cosas carecían de nombre.',
        author: 'Gabriel García Márquez'
    },
    {
        text: 'Caminante, no hay camino, se hace camino al andar.',
        author: 'Antonio Machado'
    },
    {
        text: 'No hay nada como imaginar para crear futuro.',
        author: 'Inspiración literaria'
    },
    {
        text: 'La vida no cuida de los que somos así, Nelson. Nosotros hemos de ciudarnos por nuestra cuenta y riesgo',
        author: 'James Hynes'
    }, 
];


/* =====================================================
   2. DATOS DE LA GALERÍA
   ===================================================== */

const galleryItems = [
    {
        title: 'Rituales de café',
        subtitle: 'Pequeñas pausas, grandes ideas',
        image: 'photo-1495474472287-4d71bcdd2085'
    },
    {
        title: 'Un mundo de historias',
        subtitle: 'Cada libro abre una puerta',
        image: 'photo-1512820790803-83ca734da794'
    },
    {
        title: 'La calma de leer',
        subtitle: 'Encontrá tu rincón favorito',
        image: 'photo-1509042239860-f550ce710b93'
    },
    {
        title: 'Palabras y aroma',
        subtitle: 'Inspiración recién servida',
        image: 'photo-1455390582262-044cdead277a'
    }
];


/* =====================================================
   3. CATÁLOGO DE CAFÉS
   Los precios son demostrativos.
   ===================================================== */

const coffees = [

    {
        id: 1,
        name: 'La Metamorfosis',
        style: 'Espresso intenso',
        book: 'La metamorfosis · Franz Kafka',
        type: 'caliente',
        price: 2400,
        image: 'photo-1517701604599-bb29b565090c',

        ingredients:
            '30 ml de espresso, 5 g de cacao amargo y una pizca de canela.',

        review:
            'Su sabor directo y profundo evoca el desconcierto y la transformación de Gregor Samsa. El cacao aporta un matiz oscuro, como la atmósfera inquietante de la novela.',

        note:
            'Servido corto, sin azúcar por defecto; endulzante a pedido.'
    },

    {
        id: 2,
        name: 'Cien Años de Soledad',
        style: 'Capuchino de la casa',
        book: 'Cien años de soledad · Gabriel García Márquez',
        type: 'caliente',
        price: 3200,
        image: 'photo-1570968915860-54d5c301fa9f',

        ingredients:
            '1 espresso, 150 ml de leche vaporizada, espuma cremosa y canela.',

        review:
            'La mezcla de café, leche y especias reúne calidez y misterio. Como Macondo, cada capa ofrece un detalle nuevo y una sensación familiar que parece salida de un recuerdo.',

        note:
            'Disponible con leche vegetal, según disponibilidad.'
    },

    {
        id: 3,
        name: 'El Gran Gatsby',
        style: 'Latte de caramelo',
        book: 'El gran Gatsby · F. Scott Fitzgerald',
        type: 'caliente',
        price: 3500,
        image: 'photo-1461023058943-07fcbe16d735',

        ingredients:
            '1 espresso doble, 180 ml de leche, 15 ml de salsa de caramelo y hielo opcional.',

        review:
            'Dulce, elegante y tentador, este latte recuerda las fiestas deslumbrantes de Gatsby y el brillo exterior que esconde anhelos y contradicciones.',

        note:
            'Puede prepararse caliente o frío.'
    },

    {
        id: 4,
        name: 'Alicia en el País de las Maravillas',
        style: 'Moka de fantasía',
        book: 'Alicia en el País de las Maravillas · Lewis Carroll',
        type: 'caliente',
        price: 3700,
        image: 'photo-1501339847302-ac426a4a7cbb',

        ingredients:
            '1 espresso, 150 ml de leche, 20 g de chocolate y crema batida opcional.',

        review:
            'El chocolate y el café se combinan en una taza lúdica, inesperada y reconfortante, como el viaje de Alicia por un mundo donde la lógica se transforma en juego.',

        note:
            'La crema batida es opcional.'
    },

    {
        id: 5,
        name: 'Moby Dick',
        style: 'Cold brew del capitán',
        book: 'Moby Dick · Herman Melville',
        type: 'frio',
        price: 3300,
        image: 'photo-1461023058943-07fcbe16d735',

        ingredients:
            '120 ml de café infusionado en frío, hielo y un toque de almíbar opcional.',

        review:
            'Limpio, oscuro y persistente, este café evoca el océano profundo y la travesía obsesiva del Pequod. La infusión lenta aporta carácter sin perder suavidad.',

        note:
            'Se recomienda sin leche para apreciar sus notas.'
    },

    {
        id: 6,
        name: 'El Principito',
        style: 'Vainilla suave sin cafeína',
        book: 'El principito · Antoine de Saint-Exupéry',
        type: 'sin-cafeina',
        price: 2900,
        image: 'photo-1445116572660-236099ec97a0',

        ingredients:
            '200 ml de leche o bebida vegetal, vainilla natural y canela; sin café ni cafeína añadida.',

        review:
            'Una bebida suave y sencilla que invita a detenerse y mirar lo esencial. Su dulzor delicado acompaña el tono sensible y reflexivo del relato.',

        note:
            'Consultar disponibilidad de leche vegetal y posibles alérgenos.'
    }

];


/* =====================================================
   4. ELEMENTOS DEL DOCUMENTO HTML
   ===================================================== */

// Función abreviada para seleccionar elementos del HTML.
const $ = selector => document.querySelector(selector);

// Elementos principales de la página.
const gallery = $('#gallery-track');
const menu = $('#coffee-menu');

// Variables para recordar la selección del usuario.
let selectedCoffee = null;
let quoteIndex = -1;


/* =====================================================
   5. FUNCIÓN PARA GENERAR IMÁGENES
   ===================================================== */

function unsplash(id, width = 1000) {

    return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

}


/* =====================================================
   6. MOSTRAR LA GALERÍA
   ===================================================== */

function renderGallery() {

    // Se muestran los primeros tres elementos de la galería.
    gallery.innerHTML = galleryItems
        .slice(0, 3)
        .map(item => {

            return `
                <article class="gallery-card">

                    <img
                        src="${unsplash(item.image, 1100)}"
                        alt="${item.title}"
                        loading="lazy"
                    >

                    <div>
                        <h3>${item.title}</h3>
                        <p>${item.subtitle}</p>
                    </div>

                </article>
            `;

        })
        .join('');

}


/* =====================================================
   7. MOSTRAR Y FILTRAR EL CATÁLOGO DE CAFÉS
   ===================================================== */

function renderMenu() {

    // Obtener el texto ingresado en el buscador.
    const query = $('#coffee-search')
        .value
        .trim()
        .toLocaleLowerCase('es');

    // Obtener la categoría seleccionada.
    const filter = $('#coffee-filter').value;


    // Filtrar los productos según la búsqueda y categoría.
    const filtered = coffees.filter(coffee => {

        const matchesFilter =
            filter === 'todos' || coffee.type === filter;

        const searchableText = `
            ${coffee.name}
            ${coffee.style}
            ${coffee.book}
            ${coffee.ingredients}
        `.toLocaleLowerCase('es');

        const matchesSearch =
            searchableText.includes(query);

        return matchesFilter && matchesSearch;

    });


    // Mostrar un mensaje cuando no existen coincidencias.
    if (filtered.length === 0) {

        menu.innerHTML = `
            <p class="empty-state">
                No encontramos cafés con esa búsqueda.
                Probá con otro término.
            </p>
        `;

        return;

    }


    // Generar las tarjetas de los productos encontrados.
    menu.innerHTML = filtered.map(coffee => {

        // Determinar la etiqueta que corresponde a cada bebida.
        let categoryLabel;

        if (coffee.type === 'frio') {

            categoryLabel = 'Bebida fría';

        } else if (coffee.type === 'sin-cafeina') {

            categoryLabel = 'Sin cafeína';

        } else {

            categoryLabel = 'Café caliente';

        }


        // Determinar el texto del botón.
        const isSelected = selectedCoffee === coffee.id;

        const buttonText = isSelected
            ? '✓ Elegido'
            : 'Elegir café';


        return `
            <article class="coffee-card">

                <img
                    src="${unsplash(coffee.image, 900)}"
                    alt="${coffee.style}"
                    loading="lazy"
                >

                <div class="coffee-content">

                    <span class="coffee-type">
                        ${categoryLabel}
                    </span>

                    <h3>${coffee.name}</h3>

                    <span class="book-link">
                        ${coffee.book}
                    </span>

                    <p>
                        ${coffee.review}
                    </p>

                    <details>

                        <summary>
                            Ingredientes y preparación
                        </summary>

                        <p>
                            <strong>Ingredientes:</strong>
                            ${coffee.ingredients}
                        </p>

                        <p>
                            <strong>Detalle:</strong>
                            ${coffee.note}
                        </p>

                    </details>

                    <div class="coffee-bottom">

                        <span class="price">
                            $${coffee.price.toLocaleString('es-AR')}
                        </span>

                        <button
                            class="select-coffee"
                            type="button"
                            data-id="${coffee.id}"
                            aria-pressed="${isSelected}"
                        >
                            ${buttonText}
                        </button>

                    </div>

                </div>

            </article>
        `;

    }).join('');

}


/* =====================================================
   8. GENERAR UNA CITA LITERARIA ALEATORIA
   ===================================================== */

$('#new-quote').addEventListener('click', () => {

    let newIndex;

    // Evitar repetir inmediatamente la misma cita.
    do {

        newIndex = Math.floor(
            Math.random() * quotes.length
        );

    } while (
        newIndex === quoteIndex && quotes.length > 1
    );


    // Guardar el índice de la cita seleccionada.
    quoteIndex = newIndex;

    const quote = quotes[newIndex];


    // Actualizar el contenido de la cita en el HTML.
    $('#daily-quote').innerHTML = `
        “${quote.text}”
        <span>— ${quote.author}</span>
    `;

});


/* =====================================================
   9. ACTIVAR Y DESACTIVAR EL MODO OSCURO
   ===================================================== */

$('#theme-toggle').addEventListener('click', () => {

    // Agregar o quitar la clase del modo oscuro.
    const active = document.body.classList.toggle(
        'modo-oscuro'
    );

    // Actualizar el estado accesible del botón.
    $('#theme-toggle').setAttribute(
        'aria-pressed',
        String(active)
    );

    // Cambiar el icono y el texto del botón.
    $('#theme-toggle').innerHTML = active
        ? '☀️ <span>Modo claro</span>'
        : '🌙 <span>Modo oscuro</span>';

});


/* =====================================================
   10. NAVEGACIÓN HORIZONTAL DE LA GALERÍA
   ===================================================== */

// Desplazarse hacia la izquierda.
$('#gallery-left').addEventListener('click', () => {

    gallery.scrollBy({
        left: -gallery.clientWidth * 0.8,
        top: 0,
        behavior: 'smooth'
    });

});


// Desplazarse hacia la derecha.
$('#gallery-right').addEventListener('click', () => {

    gallery.scrollBy({
        left: gallery.clientWidth * 0.8,
        top: 0,
        behavior: 'smooth'
    });

});


/* =====================================================
   11. CAMBIAR LA ORIENTACIÓN DE LA GALERÍA
   ===================================================== */

$('#gallery-direction').addEventListener('click', () => {

    // Alternar entre la orientación vertical y horizontal.
    const vertical = gallery.classList.toggle('vertical');

    // Actualizar el estado accesible del botón.
    $('#gallery-direction').setAttribute(
        'aria-pressed',
        String(vertical)
    );

    // Actualizar el texto del botón.
    $('#gallery-direction').textContent = vertical
        ? '↔ Horizontal'
        : '↕ Vertical';

    // Volver al comienzo de la galería.
    gallery.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    });

});


/* =====================================================
   12. BUSCADOR Y FILTRO DEL MENÚ
   ===================================================== */

// Actualizar el menú cuando cambia el texto de búsqueda.
$('#coffee-search').addEventListener('input', renderMenu);


// Actualizar el menú cuando cambia la categoría.
$('#coffee-filter').addEventListener('change', renderMenu);


/* =====================================================
   13. SELECCIONAR UN CAFÉ
   ===================================================== */

menu.addEventListener('click', event => {

    // Comprobar si se hizo clic en un botón de selección.
    const button = event.target.closest('.select-coffee');

    // Si el clic no corresponde a un botón, salir.
    if (!button) {
        return;
    }

    // Guardar el identificador del café seleccionado.
    selectedCoffee = Number(button.dataset.id);

    // Volver a mostrar el menú con el botón actualizado.
    renderMenu();

});


/* =====================================================
   14. ACTUALIZAR EL AÑO DEL PIE DE PÁGINA
   ===================================================== */

$('#year').textContent = new Date().getFullYear();


/* =====================================================
   15. INICIALIZAR LA PÁGINA
   ===================================================== */

// Mostrar la galería al cargar el documento.
renderGallery();

// Mostrar el catálogo de cafés al cargar el documento.
renderMenu();
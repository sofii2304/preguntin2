Documentación del código de PREGUNTIN: 

*Descripción del Proyecto*:
Preguntin es una plataforma de preguntas y respuestas interactiva que ofrece una experiencia de juego divertida y educativa. A través de una interfaz gráfica simple y una ruleta giratoria, los usuarios podrán seleccionar una categoría de preguntas y responder a ellas. La plataforma está diseñada para ser ágil y fácil de usar, lo que permite a los usuarios participar en el juego sin complicaciones.

*Estructura del Proyecto*:
El proyecto se compone de varios componentes clave:

-Frontend: HTML, CSS y JavaScript son utilizados para proporcionar la interfaz de usuario.
-Ruleta: Se usa un canvas de HTML5 para crear una ruleta interactiva que selecciona aleatoriamente una categoría de preguntas.
-Sistema de Preguntas y Respuestas: Inicialmente gestionado desde archivos locales, se planea implementar una API para mejorar la agilidad y flexibilidad.
-API para Preguntas: La API será utilizada para proporcionar preguntas y respuestas dinámicas en formato JSON.

*Estructura del Código*
*HTML*
El archivo HTML contiene las secciones principales del juego:

-Pantalla de Inicio: Donde los usuarios ingresan su nombre y pueden comenzar el juego.
-Ruleta: Sección que permite girar una ruleta para seleccionar una categoría de preguntas.
-Pantalla de Preguntas: Donde se muestra la categoría y la pregunta seleccionada.

*CSS*
El archivo CSS define la apariencia visual de la plataforma, incluyendo el diseño de las pantallas, la ruleta y las animaciones.

*JavaScript*
El archivo JavaScript es el motor detrás de la ruleta, el manejo de eventos y la lógica del juego. Actualmente, el sistema utiliza 
una lista predefinida de categorías y permite a los jugadores girar la ruleta para seleccionar una categoría de preguntas. Las preguntas se muestran una vez 
que se selecciona la categoría.

*Planificación de API*
Para mejorar la eficiencia y flexibilidad del juego, se tiene pensado utilizar una API en lugar de una base de datos. La API permitirá que las preguntas y respuestas se gestionen de manera dinámica. Además, un administrador podrá agregar nuevas preguntas y respuestas directamente a un archivo JSON que será consumido por la API.

*Ventajas de la API:*
-Agilidad: No es necesario manipular una base de datos tradicional. Las preguntas y respuestas se pueden gestionar fácilmente a través de un archivo JSON.
-Actualización Dinámica: La API proporcionará datos en tiempo real, permitiendo que las preguntas se actualicen constantemente.
-Personalización: El administrador podrá agregar o modificar preguntas fácilmente editando el archivo JSON que la API utiliza como fuente de datos.


*Estructura de la API:*
-Método GET: Para obtener las preguntas y respuestas en formato JSON.
-Método POST: Permite al administrador agregar nuevas preguntas directamente a través de la API, que luego se almacenarán en un archivo JSON.

*Opciones que se podrían llegar a usar para la API*
--Open Trivia DB: Es una API gratuita y fácil de usar que no requiere una clave de API. Permite crear cuestionarios personalizados, con opciones de categorías, dificultad, tipo de preguntas (selección múltiple o verdadero/falso), e incluso puedes añadir tus propias preguntas. Esto podría adaptarse bien a la necesidad de agregar preguntas personalizadas y gestionar todo desde un archivo JSON. Su base de datos cuenta con más de 4000 preguntas, lo que proporciona una buena flexibilidad para la personalización​.

Eaxeli Trivia API: Ofrece una API JSON sin necesidad de clave, ideal para aplicaciones de quiz. Esta API permite filtrar preguntas por categoría, dificultad y más. Además, las preguntas pueden ser de opción múltiple o verdadero/falso, lo que se adapta bien a las necesidades de "Preguntín". También es posible realizar consultas GET simples para obtener los datos que necesitas, y el proceso de personalización es bastante directo​.

// JavaScript für die Bilder-Slideshow
document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "/objects/img_carousel/resources/images/image1.png",
        "/objects/img_carousel/resources/images/image2.png",
        "/objects/img_carousel/resources/images/image3.png"
    ];

    let currentIndex = 0;

    const imgWrapper = document.querySelector(".img_wrapper img");
    const leftArrow = document.querySelector(".leftarrw");
    const rightArrow = document.querySelector(".rightarrw");

    // Funktion zum Aktualisieren des Bildes
    function updateImage() {
        imgWrapper.src = images[currentIndex];
    }

    // Event Listener für den linken Pfeil
    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    // Event Listener für den rechten Pfeil
    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    // Initiale Anzeige
    updateImage();
});

//Erklärung:
// 1. Bilder-Array: Das images-Array enthält die URLs der Bilder, die in der Galerie angezeigt werden sollen.
// 2. Initiales Bild: currentIndex wird verwendet, um den aktuellen Index des Bildes im Array zu verfolgen.
// 3. Bild aktualisieren: Die Funktion updateImage() ändert das src-Attribut des img-Tags basierend auf dem aktuellen Index.
// Navigation:
// Klicken auf den linken Pfeil (leftArrow) verringert den Index (kreisförmig mit %-Operation).
// Klicken auf den rechten Pfeil (rightArrow) erhöht den Index (ebenfalls kreisförmig).
// DOMContentLoaded: Stellt sicher, dass das Script erst ausgeführt wird, wenn die Seite vollständig geladen ist.



//______________________


// Um jedem Bild individuelle Textelemente zuzuordnen, erweitern wir den JavaScript-Code. 
// Dazu erstellen wir ein Array, das die Bilder und ihre zugehörigen Texte enthält. Die Texte werden dynamisch aktualisiert, wenn das Bild geändert wird.


// JavaScript für die Bilder-Slideshow mit Text und Button
document.addEventListener("DOMContentLoaded", () => {
    const slides = [
        {
            image: "/objects/img_carousel/resources/images/image1.png",
            title: "Bild 1 Titel",
            subtitle: "Bild 1 Untertitel",
            paragraph: "Dies ist die Beschreibung für Bild 1.",
            buttonText: "Mehr zu Bild 1",
            buttonLink: "#bild1"
        },
        {
            image: "/objects/img_carousel/resources/images/image2.png",
            title: "Bild 2 Titel",
            subtitle: "Bild 2 Untertitel",
            paragraph: "Dies ist die Beschreibung für Bild 2.",
            buttonText: "Mehr zu Bild 2",
            buttonLink: "#bild2"
        },
        {
            image: "/objects/img_carousel/resources/images/image3.png",
            title: "Bild 3 Titel",
            subtitle: "Bild 3 Untertitel",
            paragraph: "Dies ist die Beschreibung für Bild 3.",
            buttonText: "Mehr zu Bild 3",
            buttonLink: "#bild3"
        }
    ];

    let currentIndex = 0;

    const imgWrapper = document.querySelector(".img_wrapper img");
    const titleElement = document.querySelector(".h2");
    const subtitleElement = document.querySelector(".h3");
    const paragraphElement = document.querySelector(".info-paragraph");
    const buttonElement = document.querySelector(".btn");
    const leftArrow = document.querySelector(".leftarrw");
    const rightArrow = document.querySelector(".rightarrw");

    // Funktion zum Aktualisieren von Bild, Text und Button
    function updateSlide() {
        const currentSlide = slides[currentIndex];
        imgWrapper.src = currentSlide.image;
        titleElement.textContent = currentSlide.title;
        subtitleElement.textContent = currentSlide.subtitle;
        paragraphElement.textContent = currentSlide.paragraph;
        buttonElement.textContent = currentSlide.buttonText;
        buttonElement.href = currentSlide.buttonLink || "#"; // Fallback-Link
    }

    // Event Listener für den linken Pfeil
    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide();
    });

    // Event Listener für den rechten Pfeil
    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide();
    });

    // Initiale Anzeige
    updateSlide();
});


// Erklärung der Erweiterung:
// Erklärung der Button-Integration:
// buttonText und buttonLink: Im slides-Array wird jedem Slide ein Text und ein Link für den Button zugeordnet.
// Update-Logik:
// Der Text des Buttons (buttonElement.textContent) wird basierend auf dem aktuellen Slide aktualisiert.
// Der Link des Buttons (buttonElement.href) wird ebenfalls angepasst. Falls kein Link angegeben ist, wird ein Standard-"#"-Link verwendet.
// HTML-Änderung: Der Button wird zu einem <a>-Element geändert, damit echte Links unterstützt werden.
// Verhalten:
// Beim Wechseln der Slides ändern sich Bild, Text und Button dynamisch.
// Der Button führt zu unterschiedlichen Aktionen oder Seiten, je nach aktuellem Slide.
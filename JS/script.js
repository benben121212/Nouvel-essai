// Fonction pour gérer le défilement de la page
function handleScroll() {
    // Récupération de toutes les sections
    var sections = document.querySelectorAll(".head, .intro, .services,.contact");
    // Récupération de la position de défilement de la page
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // Itération à travers chaque section
    sections.forEach(function(section) {
      // Récupération de la position de la section
      var sectionTop = section.offsetTop - 50;
      var sectionBottom = sectionTop + section.offsetHeight;
  
      // Vérification si la position de défilement est dans la section
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        // Ajout de la classe "active" à la section
        section.classList.add("active");
      } else {
        // Suppression de la classe "active" de la section
        section.classList.remove("active");
      }
    });
  }
  
  // Ajout d'un écouteur d'événements pour le défilement de la page
  window.addEventListener("scroll", handleScroll);
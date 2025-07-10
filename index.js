function copyEmail() {
  const email = "maxlefebvre2005@gmail.com"; // Remplace par ton email
  navigator.clipboard
    .writeText(email)
    .then(() => alert("Email copié dans le presse-papiers !"))
    .catch(() => alert("Erreur lors de la copie."));
}

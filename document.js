function validateForm() {
  const name = document.getElementById('name').value;
  const prenom = document.getElementById('prenom').value;
  const telephone = document.getElementById('telephone').value;

  // Expression régulière pour vérifier si le nom et le prénom ne contiennent pas de chiffres
  const nameRegex = /^[A-Za-zÀ-ÿ\s]+$/;

  // Expression régulière pour vérifier si le numéro de téléphone contient uniquement des chiffres et n'excède pas 8 caractères
  const phoneRegex = /^\d{1,8}$/;

  if (!nameRegex.test(name)) {
    alert('Le nom ne doit pas contenir de chiffres.');
    return false;
  }

  if (!nameRegex.test(prenom)) {
    alert('Le prénom ne doit pas contenir de chiffres.');
    return false;
  }

  if (!phoneRegex.test(telephone)) {
    alert('Le numéro de téléphone doit contenir uniquement des chiffres et ne pas dépasser 8 caractères.');
    return false;
  }

  return true; // Soumission du formulaire si tout est valide
}

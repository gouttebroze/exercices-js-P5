function checkAge(int) {
  if (int < 18) {
    return 'Vous êtes mineur.';
  } else if (int >= 65) {
    return 'Vous êtes senior.';
  } else {
    return 'Vous êtes majeur.';
  }
}

export default checkAge;

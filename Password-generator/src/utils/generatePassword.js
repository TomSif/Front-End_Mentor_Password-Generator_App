// Les caractères disponibles
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

// Construire le pool selon les options
const generatePassword = (options) => {
  let pool = "";
  if (options.includeLowercase) pool += lowercase;
  if (options.includeUppercase) pool += uppercase;
  if (options.includeNumbers) pool += numbers;
  if (options.includeSymbols) pool += symbols;

  if (pool === "") return ""; // aucune option cochée

  let password = "";
  for (let i = 0; i < options.length; i++) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    password += pool[randomIndex];
  }

  return password;
};

export default generatePassword;

function checkIsValidCopy(original, copy) {
  const possibleSameChar = (char1, char2) => {
    if (char1.toLowerCase() === char2) return true;
    let index = "#+:. ".indexOf(char1);
    let posibleSymbols = "#+:. ".slice(index + 1);
    return posibleSymbols.includes(char2);
  }
  for (let i = 0; i < original.length; i++) {
    if (!possibleSameChar(original[i], copy[i])) return false;
  }
  return true;
}

// Versión previa al cambio de enunciado
function checkIsValidCopyVersion1(original, copy) {
  const possibleSameChar = (char1, char2) => {
    if (char1.toLowerCase() === char2) return true;
    const posibleSymbols = "#+:. ";
    if (char1.toLowerCase() !== char1.toUpperCase())
      return posibleSymbols.includes(char2);
  }

  for (let i = 0; i < original.length; i++) {
    if (!possibleSameChar(original[i], copy[i])) return false;
  }
  return true;
}
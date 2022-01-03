export const textFirstLetter = (text:string, limit:number = 3):string => {
  const textArray = text.split(' ');
  const firstLetterArray = [];

  for (let i:number = 0; i <= textArray.length - 1; i += 1) {
    const firstWord = textArray[i];
    const firstLetter = firstWord[0];
    firstLetterArray.push(firstLetter);
  }
  const finalListOfArray:string[] = firstLetterArray.slice(0, limit);
  const result = finalListOfArray.join('');
  return result;
};

export const textShorter = (text:string, value:number = 20):string => {
  const result:string[] = [];
  if (text.length > value) {
    text.split(' ').reduce((acc:number, cur:string) => {
      if (acc + cur.length <= value) {
        result.push(cur);
      }
      return (acc + cur.length);
    }, 0);

    return `${result.join(' ')  } ...`;
  }
  return text;
};

export const capitalize = (str:string):string => {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
};

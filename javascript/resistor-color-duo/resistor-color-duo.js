
const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

export const decodedValue = ([color1, color2]) => {

  if(typeof color1 === "undefined" || typeof color2 === "undefined"
    || !COLORS.includes(color1) || !COLORS.includes(color2)) {
    throw new Error(`Expecting a array of two valid colors within the list: ${COLORS.join()}`);
  }

  return COLORS.indexOf(color1)*10 + COLORS.indexOf(color2);

};

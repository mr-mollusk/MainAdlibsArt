import { colors } from "../config";

export const injectColors = () => {
  const colorsBlock = document.createElement("style");
  const result: string = `:root {
      ${Object.entries(colors)
        .map(([colorName, colorValue]) => `--${colorName}: ${colorValue};`)
        .join("")}
    }`;

  colorsBlock.innerHTML = result;
  document.head.append(colorsBlock);
  console.log();
};

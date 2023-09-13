import { IImage } from "./image.types";

export const Image: React.FC<IImage> = ({
  src,
  alt,
  width,
  height,
  ...rest
}) => {
  return (
    <img
      src={src}
      alt={alt ? alt : src}
      width={width || "100%"}
      height={height || "100%"}
      {...rest}
    />
  );
};

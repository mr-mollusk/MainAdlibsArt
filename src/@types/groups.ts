export type TGroupedName<
  T extends string | number | symbol,
  P extends string = "group"
> = string extends T ? string : T extends `${infer N}` ? `${P}:${N}` : P;

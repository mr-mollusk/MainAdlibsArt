import React from "react";
import { IButton } from "./button.types";
import s from "./button.module.css";

/* 
React.PropsWithChildren<React.FC<IButton>> - типизация пропсов компоненты.
В данном конкретном случае:
    PropsWithChildren - добавляет children. Это прост в котором хранится всё что заключается в компоненту таким образом: <Button>children</Button>
    FC - Functional Component
    IButton - наш собственный интерфейс IButton, который мы описали в файле button.types.ts

    Обратите внимание что пропсы деструктуризированны для удобства. 
    Variant описан в интерфейсе.
    Children - работает описанным выше образом
    Благодаря записи ...rest мы получаем все остальные пропсы, которые были переданы и передаём их в кнопку
*/
export const Button: React.PropsWithChildren<React.FC<IButton>> = ({
  variant = "Primary",
  children,
  ...rest
}) => {
  return (
    <button className={s.button} {...rest}>
      {children}
    </button>
  );
};

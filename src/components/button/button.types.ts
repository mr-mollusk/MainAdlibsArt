import { ButtonHTMLAttributes } from "react";

/*
Чтобы уточнаять значения некоторых атрибутов мы создаём типы с конкретными значениями.
Теперь когда мы захотим сделать переменную типа AvaliableButtonVariants, там будет не просто строка,
а либо значение Primary либо Secondary
*/
export type AvaliableButtonVariants = "Primary" | "Secondary";

/*
В данном случае мы делаем интерфейс IButton, который содержит переменную variant, описанного выше типа.
Поскольку это интерфейс кнопки, то мы хотим чтобы были все атрибуты, которые обычно есть у кнопки, так что наследуемся
от конкретного типа ButtonHTMLAttributes<HTMLButtonElement>
*/
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: AvaliableButtonVariants;
}

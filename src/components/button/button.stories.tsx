import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "ui/Button",
  component: Button,
  argTypes: {
    children: {
      control: { type: "text" },
    },
    colorScheme: {
      description: "Варианты кнопок",
      options: ["primary", "secondary"],
      control: { type: "radio" },
      defaultValue: "Primary",
    },
    variant: {
      options: ["Contained", "Outlined", "Text"],
      control: { type: "radio" },
      defaultValue: "Primary",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: ({ children = "Я кнопка", ...rest }) => (
    <Button {...rest}>{children}</Button>
  ),
};

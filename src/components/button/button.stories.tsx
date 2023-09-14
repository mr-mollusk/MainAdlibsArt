import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "ui/Button",
  component: Button,
  argTypes: {
    variant: {
      description: "Варианты кнопок",
      options: ["Primary", "Secondary"],
      control: { type: "select" },
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button>Я кнопка!</Button>,
};

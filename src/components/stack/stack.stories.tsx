import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./stack";

const meta: Meta<typeof Stack> = {
  title: "ui/Stack",
  component: Stack,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <div style={{ width: "50px", height: "50px", background: "red" }}>
          Я Дивка
        </div>
        <div style={{ width: "50px", height: "50px", background: "red" }}>
          Я Дивка
        </div>
        <div style={{ width: "50px", height: "50px", background: "red" }}>
          Я Дивка
        </div>
        <div style={{ width: "50px", height: "50px", background: "red" }}>
          Я Дивка
        </div>
        <div style={{ width: "50px", height: "50px", background: "red" }}>
          Я Дивка
        </div>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: "column",
    spacing: 20,
    children: (
      <>
        <div style={{ width: "50px", height: "50px", background: "red" }}>
          Я Дивка
        </div>
        <div style={{ width: "50px", height: "50px", background: "red" }}>
          Я Дивка
        </div>
        <div style={{ width: "50px", height: "50px", background: "red" }}>
          Я Дивка
        </div>
        <div style={{ width: "50px", height: "50px", background: "red" }}>
          Я Дивка
        </div>
        <div style={{ width: "50px", height: "50px", background: "red" }}>
          Я Дивка
        </div>
      </>
    ),
  },
};

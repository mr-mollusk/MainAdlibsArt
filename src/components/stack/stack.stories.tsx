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

export const Row: Story = {
  render: () => (
    <Stack>
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
    </Stack>
  ),
};

export const Column: Story = {
  render: () => (
    <Stack direction="column">
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
    </Stack>
  ),
};

export const Spacing: Story = {
  render: () => (
    <Stack spacing={50}>
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
    </Stack>
  ),
};

export const TwoColumns: Story = {
  render: () => (
    <Stack>
      <Stack direction="column">
        <div style={{ width: "50px", height: "50px", background: "red" }}>
          Я Дивка
        </div>
        <div style={{ width: "50px", height: "50px", background: "red" }}>
          Я Дивка
        </div>
        <div style={{ width: "50px", height: "50px", background: "red" }}>
          Я Дивка
        </div>
      </Stack>
      <Stack direction="column">
        <div style={{ width: "50px", height: "50px", background: "red" }}>
          Я Дивка
        </div>
        <div style={{ width: "50px", height: "50px", background: "red" }}>
          Я Дивка
        </div>
        <div style={{ width: "50px", height: "50px", background: "red" }}>
          Я Дивка
        </div>
      </Stack>
    </Stack>
  ),
};

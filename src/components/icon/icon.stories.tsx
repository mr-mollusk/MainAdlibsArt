import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./icon";
import { iconsMap } from "./assets";

const meta: Meta<typeof Icon> = {
  title: "ui/icon",
  component: Icon,
  argTypes: {
    name: {
      control: { type: "select" },
      options: Object.keys(iconsMap),
    },
    fill: {
      control: { type: "color" },
    },
    stroke: {
      control: { type: "color" },
    },
    size: {
      control: { type: "number" },
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    name: "icons:eye",
  },
};

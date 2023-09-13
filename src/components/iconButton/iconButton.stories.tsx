import type { Meta, StoryObj } from "@storybook/react";
import { iconsMap } from "../icon/assets";
import { IconButton } from "..";

const meta: Meta<typeof IconButton> = {
  title: "ui/IconButton",
  component: IconButton,
  argTypes: {
    name: {
      control: { type: "select" },
      options: Object.keys(iconsMap),
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    name: "icons:user",
  },
};

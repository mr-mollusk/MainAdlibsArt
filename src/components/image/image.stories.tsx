import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "./image";
import Test from "../../assets/test.jpg";

const meta: Meta<typeof Image> = {
  title: "ui/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Primary: Story = {
  args: {
    src: Test,
  },
};

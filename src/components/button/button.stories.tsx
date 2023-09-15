import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { injectColors } from "../../utils/injectColors";

const meta: Meta<typeof Button> = {
  title: "ui/Button",
  component: Button,
  decorators: [
    (Story) => {
      injectColors();
      return <Story />;
    },
  ],
  argTypes: {
    variant: { defaultValue: "contained" },
    colorScheme: { defaultValue: "primary" },
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

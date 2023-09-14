import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./flex";
import { Spacer } from "./spacer";

const meta: Meta<typeof Flex> = {
  title: "ui/Flex",
  component: Flex,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;
const DivElement = () => {
  return (
    <div
      style={{
        background: "red",
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Div
    </div>
  );
};

export const Primary: Story = {
  render: () => (
    <Flex>
      <DivElement />
      <DivElement />
      <DivElement />
      <DivElement />
      <DivElement />
    </Flex>
  ),
};

export const Direction: Story = {
  render: () => (
    <Flex direction="column">
      <DivElement />
      <DivElement />
      <DivElement />
      <DivElement />
      <DivElement />
    </Flex>
  ),
};

export const Wrap: Story = {
  render: () => (
    <Flex width="150px" wrap="wrap">
      <DivElement />
      <DivElement />
      <DivElement />
      <DivElement />
      <DivElement />
    </Flex>
  ),
};
export const Justify: Story = {
  render: () => (
    <Flex width="1000px" justify="space-between">
      <DivElement />
      <DivElement />
      <DivElement />
      <DivElement />
      <DivElement />
    </Flex>
  ),
};

export const WithSpacer: Story = {
  render: () => (
    <Flex width="1000px">
      <DivElement />
      <Spacer />
      <DivElement />
    </Flex>
  ),
};

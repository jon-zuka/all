import type { ComponentProps } from "solid-js";
import type { Meta, StoryObj } from "storybook-solidjs";

import { Counter } from "./counter.cmp";
import type { CounterProps } from "./counter.cmp";

type Story = StoryObj<CounterProps>;

export const Default: Story = {
  args: {
    initialValue: 12,
    theme: "default",
  },
};

export const Second: Story = {
  args: {
    initialValue: 35,
  },
};

export const Thrid: Story = {
  args: {
    initialValue: 3225,
  },
};

export default {
  title: "Example/Counter",
  tags: ["autodocs"],
  render: ({...props}) => <Counter {...props} />,
  argTypes: {
    initialValue: { control: "number" },
    theme: {
      options: ["default", "red"],
      control: { type: "radio" },
    },
  },
} as Meta<ComponentProps<typeof Counter>>;
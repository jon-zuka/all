/** @jsxImportSource solid-js */

import type { Meta, StoryObj } from "storybook-solidjs";
import { Input, InputProps} from "./Input";

const meta = {
  title: "Form/Input",
  tags: ["autodocs"],
  render: (props: InputProps) => <Input {...props} />,
} satisfies Meta<typeof Input>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{
      position: 'fixed',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
  }}>
    <Input
      color="success"
      label="Food"
      value="Banana"
      onChange={(e) => {}}
    />
    </div>
  ),
};

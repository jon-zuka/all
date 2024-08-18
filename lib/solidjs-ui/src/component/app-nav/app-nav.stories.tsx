import type { Meta, StoryObj } from "storybook-solidjs";

import { AppNavBasic, type AppNavBasicProps } from "./app-nav-basic.cmp";

const meta = {
  title: "AppNav/Basic",
  tags: ["autodocs"],
  render: (props: AppNavBasicProps) => <AppNavBasic {...props} />,
} satisfies Meta<typeof AppNavBasic>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AppNavBasic
      logo={<div>Logo</div>}
      alpha={1}
      background="primary"
      action={
        <div>Action</div>
      }
      menu={
        <>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </>
      }

    ></AppNavBasic>
  ),
};

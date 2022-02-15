import React from "react";

import { Modal } from "./Modal";

export default {
  title: "Example/Modal",
  component: Modal,

  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Modal {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  primary: true,
  label: "modal",
};

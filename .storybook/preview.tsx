import type { Preview } from "@storybook/react";

import "../src/shared/index.css";
import { withRouter } from "storybook-addon-remix-react-router";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withRouter],
};

export default preview;

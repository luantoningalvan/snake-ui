import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: "Snake UI",
    appBg: "rgb(33, 40, 59)",
    barBg: "rgb(33, 40, 59)",
    appContentBg: "rgb(22, 27, 40)",
  },
});

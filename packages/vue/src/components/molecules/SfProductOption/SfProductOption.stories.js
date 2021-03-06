import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import SfProductOption from "./SfProductOption.vue";
storiesOf("Molecules|ProductOption", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfProductOption },
    props: {
      color: {
        default: text("color", "red", "Props")
      },
      label: {
        default: text("label", "Red", "Props")
      }
    },
    template: `<div style="max-width: 300px">
      <SfProductOption
        :color="color"
        :label="label"/>
    </div>`
  }))
  .add("[slot] color", () => ({
    components: { SfProductOption },
    props: {
      color: {
        default: text("color", "red", "Props")
      },
      label: {
        default: text("label", "Red", "Props")
      }
    },
    template: `<div style="max-width: 300px">
      <SfProductOption
        :color="color"
        :label="label">
        <template #color="{color}">
          <div :style="{width: '20px', height:'20px', backgroundColor: color, borderRadius: '100%', marginRight: '10px'}"></div>
        </template>
      </SfProductOption>
    </div>`
  }))
  .add("[slot] label", () => ({
    components: { SfProductOption },
    props: {
      color: {
        default: text("color", "red", "Props")
      },
      label: {
        default: text("label", "Red", "Props")
      }
    },
    template: `<div style="max-width: 300px">
      <SfProductOption
        :color="color"
        :label="label">
        <template #label="{label}">
          CUSTOM LABEL
        </template>
      </SfProductOption>
    </div>`
  }));

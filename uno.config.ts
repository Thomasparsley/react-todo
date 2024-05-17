// uno.config.ts
import { defineConfig } from "unocss";
import transformerCompileClass, { type CompileClassOptions } from "@unocss/transformer-compile-class";
import transformerVariantGroup from "@unocss/transformer-variant-group";

const transformerCompileClassConfig: CompileClassOptions = {
  classPrefix: "rta-",
  keepUnknown: true,
};

export default defineConfig({
  content: {
    pipeline: {
      include: [
        /\.(js|jsx|ts|tsx)($|\?)/,
      ],
      exclude: [
        /node_modules/,
      ],
    },
  },

  transformers: [
    transformerVariantGroup(),
    transformerCompileClass(transformerCompileClassConfig),
  ],
});

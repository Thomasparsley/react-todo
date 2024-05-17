import { cva, type VariantProps } from "class-variance-authority"

export const labelVariants = cva(
  ":uno: text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

export type LabelVariantProps = VariantProps<typeof labelVariants>;

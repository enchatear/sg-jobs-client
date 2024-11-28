export type FunctionArguments<T> = T extends (...args: infer A) => unknown
  ? A
  : never;

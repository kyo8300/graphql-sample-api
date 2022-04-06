import { interfaceType } from "nexus";

export const ErrorBase = interfaceType({
  name: "Error",
  definition(t) {
    t.nonNull.string("message");
  },
});

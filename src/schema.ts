import { makeSchema, connectionPlugin } from "nexus";
import { join } from "path";
import * as types from "./graphql";

export const schema = makeSchema({
  types,
  outputs: {
    schema: join(__dirname, "..", "schema.graphql"),
    typegen: join(__dirname, "nexus-typegen.ts"),
  },
  features: {
    abstractTypeStrategies: {
      __typename: true,
    },
  },
  plugins: [connectionPlugin()],
});

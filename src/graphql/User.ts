import { extendType, objectType } from "nexus";
import { connectionFromArray } from "graphql-relay";

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("name");
  },
});

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.connectionField("users", {
      type: "User",
      resolve(_, args) {
        const users = [
          { id: "g34kgnkwer", name: "mike" },
          { id: "kfokfo43kf", name: "bob" },
          { id: "dafegwgwe", name: "oio" },
          { id: "bwrtbrtwh", name: "eee" },
          { id: "3g54herher", name: "vvv" },
          { id: "okewropkg", name: "bbb" },
          { id: "mvrtkmbkw", name: "ook" },
          { id: "qpo34mgremg", name: "popg" },
          { id: "erlgwerew", name: "rgr" },
          { id: "brlmblkermb", name: "dog" },
          { id: "qlgmreggre", name: "mom" },
          { id: "43gerwerwbre", name: "fff" },
          { id: "pkgmhkemhk", name: "efe" },
        ];
        return connectionFromArray(users, args);
      },
    });
  },
});

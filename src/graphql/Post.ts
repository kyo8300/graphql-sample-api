import { extendType, nonNull, objectType, stringArg, unionType } from "nexus";
import { ErrorBase } from "./Error";

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("title");
    t.nonNull.string("text");
  },
});

export const PostNoTitleError = objectType({
  name: "PostNoTitleError",
  definition(t) {
    t.implements(ErrorBase);
    t.nonNull.int("statusCode");
  },
});

export const PostPayload = unionType({
  name: "PostPayload",
  definition(t) {
    t.members("Post", "PostNoTitleError");
  },
});

export const PostQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("post", {
      type: "PostPayload",
      resolve() {
        // const __typename = "Post";
        // const post = {
        //   id: `post-${Math.floor(Math.random() * 1000)}`,
        //   title: "saple",
        //   text: "sssss",
        // };

        // return {
        //   ...post,
        //   __typename,
        // };

        const __typename = "PostNoTitleError";

        return {
          message: "PostNoTitleError",
          statusCode: 404,
          __typename,
        };
      },
    });
  },
});

export const PostMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createPost", {
      type: "Post",
      args: {
        title: nonNull(stringArg()),
        text: nonNull(stringArg()),
      },
      resolve(_, args) {
        const { title, text } = args;
        const post = {
          id: `post-${Math.floor(Math.random() * 1000)}`,
          title,
          text,
        };

        return post;
      },
    });
  },
});

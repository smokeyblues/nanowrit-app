/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "aws-nanowrit",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const api = new sst.aws.ApiGatewayV1("PremiseApi", {

    });

    const bucket = new sst.aws.Bucket("Premise");

    const table = new sst.aws.Dynamo("Premises", {
      fields: {
        userId: "string",
        premiseId: "string",
      },
      primaryIndex: { hashKey: "userId", rangeKey: "premiseId" },
    });

    api.route("POST /premises", {
      link: [table],
      handler: "src/functions/post.main",
      url: true,
    });

    api.route("GET /premises/{id}", {
      link: [table],
      handler: "src/functions/get.main",
      url: true,
    });

    api.route("GET /premises", {
      link: [table],
      handler: "src/functions/list.main",
      url: true,
    });

    api.route("PUT /premises/{id}", {
      link: [table],
      handler: "src/functions/update.main",
      url: true,
    });

    api.route("DELETE /premises/{id}", {
      link: [table],
      handler: "src/functions/delete.main",
      url: true,
    });

    new sst.aws.Nextjs("MyWeb", {
      link: [table, bucket, api]
    });

    api.deploy();

    return {
      table: table.name,
      bucket: bucket.name,
      api: api.url,
    }
  },
});

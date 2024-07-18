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
    const bucket = new sst.aws.Bucket("Premise");
    const table = new sst.aws.Dynamo("Premises", {
      fields: {
        userId: "string",
        premiseId: "string",
      },
      primaryIndex: { hashKey: "userId", rangeKey: "premiseId" },
    });

    new sst.aws.Nextjs("MyWeb", {
      link: [table, bucket]
    });

    return {
      table: table.name,
      bucket: bucket.name,
    }
  },
});

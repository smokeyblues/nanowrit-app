import handler from "@/core/handler";
import dynamoDb from "@/core/dynamodb";

import { Resource } from "sst";

export const main = handler(async (event) => {
  const params = {
    TableName: Resource.Premises.name,
    Key: {
      userId: "123", // The id of the author
      premiseId: event?.pathParameters?.id, // The id of the premise from the path
    },
  };

  await dynamoDb.delete(params);

  return JSON.stringify({ status: true });
});
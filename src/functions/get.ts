import handler from "@/core/handler";
import dynamoDb from "@/core/dynamodb";

import { Resource } from "sst";

export const main = handler(async (event) => {
  const params = {
    TableName: Resource.Premises.name,
    // 'Key' defines the partition key and sort key of
    // the item to be retrieved
    Key: {
      userId: "123", // The id of the author
      premiseId: event?.pathParameters?.id, // The id of the premise from the path
    },
  };

  const result = await dynamoDb.get(params);
  if (!result.Item) {
    throw new Error("Item not found.");
  }

  // Return the retrieved item
  return JSON.stringify(result.Item);
});
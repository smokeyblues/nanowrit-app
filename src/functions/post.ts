import * as uuid from "uuid";
import handler from "@/core/handler";
import dynamoDb from "@/core/dynamodb";

import { Resource } from "sst";

export const main = handler(async (event) => {
    let data = {
        content: "",
        attachment: "",
    };

    if (event.body != null) {
        data = JSON.parse(event.body);
    }

    const params = {
        TableName: Resource.Premises.name,
        Item: {
            userId: "123",
            premiseId: uuid.v1(),
            content: data.content,
            attachment: data.attachment,
            createdAt: Date.now(),
        },
    };

    await dynamoDb.put(params);

    return JSON.stringify(params.Item);
});



// export async function handler(event: APIGatewayProxyEvent) {
//     let data, params;

//     if (event.body) {
//         data = JSON.parse(event.body);
//         params = {
//           TableName: Resource.Premises.name,
//           Item: {
//             // The attributes of the item to be created
//             userId: "123", // The id of the author
//             premiseId: uuid.v1(), // A unique uuid
//             content: data.content, // Parsed from request body
//             attachment: data.attachment, // Parsed from request body
//             createdAt: Date.now(), // Current Unix timestamp
//           },
//         };
//       } else {
//         return {
//           statusCode: 404,
//           body: JSON.stringify({ error: true }),
//         };
//       }
    
//       try {
//         await dynamoDb.put(params).promise();
    
//         return {
//           statusCode: 200,
//           body: JSON.stringify(params.Item),
//         };
//       } catch (error) {
//         let message;
//         if (error instanceof Error) {
//           message = error.message;
//         } else {
//           message = String(error);
//         }
//         return {
//           statusCode: 500,
//           body: JSON.stringify({ error: message }),
//         };
//       }
//     }
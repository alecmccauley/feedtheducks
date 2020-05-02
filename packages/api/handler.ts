import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";
import { getMessage } from "./src";

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: getMessage("world"),
        input: event,
      },
      null,
      2
    ),
  };
};

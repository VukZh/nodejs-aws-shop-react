import { buildResponseBody, BuildResponseReturnType } from "~/handlers/types";

export const buildResponse = <T extends buildResponseBody>(
  statusCode: number,
  body: T
): BuildResponseReturnType => ({
  statusCode: statusCode,
  headers: {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  },
  body: JSON.stringify(body),
});

import { buildResponse } from "~/handlers/helpers";
import { productsLambdaTest as PRODUCT } from "~/mocks/data";
import { ProductType } from "~/handlers/types";
import { APIGatewayEvent, APIGatewayProxyEventPathParameters } from "aws-lambda";

const getProduct = (pathParameters: APIGatewayProxyEventPathParameters) => {
  const res = PRODUCT.find((product) => product.id == pathParameters.productId);
  return res;
};
export const handler = async (event: { pathParameters: { productId: string } }) => {
  try {
    const pathParameters = event.pathParameters || {}
    const product = getProduct(pathParameters);
    if (product) {
      return buildResponse(200, {
        product: product as ProductType,
      });
    }
    throw ('Product not found');
  } catch (error) {
    return buildResponse(500, {
      message: error as string,
    });
  }
};

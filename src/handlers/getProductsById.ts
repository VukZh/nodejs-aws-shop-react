import { buildResponse } from "~/handlers/helpers";
import { productsLambdaTest as PRODUCT } from "~/mocks/data";
import { ProductType } from "~/handlers/types";
import { APIGatewayEvent, APIGatewayProxyEventPathParameters } from "aws-lambda";

const getProduct = (productId: APIGatewayProxyEventPathParameters) => {
  const res = PRODUCT.find((product) => product.id == productId.productId);
  return res;
};
export const handler = async (productId: APIGatewayEvent) => {
  try {
    const id = productId.pathParameters || {}
    const product = getProduct(id);
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

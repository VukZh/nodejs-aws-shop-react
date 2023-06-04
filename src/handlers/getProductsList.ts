import { buildResponse } from "~/handlers/helpers";
import { productsLambdaTest as PRODUCTS } from "~/mocks/data";
import { ProductsType } from "~/handlers/types";

export const handler = async () => {
  try {
    return buildResponse(200, {
      products: PRODUCTS as ProductsType,
    });
  } catch (error) {
    return buildResponse(500, {
      message: error as string,
    });
  }
};

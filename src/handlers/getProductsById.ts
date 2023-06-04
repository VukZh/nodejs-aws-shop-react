import { buildResponse } from "~/handlers/helpers";
import { products as PRODUCT } from "~/mocks/data";
import { ProductType } from "~/handlers/types";


const getProduct = (id: string) => {
  const res = PRODUCT.find((product) => product.id === id);
  return res;
};
export const getProductsById = async (id: string) => {
  try {
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

import {
  DEFAULT_MAIN_IMAGE,
  DEFAULT_SPECIFICATIONS,
  EMPTY_BULLET,
  EMPTY_VARIANT_DRAFT,
} from './constants';

export function buildDefaultValues(product, categories = []) {
  return {
    title: product?.title || '',
    brand: product?.brand || '',
    description: product?.description || '',
    bulletPoints:
      product?.bulletPoints?.length > 0
        ? product.bulletPoints.map((b) => ({ value: b }))
        : [EMPTY_BULLET],
    asin: product?.asin || '',
    sku: product?.sku || '',
    gtin: product?.gtin || '',
    categoryId: product?.category?._id || categories?.[0]?._id || '',
    subCategoriesStr: product?.subCategories?.join(', ') || '',
    tagsStr: product?.tags?.join(', ') || '',
    basePrice: product?.price?.basePrice?.toString() || '99.00',
    discountPrice: product?.price?.discountPrice?.toString() || '',
    currency: product?.price?.currency || 'USD',
    stock: product?.stock?.toString() || '25',
    inventoryStatus: product?.inventoryStatus || 'In Stock',
    mainImage: product?.mainImage || DEFAULT_MAIN_IMAGE,
    galleryStr: product?.gallery?.join('\n') || '',
    specifications:
      product?.specifications?.length > 0 ? product.specifications : DEFAULT_SPECIFICATIONS,
    shippingWeight: product?.shipping?.weight?.toString() || '1.2',
    shippingLength: product?.shipping?.dimensions?.length?.toString() || '20',
    shippingWidth: product?.shipping?.dimensions?.width?.toString() || '15',
    shippingHeight: product?.shipping?.dimensions?.height?.toString() || '8',
    shippingUnit: product?.shipping?.dimensions?.unit || 'cm',
    isPrimeEligible: product?.shipping?.isPrimeEligible ?? true,
    ratingAverage: product?.ratings?.average?.toString() || '4.8',
    ratingCount: product?.ratings?.count?.toString() || '50',
    variants: product?.variants || [],
    isActive: product?.isActive ?? true,
    variantDraft: { ...EMPTY_VARIANT_DRAFT },
  };
}

import { num, splitCsv, splitLines } from './helpers';

export function buildProductPayload(data, initialProduct, categories = []) {
  const selectedCategory = categories.find((c) => c._id === data.categoryId) || categories[0];

  return {
    _id: initialProduct?._id || `prod_${Date.now()}`,
    title: data.title.trim(),
    brand: data.brand.trim(),
    description: data.description.trim(),
    bulletPoints: (data.bulletPoints || []).map((b) => b.value?.trim()).filter(Boolean),
    asin: data.asin?.trim() || undefined,
    sku: data.sku.trim(),
    gtin: data.gtin?.trim() || undefined,
    category: selectedCategory,
    subCategories: splitCsv(data.subCategoriesStr),
    tags: splitCsv(data.tagsStr),
    price: {
      basePrice: num(data.basePrice) ?? 0,
      discountPrice: num(data.discountPrice),
      currency: data.currency,
    },
    stock: parseInt(data.stock, 10) || 0,
    inventoryStatus: data.inventoryStatus,
    mainImage: data.mainImage.trim(),
    gallery: splitLines(data.galleryStr),
    specifications: (data.specifications || []).filter((s) => s.key?.trim() && s.value?.trim()),
    shipping: {
      weight: num(data.shippingWeight),
      dimensions: {
        length: num(data.shippingLength) ?? 10,
        width: num(data.shippingWidth) ?? 10,
        height: num(data.shippingHeight) ?? 5,
        unit: data.shippingUnit,
      },
      isPrimeEligible: data.isPrimeEligible,
    },
    ratings: {
      average: num(data.ratingAverage) ?? 0,
      count: parseInt(data.ratingCount, 10) || 0,
    },
    variants: data.variants || [],
    isActive: data.isActive,
    seller: initialProduct?.seller || {
      _id: 'usr_admin',
      name: 'Direct Brand Depot',
      rating: 5.0,
    },
    createdAt: initialProduct?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

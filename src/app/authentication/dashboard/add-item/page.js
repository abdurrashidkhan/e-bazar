'use client';
import ProductFormModal from '@/Components/DashBoard/product-form';
import { useState } from 'react';

export default function ProductsPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);

  // Example categories (replace with your real fetch)
  const categories = [
    { _id: 'cat_1', name: 'Audio', slug: 'audio' },
    { _id: 'cat_2', name: 'Wearables', slug: 'wearables' },
  ];

  // Open modal in EDIT mode
  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsOpen(true);
  };

  // Close modal + clear edit target
  const handleClose = () => {
    setIsOpen(false);
    setEditingProduct(null);
  };

  // Save — update
  const handleSave = async (product) => {
    await fetch(`/api/products/${product._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    // Optionally refresh your list here
  };

  return (
    <div className='p-6'>
      {/* Example product row with Edit button */}
      <button
        onClick={() =>
          handleEdit({
            _id: 'prod_123',
            title: 'Aura Pro Hybrid Wireless Headphones',
            brand: 'Aura Soundworks',
            sku: 'AUR-HP-PRO-01',
            price: { basePrice: 349, currency: 'USD' },
            category: { _id: 'cat_1', name: 'Audio', slug: 'audio' },
            stock: 25,
            isActive: true,
            mainImage: 'https://example.com/img.jpg',
          })
        }
        className=''
      ></button>

      {/* Modal — edit only */}
      <ProductFormModal
        initialProduct={editingProduct}
        categories={categories}
        isOpen={isOpen}
        onClose={handleClose}
        onSave={handleSave}
      />
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { buildDefaultValues } from './buildDefaultValues';
import { buildProductPayload } from './buildProductPayload';
import { EMPTY_VARIANT_DRAFT } from './constants';

import { ErrorBanner } from './ErrorBanner';
import { FormFooter } from './FormFooter';
import { ModalHeader } from './ModalHeader';
import { SectionTabs } from './SectionTabs';

import { BasicInfoSection } from './sections/BasicInfoSection';
import { IdentificationSection } from './sections/IdentificationSection';
import { MediaSection } from './sections/MediaSection';
import { PricingSection } from './sections/PricingSection';
import { ShippingSection } from './sections/ShippingSection';
import { TaxonomySection } from './sections/TaxonomySection';
import { VariantsSection } from './sections/VariantsSection';

export const ProductFormModal = ({ initialProduct, categories = [], isOpen, onClose, onSave }) => {
  const isEditing = Boolean(initialProduct);
  const [activeSection, setActiveSection] = useState(1);

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: buildDefaultValues(initialProduct, categories),
  });

  const bulletArray = useFieldArray({ control, name: 'bulletPoints' });
  const specArray = useFieldArray({ control, name: 'specifications' });
  const variantArray = useFieldArray({ control, name: 'variants' });

  /* Sync form when modal opens or product changes */
  useEffect(() => {
    if (!isOpen) return;
    reset(buildDefaultValues(initialProduct, categories));
    setActiveSection(1);
  }, [isOpen, initialProduct, categories, reset]);

  if (!isOpen) return null;

  const handleAddVariant = () => {
    const draft = getValues('variantDraft');
    if (!draft?.sku?.trim()) return;

    variantArray.append({
      _id: `var_${Date.now()}`,
      sku: draft.sku.trim(),
      attributes: {
        color: draft.color?.trim() || undefined,
        size: draft.size?.trim() || undefined,
        material: draft.material?.trim() || undefined,
      },
      price: parseFloat(draft.price) || 0,
      stock: parseInt(draft.stock, 10) || 0,
      images: [getValues('mainImage')],
    });

    setValue('variantDraft', { ...EMPTY_VARIANT_DRAFT });
  };

  const onSubmit = (data) => {
    const payload = buildProductPayload(data, initialProduct, categories);
    onSave(payload);
    onClose();
  };

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto'>
      <div
        className='relative w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-8'
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader isEditing={isEditing} onClose={onClose} />
        <SectionTabs active={activeSection} onChange={setActiveSection} />

        {hasErrors && <ErrorBanner />}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='p-6 max-h-[65vh] overflow-y-auto space-y-5 text-xs'
        >
          {activeSection === 1 && (
            <BasicInfoSection register={register} bulletArray={bulletArray} />
          )}

          {activeSection === 2 && <IdentificationSection register={register} />}

          {activeSection === 3 && <TaxonomySection register={register} categories={categories} />}

          {activeSection === 4 && <PricingSection register={register} />}

          {activeSection === 5 && <MediaSection register={register} specArray={specArray} />}

          {activeSection === 6 && <ShippingSection register={register} />}

          {activeSection === 7 && (
            <VariantsSection
              register={register}
              variantArray={variantArray}
              onAddVariant={handleAddVariant}
            />
          )}

          <FormFooter
            activeSection={activeSection}
            onPrev={() => setActiveSection((s) => s - 1)}
            onNext={() => setActiveSection((s) => s + 1)}
            onClose={onClose}
            isEditing={isEditing}
          />
        </form>
      </div>
    </div>
  );
};

export default ProductFormModal;

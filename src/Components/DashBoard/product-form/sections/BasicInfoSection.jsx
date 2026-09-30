import { FiPlus, FiTrash2 } from 'react-icons/fi';
import { EMPTY_BULLET, INPUT_CLS } from '../constants';
import { Field } from '../Field';

export const BasicInfoSection = ({ register, bulletArray }) => {
  const { fields, append, remove } = bulletArray;

  return (
    <div className='space-y-4'>
      <Field label='Product Title' required>
        <input
          type='text'
          {...register('title', { required: true })}
          placeholder='e.g. Aura Pro Hybrid Wireless Headphones'
          className={INPUT_CLS}
        />
      </Field>

      <Field label='Brand' required>
        <input
          type='text'
          {...register('brand', { required: true })}
          placeholder='e.g. Aura Soundworks'
          className={INPUT_CLS}
        />
      </Field>

      <Field label='Description' required>
        <textarea
          rows={3}
          {...register('description', { required: true })}
          placeholder='Comprehensive description of the product engineering and design...'
          className={INPUT_CLS}
        />
      </Field>

      <div>
        <div className='flex items-center justify-between mb-1.5'>
          <label className='text-neutral-300 font-medium'>
            Bullet Points (Amazon-style "About this item")
          </label>
          <button
            type='button'
            onClick={() => append({ ...EMPTY_BULLET })}
            className='text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1'
          >
            <FiPlus className='w-3 h-3' /> Add Item
          </button>
        </div>

        <div className='space-y-2'>
          {fields.map((field, idx) => (
            <div key={field.id} className='flex items-center gap-2'>
              <input
                type='text'
                {...register(`bulletPoints.${idx}.value`)}
                placeholder={`Key feature highlight #${idx + 1}`}
                className={`flex-1 ${INPUT_CLS}`}
              />
              {fields.length > 1 && (
                <button
                  type='button'
                  onClick={() => remove(idx)}
                  className='p-1.5 text-neutral-500 hover:text-rose-400'
                >
                  <FiTrash2 className='w-3.5 h-3.5' />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import { FiPlus, FiTrash2 } from 'react-icons/fi';
import { EMPTY_SPEC, INPUT_CLS, MONO_INPUT_CLS } from '../constants';
import { Field } from '../Field';

export const MediaSection = ({ register, specArray }) => {
  const { fields, append, remove } = specArray;

  return (
    <div className='space-y-4'>
      <Field label='Main Image URL' required>
        <input
          type='text'
          {...register('mainImage', { required: true })}
          placeholder='https://...'
          className={`${MONO_INPUT_CLS} text-[11px]`}
        />
      </Field>

      <Field label='Gallery Image URLs (one per line)'>
        <textarea
          rows={2}
          {...register('galleryStr')}
          placeholder='https://...'
          className={`${MONO_INPUT_CLS} text-[11px]`}
        />
      </Field>

      <div>
        <div className='flex items-center justify-between mb-1.5'>
          <label className='text-neutral-300 font-medium'>Specifications</label>
          <button
            type='button'
            onClick={() => append({ ...EMPTY_SPEC })}
            className='text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1'
          >
            <FiPlus className='w-3 h-3' /> Add Spec
          </button>
        </div>

        <div className='space-y-2'>
          {fields.map((field, idx) => (
            <div key={field.id} className='flex items-center gap-2'>
              <input
                type='text'
                {...register(`specifications.${idx}.key`)}
                placeholder='Key (e.g. Weight)'
                className={`w-1/3 ${INPUT_CLS}`}
              />
              <input
                type='text'
                {...register(`specifications.${idx}.value`)}
                placeholder='Value (e.g. 1.2 lbs)'
                className={`flex-1 ${INPUT_CLS}`}
              />
              <button
                type='button'
                onClick={() => remove(idx)}
                className='p-1.5 text-neutral-500 hover:text-rose-400'
              >
                <FiTrash2 className='w-3.5 h-3.5' />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

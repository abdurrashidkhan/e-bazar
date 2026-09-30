import { MONO_INPUT_CLS } from '../constants';
import { Field } from '../Field';

export const ShippingSection = ({ register }) => (
  <div className='space-y-4'>
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
      <Field label='Length'>
        <input type='number' {...register('shippingLength')} className={MONO_INPUT_CLS} />
      </Field>
      <Field label='Width'>
        <input type='number' {...register('shippingWidth')} className={MONO_INPUT_CLS} />
      </Field>
      <Field label='Height'>
        <input type='number' {...register('shippingHeight')} className={MONO_INPUT_CLS} />
      </Field>
      <Field label='Unit'>
        <input type='text' {...register('shippingUnit')} className={MONO_INPUT_CLS} />
      </Field>
    </div>

    <div className='grid grid-cols-2 gap-3'>
      <Field label='Weight (kg)'>
        <input
          type='number'
          step='0.05'
          {...register('shippingWeight')}
          className={MONO_INPUT_CLS}
        />
      </Field>

      <div className='flex items-center gap-3 pt-6'>
        <label className='flex items-center gap-2 cursor-pointer select-none text-neutral-300'>
          <input
            type='checkbox'
            {...register('isPrimeEligible')}
            className='w-4 h-4 rounded accent-emerald-500'
          />
          <span className='font-medium'>isPrimeEligible</span>
        </label>
      </div>
    </div>

    <div className='pt-3 border-t border-neutral-800'>
      <label className='flex items-center gap-2 cursor-pointer select-none text-neutral-300'>
        <input
          type='checkbox'
          {...register('isActive')}
          className='w-4 h-4 rounded accent-emerald-500'
        />
        <span className='font-medium'>isActive (Published in search & catalog)</span>
      </label>
    </div>
  </div>
);

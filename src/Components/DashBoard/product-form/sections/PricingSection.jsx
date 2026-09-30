import { INPUT_CLS, INVENTORY_STATUS_OPTIONS, MONO_INPUT_CLS } from '../constants';
import { Field } from '../Field';

export const PricingSection = ({ register }) => (
  <div className='space-y-4'>
    <div className='grid grid-cols-2 gap-3'>
      <Field label='Base Price' required>
        <input
          type='number'
          step='0.01'
          {...register('basePrice', { required: true })}
          className={MONO_INPUT_CLS}
        />
      </Field>

      <Field label='Discount Price (Optional)'>
        <input
          type='number'
          step='0.01'
          {...register('discountPrice')}
          placeholder='e.g. 349.00'
          className={MONO_INPUT_CLS}
        />
      </Field>
    </div>

    <div className='grid grid-cols-3 gap-3'>
      <Field label='Currency'>
        <input type='text' {...register('currency')} className={MONO_INPUT_CLS} />
      </Field>

      <Field label='Stock Quantity'>
        <input type='number' min='0' {...register('stock')} className={MONO_INPUT_CLS} />
      </Field>

      <Field label='Inventory Status'>
        <select {...register('inventoryStatus')} className={INPUT_CLS}>
          {INVENTORY_STATUS_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>
    </div>
  </div>
);

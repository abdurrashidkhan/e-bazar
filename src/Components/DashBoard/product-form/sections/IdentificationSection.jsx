import { MONO_INPUT_CLS } from '../constants';
import { Field } from '../Field';

export const IdentificationSection = ({ register }) => (
  <div className='space-y-4'>
    <Field label='SKU' required>
      <input
        type='text'
        {...register('sku', { required: true })}
        placeholder='e.g. AUR-HP-PRO-01'
        className={MONO_INPUT_CLS}
      />
    </Field>

    <Field label='ASIN'>
      <input
        type='text'
        {...register('asin')}
        placeholder='e.g. B0CH984K9L'
        className={MONO_INPUT_CLS}
      />
    </Field>

    <Field label='GTIN'>
      <input
        type='text'
        {...register('gtin')}
        placeholder='e.g. 810084029104'
        className={MONO_INPUT_CLS}
      />
    </Field>
  </div>
);

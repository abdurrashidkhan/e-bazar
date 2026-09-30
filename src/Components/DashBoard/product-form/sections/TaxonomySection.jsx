import { INPUT_CLS } from '../constants';
import { Field } from '../Field';

export const TaxonomySection = ({ register, categories = [] }) => (
  <div className='space-y-4'>
    <Field label='Category'>
      <select {...register('categoryId')} className={INPUT_CLS}>
        {categories.map((c) => (
          <option key={c._id} value={c._id}>
            {c.name} ({c.slug})
          </option>
        ))}
      </select>
    </Field>

    <Field label='Sub-Categories (comma separated)'>
      <input
        type='text'
        {...register('subCategoriesStr')}
        placeholder='e.g. Over-Ear Headphones, Wireless Audio'
        className={INPUT_CLS}
      />
    </Field>

    <Field label='Tags (comma separated)'>
      <input
        type='text'
        {...register('tagsStr')}
        placeholder='e.g. Noise-Cancelling, Bluetooth 5.4'
        className={INPUT_CLS}
      />
    </Field>
  </div>
);

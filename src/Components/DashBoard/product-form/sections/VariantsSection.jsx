import { FiTrash2 } from 'react-icons/fi';
import { SMALL_MONO_INPUT_CLS } from '../constants';

export const VariantsSection = ({ register, variantArray, onAddVariant }) => {
  const { fields, remove } = variantArray;

  return (
    <div className='space-y-4'>
      <div className='p-3 bg-neutral-950/70 border border-neutral-800 rounded-xl space-y-3'>
        <div className='text-xs font-semibold text-neutral-300'>Add Variant</div>

        <div className='grid grid-cols-3 gap-2'>
          <input
            type='text'
            placeholder='Variant SKU *'
            {...register('variantDraft.sku')}
            className={SMALL_MONO_INPUT_CLS}
          />
          <input
            type='text'
            placeholder='Color'
            {...register('variantDraft.color')}
            className={SMALL_MONO_INPUT_CLS}
          />
          <input
            type='text'
            placeholder='Size'
            {...register('variantDraft.size')}
            className={SMALL_MONO_INPUT_CLS}
          />
        </div>

        <div className='grid grid-cols-3 gap-2'>
          <input
            type='text'
            placeholder='Material'
            {...register('variantDraft.material')}
            className={SMALL_MONO_INPUT_CLS}
          />
          <input
            type='number'
            placeholder='Price *'
            {...register('variantDraft.price')}
            className={SMALL_MONO_INPUT_CLS}
          />
          <input
            type='number'
            placeholder='Stock count'
            {...register('variantDraft.stock')}
            className={SMALL_MONO_INPUT_CLS}
          />
        </div>

        <button
          type='button'
          onClick={onAddVariant}
          className='px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded text-xs font-medium transition-colors'
        >
          + Add Variant Row
        </button>
      </div>

      <div className='space-y-2'>
        <div className='text-xs font-medium text-neutral-400'>
          Configured Variants ({fields.length})
        </div>

        {fields.length === 0 ? (
          <div className='text-center py-4 text-neutral-500 text-xs bg-neutral-950/40 rounded-lg border border-neutral-800'>
            No variants added.
          </div>
        ) : (
          <div className='divide-y divide-neutral-800 rounded-lg border border-neutral-800 overflow-hidden bg-neutral-950'>
            {fields.map((v, idx) => (
              <div key={v.id} className='p-2.5 flex items-center justify-between text-xs'>
                <div>
                  <div className='font-mono text-white'>{v.sku}</div>
                  <div className='text-[11px] text-neutral-400'>
                    {v.attributes?.color && `Color: ${v.attributes.color} · `}
                    {v.attributes?.size && `Size: ${v.attributes.size} · `}
                    {v.attributes?.material && `Material: ${v.attributes.material}`}
                  </div>
                </div>

                <div className='flex items-center gap-3'>
                  <div className='text-right font-mono'>
                    <span className='text-white'>${Number(v.price).toFixed(2)}</span>
                    <span className='text-neutral-500 text-[10px] block'>Stock: {v.stock}</span>
                  </div>
                  <button
                    type='button'
                    onClick={() => remove(idx)}
                    className='text-neutral-500 hover:text-rose-400 p-1'
                  >
                    <FiTrash2 className='w-3.5 h-3.5' />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

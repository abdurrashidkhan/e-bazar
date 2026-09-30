import { SECTIONS } from './constants';

export const FormFooter = ({ activeSection, onPrev, onNext, onClose, isEditing }) => {
  const lastSection = SECTIONS[SECTIONS.length - 1].id;

  return (
    <div className='flex items-center justify-between pt-4 border-t border-neutral-800'>
      <div className='flex items-center gap-2'>
        {activeSection > 1 && (
          <button
            type='button'
            onClick={onPrev}
            className='px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors'
          >
            Previous
          </button>
        )}
        {activeSection < lastSection && (
          <button
            type='button'
            onClick={onNext}
            className='px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors'
          >
            Next Section
          </button>
        )}
      </div>

      <div className='flex items-center gap-2'>
        <button
          type='button'
          onClick={onClose}
          className='px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-medium transition-colors'
        >
          Cancel
        </button>
        <button
          type='submit'
          className='px-4 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-semibold transition-all shadow-sm active:scale-95'
        >
          {isEditing ? 'Save Changes' : 'Create Product'}
        </button>
      </div>
    </div>
  );
};

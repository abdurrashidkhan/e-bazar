import { FiX } from 'react-icons/fi';

export const ModalHeader = ({ isEditing, onClose }) => (
  <div className='flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/70'>
    <div>
      <h3 className='text-sm font-bold text-white'>
        {isEditing ? 'Edit Product Document' : 'Create New Product'}
      </h3>
      <p className='text-xs text-neutral-400'>
        Form strictly validated against the 10 schema fields.
      </p>
    </div>
    <button
      type='button'
      onClick={onClose}
      aria-label='Close'
      className='p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors'
    >
      <FiX className='w-4 h-4' />
    </button>
  </div>
);

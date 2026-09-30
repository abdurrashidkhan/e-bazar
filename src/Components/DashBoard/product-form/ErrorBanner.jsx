import { FiAlertCircle } from 'react-icons/fi';

export const ErrorBanner = () => (
  <div className='mx-6 mt-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2'>
    <FiAlertCircle className='w-4 h-4 shrink-0' />
    <span>Please fill in all required fields.</span>
  </div>
);

import { SECTIONS } from './constants';

export const SectionTabs = ({ active, onChange }) => (
  <div className='flex items-center gap-1 px-6 py-2.5 bg-neutral-950 border-b border-neutral-800 overflow-x-auto text-xs'>
    {SECTIONS.map((s) => (
      <button
        key={s.id}
        type='button'
        onClick={() => onChange(s.id)}
        className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
          active === s.id
            ? 'bg-neutral-800 text-white font-medium shadow-xs'
            : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900'
        }`}
      >
        {s.label}
      </button>
    ))}
  </div>
);

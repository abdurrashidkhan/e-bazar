export const Field = ({ label, required, children }) => (
  <div>
    <label className="block text-neutral-300 font-medium mb-1">
      {label} {required && <span className="text-rose-400">*</span>}
    </label>
    {children}
  </div>
);

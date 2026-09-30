export const splitCsv = (str) =>
  (str || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

export const splitLines = (str) =>
  (str || '')
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean);

export const num = (v) => (v === '' || v === undefined || v === null ? undefined : Number(v));

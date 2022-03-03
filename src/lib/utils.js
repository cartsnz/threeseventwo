export const pageHandle = (str) => {
  return str.trim().toLowerCase().replaceAll(' ', '-');
}

export const isClient = !!(
  typeof window !== 'undefined'
  && window.document
  && window.document.createElement
);

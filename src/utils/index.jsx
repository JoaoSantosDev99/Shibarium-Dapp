export const addressShortener = (address) => {
  return address.slice(0, 4) + "..." + address.slice(-4);
};

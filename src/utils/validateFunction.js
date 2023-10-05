export const validate = (value, samplePattern) => {
  const pattern = new RegExp(samplePattern);
  const result = pattern.test(value);
  return result;
};

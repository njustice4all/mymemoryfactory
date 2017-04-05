export const prepareMessages = (localeObject, target) => {
  const keys = Object.keys(localeObject);
  const descriptors = {};

  for (let i = 0; i < keys.length; i++) {
    const tokens = keys[i].split('.');
    if (tokens.indexOf(target) !== -1) {
      const token = tokens[tokens.length - 1];
      descriptors[token] = {
        id: keys[i],
        msg: localeObject[keys[i]]
      };
    }
  }

  return descriptors;
};

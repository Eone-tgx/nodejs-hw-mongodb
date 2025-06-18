const parseIsFavourite = (isFavourite) => {
  const isBoolean = typeof isFavourite === 'boolean';

  if (!isBoolean) return isFavourite;
};

const parseContactType = (contactType) => {
  const isString = typeof contactType === 'string';

  if (!isString) return;

  const isType = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);

  if (isType(contactType)) return contactType;
};

export const parseFilterParams = (query) => {
  const { isFavourite, contactType } = query;

  const parsedisFavourite = parseIsFavourite(isFavourite);
  const parsedContactType = parseContactType(contactType);

  return {
    isFavourite: parsedisFavourite,
    contactType: parsedContactType,
  };
};

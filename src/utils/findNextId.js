const findNextId = (array) => {
  if (array.length) {
    const length = array.length;
    const maxId = array[length - 1].id;
    const nextId = maxId + 1;
    return nextId;
  }
  return 1;
};

export default findNextId;

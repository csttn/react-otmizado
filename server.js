module.exports = () => {
  const data = {
    products: [],
  };

  for (let index = 0; index < 10000; index++) {
    data.products.push({
      id: index + 1,
      price: 80,
      title: `Camiseta ${index + 1}`,
    });
  }

  return data;
};

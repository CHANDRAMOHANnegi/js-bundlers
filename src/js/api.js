export const getMotivationalImages = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const images = [
        "images/motivational-pictures/1.jpeg",
        "images/motivational-pictures/2.jpeg",
      ];
      resolve(images);
    }, 1000);
  });
};

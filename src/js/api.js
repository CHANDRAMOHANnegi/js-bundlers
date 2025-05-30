export const getMotivationalImages = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const images = [
        "images/motivational-pictures/1.webp",
        "images/motivational-pictures/2.webp",
      ];
      resolve(images);
    }, 1000);
  });
};

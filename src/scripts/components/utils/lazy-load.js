export const LazyLoad = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    // set image source only when it is in the viewport
    if (entry.isIntersecting) {
      const image = entry.target;
      // setting image source from the dataset
      image.src = image.dataset.src;

      // when image is loaded, we do not need to observe it any more
      LazyLoad.unobserve(image);
    }
  }),
);

export default LazyLoad;

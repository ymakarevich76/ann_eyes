$('[data-fancybox="gallery"]').fancybox({
  loop: true,
  autoFocus: false,
  thumbs: {
    autoStart: false,
    hideOnClose: true,
    parentEl: ".fancybox-container",
    axis: "y"
  },
  clickSlide: "close",
});

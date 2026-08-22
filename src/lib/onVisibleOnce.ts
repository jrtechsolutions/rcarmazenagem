/** Runs `fn` once when `el` is in the viewport. */
export function onVisibleOnce(
  el: HTMLElement,
  fn: () => void,
  threshold = 0.15,
) {
  let started = false;
  const start = () => {
    if (started) return;
    started = true;
    fn();
  };

  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        start();
        io.disconnect();
      }
    },
    { threshold },
  );
  io.observe(el);

  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    start();
    io.disconnect();
  }

  return () => io.disconnect();
}

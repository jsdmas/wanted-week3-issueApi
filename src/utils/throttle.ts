// eslint-disable-next-line
type Func = (...args: any[]) => void;

const throttle = (context: Func, limit: number): Func => {
  let inThrottle = true;

  // eslint-disable-next-line
  return function (this: Func, ...args: any[]) {
    if (inThrottle) {
      context.apply(this, args);
      inThrottle = false;
      setTimeout(() => (inThrottle = true), limit);
    }
  }.bind(context);
};

export default throttle;

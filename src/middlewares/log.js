const logMiddleware = (store) => (next) => (action) => {
  // eslint-disable-next-line no-console
  next(action);
};

export default logMiddleware;

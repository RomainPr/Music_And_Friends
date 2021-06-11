const logMiddleware = (store) => (next) => (action) => {
  // eslint-disable-next-line no-console
  console.log('Je suis logMiddleware et recois laction : ', action);
  next(action);
};

export default logMiddleware;

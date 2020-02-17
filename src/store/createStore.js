import { createStore, compose, applyMiddleware } from 'redux';
import isBrowser from 'src/helpers/isBrowser';

export default (reducers, middlewares) => {
  const enhancer =
    process.env.NODE_ENV === 'development' && isBrowser()
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : compose(applyMiddleware(...middlewares));
  return createStore(reducers, enhancer);
};

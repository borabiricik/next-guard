declare const NextGuard: () => {
    handlers: {
        GET: () => void;
        POST: () => void;
    };
};
export { NextGuard };

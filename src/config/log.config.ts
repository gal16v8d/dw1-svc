import npmlog from 'npmlog';

export const configureLogger = () => {
  Object.defineProperty(npmlog, 'heading', {
    get: () => {
      return new Date().toUTCString();
    },
  });
  npmlog.headingStyle = { bg: '', fg: 'white' };
};

declare const require: {
    context(
      directory: string,
      useSubdirectories: boolean,
      regExp?: RegExp
    ): {
      keys(): string[];
      <T>(id: string): T;
    };
  };

const files: any = {};
const context = require.context('./docs', false);

context.keys().forEach((key: any) => {
    files[key] = context(key);
});

export default files;
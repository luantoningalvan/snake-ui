export default function (...args: any[]) {
  let className = "snake";

  args.forEach((arg, index) => {
    if (arg !== null && arg !== undefined) {
      if (args.length === index + 1) {
        className = className.concat(" " + arg);
      } else {
        className = className.concat("-" + arg);
      }
    }
  });

  return className;
}

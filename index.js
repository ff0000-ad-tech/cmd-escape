function cmdEscape(args) {
  return args
    .map(arg => {
      arg = new String(arg);
      if (!arg.match(/^--/)) {
        arg = arg.replace(/"/g, '\\"');
        return `"${arg}"`;
      } else {
        return arg;
      }
    })
    .join(" ");
}
module.exports = cmdEscape;

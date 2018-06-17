const { spawn } = require('child_process');
const readline = require('readline');

module.exports = async (cmd_string, opts = {}) => {
  const [cmd, ...args] = cmd_string.split(' ');
  console.log(cmd, ...args);
  const cp = spawn(cmd, args, {
    // encoding: 'utf8',
    shell: true,
    stdio: ['inherit', 'pipe', 'pipe'],
    ...opts,
  });

  ['stdout', 'stderr'].forEach(stdio => readline.createInterface({ input: cp[stdio] }).on('line', line => line.trim().length && process[stdio].write(' ' + line + '\n')));

  const exitCode = await new Promise(_ => cp.on('close', _));
  if (exitCode && opts.throw !== false) throw new Error(`Command '${cmd} ${args.join(' ')}' exited with error code: ${exitCode}`);
  // console.log();
};

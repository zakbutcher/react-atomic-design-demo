const exec = require('child_process').exec;
const cmd = 'git rev-parse --abbrev-ref HEAD';

exec(cmd, (error: string, stdout: any, stderr: any) => {
  if (error || stderr || !stdout) {
    console.error('Failed to get branch name.');
    console.error(
      `error: ${error} stderr: ${stderr} stdout: ${stdout} cwd: ${process.cwd()}`,
    );

    process.exit(1);
  } else {
    const branch = stdout.trim();

    if (branch === 'master') {
      const part1 = 'Commits to the "master" branch are not allowed.';
      const part2 =
        'Please commit to another branch and submit a pull request to master.';
      console.error(`${part1} ${part2}`);
      process.exit(1);
    }
  }
});

// Use Storybook CLI via a child process since '@storybook/react/standalone' is not callable

import path from 'path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'child_process';

// recria __dirname em ambiente ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const storybookProcess = spawn('npx', [
  'storybook',
  'dev',
  '-p',
  '7618',
  '-c',
  path.join(__dirname, './.storybook')
], { stdio: 'inherit', shell: true });

storybookProcess.on('close', (code) => {
  if (code === null) {
    console.error('Storybook process terminated unexpectedly');
    return;
  }
  console.log(`Storybook process exited with code ${code}`);
});

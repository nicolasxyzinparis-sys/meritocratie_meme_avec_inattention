import { execSync } from 'child_process';
import { statSync, unlinkSync } from 'fs';

try {
  // Check if node_modules is tracked by git
  const tracked = execSync('git ls-files node_modules', { encoding: 'utf-8' }).trim();
  console.log('[v0] git ls-files node_modules:', JSON.stringify(tracked));

  if (tracked) {
    console.log('[v0] node_modules is tracked by git! Removing from tracking...');
    execSync('git rm --cached node_modules', { encoding: 'utf-8' });
    console.log('[v0] Removed node_modules from git tracking');
  } else {
    console.log('[v0] node_modules is NOT tracked by git');
  }

  // Check what node_modules is (file vs directory)
  try {
    const stat = statSync('node_modules');
    console.log('[v0] node_modules is a file:', stat.isFile());
    console.log('[v0] node_modules is a directory:', stat.isDirectory());
    console.log('[v0] node_modules is a symlink:', stat.isSymbolicLink());
    console.log('[v0] node_modules size:', stat.size);

    if (stat.isFile()) {
      console.log('[v0] Deleting node_modules file...');
      unlinkSync('node_modules');
      console.log('[v0] Deleted node_modules file');
    }
  } catch (e) {
    console.log('[v0] Could not stat node_modules:', e.message);
  }

  // Check git status
  const status = execSync('git status --short', { encoding: 'utf-8' }).trim();
  console.log('[v0] git status:', status.substring(0, 500));
} catch (e) {
  console.error('[v0] Error:', e.message);
}

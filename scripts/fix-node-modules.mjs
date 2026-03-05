import { execSync } from 'child_process';

try {
  // Check if node_modules is tracked by git
  const tracked = execSync('git ls-files node_modules', { cwd: '/vercel/share/v0-project', encoding: 'utf-8' });
  console.log('[v0] git ls-files node_modules:', JSON.stringify(tracked));
  
  if (tracked.trim()) {
    console.log('[v0] node_modules IS tracked by git - removing it');
    execSync('git rm --cached node_modules', { cwd: '/vercel/share/v0-project', encoding: 'utf-8' });
    console.log('[v0] Removed node_modules from git tracking');
  } else {
    console.log('[v0] node_modules is NOT tracked by git');
  }

  // Check git status
  const status = execSync('git status --short', { cwd: '/vercel/share/v0-project', encoding: 'utf-8' });
  console.log('[v0] git status:', status.substring(0, 500));

  // Check what type node_modules is
  const lsResult = execSync('ls -la /vercel/share/v0-project/ | grep node_modules', { cwd: '/vercel/share/v0-project', encoding: 'utf-8' });
  console.log('[v0] ls -la node_modules:', lsResult);

  // Also check if it's a symlink
  const fileType = execSync('file /vercel/share/v0-project/node_modules', { encoding: 'utf-8' });
  console.log('[v0] file type:', fileType);

} catch (e) {
  console.error('[v0] Error:', e.message);
  console.error('[v0] stderr:', e.stderr?.toString());
}

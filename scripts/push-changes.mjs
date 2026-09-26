import { execSync } from 'child_process';

console.log('Staging files...');
execSync('git add .', { stdio: 'inherit' });

console.log('Committing changes...');
execSync('git commit -m "feat: integrate 14 authentic user-uploaded lifestyle photos and Framer-grade Hero redesign"', { stdio: 'inherit' });

console.log('Pushing to origin main...');
execSync('git push origin main', { stdio: 'inherit' });

console.log('Done!');

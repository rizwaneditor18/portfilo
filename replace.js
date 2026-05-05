const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

const replacements = [
  ['box-shadow: 0 0 10px var(--neon-cyan-glow);', 'box-shadow: 4px 4px 0px var(--neon-cyan);'],
  ['box-shadow: 0 0 25px var(--neon-cyan), 0 0 10px var(--neon-cyan);', 'box-shadow: 8px 8px 0px var(--neon-cyan);'],
  ['box-shadow: 0 0 10px var(--neon-magenta-glow);', 'box-shadow: 4px 4px 0px var(--neon-magenta);'],
  ['box-shadow: 0 0 25px var(--neon-magenta), 0 0 10px var(--neon-magenta);', 'box-shadow: 8px 8px 0px var(--neon-magenta);'],
  ['text-shadow: 0 0 20px rgba(250, 204, 21, 0.2);', 'text-shadow: 4px 4px 0px rgba(250, 204, 21, 0.2);'],
  ['text-shadow: 0 0 10px var(--neon-cyan-glow);', 'text-shadow: 2px 2px 0px var(--neon-cyan);'],
  ['text-shadow: 0 0 10px var(--neon-magenta-glow);', 'text-shadow: 2px 2px 0px var(--neon-magenta);'],
  ['text-shadow: 0 0 20px var(--neon-cyan-glow);', 'text-shadow: 4px 4px 0px var(--neon-cyan);'],
  ['box-shadow: 0 0 15px var(--neon-cyan-glow) inset, 0 0 15px var(--neon-cyan-glow);', 'box-shadow: 6px 6px 0px var(--neon-cyan);'],
  ['box-shadow: 0 0 30px var(--neon-cyan);', 'box-shadow: 8px 8px 0px var(--neon-cyan); transform: translate(-2px, -2px);'],
  ['box-shadow: 0 0 15px var(--neon-magenta-glow) inset, 0 0 15px var(--neon-magenta-glow);', 'box-shadow: 6px 6px 0px var(--neon-magenta);'],
  ['box-shadow: 0 0 30px var(--neon-magenta);', 'box-shadow: 8px 8px 0px var(--neon-magenta); transform: translate(-2px, -2px);'],
  ['box-shadow: 0 0 20px var(--neon-cyan), inset 0 0 20px var(--neon-cyan-glow);', 'box-shadow: 8px 8px 0px var(--neon-cyan);'],
  ['box-shadow: 0 0 20px var(--neon-magenta), inset 0 0 20px var(--neon-magenta-glow);', 'box-shadow: 8px 8px 0px var(--neon-magenta);'],
  ['text-shadow: 0 0 15px var(--neon-cyan-glow);', 'text-shadow: 3px 3px 0px var(--neon-cyan);'],
  ['text-shadow: 0 0 15px var(--neon-magenta-glow);', 'text-shadow: 3px 3px 0px var(--neon-magenta);'],
  ['box-shadow: 0 0 15px var(--neon-cyan-glow);', 'box-shadow: 4px 4px 0px var(--neon-cyan);'],
  ['box-shadow: 0 0 20px var(--neon-cyan) inset, 0 0 20px var(--neon-cyan);', 'box-shadow: inset 0 0 0 3px var(--neon-cyan);'],
  ['box-shadow: 0 0 20px var(--neon-magenta) inset, 0 0 20px var(--neon-magenta);', 'box-shadow: inset 0 0 0 3px var(--neon-magenta);'],
  ['box-shadow: 0 0 20px var(--neon-cyan-glow);', 'box-shadow: 6px 6px 0px var(--neon-cyan);'],
  ['box-shadow: 0 0 20px var(--neon-magenta-glow);', 'box-shadow: 6px 6px 0px var(--neon-magenta);'],
  ['box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);', 'box-shadow: 6px 6px 0px rgba(255, 255, 255, 0.5);']
];

for (let [search, replace] of replacements) {
  css = css.split(search).join(replace);
}

fs.writeFileSync('styles.css', css);
console.log("Done");

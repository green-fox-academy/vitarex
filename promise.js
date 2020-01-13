const fs = require('fs').promises;

const content = fs.readFile('alma.txt');

content.then(c =>
  c.toString()
).then(c =>
  fs.readFile(c)
).then(c =>
  c.toString()
).then(console.log)
.catch((e) => console.log('felrobbant a vilag', e))

Promise.all([
  fs.readFile('alma.txt'),
  fs.readFile('kecske.txt')
]).then(([alma, kecske]) => {
  console.log(alma.toString(), kecske.toString());
});


async function olvassukKiAzAlmabolAfiletAztanAztIs() {
  try {
    const c = await fs.readFile('alma.txt');
    const c2 = await fs.readFile(c.toString());
    return c2.toString();
  } catch (e) {
    console.error('ajjajj');
  }
}

olvassukKiAzAlmabolAfiletAztanAztIs().then(console.log);

async function readTxtFile(name) {
  return fs.readFile(name + '.txt');
}

readTxtFile('alma').then(c => console.log(c.toString()));

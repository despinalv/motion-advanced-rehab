const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

try {
    const files = fs.readdirSync(publicDir);
    console.log('Public Directory Contents:', files.join(', '));
} catch (e) {
    console.log('Public directory not found or empty.');
}

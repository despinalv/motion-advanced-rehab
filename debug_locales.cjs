const { createClient } = require('contentful');
const fs = require('fs');

const client = createClient({
    space: '30cfe3ec4gpl',
    accessToken: '3Qo-Fq8vBU3YThODJjQaFBh1kexTDyv7BnIe_mtQZUI',
});

async function run() {
    try {
        const locales = await client.getLocales();
        console.log('Locales:', JSON.stringify(locales.items, null, 2));
        fs.writeFileSync('debug_locales.json', JSON.stringify(locales.items, null, 2));
    } catch (error) {
        console.error('Error:', error);
        fs.writeFileSync('debug_locales_error.txt', JSON.stringify(error, null, 2));
    }
}

run();

const { createClient } = require('contentful');
const fs = require('fs');

const client = createClient({
    space: '30cfe3ec4gpl',
    accessToken: '3Qo-Fq8vBU3YThODJjQaFBh1kexTDyv7BnIe_mtQZUI',
});

async function run() {
    try {
        const output = { es: [], en: [] };

        console.log('Fetching ES...');
        const responseEs = await client.getEntries({
            content_type: 'blogPost',
            locale: 'es',
        });
        output.es = responseEs.items.map(item => item.fields);

        console.log('Fetching EN...');
        const responseEn = await client.getEntries({
            content_type: 'blogPost',
            locale: 'en-US',
        });
        output.en = responseEn.items.map(item => item.fields);

        fs.writeFileSync('debug_result.json', JSON.stringify(output, null, 2));
        console.log('Done writing debug_result.json');

    } catch (error) {
        console.error('Error:', error);
        fs.writeFileSync('debug_error.txt', JSON.stringify(error, null, 2) + '\n' + error.stack);
    }
}

run();

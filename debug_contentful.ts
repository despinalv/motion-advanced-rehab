import { createClient } from 'contentful';

const client = createClient({
    space: '30cfe3ec4gpl',
    accessToken: '3Qo-Fq8vBU3YThODJjQaFBh1kexTDyv7BnIe_mtQZUI',
});

async function run() {
    try {
        console.log('Fetching entries for locale: es');
        const responseEs = await client.getEntries({
            content_type: 'blogPost',
            locale: 'es',
        });
        console.log('ES Response Items:', JSON.stringify(responseEs.items, null, 2));

        console.log('Fetching entries for locale: en-US');
        const responseEn = await client.getEntries({
            content_type: 'blogPost',
            locale: 'en-US',
        });
        console.log('EN Response Items:', JSON.stringify(responseEn.items, null, 2));

    } catch (error) {
        console.error('Error:', error);
    }
}

run();

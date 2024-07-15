import { createClient } from 'contentful';

const client = createClient({
  space: 'czxhot8e1lwm',
  accessToken: 'MwXuZYffZoItH2QbGKvSZczMVhnxI-X15VQ4trtVZMU'
});

export async function fetchEntries() {
    const entries = await client.getEntries({ include: 1 });
    if (entries.items) return entries;
    console.log(`Error getting Entries.`);
    return { items: [], includes: { Asset: [] } };
  }

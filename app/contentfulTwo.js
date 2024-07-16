import { createClient } from 'contentful';

const client = createClient({
  space: 'czxhot8e1lwm',
  accessToken: 'MwXuZYffZoItH2QbGKvSZczMVhnxI-X15VQ4trtVZMU'
});

export async function fetchEntries(contentType) {
  const entries = await client.getEntries({ 
    content_type: 'componentHeroBanner', // Specify your content model ID here
    include: 1 
  });
  if (entries.items) return entries;
  console.log(`Error getting Entries.`);
  return { items: [], includes: { Asset: [] } };
}
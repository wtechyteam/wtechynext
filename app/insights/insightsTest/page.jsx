import { notFound } from 'next/navigation';
import ClientPage from './ClientPage';

process.env.BASE_URL = "https://cdn.contentful.com";
process.env.SPACE_ID = "czxhot8e1lwm";
process.env.ACCESS_TOKEN = "MwXuZYffZoItH2QbGKvSZczMVhnxI-X15VQ4trtVZMU";

const url = `${process.env.BASE_URL}/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}`;

export async function generateStaticParams() {
  const response = await fetch(url);
  const data = await response.json();

  return data.items.map((post) => ({
    slug: post.fields.slug,
  }));
}

async function fetchPostData(slug) {
  const response = await fetch(url);
  const data = await response.json();
  const item = data.items.find((item) => item.fields.slug === slug);

  if (!item) {
    return null;
  }

  return {
    item,
    assets: data.includes.Asset,
  };
}

export default async function Page({ params }) {
  const postData = await fetchPostData(params.slug);

  if (!postData) {
    notFound();
  }

  return <ClientPage postData={postData} />;
}

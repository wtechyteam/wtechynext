//test

"use client";

export default function ClientPage({ postData }) {
  const { item, assets } = postData;
  const imageId = item.fields.image?.sys?.id;
  const image = imageId ? assets.find((asset) => asset.sys.id === imageId) : null;
  const imageUrl = image?.fields?.file?.url;

  return (
    <div>
      <div key={item.sys.id}>
        <div className="col-md-4">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={item.fields.title}
            />
          )}
          <h5>{item.fields.title}</h5>
          <p>{item.fields.description}</p>
        </div>
      </div>
    </div>
  );
}

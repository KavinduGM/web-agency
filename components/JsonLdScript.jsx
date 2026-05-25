// Renders one or more JSON-LD blobs in <script type="application/ld+json">.
// Pass `data` as either an object or an array of objects. `null`/undefined
// entries are skipped so callers can build conditional lists tersely.

export default function JsonLdScript({ data }) {
  const list = Array.isArray(data) ? data.filter(Boolean) : data ? [data] : [];
  if (list.length === 0) return null;
  return (
    <>
      {list.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Stringify with no spaces — JSON-LD doesn't care, smaller bytes.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}

import Link from "next/link";
import { listResources } from "@/lib/db";

export const revalidate = 60;
export const metadata = { title: "Resources", description: "Templates, tools, and guides from GroovyMark WebX." };

export default async function ResourcesIndex() {
  const list = await listResources({ take: 100 });
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Resources</h1>
      {list.length === 0 && <div className="rounded border border-dashed p-8 text-sm text-gray-500">No resources yet.</div>}
      <div className="grid gap-4 md:grid-cols-2">
        {list.map((r) => (
          <Link key={r.id} href={`/resources/${r.slug}`} className="block rounded-lg border p-5 hover:shadow-md transition">
            <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">{r.kind}</div>
            <h2 className="font-semibold text-lg">{r.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}

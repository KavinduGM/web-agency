// Generic renderer for automation-generated landing pages. The automation
// system produces JSON `sections` with the kinds below — extend here as you
// invent new block types.

export default function LandingPageRenderer({ sections }) {
  return (
    <main>
      {(sections ?? []).map((s, i) => {
        switch (s.kind) {
          case "hero":         return <Hero key={i} {...s.props} />;
          case "logos":        return <Logos key={i} {...s.props} />;
          case "features":     return <Features key={i} {...s.props} />;
          case "social_proof": return <SocialProof key={i} {...s.props} />;
          case "faq":          return <FAQ key={i} {...s.props} />;
          case "final_cta":    return <FinalCTA key={i} {...s.props} />;
          default:             return null;
        }
      })}
    </main>
  );
}

function Hero({ headline, sub, cta }) {
  return (
    <section className="px-4 py-24 text-center bg-gradient-to-b from-brand-50/60 to-white">
      <h1 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">{headline}</h1>
      {sub && <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{sub}</p>}
      {cta && <a href={cta.href} className="btn-primary mt-8 inline-block">{cta.label}</a>}
    </section>
  );
}
function Logos({ title }) {
  return (
    <section className="px-4 py-12 text-center">
      <div className="text-xs uppercase tracking-wide text-gray-500">{title}</div>
    </section>
  );
}
function Features({ items = [] }) {
  return (
    <section className="px-4 py-16 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <div key={i} className="rounded-lg border p-5">
            <div className="font-semibold mb-1">{it.title}</div>
            <p className="text-sm text-gray-600">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
function SocialProof({ quote, author }) {
  return (
    <section className="px-4 py-16 max-w-3xl mx-auto text-center">
      <blockquote className="text-xl italic">“{quote}”</blockquote>
      {author && <div className="mt-3 text-sm text-gray-500">— {author}</div>}
    </section>
  );
}
function FAQ({ items = [] }) {
  return (
    <section className="px-4 py-16 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
      <div className="space-y-4">
        {items.map((q, i) => (
          <details key={i} className="rounded border p-4">
            <summary className="font-medium cursor-pointer">{q.q}</summary>
            <p className="mt-2 text-gray-600 text-sm">{q.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
function FinalCTA({ headline, cta }) {
  return (
    <section className="px-4 py-20 text-center bg-brand-600 text-white">
      <h2 className="text-3xl font-bold max-w-2xl mx-auto">{headline}</h2>
      {cta && <a href={cta.href} className="mt-6 inline-block rounded-md bg-white text-brand-700 font-medium px-5 py-2.5">{cta.label}</a>}
    </section>
  );
}

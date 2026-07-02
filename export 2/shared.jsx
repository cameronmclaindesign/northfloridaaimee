/* Oulala Doula — shared interior-page building blocks.
   Reuses the homepage design language: same type scale, palette, spacing,
   card + button styles. Loaded AFTER sections.jsx. */
const { Button: B, Badge: Bdg, Card: Crd, Eyebrow: Eye } = window.OulalaDoulaDesignSystem_d80615;
const Ph = window.Photo;

/* Interior page hero — calm cream band, eyebrow + display title + lead.
   Optional side photo (editorial split) or centered. */
function PageHero({ eyebrow, title, lead, photo, pos = 'center', tone = 'cream' }) {
  const bg = tone === 'sage' ? 'var(--sage-100)' : 'var(--cream-100)';
  if (photo) {
    return (
      <section style={{ background: bg }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '88px 28px', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center' }}>
          <div>
            <Eye>{eyebrow}</Eye>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-3xl)', lineHeight: 1.08, letterSpacing: '-0.01em', color: 'var(--text-strong)', margin: '18px 0 0' }} dangerouslySetInnerHTML={{ __html: title }} />
            <p style={{ fontSize: 'var(--text-lg)', lineHeight: 1.7, color: 'var(--text-body)', maxWidth: 460, margin: '22px 0 0' }}>{lead}</p>
          </div>
          <Ph h={440} src={photo} pos={pos} />
        </div>
      </section>
    );
  }
  return (
    <section style={{ background: bg }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '96px 28px', textAlign: 'center' }}>
        <Eye rule={false}>{eyebrow}</Eye>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-3xl)', lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--text-strong)', margin: '16px 0 0' }} dangerouslySetInnerHTML={{ __html: title }} />
        {lead && <p style={{ fontSize: 'var(--text-lg)', lineHeight: 1.7, color: 'var(--text-body)', maxWidth: 560, margin: '20px auto 0' }}>{lead}</p>}
      </div>
    </section>
  );
}

/* Centered section heading used across pages */
function SectionHeading({ eyebrow, title, sub, align = 'center' }) {
  return (
    <div style={{ textAlign: align, marginBottom: 44, maxWidth: align === 'center' ? 640 : 'none', marginLeft: align === 'center' ? 'auto' : 0, marginRight: align === 'center' ? 'auto' : 0 }}>
      <Eye rule={false}>{eyebrow}</Eye>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-3xl)', color: 'var(--text-strong)', margin: '10px 0 0', lineHeight: 1.1 }}>{title}</h2>
      {sub && <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-muted)', margin: '14px 0 0' }}>{sub}</p>}
    </div>
  );
}

/* Soft FAQ accordion — matches card styling, calm open/close */
function FAQ({ items }) {
  const [open, setOpen] = React.useState(0);
  return (
    <div style={{ maxWidth: 740, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} aria-controls={`faq-panel-${i}`} id={`faq-trigger-${i}`} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16, fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--text-strong)' }}>
              <span style={{ flex: 1 }} dangerouslySetInnerHTML={{ __html: it.q }} />
              <span aria-hidden="true" style={{ fontSize: 24, color: 'var(--clay-500)', transition: 'transform var(--dur-base) var(--ease-soft)', transform: isOpen ? 'rotate(45deg)' : 'none', lineHeight: 1 }}>+</span>
            </button>
            <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-trigger-${i}`} style={{ maxHeight: isOpen ? 240 : 0, visibility: isOpen ? 'visible' : 'hidden', transition: 'max-height var(--dur-slow) var(--ease-soft), visibility var(--dur-slow) var(--ease-soft)', overflow: 'hidden' }}>
              <p style={{ margin: 0, padding: '0 24px 22px', fontSize: 15, lineHeight: 1.75, color: 'var(--text-muted)' }} dangerouslySetInnerHTML={{ __html: it.a }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* Dark teal consultation CTA band — reused on every page footer-side */
function ConsultCTA({ title = 'Let\u2019s walk this path together', body = 'Book a free, unhurried consultation. We\u2019ll talk about your hopes, your questions, and how I can hold space for your family.', cta = 'Book a free consult' }) {
  return (
    <section style={{ background: 'var(--moss-800)', color: 'var(--text-on-dark)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '88px 28px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-script)', fontSize: 48, lineHeight: 0.8, color: 'var(--clay-400)', marginBottom: 14 }}>with love, Belle</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-3xl)', color: 'var(--cream-50)', margin: '0 0 16px', lineHeight: 1.12 }}>{title}</h2>
        <p style={{ fontSize: 'var(--text-lg)', lineHeight: 1.7, color: 'var(--sage-300)', maxWidth: 520, margin: '0 auto 28px' }}>{body}</p>
        <B variant="accent" size="lg" href="website.html#contact">{cta}</B>
      </div>
    </section>
  );
}

Object.assign(window, { PageHero, SectionHeading, FAQ, ConsultCTA });

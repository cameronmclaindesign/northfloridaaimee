/* The North Florida Rural Buyer's Guide — thank you / download page */
(function () {
  const { Eyebrow, Button, Card, Badge } = window.OulalaDoulaDesignSystem_d80615;
  const Photo = window.Photo;

  // Reaching this page means they joined the list — unlock the guide.
  try { localStorage.setItem('nfa_guide_unlocked', '1'); } catch (e) {}

  const NEXT = [
    { tag: 'Guide', tone: 'sage', title: 'Revisit the guide anytime', src: 'cottage-pines.jpg', pos: 'center 35%', href: 'guide-spreads.html' },
    { tag: 'About', tone: 'clay', title: 'Get to know Aimee, your local guide', src: 'aimee-portrait.jpg', pos: 'center 20%', href: 'website.html#about' },
    { tag: 'Talk', tone: 'ochre', title: 'Book a free, no-pressure call', src: 'pines-sunset.jpg', pos: 'center', href: 'website.html#contact' },
  ];

  function Page() {
    return (
      <React.Fragment>
        <window.Header />

        {/* Thank you / download */}
        <section style={{ background: 'var(--cream-100)' }}>
          <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '88px 28px', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-script)', fontSize: 60, color: 'var(--clay-600)', lineHeight: 0.8 }}>Thank you</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-3xl)', lineHeight: 1.1, color: 'var(--text-strong)', margin: '18px 0 0' }}>
                Your guide is ready
              </h1>
              <p style={{ fontSize: 'var(--text-lg)', lineHeight: 1.7, color: 'var(--text-body)', maxWidth: 440, margin: '18px 0 28px' }}>
                I&rsquo;ve sent a copy to your inbox too, so it&rsquo;s always within reach. Pour something cold, find a porch, and read it at your own pace &mdash; there&rsquo;s no rush.
              </p>
              <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                <Button variant="accent" size="lg" href="guide-spreads.html">&#8595;&nbsp;&nbsp;Read the guide</Button>
                <a href="guide-spreads.html" style={{ fontSize: 14, fontWeight: 600, color: 'var(--brand-deep)', textDecoration: 'none', whiteSpace: 'nowrap' }}>Look inside &rarr;</a>
              </div>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 16 }}>PDF &middot; 12 pages &middot; Formatted for screen &amp; print</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: 300 }}>
                <div style={{ position: 'absolute', inset: '14px -14px -14px 14px', borderRadius: 'var(--radius-md)', background: 'rgba(0,0,0,0.18)', filter: 'blur(3px)' }} />
                <div style={{ position: 'relative', background: 'var(--cream-50)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                  <div style={{ position: 'relative' }}>
                    <Photo h={210} src="farmhouse-oaks.jpg" pos="center 35%" radius="0" />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(24,48,30,0.25), rgba(24,48,30,0.55))' }} />
                    <div style={{ position: 'absolute', left: 22, right: 22, bottom: 18, textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 24, lineHeight: 1.04, color: 'var(--cream-50)' }}>The Rural<br/>Buyer&rsquo;s Guide</div>
                  </div>
                  <div style={{ padding: '24px 28px 28px', textAlign: 'center' }}>
                    <div style={{ fontSize: 10.5, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--clay-600)', fontWeight: 600 }}>A local&rsquo;s field guide</div>
                    <div style={{ fontFamily: 'var(--font-script)', fontSize: 28, color: 'var(--clay-600)', lineHeight: 1, marginTop: 8 }}>&mdash; Aimee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <section style={{ maxWidth: 820, margin: '0 auto', padding: '96px 28px 72px', textAlign: 'center' }}>
          <Eyebrow rule={false}>While you&rsquo;re here</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-3xl)', lineHeight: 1.12, color: 'var(--text-strong)', margin: '12px 0 16px' }}>
            Want to talk it through with someone local?
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-muted)', maxWidth: 520, margin: '0 auto 26px' }}>
            The guide is a great start. If you&rsquo;d like a real conversation about what you&rsquo;re looking for &mdash; or just to ask a question &mdash; I offer a free, friendly call. No pressure at all.
          </p>
          <Button variant="primary" size="lg" href="website.html#contact">Book a free call</Button>
        </section>

        {/* What's next */}
        <section style={{ background: 'var(--cream-100)' }}>
          <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '96px 28px' }}>
            <div style={{ textAlign: 'center', marginBottom: 44 }}>
              <Eyebrow rule={false}>What&rsquo;s next</Eyebrow>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-3xl)', color: 'var(--text-strong)', margin: '10px 0 0' }}>Whenever you&rsquo;re ready</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {NEXT.map((r) => (
                <a key={r.title} href={r.href} style={{ textDecoration: 'none' }}>
                  <Card elevation="raised" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Photo h={180} src={r.src} pos={r.pos || 'center'} radius="0" />
                    <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <Badge tone={r.tone}>{r.tag}</Badge>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', lineHeight: 1.2, color: 'var(--text-strong)' }} dangerouslySetInnerHTML={{ __html: r.title }} />
                      <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--brand-deep)' }}>Go &rarr;</span>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        <window.Footer />
        <window.PageToggleBar mode="website" />
      </React.Fragment>
    );
  }
  window.__render(Page);
})();

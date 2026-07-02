/* The North Florida Rural Buyer's Guide — lead-magnet landing page.
   Editorial, warm, premium — Modern Homestead brand language. */
(function () {
  const { Eyebrow, Button, Input, Card, Badge } = window.OulalaDoulaDesignSystem_d80615;
  const Photo = window.Photo;

  const INSIDE = [
    ['Is rural living right for you?', 'An honest gut-check on the lifestyle &mdash; who it suits, and what&rsquo;s worth weighing before you start looking.'],
    ['Nine questions every buyer should ask', 'The practical questions about water, septic, access, and zoning that save first-time buyers real headaches.'],
    ['Hidden costs to plan for', 'The country-specific expenses people tend to overlook &mdash; fencing, driveways, inspections &mdash; and how to budget for them.'],
    ['Where to look', 'A friendly tour of High Springs, Newberry, Archer, Alachua, and Micanopy &mdash; by feel, not just numbers.'],
    ['Your property tour checklist', 'A printable one-pager to bring along and tick off as you walk each property, so the excitement stays honest.'],
  ];

  /* Editorial guide cover mockup (portrait book) */
  function GuideMockup() {
    return (
      <div style={{ position: 'relative', width: 340 }}>
        <div style={{ position: 'absolute', inset: '16px -16px -16px 16px', borderRadius: 'var(--radius-md)', background: 'rgba(0,0,0,0.20)', filter: 'blur(3px)' }} />
        <div style={{ position: 'relative', background: 'var(--cream-50)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
          <div style={{ position: 'relative' }}>
            <Photo h={300} src="farmhouse-oaks.jpg" pos="center 35%" radius="0" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(24,48,30,0.25), rgba(24,48,30,0.55))' }} />
            <div style={{ position: 'absolute', top: 20, left: 0, right: 0, textAlign: 'center', fontSize: 10.5, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--ochre-300)', fontWeight: 600 }}>North Florida Aimee</div>
            <div style={{ position: 'absolute', left: 24, right: 24, bottom: 22, textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 27, lineHeight: 1.04, color: 'var(--cream-50)' }}>The Rural<br/>Buyer&rsquo;s Guide</div>
          </div>
          <div style={{ padding: '26px 30px 32px', textAlign: 'center' }}>
            <div style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--clay-600)', fontWeight: 600 }}>A local&rsquo;s field guide</div>
            <p style={{ fontSize: 12.5, lineHeight: 1.6, color: 'var(--text-muted)', margin: '12px 0 14px', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>Land, acreage &amp; country homes</p>
            <div style={{ fontFamily: 'var(--font-script)', fontSize: 30, color: 'var(--clay-600)', lineHeight: 1 }}>&mdash; Aimee</div>
          </div>
        </div>
      </div>
    );
  }

  function SignupCard({ id }) {
    const [sent, setSent] = React.useState(false);
    return (
      <div id={id} style={{ background: 'var(--cream-50)', borderRadius: 'var(--radius-lg)', padding: 28, boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)' }}>
        {sent ? (
          <div role="status" aria-live="polite" style={{ textAlign: 'center', padding: '20px 8px', color: 'var(--text-strong)' }}>
            <div style={{ fontFamily: 'var(--font-script)', fontSize: 52, color: 'var(--clay-600)', lineHeight: 0.9 }}>It&rsquo;s on its way</div>
            <p style={{ color: 'var(--text-muted)', marginTop: 10, fontSize: 15, lineHeight: 1.6 }}>Check your inbox &mdash; your guide is heading there now.</p>
            <Button variant="outline" href="guide-thankyou.html" style={{ marginTop: 14 }}>Go to download</Button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); try { localStorage.setItem('nfa_guide_unlocked', '1'); } catch (err) {} setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Input label="First name" placeholder="Your name" autoComplete="given-name" />
            <Input label="Email" type="email" placeholder="you@email.com" autoComplete="email" />
            <fieldset style={{ border: 'none', margin: 0, padding: 0 }}>
              <legend style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-strong)', padding: 0, marginBottom: 9 }}>Are you&hellip;</legend>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {['Buying within 3 months', 'Buying within 6 months', 'Just researching'].map((opt) => (
                  <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14.5, color: 'var(--text-body)', cursor: 'pointer' }}>
                    <input type="radio" name="timeline" value={opt} style={{ accentColor: 'var(--sage-500)', width: 16, height: 16, flexShrink: 0 }} />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <Button type="submit" variant="accent" full>Send me the guide</Button>
            <p style={{ margin: 0, fontSize: 12.5, color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.5 }}>No spam, ever. Just useful, local advice &mdash; unsubscribe anytime.</p>
          </form>
        )}
      </div>
    );
  }

  function Page() {
    return (
      <React.Fragment>
        <window.Header />

        {/* HERO */}
        <section style={{ background: 'var(--cream-100)' }}>
          <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '84px 28px', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 64, alignItems: 'center' }}>
            <div>
              <Eyebrow>Free download</Eyebrow>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-3xl)', lineHeight: 1.08, letterSpacing: '-0.01em', color: 'var(--text-strong)', margin: '18px 0 0' }}>
                Buy your piece of North Florida <em style={{ fontStyle: 'italic', color: 'var(--clay-600)' }}>with confidence.</em>
              </h1>
              <p style={{ fontSize: 'var(--text-lg)', lineHeight: 1.7, color: 'var(--text-body)', maxWidth: 470, margin: '22px 0 16px' }}>
                <em style={{ fontStyle: 'italic', fontFamily: 'var(--font-display)', fontSize: '1.1em' }}>The North Florida Rural Buyer&rsquo;s Guide</em> is everything I&rsquo;d tell you over coffee before you start looking at land &mdash; wells, septic, hidden costs, and the towns worth knowing &mdash; gathered into one calm, useful read.
              </p>
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginTop: 8 }}>
                <Button variant="accent" size="lg" onClick={() => { document.getElementById('signup').scrollIntoView({ behavior: 'smooth', block: 'center' }); }}>Download the free guide</Button>
              </div>
              <div style={{ marginTop: 26, display: 'flex', alignItems: 'center', gap: 14, fontSize: 13.5, color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--ochre-500)', letterSpacing: 2 }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span>Trusted by families putting down roots across North Florida</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <GuideMockup />
            </div>
          </div>
        </section>

        {/* WHY THIS GUIDE EXISTS */}
        <section style={{ maxWidth: 760, margin: '0 auto', padding: '96px 28px 72px', textAlign: 'center' }}>
          <Eyebrow rule={false}>Why I made this</Eyebrow>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', lineHeight: 1.4, color: 'var(--text-strong)', margin: '20px 0 0' }}>
            Buying rural land is different from buying a house in town &mdash; and most of the worry comes from simply not knowing the right questions. This guide hands you those questions, <em style={{ fontStyle: 'italic', color: 'var(--clay-600)' }}>so you can look with clear eyes and an open heart.</em>
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-muted)', margin: '24px 0 0' }}>
            It&rsquo;s the same plain-spoken advice I share with every buyer in our first conversation &mdash; written down, gently, in one place you can return to.
          </p>
        </section>

        {/* Soft full-bleed image */}
        <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 28px 72px' }}>
          <Photo h={420} src="cypress-lake.jpg" pos="center 60%" radius="var(--radius-lg)" />
        </section>

        {/* WHAT'S INSIDE */}
        <section style={{ background: 'var(--sage-100)' }}>
          <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '96px 28px' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <Eyebrow rule={false}>What&rsquo;s inside</Eyebrow>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-3xl)', color: 'var(--text-strong)', margin: '10px 0 0' }}>A short, useful read</h2>
            </div>
            <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
              {INSIDE.map(([t, b], i) => (
                <div key={i} style={{ display: 'flex', gap: 28, alignItems: 'baseline', padding: '26px 0', borderTop: i === 0 ? 'none' : '1px solid var(--sand-300)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 40, color: 'var(--clay-500)', lineHeight: 1, minWidth: 54 }}>0{i + 1}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--text-strong)' }} dangerouslySetInnerHTML={{ __html: t }} />
                    <p style={{ margin: '6px 0 0', fontSize: 15.5, lineHeight: 1.7, color: 'var(--text-body)' }} dangerouslySetInnerHTML={{ __html: b }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 44 }}>
              <a href="#signup" style={{ fontSize: 15, fontWeight: 600, color: 'var(--brand-deep)', textDecoration: 'none' }}>Get the free guide &rarr;</a>
            </div>
          </div>
        </section>

        {/* EMAIL SIGNUP */}
        <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '96px 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 64, alignItems: 'center' }}>
            <div>
              <Eyebrow rule={false}>Send it to me</Eyebrow>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-3xl)', color: 'var(--text-strong)', margin: '10px 0 16px', lineHeight: 1.1 }}>
                Your guide, in your inbox in moments
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-muted)', margin: '0 0 22px' }}>
                Pop in your details and I&rsquo;ll send the guide straight over &mdash; beautifully formatted, ready to read on any device or print and keep.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[['Instant, free access'], ['Yours to keep &amp; revisit'], ['No spam &mdash; only useful, local notes']].map(([t], i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: 'var(--text-body)' }}>
                    <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--sage-100)', color: 'var(--brand-deep)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, flexShrink: 0 }}>&#10003;</span>
                    <span dangerouslySetInnerHTML={{ __html: t }} />
                  </div>
                ))}
              </div>
            </div>
            <SignupCard id="signup" />
          </div>
        </section>

        <window.Footer />
        <window.PageToggleBar mode="website" />
      </React.Fragment>
    );
  }
  window.__render(Page);
})();

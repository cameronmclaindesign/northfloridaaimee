/* The North Florida Rural Buyer's Guide — the full editorial document.
   A calm, magazine-feel lead magnet: cover + ~12 pages of practical,
   beginner-friendly advice in Aimee's warm, local voice. Built entirely
   in the Modern Homestead brand language (forest pine, harvest gold,
   terracotta on warm linen). Reads as a scrollable PDF. */
(function () {
  const { Eyebrow, Button, Input } = window.OulalaDoulaDesignSystem_d80615;
  const Photo = window.Photo;

  /* ── Building blocks ─────────────────────────────────────────── */

  // A paper "sheet" — one page of the guide.
  function Sheet({ children, n, bg, style = {} }) {
    return (
      <div style={{ position: 'relative', width: 'min(900px, 100%)', margin: '0 auto 36px', background: bg || 'var(--surface-card)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden', ...style }}>
        {children}
        {n != null && (
          <div style={{ position: 'absolute', bottom: 26, left: '50%', transform: 'translateX(-50%)', fontSize: 11, letterSpacing: '.26em', color: 'var(--text-muted)' }}>
            {String(n).padStart(2, '0')}
          </div>
        )}
      </div>
    );
  }

  const Pad = ({ children, style = {} }) => (
    <div style={{ padding: 'clamp(40px, 6vw, 76px)', ...style }}>{children}</div>
  );

  const Eb = ({ children, tone = 'var(--clay-600)' }) => (
    <div style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: tone, fontWeight: 600 }}>{children}</div>
  );

  const Disp = ({ children, size = 'clamp(28px, 4.2vw, 42px)', style = {} }) => (
    <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: size, lineHeight: 1.08, letterSpacing: '-0.01em', color: 'var(--text-strong)', margin: 0, ...style }}>{children}</h2>
  );

  const Lead = ({ children, style = {} }) => (
    <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: 1.75, color: 'var(--text-body)', margin: 0, ...style }}>{children}</p>
  );

  const Body = ({ children, style = {} }) => (
    <p style={{ fontSize: 15.5, lineHeight: 1.85, color: 'var(--text-body)', margin: 0, ...style }}>{children}</p>
  );

  const Pull = ({ children, style = {} }) => (
    <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(20px, 2.8vw, 27px)', lineHeight: 1.4, color: 'var(--moss-800)', ...style }}>{children}</div>
  );

  const Rule = ({ w = 48 }) => (
    <div style={{ width: w, height: 1, background: 'var(--border-strong)' }} />
  );

  // little hollow check square
  const Box = ({ color = 'var(--sage-500)' }) => (
    <span style={{ width: 15, height: 15, border: '1.6px solid ' + color, borderRadius: 3, flexShrink: 0, display: 'inline-block', transform: 'translateY(2px)' }} />
  );

  /* ── The guide ───────────────────────────────────────────────── */

  // Signup gate — the guide is only accessible after joining the list.
  function Gate({ onUnlock }) {
    return (
      <React.Fragment>
        <window.Header />
        <section style={{ background: 'var(--cream-100)' }}>
          <div style={{ maxWidth: 980, margin: '0 auto', padding: 'clamp(56px,8vw,96px) 28px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,0.8fr)', gap: 'clamp(36px,5vw,64px)', alignItems: 'center' }}>
            <div>
              <Eyebrow>Free, by email</Eyebrow>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(30px,4.6vw,46px)', lineHeight: 1.06, color: 'var(--text-strong)', margin: '16px 0 0' }}>
                The North Florida Rural Buyer&rsquo;s Guide
              </h1>
              <p style={{ fontSize: 'clamp(16px,2vw,18px)', lineHeight: 1.75, color: 'var(--text-body)', maxWidth: 450, margin: '18px 0 24px' }}>
                The full guide is free &mdash; I just send it by email so I can be there if questions come up later. Pop in your details and I&rsquo;ll unlock it for you right here and send a copy to keep.
              </p>
              <form onSubmit={function (e) { e.preventDefault(); onUnlock(); }} style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 380 }}>
                <Input label="First name" placeholder="Your name" autoComplete="given-name" required />
                <Input label="Email" type="email" placeholder="you@email.com" autoComplete="email" required />
                <fieldset style={{ border: 'none', margin: 0, padding: 0 }}>
                  <legend style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-strong)', padding: 0, marginBottom: 9 }}>Are you&hellip;</legend>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                    {['Buying within 3 months', 'Buying within 6 months', 'Just researching'].map(function (opt) {
                      return (
                        <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14.5, color: 'var(--text-body)', cursor: 'pointer' }}>
                          <input type="radio" name="timeline" value={opt} style={{ accentColor: 'var(--sage-500)', width: 16, height: 16, flexShrink: 0 }} />
                          <span>{opt}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
                <Button type="submit" variant="accent" full>Send me the guide</Button>
                <p style={{ margin: 0, fontSize: 12.5, color: 'var(--text-muted)', lineHeight: 1.5 }}>No spam, ever. Just useful, local advice &mdash; unsubscribe anytime.</p>
              </form>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: 300 }}>
                <div style={{ position: 'absolute', inset: '14px -14px -14px 14px', borderRadius: 'var(--radius-md)', background: 'rgba(0,0,0,0.18)', filter: 'blur(3px)' }} />
                <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                  <Photo h={390} src="farmhouse-oaks.jpg" pos="center 35%" radius="0" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(24,48,30,0.32), rgba(24,48,30,0.68))' }} />
                  <div style={{ position: 'absolute', top: 22, left: 0, right: 0, textAlign: 'center', fontSize: 10.5, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--ochre-300)', fontWeight: 600 }}>North Florida Aimee</div>
                  <div style={{ position: 'absolute', left: 26, right: 26, bottom: 58, textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 29, lineHeight: 1.05, color: 'var(--cream-50)' }}>The Rural Buyer&rsquo;s Guide</div>
                  <div style={{ position: 'absolute', left: 0, right: 0, bottom: 26, textAlign: 'center', fontFamily: 'var(--font-script)', fontSize: 30, color: 'var(--ochre-300)', lineHeight: 1 }}>&mdash; Aimee</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <window.Footer />
      </React.Fragment>
    );
  }

  function Page() {
    const [unlocked, setUnlocked] = React.useState(function () {
      try { return localStorage.getItem('nfa_guide_unlocked') === '1'; } catch (e) { return false; }
    });
    if (!unlocked) {
      return <Gate onUnlock={function () { try { localStorage.setItem('nfa_guide_unlocked', '1'); } catch (e) {} setUnlocked(true); }} />;
    }
    return (
      <React.Fragment>
        <window.Header />

        {/* Reading-room banner */}
        <section style={{ background: 'var(--cream-100)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '64px 28px 28px', textAlign: 'center' }}>
            <Eyebrow rule={false}>The guide</Eyebrow>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(30px, 5vw, 46px)', lineHeight: 1.05, color: 'var(--text-strong)', margin: '12px 0 14px' }}>
              The North Florida Rural Buyer&rsquo;s Guide
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-muted)', maxWidth: 520, margin: '0 auto' }}>
              You&rsquo;re all set &mdash; a copy is on its way to your inbox. Read it through below, or print it to keep.
            </p>
            <div style={{ marginTop: 22 }}>
              <Button variant="accent" onClick={function () { window.print(); }}>Print / save as PDF</Button>
            </div>
          </div>
        </section>

        {/* The pages, in a soft gallery */}
        <section style={{ background: 'var(--surface-sunken)' }}>
          <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'clamp(40px, 6vw, 72px) 24px' }}>

            {/* ── 01 · COVER ── */}
            <Sheet style={{ marginBottom: 56 }}>
              <div style={{ position: 'relative', minHeight: 620, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Photo h={'100%'} src="farmhouse-oaks.jpg" pos="center 35%" radius="0" style={{ position: 'absolute', inset: 0 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(24,48,30,0.42) 0%, rgba(24,48,30,0.30) 40%, rgba(24,48,30,0.80) 100%)' }} />
                <div style={{ position: 'relative', padding: 'clamp(36px, 5vw, 60px)' }}>
                  <div style={{ fontSize: 12, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--ochre-300)', fontWeight: 600 }}>A North Florida Aimee field guide</div>
                </div>
                <div style={{ position: 'relative', padding: 'clamp(36px, 5vw, 60px)', color: 'var(--cream-50)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(38px, 6.5vw, 66px)', lineHeight: 1.0, letterSpacing: '-0.015em' }}>
                    The North Florida<br/>Rural Buyer&rsquo;s Guide
                  </div>
                  <div style={{ width: 56, height: 1, background: 'rgba(247,242,232,0.55)', margin: '24px 0 20px' }} />
                  <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(17px, 2.4vw, 22px)', color: 'rgba(247,242,232,0.92)', maxWidth: 440, lineHeight: 1.5 }}>
                    A local&rsquo;s guide to buying land, acreage, and country homes with confidence.
                  </div>
                  <div style={{ marginTop: 30, fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(247,242,232,0.78)' }}>
                    Aimee Gayaunt &middot; REALTOR&reg; &middot; North Central Florida
                  </div>
                </div>
              </div>
            </Sheet>

            {/* ── 02 · WELCOME ── */}
            <Sheet n={2}>
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.25fr) minmax(0,0.9fr)' }}>
                <Pad style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <Eb>Welcome</Eb>
                  <Disp>Pull up a chair.</Disp>
                  <Body>
                    I grew up on these back roads — the kind where you wave at every truck and the school bus still kicks up dust. I&rsquo;ve watched this corner of Florida stay quietly, stubbornly itself while the rest of the state filled in around it. That&rsquo;s exactly why people come looking.
                  </Body>
                  <Body>
                    Buying out here is a little different from buying a house in town. There&rsquo;s more to fall in love with &mdash; and a few more things worth checking before you do. Wells, septic, easements, how the land drains in July. None of it is scary once someone walks you through it.
                  </Body>
                  <Body>
                    That&rsquo;s all this little guide is: the things I&rsquo;d tell you over coffee before you start looking, so you can go into it clear-eyed and excited.
                  </Body>
                  <div style={{ fontFamily: 'var(--font-script)', fontSize: 46, color: 'var(--clay-600)', lineHeight: 0.8, marginTop: 6 }}>Aimee</div>
                </Pad>
                <div style={{ position: 'relative', minHeight: 420 }}>
                  <Photo h={'100%'} src="aimee-portrait.jpg" pos="center 20%" radius="0" style={{ position: 'absolute', inset: 0 }} />
                </div>
              </div>
            </Sheet>

            {/* ── 03 · IS RURAL LIVING RIGHT FOR YOU ── */}
            <Sheet n={3}>
              <Photo h={240} src="farm-family.jpg" pos="center 48%" radius="0" />
              <Pad style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 620 }}>
                  <Eb>First things first</Eb>
                  <Disp>Is country living right for you?</Disp>
                  <Lead style={{ color: 'var(--text-muted)' }}>
                    Acreage is a lifestyle as much as an address. It rewards people who like a little space and a little self-reliance &mdash; and asks for some patience in return. A gut-check before you fall for a listing:
                  </Lead>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 28 }}>
                  <div style={{ background: 'var(--sage-100)', borderRadius: 'var(--radius-md)', padding: '28px 30px' }}>
                    <div style={{ fontSize: 11.5, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--sage-600)', fontWeight: 700, marginBottom: 14 }}>You&rsquo;ll likely love it if&hellip;</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                      {[
                        'You crave quiet, dark skies, and room to breathe',
                        'A garden, chickens, or a few animals sound like joy',
                        'You don&rsquo;t mind a drive for groceries or coffee',
                        'You like fixing things and being a bit self-reliant',
                      ].map((t) => (
                        <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'baseline', fontSize: 14.5, lineHeight: 1.5, color: 'var(--ink-700)' }}>
                          <Box color="var(--sage-500)" /><span dangerouslySetInnerHTML={{ __html: t }} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ background: 'var(--cream-100)', borderRadius: 'var(--radius-md)', padding: '28px 30px' }}>
                    <div style={{ fontSize: 11.5, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--clay-600)', fontWeight: 700, marginBottom: 14 }}>Worth thinking about&hellip;</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                      {[
                        'You maintain your own water, septic, and road',
                        'Help &mdash; and pizza &mdash; takes longer to arrive',
                        'Internet and cell signal vary road to road',
                        'Land needs tending: mowing, fences, brush',
                      ].map((t) => (
                        <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'baseline', fontSize: 14.5, lineHeight: 1.5, color: 'var(--ink-700)' }}>
                          <Box color="var(--clay-500)" /><span dangerouslySetInnerHTML={{ __html: t }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ borderLeft: '3px solid var(--clay-400)', paddingLeft: 22 }}>
                  <Pull>&ldquo;None of these are dealbreakers &mdash; they&rsquo;re just good to know before you&rsquo;re standing on the porch, falling in love.&rdquo;</Pull>
                </div>
              </Pad>
            </Sheet>

            {/* ── 04 · QUESTIONS TO ASK ── */}
            <Sheet n={4}>
              <Photo h={180} src="aerial-land.jpg" pos="center" radius="0" />
              <Pad style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640 }}>
                  <Eb>Before you fall in love</Eb>
                  <Disp>Nine questions every rural buyer should ask</Disp>
                  <Lead style={{ color: 'var(--text-muted)' }}>
                    Run through these on any property you&rsquo;re serious about. If a seller can&rsquo;t answer one, that&rsquo;s simply your cue to dig a little deeper &mdash; not to walk away.
                  </Lead>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '8px 40px' }}>
                  {[
                    ['Well or city water?', 'Most rural homes are on a private well. Ask its depth, age, and when the water was last tested.'],
                    ['Where&rsquo;s the septic?', 'No city sewer out here. Find the tank&rsquo;s location, size, and last pump-out, and whether the drain field is healthy.'],
                    ['Is it in a flood zone?', 'A quick FEMA map check tells you if flood insurance is required &mdash; and how the low spots drain after rain.'],
                    ['Can I get real internet?', 'Confirm what&rsquo;s actually available at the address: fiber, cable, fixed wireless, or satellite. It varies road to road.'],
                    ['Are there easements?', 'Someone may have the right to cross the land &mdash; a shared driveway, a utility line, a neighbor&rsquo;s access. Read the survey.'],
                    ['How is it zoned?', 'Zoning sets what you can build, run as a business, or subdivide. Agricultural zoning is often a perk, not a limit.'],
                    ['Any livestock rules?', 'Most rural land welcomes animals, but check deed restrictions or HOA rules for limits on type and number.'],
                    ['How do I access it?', 'Is the road public, private, or shared? Who maintains it? Landlocked parcels need a recorded, legal way in.'],
                    ['Is there a recent survey?', 'A current survey shows true boundaries, acreage, and encroachments &mdash; cheap insurance against fence-line surprises.'],
                  ].map(([q, a], i) => (
                    <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '16px 0', borderTop: '1px solid var(--border)' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 26, color: 'var(--clay-500)', lineHeight: 1, minWidth: 26 }}>{i + 1}</span>
                      <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: 19, color: 'var(--text-strong)', lineHeight: 1.2, marginBottom: 5 }} dangerouslySetInnerHTML={{ __html: q }} />
                        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--text-body)' }} dangerouslySetInnerHTML={{ __html: a }} />
                      </div>
                    </div>
                  ))}
                </div>
              </Pad>
            </Sheet>

            {/* ── 05 · HIDDEN COSTS ── */}
            <Sheet n={5}>
              <Pad style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 620 }}>
                  <Eb>Budgeting with eyes open</Eb>
                  <Disp>The costs nobody mentions</Disp>
                  <Lead style={{ color: 'var(--text-muted)' }}>
                    The price tag is only part of the picture. A handful of country-specific expenses are easy to overlook &mdash; plan for them now and there are no surprises later.
                  </Lead>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 }}>
                  {[
                    ['Fencing', 'Good fence isn&rsquo;t cheap, and acreage adds up fast. Price it by the foot if you&rsquo;re planning animals or privacy.'],
                    ['Driveway & road', 'Long dirt or gravel drives need grading and fresh rock now and then &mdash; especially after a wet summer.'],
                    ['Well & septic checks', 'Budget for a water test and a septic inspection before closing. Far cheaper than a surprise repair.'],
                    ['Insurance', 'Rural premiums can run higher &mdash; distance from a fire station and any outbuildings both factor in.'],
                    ['Land clearing', 'Clearing brush, dropping dead oaks, or opening a building pad is real money. Get a quote before you dream too big.'],
                  ].map(([t, d]) => (
                    <div key={t} style={{ background: 'var(--cream-50)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '24px 24px 26px' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 21, color: 'var(--text-strong)', marginBottom: 8 }}>{t}</div>
                      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: 'var(--text-body)' }} dangerouslySetInnerHTML={{ __html: d }} />
                    </div>
                  ))}
                  <div style={{ background: 'var(--moss-800)', borderRadius: 'var(--radius-md)', padding: '24px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 19, lineHeight: 1.45, color: 'var(--cream-50)' }}>
                      A good rule of thumb: set aside a little cushion for the land itself, not just the house.
                    </div>
                  </div>
                </div>
              </Pad>
            </Sheet>

            {/* ── 06 · WHERE TO LOOK ── */}
            <Sheet n={6}>
              <div style={{ position: 'relative', minHeight: 200 }}>
                <Photo h={200} src="pasture-horses.jpg" pos="center 55%" radius="0" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(24,48,30,0) 30%, rgba(24,48,30,0.78) 100%)' }} />
                <div style={{ position: 'absolute', left: 'clamp(40px, 6vw, 76px)', bottom: 26, color: 'var(--cream-50)' }}>
                  <div style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--ochre-300)', fontWeight: 600 }}>The neighborhood</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(28px, 4.2vw, 40px)', lineHeight: 1.05, marginTop: 6 }}>Where to look</div>
                </div>
              </div>
              <Pad style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                <Lead style={{ color: 'var(--text-muted)', maxWidth: 640 }}>
                  Each of these towns has its own feel. There&rsquo;s no wrong choice &mdash; just the one that fits the life you&rsquo;re picturing.
                </Lead>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {[
                    ['High Springs', 'Springs, kayaks, and a walkable little downtown. Equal parts outdoor-adventure and antique-shop charm.'],
                    ['Newberry', 'Wide-open farmland and newer acreage homesites. Room to spread out with an easy run into Gainesville.'],
                    ['Archer', 'Quiet, historic, and genuinely rural. Big lots, big oaks, and neighbors who still know your name.'],
                    ['Alachua', 'Small-town Main Street warmth with quick access to highways and town &mdash; a favorite for first-time land buyers.'],
                    ['Micanopy', 'Moss-draped, artistic, and storybook-old. The kind of place people fall in love with and never leave.'],
                  ].map(([name, desc], i) => (
                    <div key={name} style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 0.5fr) minmax(0, 1.5fr)', gap: 24, alignItems: 'baseline', padding: '20px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border)' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--brand-deep)' }}>{name}</div>
                      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: 'var(--text-body)' }}>{desc}</p>
                    </div>
                  ))}
                </div>
              </Pad>
            </Sheet>

            {/* ── 07 · PRINTABLE CHECKLIST ── */}
            <Sheet n={7} bg="var(--cream-50)">
              <Pad style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 520 }}>
                    <Eb>Bring this with you</Eb>
                    <Disp>Your property tour checklist</Disp>
                    <Body style={{ color: 'var(--text-muted)' }}>Print this page or screenshot it on your phone, and tick along as you walk each property. It keeps the excitement honest.</Body>
                  </div>
                  <div style={{ fontFamily: 'var(--font-script)', fontSize: 52, color: 'var(--clay-600)', lineHeight: 0.7 }}>Tour day</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '26px 40px' }}>
                  {[
                    ['The land', ['Boundaries match the survey', 'Usable vs. wet or wooded acreage', 'How it drains in heavy rain', 'Mature trees, pasture, building pad']],
                    ['Water & systems', ['Well depth, age, recent water test', 'Septic location & last pump-out', 'Power, propane, or solar setup', 'Internet options at the address']],
                    ['The location', ['Drive time to town & groceries', 'Cell signal on the property', 'Quiet? Listen for road or neighbors', 'Flood zone & insurance needs']],
                    ['The logistics', ['Road: public, private, or shared', 'Recorded easements or access', 'Zoning & livestock allowances', 'HOA or deed restrictions, if any']],
                  ].map(([group, items]) => (
                    <div key={group}>
                      <div style={{ fontSize: 11.5, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--clay-600)', fontWeight: 700, marginBottom: 14, paddingBottom: 10, borderBottom: '1px solid var(--border-strong)' }}>{group}</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
                        {items.map((it) => (
                          <div key={it} style={{ display: 'flex', gap: 12, alignItems: 'baseline', fontSize: 14.5, lineHeight: 1.5, color: 'var(--ink-700)' }}>
                            <Box /><span>{it}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: '1px dashed var(--border-strong)', paddingTop: 18, display: 'flex', alignItems: 'center', gap: 10, fontSize: 13.5, color: 'var(--text-muted)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--text-body)' }}>Notes:</span>
                  <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
                </div>
              </Pad>
            </Sheet>

            {/* ── 08 · FINAL THOUGHTS ── */}
            <Sheet n={8}>
              <div style={{ position: 'relative' }}>
              <Photo h={'100%'} src="pines-sunset.jpg" pos="center" radius="0" style={{ position: 'absolute', inset: 0 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,40,26,0.82) 0%, rgba(20,40,26,0.90) 100%)' }} />
              <Pad style={{ position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, padding: 'clamp(56px, 8vw, 96px) clamp(28px, 6vw, 76px)' }}>
                <div style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--ochre-300)', fontWeight: 600 }}>One last thing</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(28px, 4.4vw, 44px)', lineHeight: 1.1, color: 'var(--cream-50)', margin: 0, maxWidth: 640 }}>
                  You don&rsquo;t have to figure this out alone.
                </h2>
                <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: 1.75, color: 'var(--sage-300)', maxWidth: 540, margin: 0 }}>
                  If you&rsquo;re dreaming about more space, slower mornings, and a place to truly call home, I&rsquo;d love to help you find it. No pressure and no rush &mdash; just a friendly local who knows this land and would be glad to walk it with you.
                </p>
                <div style={{ marginTop: 10 }}>
                  <Button variant="accent" size="lg" href="website.html#contact">Let&rsquo;s find your place</Button>
                </div>
                <div style={{ fontSize: 14.5, color: 'rgba(247,242,232,0.78)', marginTop: 4 }}>
                  (352) 555-0148 &nbsp;&middot;&nbsp; aimee@northfloridaaimee.com
                </div>
                <div style={{ fontFamily: 'var(--font-script)', fontSize: 50, color: 'var(--ochre-300)', lineHeight: 0.8, marginTop: 8 }}>See you out there, Aimee</div>
              </Pad>
              </div>
            </Sheet>

          </div>
        </section>

        {/* CTA back to download */}
        <section style={{ background: 'var(--cream-100)' }}>
          <div style={{ maxWidth: 680, margin: '0 auto', padding: '88px 28px', textAlign: 'center' }}>
            <Eyebrow rule={false}>Keep a copy</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-3xl)', color: 'var(--text-strong)', margin: '12px 0 16px', lineHeight: 1.12 }}>Print it or save it as a PDF</h2>
            <p style={{ fontSize: 'var(--text-lg)', lineHeight: 1.7, color: 'var(--text-muted)', maxWidth: 480, margin: '0 auto 28px' }}>
              I&rsquo;ve emailed you a copy too &mdash; but feel free to print these pages or save them as a PDF to keep and revisit whenever you&rsquo;re ready.
            </p>
            <Button variant="accent" size="lg" onClick={function () { window.print(); }}>Print / save as PDF</Button>
          </div>
        </section>

        <window.Footer />
        <window.PageToggleBar mode="website" />
      </React.Fragment>
    );
  }
  window.__render(Page);
})();

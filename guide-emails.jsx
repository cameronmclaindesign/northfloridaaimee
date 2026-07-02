/* The Rural Buyer's Guide — 5-email nurture sequence.
   A designed reference document: each email shown as a realistic preview
   (from-row, subject, preview text, body, CTA) in the Modern Homestead
   brand. {{first_name}} is shown as a merge tag for the email tool. */
(function () {
  const { Eyebrow, Button, Badge } = window.OulalaDoulaDesignSystem_d80615;

  const EMAILS = [
    {
      n: 1, when: 'Sent immediately', goal: 'Deliver & welcome',
      subject: 'Your guide is here',
      preview: 'Plus what to expect from me next.',
      blocks: [
        { t: 'p', html: 'Hi {{first_name}},' },
        { t: 'p', html: 'Here\u2019s your guide \u2014 just click below.' },
        { t: 'cta' },
        { t: 'p', html: 'I\u2019m Aimee. I made this because buying rural property is different from buying in town, and I wanted you to have the real questions answered before you start looking.' },
        { t: 'p', html: 'Over the next couple of weeks I\u2019ll send a few more notes \u2014 local tips, buying advice, a few of my favorite places, that kind of thing.' },
        { t: 'p', html: 'Got a question already? Just hit reply. I read every one myself.' },
      ],
      cta: { label: 'Download your guide', href: 'guide-spreads.html' },
    },
    {
      n: 2, when: 'Day 2', goal: 'Teach one thing well',
      subject: 'One thing I wish every rural buyer knew',
      preview: 'It\u2019s not glamorous, but it matters more than almost anything else.',
      blocks: [
        { t: 'p', html: 'Hi {{first_name}},' },
        { t: 'p', html: 'Let\u2019s talk about wells for a second.' },
        { t: 'p', html: 'If you\u2019ve only ever lived in town, this might be new to you: out here, most homes get their water from a private well, not the city. So when you buy a rural property, you\u2019re also buying its well \u2014 depth, age, and all.' },
        { t: 'p', html: 'Why it matters: a deep, well-maintained well can run for decades without a second thought. An old or shallow one can mean low pressure in a dry summer, or an expensive replacement down the road.' },
        { t: 'p', html: 'Before you fall for a place, just ask three things \u2014 how deep is the well, how old is the pump, and when was the water last tested. Most sellers can answer in five minutes. If they can\u2019t, that tells you something too.' },
        { t: 'p', html: 'Sounds like a small detail, until it\u2019s your shower pressure at six in the morning.' },
        { t: 'p', html: 'Looking at a property and want a second opinion on something like this? Tell me about it.' },
      ],
      cta: { label: 'Reply with the property you\u2019re eyeing', href: 'mailto:aimee@northfloridaaimee.com?subject=A%20property%20I%27m%20looking%20at' },
    },
    {
      n: 3, when: 'Day 4', goal: 'Share what she loves about it',
      subject: 'What I love most about living here',
      preview: 'It\u2019s less about any one thing, and more about all of it together.',
      blocks: [
        { t: 'p', html: 'Hi {{first_name}},' },
        { t: 'p', html: 'People ask me sometimes what I actually love about living out here, so let me just answer it honestly.' },
        { t: 'p', html: 'It\u2019s the small stuff, mostly. Coffee in High Springs where the guy behind the counter knows your order by the second visit. An afternoon at the springs when it\u2019s ninety degrees and the water\u2019s still seventy-two. Driving under the oak canopy on the way home and not minding the extra five minutes it takes.' },
        { t: 'p', html: 'It\u2019s farmers markets on Saturday. Towns small enough that people still wave. Mornings that don\u2019t feel rushed, even on a Tuesday.' },
        { t: 'p', html: 'None of that shows up in a listing. But it\u2019s most of why people end up staying.' },
        { t: 'p', html: 'That\u2019s really the part of this job I love \u2014 it\u2019s never just about finding someone the right house. Finding the right community is what actually makes a place feel like home.' },
        { t: 'p', html: 'If you\u2019d like help figuring out which North Florida town fits the life you\u2019re picturing, just reply and tell me a bit about what you\u2019re after.' },
      ],
      cta: { label: 'Tell me what you\u2019re picturing', href: 'mailto:aimee@northfloridaaimee.com?subject=Helping%20me%20find%20the%20right%20community' },
    },
    {
      n: 4, when: 'Day 7', goal: 'A weekend, mapped out',
      subject: 'If you only had one weekend in North Florida\u2026',
      preview: 'Here\u2019s exactly where I\u2019d send you.',
      blocks: [
        { t: 'p', html: 'Hi {{first_name}},' },
        { t: 'p', html: 'People ask me this a lot \u2014 \u201cif I only had one weekend here, what would you have me do?\u201d So here\u2019s my real answer.' },
        { t: 'p', html: '<strong>Saturday morning:</strong> start at the High Springs Farmers Market \u2014 local honey, fresh bread, a good reason to walk Main Street. Grab a coffee at one of the little shops there first.' },
        { t: 'p', html: 'From there, head to Ginnie Springs or Poe Springs for a swim. The water sits around 72 degrees year-round, so it\u2019s good any season. Want fewer crowds and don\u2019t mind a longer drive? Ichetucknee is worth it \u2014 float the river if you\u2019ve got the time.' },
        { t: 'p', html: '<strong>Sunday:</strong> drive over to Micanopy. It\u2019s tiny, moss-draped, and full of antique shops \u2014 an easy, slow morning. Stop at The Talented Cookie Company while you\u2019re there; it\u2019s a local favorite for good reason.' },
        { t: 'p', html: 'On your way back, swing through Paynes Prairie Preserve. The overlook alone is worth the stop \u2014 the whole prairie spread out below you, sometimes with wild horses or bison in the distance.' },
        { t: 'p', html: 'Extra time on your hands? Cedar Lakes Woods &amp; Gardens is quieter and a bit tucked away \u2014 worth seeking out.' },
        { t: 'p', html: 'None of this is really about real estate. It\u2019s just what an ordinary weekend looks like if you lived here.' },
        { t: 'p', html: 'So \u2014 what kind of lifestyle are you hoping to find?' },
      ],
      cta: { label: 'Tell me the lifestyle you\u2019re after', href: 'mailto:aimee@northfloridaaimee.com?subject=The%20lifestyle%20I%27m%20looking%20for' },
    },
    {
      n: 5, when: 'Day 10', goal: 'Invite a conversation',
      subject: 'I\u2019d love to hear what you\u2019re looking for',
      preview: 'A quick conversation usually beats hours of scrolling.',
      blocks: [
        { t: 'p', html: 'Hi {{first_name}},' },
        { t: 'p', html: 'Thanks for sticking with me through this little series \u2014 the guide, the well talk, the stories about growing up out here, the weekend itinerary. I hope some of it was useful, and maybe a little fun.' },
        { t: 'p', html: 'Here\u2019s what I\u2019ve learned doing this a while: a fifteen-minute conversation usually saves people more time than a week of scrolling listings alone. I can point you toward towns that fit what you\u2019re picturing, give you a straight answer on a property you\u2019re eyeing, or just help you figure out what you actually want.' },
        { t: 'p', html: 'Whenever you\u2019d like to talk it through, I\u2019m an easy reply away \u2014 or grab a time that works for you below.' },
        { t: 'p', html: 'Either way, I\u2019m glad you\u2019re here. I\u2019d love to hear what you\u2019re looking for.' },
      ],
      cta: { label: 'Book a conversation', href: 'website.html#contact' },
    },
  ];

  /* ── pieces ── */

  function Bullet({ html }) {
    return (
      <div style={{ display: 'flex', gap: 11, alignItems: 'baseline', fontSize: 15.5, lineHeight: 1.7, color: 'var(--text-body)' }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--clay-500)', flexShrink: 0, transform: 'translateY(-3px)' }} />
        <span dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  }

  function EmailCard({ email }) {
    return (
      <div style={{ marginBottom: 44 }}>
        {/* meta row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 30, color: 'var(--clay-500)', lineHeight: 1 }}>{String(email.n).padStart(2, '0')}</span>
          <span style={{ fontSize: 12.5, letterSpacing: '.06em', color: 'var(--text-muted)' }}>{email.when}</span>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--border-strong)' }} />
          <span style={{ fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--sage-600)', fontWeight: 700 }}>{email.goal}</span>
        </div>

        {/* the email */}
        <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden', border: '1px solid var(--border)' }}>
          {/* from row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '20px 28px', borderBottom: '1px solid var(--border)' }}>
            <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--sage-500)', color: 'var(--cream-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 22, flexShrink: 0 }}>A</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--text-strong)' }}>Aimee Gayaunt <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>&lt;aimee@northfloridaaimee.com&gt;</span></div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>to {'{{first_name}}'}</div>
            </div>
          </div>

          {/* subject + preview */}
          <div style={{ padding: '24px 28px 4px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.15, color: 'var(--text-strong)', margin: 0 }}>{email.subject}</h2>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', fontStyle: 'italic', margin: '8px 0 0' }}>{email.preview}</p>
          </div>

          {/* body */}
          <div style={{ padding: '20px 28px 30px', display: 'flex', flexDirection: 'column', gap: 15 }}>
            {email.blocks.map(function (b, i) {
              if (b.t === 'p') return <p key={i} style={{ margin: 0, fontSize: 15.5, lineHeight: 1.75, color: 'var(--text-body)' }} dangerouslySetInnerHTML={{ __html: b.html }} />;
              if (b.t === 'list') return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '4px 0 4px 4px' }}>
                  {b.items.map(function (it, j) { return <Bullet key={j} html={it} />; })}
                </div>
              );
              if (b.t === 'cta') return (
                <div key={i} style={{ padding: '4px 0' }}>
                  <Button variant="accent" href={email.cta.href}>{email.cta.label}</Button>
                </div>
              );
              return null;
            })}

            {/* signature */}
            <div style={{ marginTop: 6, paddingTop: 18, borderTop: '1px solid var(--border)' }}>
              <div style={{ fontFamily: 'var(--font-script)', fontSize: 40, color: 'var(--clay-600)', lineHeight: 0.8 }}>Aimee</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 6 }}>Aimee Gayaunt &middot; REALTOR&reg; &middot; born &amp; raised in North Florida</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>(352) 555-0148 &middot; northfloridaaimee.com</div>
            </div>

            {email.ps && (
              <p style={{ margin: '4px 0 0', fontSize: 14, lineHeight: 1.7, color: 'var(--text-body)' }}><strong style={{ color: 'var(--text-strong)' }}>P.S.</strong> {email.ps}</p>
            )}

            {/* trailing CTA for non-intro emails (intro CTA sits inline) */}
            {email.blocks.every(function (b) { return b.t !== 'cta'; }) && (
              <div style={{ marginTop: 8 }}>
                <Button variant="accent" href={email.cta.href}>{email.cta.label}</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  function Page() {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--surface-sunken)' }}>
        {/* masthead */}
        <header style={{ background: 'var(--moss-800)', color: 'var(--cream-50)' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', padding: 'clamp(48px, 7vw, 84px) 28px clamp(40px, 6vw, 64px)', textAlign: 'center' }}>
            <div style={{ fontSize: 12, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--ochre-300)', fontWeight: 600 }}>North Florida Aimee &middot; Email sequence</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(30px, 5vw, 48px)', lineHeight: 1.06, margin: '16px 0 14px' }}>The follow-up after the guide</h1>
            <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: 1.7, color: 'var(--sage-300)', maxWidth: 520, margin: '0 auto' }}>
              Five short, honest emails that go out after someone downloads the Rural Buyer&rsquo;s Guide &mdash; building trust over about ten days, so Aimee is the first call when they&rsquo;re ready.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 26, flexWrap: 'wrap' }}>
              {['Day 0', 'Day 2', 'Day 4', 'Day 7', 'Day 10'].map(function (d, i) {
                return (
                  <span key={d} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 12.5, color: 'var(--cream-50)', border: '1px solid rgba(247,242,232,0.3)', borderRadius: 'var(--radius-pill, 999px)', padding: '5px 13px' }}>{d}</span>
                    {i < 4 && <span style={{ width: 14, height: 1, background: 'rgba(247,242,232,0.3)' }} />}
                  </span>
                );
              })}
            </div>
          </div>
        </header>

        {/* sequence */}
        <main style={{ maxWidth: 760, margin: '0 auto', padding: 'clamp(40px, 6vw, 72px) 24px' }}>
          {EMAILS.map(function (e) { return <EmailCard key={e.n} email={e} />; })}

          <div style={{ textAlign: 'center', padding: '20px 0 8px', fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.7 }}>
            <span style={{ fontFamily: 'var(--font-script)', fontSize: 32, color: 'var(--clay-600)', display: 'block', lineHeight: 1 }}>that&rsquo;s the sequence</span>
            <div style={{ marginTop: 8 }}>Cadence is a starting point &mdash; nudge the days to fit your list. <span style={{ fontFamily: 'monospace', background: 'var(--cream-100)', padding: '1px 6px', borderRadius: 4, fontSize: 12.5 }}>{'{{first_name}}'}</span> is a merge tag your email tool fills in.</div>
          </div>
        </main>
      </div>
    );
  }
  window.__render(Page);
})();

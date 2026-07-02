/* North Florida Aimee — Website sections (landing page redesign).
   One continuous scrolling experience. Every section has a psychological purpose.
   Built around: "Helping you find space to breathe." */
const DS = window.OulalaDoulaDesignSystem_d80615;
const { Button, Badge, Card, Eyebrow } = DS;

const BRAND = 'North Florida Aimee';
const PHONE = '(352) 555-0148';
const EMAIL = 'aimee@northfloridaaimee.com';
const AREAS = 'Gainesville · Alachua · High Springs · Newberry · Micanopy · Archer';

const NAV = [
  { label: 'About', href: 'website.html#about' },
  { label: 'Free Guide', href: 'guide.html' },
  { label: 'Contact', href: 'website.html#contact' },
];

function imgSrc(name) {
  return 'assets/photos/' + name;
}

/* Simple responsive hook — avoids layout flash on desktop */
function useMobile(bp) {
  var breakpoint = bp || 768;
  var [m, setM] = React.useState(window.innerWidth < breakpoint);
  React.useEffect(function () {
    var fn = function () { setM(window.innerWidth < breakpoint); };
    window.addEventListener('resize', fn, { passive: true });
    return function () { window.removeEventListener('resize', fn); };
  }, [breakpoint]);
  return m;
}

function Photo({ h, src, pos, radius, style, alt, className }) {
  h = h || 360; pos = pos || 'center'; radius = radius || 'var(--radius-lg)'; style = style || {};
  var a11y = alt ? { role: 'img', 'aria-label': alt } : { 'aria-hidden': true };
  return (
    <div {...a11y} className={'om-photo' + (className ? ' ' + className : '')} style={Object.assign({
      height: h, borderRadius: radius,
      backgroundImage: 'url(' + imgSrc(src) + ')',
      backgroundSize: 'cover', backgroundPosition: pos,
    }, style)} />
  );
}

function Wordmark({ onDark }) {
  onDark = !!onDark;
  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1, marginLeft: 10, flexShrink: 0 }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, letterSpacing: '0.01em', color: onDark ? 'var(--cream-50)' : 'var(--text-strong)', whiteSpace: 'nowrap', transition: 'color 0.3s' }}>North Florida Aimee</span>
      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: onDark ? 'rgba(247,242,232,0.6)' : 'var(--clay-600)', marginTop: 5, whiteSpace: 'nowrap', transition: 'color 0.3s' }}>Helping you find space to breathe</span>
    </span>
  );
}

/* ── HEADER ── minimal on landing page, full nav on inner pages ── */
function Header({ current, landing }) {
  landing = !!landing;
  var isMobileNav = useMobile(480);
  var [solid, setSolid] = React.useState(true);
  var [hidden, setHidden] = React.useState(false);
  var ticking = React.useRef(false);
  React.useEffect(function () {
    if (!landing) return;
    var TOP_THRESHOLD = 24; // px — must be back at the very top to reappear
    var fn = function () {
      var y = window.scrollY;
      setSolid(true);
      setHidden(y > TOP_THRESHOLD);
      ticking.current = false;
    };
    var onScroll = function () {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(fn);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    fn();
    return function () { window.removeEventListener('scroll', onScroll); };
  }, [landing]);
  return (
    <React.Fragment>
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <header style={{
        position: landing ? 'fixed' : 'sticky', top: 0, left: 0, right: 0, zIndex: 20,
        background: solid ? 'rgba(247,242,232,0.96)' : 'transparent',
        backdropFilter: solid ? 'blur(12px)' : 'none',
        borderBottom: solid ? '1px solid var(--border)' : '1px solid transparent',
        transform: (landing && hidden) ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'background 0.35s, border-color 0.35s, transform 0.32s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: isMobileNav ? '14px 16px' : '16px 28px', display: 'flex', alignItems: 'center', gap: isMobileNav ? 10 : 20 }}>
          <a href="website.html" aria-label="North Florida Aimee, home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src={'assets/logo-mark.svg'} alt="" style={{ height: 36 }} />
            <Wordmark onDark={landing && !solid} />
          </a>
          {!landing && (
            <nav aria-label="Primary" style={{ marginLeft: 'auto', display: 'flex', gap: 22, flexWrap: 'wrap', alignItems: 'center' }}>
              {NAV.map(function (n) {
                var active = current === n.href;
                return (
                  <a key={n.href} href={n.href} aria-current={active ? 'page' : undefined} style={{ fontSize: 14, fontWeight: active ? 700 : 500, color: active ? 'var(--brand-deep)' : 'var(--text-body)', textDecoration: 'none', borderBottom: active ? '2px solid var(--clay-500)' : '2px solid transparent', paddingBottom: 2 }}>{n.label}</a>
                );
              })}
              <Button variant="primary" size="sm" href="website.html#contact" style={{ whiteSpace: 'nowrap' }}>Start your search</Button>
            </nav>
          )}
          {landing && (
            <div style={{ marginLeft: 'auto', display: 'flex', gap: isMobileNav ? 10 : 20, alignItems: 'center', flexWrap: 'nowrap' }}>
              <a href="tel:+13525550148" style={{ fontSize: isMobileNav ? 13 : 14, fontWeight: 500, color: solid ? 'var(--text-body)' : 'rgba(247,242,232,0.85)', textDecoration: 'none', transition: 'color 0.3s', whiteSpace: 'nowrap' }}>{isMobileNav ? PHONE.replace(') ', ')\u00A0') : PHONE}</a>
              <Button variant="accent" size="sm" href="#contact" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>{isMobileNav ? 'Book a call' : 'Book a free call'}</Button>
            </div>
          )}
        </div>
      </header>
      <span id="main-content" tabIndex={-1} />
    </React.Fragment>
  );
}

/* ── HERO ── full-viewport, cinematic, content anchored to bottom ── */
function Hero() {
  var [showBar, setShowBar] = React.useState(false);
  var [isMobile, setIsMobile] = React.useState(window.innerWidth < 680);
  var avatar = imgSrc('aimee-portrait.jpg');
  React.useEffect(function () {
    var mq = window.matchMedia('(max-width: 680px)');
    var setM = function () { setIsMobile(mq.matches); };
    setM();
    if (mq.addEventListener) { mq.addEventListener('change', setM); } else { mq.addListener(setM); }
    var onScroll = function () { setShowBar(window.scrollY > window.innerHeight * 0.7); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return function () {
      window.removeEventListener('scroll', onScroll);
      if (mq.removeEventListener) { mq.removeEventListener('change', setM); } else { mq.removeListener(setM); }
    };
  }, []);
  return (
    <React.Fragment>
      <section style={{
        position: 'relative', minHeight: '100vh', paddingTop: 68, paddingBottom: 8,
        display: 'flex', alignItems: 'flex-end',
        backgroundImage: 'url(' + imgSrc('hero-oak-drive.jpg') + ')',
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(14,26,16,0.90) 0%, rgba(14,26,16,0.52) 40%, rgba(14,26,16,0.08) 72%, transparent 100%)' }} aria-hidden="true" />
        <div style={{ position: 'relative', width: '100%', maxWidth: 1180, margin: '0 auto', padding: 'clamp(48px, 8vh, 88px) 28px' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--clay-400)', margin: '48px 0 20px' }}>Buying &middot; Selling &middot; Relocating to North Florida</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(2.8rem, 8vw, 6rem)', lineHeight: 1.0, letterSpacing: '-0.025em', color: 'var(--cream-50)', margin: '48px 0 24px', maxWidth: 800 }}>
            Your space to breathe<br />is waiting for you.
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', lineHeight: 1.7, color: 'rgba(247,242,232,0.80)', maxWidth: 560, margin: '0 0 18px' }}>
            Whether you&rsquo;re searching for your first home, a few acres to spread out, or a fresh start in North Florida, buying real estate is about more than finding the right property. It&rsquo;s about finding the place where your next chapter begins.
          </p>
          <p style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', lineHeight: 1.7, color: 'rgba(247,242,232,0.80)', maxWidth: 560, margin: '0 0 36px' }}>
            I&rsquo;m here to help you navigate every step with honest advice, local insight, and no pressure&mdash;just a genuine commitment to helping you make the right decision.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center', marginBottom: 12 }}>
            <Button variant="accent" size="lg" href="#contact">Book your free consultation</Button>
            <a href="tel:+13525550148" style={{ fontSize: 15, fontWeight: 600, color: 'var(--cream-50)', textDecoration: 'none' }}>or call (352) 555-0148</a>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(247,242,232,0.7)', margin: '0 0 36px' }}>Free 15-minute call &middot; No pressure, ever &middot; I reply the same day</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, paddingTop: 24, borderTop: '1px solid rgba(247,242,232,0.14)', flexWrap: 'wrap' }}>
            <img src={avatar} alt="Aimee Gayaunt" style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(247,242,232,0.3)', flexShrink: 0 }} />
            <div style={{ display: 'flex', gap: 24, fontSize: 13, color: 'rgba(247,242,232,0.65)', flexWrap: 'wrap' }}>
              <span><strong style={{ color: 'var(--clay-400)', fontWeight: 700 }}>5.0 ★</strong> on Google</span>
              <span>200+ families helped</span>
              <span>Gainesville local &middot; replies same day</span>
            </div>
          </div>
        </div>
      </section>
      {isMobile && showBar && (
        <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 50, background: 'var(--moss-800)', display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px', boxShadow: '0 -4px 24px rgba(14,26,16,0.35)' }}>
          <img src={avatar} alt="" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
          <div style={{ flex: 1, color: 'var(--cream-50)', fontSize: 13, lineHeight: 1.3, minWidth: 0 }}>
            <div style={{ fontWeight: 700 }}>Aimee Gayaunt</div>
            <div style={{ opacity: 0.75, fontSize: 12 }}>Free 15-min consult</div>
          </div>
          <a href="tel:+13525550148" aria-label="Call Aimee" style={{ width: 38, height: 38, borderRadius: 8, border: '1px solid rgba(247,242,232,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cream-50)', textDecoration: 'none', fontSize: 16, flexShrink: 0 }}>&#9742;</a>
          <Button variant="accent" size="sm" href="#contact" style={{ whiteSpace: 'nowrap' }}>Book a call</Button>
        </div>
      )}
    </React.Fragment>
  );
}

/* ── TRUST BAR ── immediate proof after hero ── */
function TrustBar() {
  var items = [['5.0 ★', 'Google rating'], ['North FL', 'Born & raised'], ['10+', 'Years local'], ['Same day', 'Response time']];
  return (
    <div style={{ background: 'var(--cream-100)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 28px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {items.map(function (item) {
          return (
            <div key={item[1]} style={{ padding: '22px 12px', textAlign: 'center', flexShrink: 0 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--clay-600)', lineHeight: 1 }}>{item[0]}</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700, marginTop: 6 }}>{item[1]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── PHILOSOPHY ── "space to breathe" editorial quote ── */
function Philosophy() {
  return (
    <section style={{ background: 'var(--canvas)', padding: 'clamp(100px, 15vh, 180px) 28px clamp(72px, 11vh, 130px)' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)', lineHeight: 1.42, color: 'var(--text-strong)', margin: 0 }}>
          &ldquo;Most people come to North Florida looking for a home. They leave having found a slower pace, stronger community, and a place that finally feels like theirs.&rdquo;
        </p>
        <div style={{ marginTop: 28, fontFamily: 'var(--font-script)', fontSize: 40, color: 'var(--clay-500)', lineHeight: 1 }}>— Aimee</div>
      </div>
    </section>
  );
}

/* ── WHY NORTH FLORIDA ── emotional case for the area ── */
function WhyNorthFlorida() {
  var reasons = [
    { title: 'Natural Florida', body: 'Crystal-clear springs. Towering live oaks. Back roads worth taking. North Florida is a place where weekends happen outside and nature is never far from home.' },
    { title: 'More Room to Live', body: 'Whether you\'re dreaming of a front porch, room for horses, or land for the kids to explore, there\'s still space here to build the life you\'ve imagined.' },
    { title: 'Community That Feels Like Community', body: 'Here, neighbors wave. Local businesses know your name. Farmers markets fill Saturday mornings. It\'s the kind of place that\'s becoming harder to find.' },
  ];
  return (
    <section style={{ background: 'var(--cream-100)', padding: 'clamp(72px, 10vh, 120px) 28px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Eyebrow>Why North Florida</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 1.1 }}>The Florida you didn&rsquo;t know existed</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 36 }}>
          {reasons.map(function (r, i) {
            return (
              <div key={r.title} style={{ paddingTop: 24, borderTop: '2px solid ' + (i % 2 === 0 ? 'var(--clay-400)' : 'var(--moss-800)') }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--text-strong)', lineHeight: 1.2, marginBottom: 12 }}>{r.title}</div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8, color: 'var(--text-muted)' }}>{r.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── ABOUT ── personal, specific, trustworthy ── */
function About() {
  var mobile = useMobile();
  return (
    <section id="about" style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(72px, 10vh, 120px) 28px', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1.15fr', gap: mobile ? 36 : 68, alignItems: 'center' }}>
      <Photo h={mobile ? 320 : 540} src="aimee-portrait.jpg" pos="center 20%" alt="Aimee Gayaunt, North Florida real estate agent" radius="var(--radius-lg)" />
      <div>
        <Eyebrow>About Aimee</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--text-strong)', margin: '14px 0 20px', lineHeight: 1.08 }}>
          Born here. Still here.<br />For a reason.
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.8, color: 'var(--text-body)', margin: '0 0 18px' }}>
          I&rsquo;m Aimee Gayaunt &ndash; a North Florida native who grew up on back roads and never wanted to leave. The springs, small towns, and quiet corners have shaped who I am. That&rsquo;s why helping people buy homes here feels so personal.
        </p>
        <p style={{ fontSize: 15.5, lineHeight: 1.8, color: 'var(--text-muted)', margin: '0 0 18px' }}>
          Whether you&rsquo;re moving across town or across the country, my goal isn&rsquo;t simply to help you buy a house. It&rsquo;s to help you feel confident that you&rsquo;ve found the right place to build your life.
        </p>
        <p style={{ fontSize: 15.5, lineHeight: 1.8, color: 'var(--text-muted)', margin: '0 0 32px' }}>
          I&rsquo;ll give you honest advice, answer every question, and never rush a decision. Because the best homes aren&rsquo;t found by pressure. They&rsquo;re found by taking the time to get it right.
        </p>
        <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap', marginBottom: 32 }}>
          {[['Local', 'Born & raised here'], ['5.0', '★★★★★ rated'], ['200+', 'Families helped home']].map(function (item) {
            return (
              <div key={item[1]}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 34, color: 'var(--clay-600)', lineHeight: 1 }}>{item[0]}</div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 5 }}>{item[1]}</div>
              </div>
            );
          })}
        </div>
        <Button variant="primary" href="#contact">Start a conversation</Button>
      </div>
    </section>
  );
}

/* ── HOW I HELP ── buyer/seller editorial split ── */
function HowIHelp() {
  var mobile = useMobile();
  var items = [
    { tag: 'Buying', color: 'var(--clay-600)', headline: 'Buying a home shouldn\u2019t feel overwhelming.', body: ['Whether it\u2019s your very first home or the place you\u2019ve been dreaming about for years, I\u2019ll help you understand every step, every neighborhood, and every decision so you can move forward with confidence.', 'No confusing jargon. No unnecessary pressure. Just honest guidance from someone who knows North Florida inside and out.'], cta: 'Talk about buying' },
    { tag: 'Selling', color: 'var(--moss-800)', headline: 'The right buyer is out there. Let\'s find them.', body: ['Selling your home is more than putting a sign in the yard. It\u2019s preparing for your next chapter.', 'I\u2019ll help you price strategically, market beautifully, negotiate confidently, and guide you from listing day through closing with clear communication the whole way.'], cta: 'Get a free valuation' },
  ];
  return (
    <section style={{ background: 'var(--cream-100)', padding: 'clamp(72px, 10vh, 120px) 28px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <Eyebrow>How I help</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 1.1 }}>Buying or selling, you deserve a guide</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 20 }}>
          {items.map(function (item) {
            return (
              <div key={item.tag} className="om-card" style={{ padding: 'clamp(28px, 4vw, 48px)', background: 'var(--canvas)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 18 }}>
                <span style={{ fontWeight: 700, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: item.color }}>{item.tag}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(1.25rem, 2.5vw, 1.7rem)', color: 'var(--text-strong)', margin: 0, lineHeight: 1.2 }}>{item.headline}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
                  {item.body.map(function (para, pi) {
                    return <p key={pi} style={{ margin: 0, fontSize: 15.5, lineHeight: 1.7, color: 'var(--text-muted)' }}>{para}</p>;
                  })}
                </div>
                <div><Button variant="primary" size="sm" href="#contact">{item.cta}</Button></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── COMMUNITIES ── six towns, drives self-identification → contact ── */
function Communities() {
  var places = [
    { name: 'Gainesville', desc: 'The energy of a college town with the comfort of a close-knit community. Local coffee shops, farmers markets, great restaurants, and beautiful tree-lined neighborhoods make Gainesville a place that\'s easy to call home.' },
    { name: 'High Springs', desc: 'Weekends are spent floating crystal-clear springs, exploring local trails, and strolling through a historic downtown. It\'s the perfect place for those looking to slow down without feeling far away.' },
    { name: 'Alachua', desc: 'With a welcoming community, family-friendly neighborhoods, and room to grow, Alachua offers the best of small-town living while keeping Gainesville just a short drive away.' },
    { name: 'Newberry', desc: 'Known for excellent schools, newer neighborhoods, and a strong sense of community, Newberry is a favorite for families looking for more space and a quieter pace of life.' },
    { name: 'Micanopy', desc: 'Shaded by centuries-old oak trees and filled with antique shops, art, and timeless character, Micanopy feels like stepping into a different era\u2014one that\'s slower, quieter, and full of charm.' },
    { name: 'Archer', desc: 'If you\'re dreaming of acreage, star-filled skies, and room to create the lifestyle you\'ve always wanted, Archer offers the space and tranquility that\'s becoming harder to find.' },
  ];
  return (
    <section style={{ padding: 'clamp(72px, 10vh, 120px) 28px', background: 'var(--canvas)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Eyebrow>Where to look</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 1.1 }}>Find the corner of North Florida that feels like home</h2>
          <p style={{ maxWidth: 820, margin: '20px auto 0', fontSize: 16, lineHeight: 1.75, color: 'var(--text-muted)' }}>From walkable downtown streets to quiet country roads, every North Florida community offers something a little different. Whether you&rsquo;re looking for more land, top-rated schools, or a slower pace of life, I&rsquo;ll help you find the place that feels right for you.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0 28px' }}>
          {places.map(function (p, i) {
            return (
              <div key={p.name} style={{ paddingTop: 24, paddingBottom: 28, borderTop: '2px solid ' + (i % 2 === 0 ? 'var(--clay-400)' : 'var(--moss-800)') }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--text-strong)', lineHeight: 1.1, marginBottom: 10 }}>{p.name}</div>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.75, color: 'var(--text-muted)' }}>{p.desc}</p>
              </div>
            );
          })}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Button variant="primary" href="#contact">Tell me which area you&rsquo;re curious about</Button>
        </div>
      </div>
    </section>
  );
}

/* ── LEAD MAGNET ── low-friction email capture for not-yet-ready visitors ── */
function LeadMagnet() {
  var [sent, setSent] = React.useState(false);
  var mobile = useMobile();
  var { Input } = DS;
  return (
    <section style={{ background: 'var(--cream-100)', padding: 'clamp(64px, 9vh, 100px) 28px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', background: 'var(--moss-800)', borderRadius: 'var(--radius-lg)', padding: 'clamp(32px, 5.5vw, 60px)', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.05fr 0.95fr', gap: mobile ? 30 : 52, alignItems: 'center' }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--clay-400)', marginBottom: 16 }}>Free guide &middot; Instant download</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)', color: 'var(--cream-50)', margin: '0 0 16px', lineHeight: 1.12 }}>Thinking about North Florida? Get the local&rsquo;s guide.</h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--sage-300)', margin: 0 }}>The neighborhoods, realistic price ranges, the schools, the springs, and the things only a local knows &mdash; in one honest guide. Plus a first look at homes before they hit the big listing sites.</p>
        </div>
        <div style={{ background: 'var(--cream-50)', borderRadius: 'var(--radius-md)', padding: 'clamp(22px, 3.5vw, 32px)' }}>
          {sent ? (
            <div role="status" aria-live="polite" style={{ textAlign: 'center', padding: '30px 0' }}>
              <div style={{ fontFamily: 'var(--font-script)', fontSize: 46, color: 'var(--clay-600)', lineHeight: 0.9 }}>On its way!</div>
              <p style={{ color: 'var(--text-muted)', marginTop: 12, fontSize: 14.5 }}>Check your inbox in the next minute or two.</p>
            </div>
          ) : (
            <form onSubmit={function (e) { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Input label="First name" placeholder="Jordan" autoComplete="given-name" />
              <Input label="Email" type="email" placeholder="you@email.com" autoComplete="email" />
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
              <Button type="submit" variant="accent" full>Send me the free guide</Button>
              <p style={{ margin: 0, fontSize: 12, color: 'var(--text-muted)', textAlign: 'center' }}>No spam. Unsubscribe anytime.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── PROCESS ── removes fear of the unknown → lifts contact rate ── */
function Process() {
  var mobile = useMobile();
  var steps = [
    { n: '01', title: 'We talk', body: 'A free, relaxed 15-minute call. You tell me what you\'re after, I ask a few questions, and we figure out if we\'re a good fit. No commitment.' },
    { n: '02', title: 'We look', body: 'I start finding options — including places that never make the big listing sites. We tour at your pace, with no pressure to decide.' },
    { n: '03', title: 'You\'re home', body: 'When the right place appears, I\'ll guide you through the offer, inspection, and closing. Straight talk every step of the way.' },
  ];
  return (
    <section style={{ background: 'var(--moss-800)', padding: 'clamp(72px, 10vh, 120px) 28px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <Eyebrow tone="muted"><span style={{ color: 'var(--clay-400)' }}>The process</span></Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--cream-50)', margin: '12px 0 0', lineHeight: 1.1 }}>Three steps. No surprises.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: mobile ? 40 : 48 }}>
          {steps.map(function (s) {
            return (
              <div key={s.n} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 1, color: 'var(--clay-500)', fontWeight: 400, opacity: 0.85 }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--cream-50)' }}>{s.title}</div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8, color: 'var(--sage-300)' }}>{s.body}</p>
              </div>
            );
          })}
        </div>
        <div style={{ textAlign: 'center', marginTop: 64 }}>
          <Button variant="accent" size="lg" href="#contact">Start with a free call</Button>
        </div>
      </div>
    </section>
  );
}

/* ── TESTIMONIALS ── three large pull quotes, no boxes ── */
function Testimonials() {
  var mobile = useMobile();
  var quotes = [
    { q: 'As first-time buyers we were nervous about everything. Aimee walked us through each step, explained the parts nobody else did, and never once made us feel rushed.', a: 'Priya & Sam', loc: 'Gainesville' },
    { q: 'We relocated from out of state and she made it easy — honest about every neighborhood, patient with our questions, always quick to reply. We couldn\'t have done it without her.', a: 'The Hadley Family', loc: 'High Springs' },
    { q: 'She found us a place we didn\'t know to ask for. Twenty acres, a spring-fed pond, and a farmhouse with real bones. We\'re raising our kids here now.', a: 'Marcus & Dee', loc: 'Alachua' },
  ];
  return (
    <section style={{ padding: 'clamp(72px, 10vh, 120px) 28px', background: 'var(--canvas)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <Eyebrow>Client stories</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text-strong)', margin: '12px 0 0' }}>In their words</h2>
          <p style={{ margin: '14px 0 0', fontSize: 15, color: 'var(--text-muted)' }}><span style={{ color: 'var(--clay-500)', letterSpacing: 2 }}>★★★★★</span>&nbsp;&nbsp;5.0 average from 40+ verified reviews</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: mobile ? 36 : 28 }}>
          {quotes.map(function (t, i) {
            return (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 28, borderTop: '2px solid var(--border)' }}>
                <div style={{ color: 'var(--clay-500)', fontSize: 16, letterSpacing: 2 }}>★★★★★</div>
                <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'var(--text-lg)', lineHeight: 1.55, color: 'var(--text-strong)', margin: 0, flex: 1 }}>&ldquo;{t.q}&rdquo;</p>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-body)' }}>{t.a}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 3 }}>{t.loc} &middot; <span style={{ color: 'var(--moss-800)', fontWeight: 600 }}>Verified Google review</span></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── objection handling; every unanswered objection = lost lead ── */
function FAQ() {
  var [open, setOpen] = React.useState(null);
  var items = [
    { q: 'Do I need to be pre-approved before reaching out?', a: 'Not at all. Our first conversation is just that — a conversation. We\'ll figure out where you are in the process and go from there. Pre-approval is a later step.' },
    { q: 'How does your commission work?', a: 'As a buyer, my fee is typically covered by the seller — you pay nothing out of pocket. For sellers, we\'ll talk through exactly what\'s fair before you commit to anything.' },
    { q: 'Can you help me if I\'m relocating from out of state?', a: 'Absolutely — it\'s one of the things I do most. Video tours, detailed neighborhood walkthroughs, and patient answers to every question a newcomer needs to ask.' },
    { q: 'How long does it typically take to find a home?', a: 'It depends on what you\'re looking for and how the market is moving. Some buyers find their place in a few weeks; others take a season. I don\'t rush the process.' },
    { q: 'What makes North Florida different from the rest of the state?', a: 'It hasn\'t been over-developed. The land is affordable, communities are tight-knit, and there\'s still real nature — springs, forests, working farms. It attracts people who want something more intentional than a subdivision.' },
  ];
  return (
    <section style={{ background: 'var(--cream-100)', padding: 'clamp(72px, 10vh, 120px) 28px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Eyebrow>Questions</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text-strong)', margin: '12px 0 0' }}>Honest answers</h2>
        </div>
        <div>
          {items.map(function (item, i) {
            return (
              <div key={i} style={{ borderTop: '1px solid var(--border)' }}>
                <button onClick={function () { setOpen(open === i ? null : i); }} aria-expanded={open === i}
                  style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '22px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, cursor: 'pointer', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--text-strong)', fontWeight: 500 }}>
                  <span>{item.q}</span>
                  <span style={{ fontSize: 22, color: 'var(--clay-500)', transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.22s', flexShrink: 0, lineHeight: 1, display: 'inline-block' }}>+</span>
                </button>
                {open === i && <p style={{ margin: '0 0 22px', fontSize: 15.5, lineHeight: 1.82, color: 'var(--text-muted)' }}>{item.a}</p>}
              </div>
            );
          })}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </div>
    </section>
  );
}

/* ── FINAL CTA ── emotional close; warms the fully-scrolled visitor ── */
function FinalCTA() {
  return (
    <section style={{
      position: 'relative', minHeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundImage: 'linear-gradient(rgba(14,26,16,0.80), rgba(14,26,16,0.80)), url(' + imgSrc('land-pasture.jpg') + ')',
      backgroundSize: 'cover', backgroundPosition: 'center',
    }}>
      <div style={{ textAlign: 'center', padding: 'clamp(64px, 10vh, 100px) 28px', maxWidth: 660 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(2rem, 5.5vw, 4rem)', lineHeight: 1.06, color: 'var(--cream-50)', margin: '0 0 20px' }}>
          Let&rsquo;s find your<br />space to breathe.
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.72, color: 'rgba(247,242,232,0.76)', margin: '0 0 36px' }}>
          Free, relaxed, no commitment. Just a conversation about what you&rsquo;re looking for and whether I can help.
        </p>
        <Button variant="accent" size="lg" href="#contact">Book a free call</Button>
        <div style={{ marginTop: 30, fontFamily: 'var(--font-script)', fontSize: 44, color: 'var(--clay-400)', lineHeight: 1 }}>— Aimee</div>
      </div>
    </section>
  );
}

/* ── CONTACT ── clean, frictionless, warm ── */
function Contact() {
  var [sent, setSent] = React.useState(false);
  var mobile = useMobile();
  var { Input } = DS;
  return (
    <section id="contact" style={{ background: 'var(--canvas)', padding: 'clamp(72px, 10vh, 120px) 28px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1.1fr', gap: mobile ? 36 : 64, alignItems: 'start' }}>
        <div>
          <Eyebrow>Get in touch</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--text-strong)', margin: '14px 0 20px', lineHeight: 1.1 }}>Start the conversation</h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--text-muted)', margin: '0 0 32px' }}>
            Tell me what you&rsquo;re looking for. I&rsquo;ll reply within a few hours and we&rsquo;ll figure out the right next step together.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15 }}>
            <a href="tel:+13525550148" style={{ color: 'var(--text-body)', textDecoration: 'none', fontWeight: 500 }}>{PHONE}</a>
            <a href={'mailto:' + EMAIL} style={{ color: 'var(--text-body)', textDecoration: 'none' }}>{EMAIL}</a>
            <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 8, lineHeight: 1.6 }}>{AREAS}</div>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-body)', marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
            I take on a limited number of clients at a time so every search gets my full attention. If you&rsquo;re even thinking about a move this year, it&rsquo;s worth saying hello early.
          </p>
        </div>
        <div style={{ background: 'var(--cream-100)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', padding: 'clamp(28px, 4vw, 40px)' }}>
          {sent ? (
            <div role="status" aria-live="polite" style={{ textAlign: 'center', padding: '52px 0' }}>
              <div style={{ fontFamily: 'var(--font-script)', fontSize: 54, color: 'var(--clay-600)', lineHeight: 0.9 }}>Thank you</div>
              <p style={{ color: 'var(--text-muted)', marginTop: 16, fontSize: 15 }}>I&rsquo;ll be in touch within a few hours.</p>
            </div>
          ) : (
            <form onSubmit={function (e) { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Input label="Your name" placeholder="Jordan Avery" autoComplete="name" />
              <Input label="Email" type="email" placeholder="you@email.com" autoComplete="email" />
              <Input label="Phone (optional)" type="tel" placeholder="(352) 000-0000" autoComplete="tel" />
              <Input label="What are you looking for?" placeholder="3-bed near good schools, or land outside town..." autoComplete="off" />
              <Button type="submit" variant="accent" full>Send message</Button>
              <p style={{ margin: 0, fontSize: 12.5, color: 'var(--text-muted)', textAlign: 'center' }}>No pressure. I usually reply the same day.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ── minimal, grounding ── */
function Footer() {
  return (
    <footer style={{ background: 'var(--cream-100)', borderTop: '1px solid var(--border)', padding: 'clamp(28px, 5vw, 40px) 28px' }}>
      <div className="om-footer-row" style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <img src={'assets/logo-mark.svg'} alt="" style={{ height: 30, flexShrink: 0 }} />
          <span style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.4 }}>&copy; 2026 {BRAND} &middot; Aimee Gayaunt, REALTOR&reg;</span>
        </div>
      </div>
    </footer>
  );
}

function PageToggleBar({ mode }) {
  var toWebsite = mode !== 'review';
  var href = toWebsite ? 'index.html' : 'website.html';
  var label = toWebsite ? '\u2190 Back to Client Review' : 'View Website Preview \u2192';
  return (
    <div style={{ background: 'var(--moss-800)' }}>
      <a href={href} style={{ display: 'block', textAlign: 'center', padding: '18px 24px', fontSize: 14.5, fontWeight: 600, letterSpacing: '.01em', color: 'var(--cream-50)', textDecoration: 'none' }}>{label}</a>
    </div>
  );
}

Object.assign(window, {
  Header, Hero, About, Testimonials, Contact, Footer, PageToggleBar,
  Photo, Wordmark, NAV, TrustBar, Philosophy, WhyNorthFlorida, HowIHelp, Communities, Process, FAQ, FinalCTA, LeadMagnet, useMobile,
});

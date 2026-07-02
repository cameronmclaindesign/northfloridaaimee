/* North Florida Aimee — Client Review & Approval.
   The single link Aimee receives to review and sign off on the whole
   system before launch: brand, strategy, website, lead magnet, email
   automations, and what happens next. Plain English throughout — this
   is written for the business owner, not a marketer.
   Reusable pattern: copy this file + approval.html for future clients,
   swap the DATA section and brand tokens, keep the structure. */
(function () {
  const { Eyebrow, Button, Badge } = window.OulalaDoulaDesignSystem_d80615;
  const Photo = window.Photo;

  /* ── DATA ─────────────────────────────────────────────────────── */

  const WHATS_INSIDE = [
    { icon: '✨', label: 'Brand Identity', desc: 'The look, colors, and voice that make you instantly recognizable and memorable.' },
    { icon: '🌐', label: 'Website', desc: 'Your home base online, built to earn trust fast and guide visitors toward your guide and a conversation.' },
    { icon: '📖', label: 'Lead Magnet', desc: 'A free, genuinely useful guide that gives visitors a reason to share their email instead of clicking away.' },
    { icon: '💌', label: 'Automated Email Welcome Series', desc: 'A set of warm emails that keep building the relationship automatically, long after someone leaves your site.' },
    { icon: '📈', label: 'Client Attraction Strategy', desc: 'The full picture of how every piece connects, step by step, from first click to first conversation.' },
    { icon: '🚀', label: 'Launch Plan', desc: 'Exactly what happens next, once you give the green light.' },
  ];

  const COLORS = [
    { name: 'Warm Linen', role: 'Page canvas', hex: '#F7F2E8' },
    { name: 'Forest Pine', role: 'Primary brand color', hex: '#2F5135' },
    { name: 'Deep Moss', role: 'Dark sections', hex: '#18301E' },
    { name: 'Harvest Gold', role: 'Secondary accent', hex: '#C68A26' },
    { name: 'Terracotta', role: 'Warm secondary', hex: '#B25C3A' },
    { name: 'Wheat', role: 'Gentle highlight', hex: '#E2C77D' },
  ];

  const FONTS = [
    { name: 'Newsreader', role: 'Headlines & display text', sample: 'Buy your piece of North Florida.', style: { fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22 } },
    { name: 'Hanken Grotesk', role: 'Body copy & buttons', sample: 'Wells, septic, easements \u2014 the practical stuff, explained simply.', style: { fontFamily: 'var(--font-body)', fontSize: 16 } },
    { name: 'Sacramento', role: 'Signature accent, used sparingly', sample: 'Aimee', style: { fontFamily: 'var(--font-script)', fontSize: 34 } },
  ];

  const TRAITS = ['Warm', 'Honest', 'Knowledgeable', 'Encouraging', 'Down-to-earth', 'Local'];

  const PHOTO_DIRECTION = ['farmhouse-oaks.jpg', 'pasture-horses.jpg', 'pines-sunset.jpg'];

  const FLOW = ['Instagram, Facebook & referrals', 'Website landing page', 'Free lead magnet (the guide)', 'Email welcome series', 'Consultation', 'Client'];

  const SOCIAL_CTAS = ['Download the Free Rural Buyer\u2019s Guide', 'Thinking about buying acreage? Start here.', 'Planning a move to North Florida? Grab the free guide.', 'Everything you need to know before buying rural property \u2014 link in bio.'];

  const JOURNEY = [
    { stage: 'They find you online', tag: 'Step 1', what: 'A beautiful photo of North Florida land shows up on Instagram or Facebook, alongside a free offer: the Rural Buyer\u2019s Guide.', forYou: 'Your future clients are already daydreaming about this life on social media. This is what stops them mid-scroll and introduces them to you \u2014 before you\u2019ve said a word about real estate.' },
    { stage: 'They land on your guide page', tag: 'Step 2', what: 'One simple page with one simple ask: enter your email, get the guide.', forYou: 'The easier you make it to say yes, the more visitors actually do \u2014 so more of your website traffic turns into real leads instead of people who click away and never come back.' },
    { stage: 'They download the guide', tag: 'Step 3', what: 'They trade their email address for something genuinely useful.', forYou: 'Most people who aren\u2019t ready to call you today simply vanish. This way, you keep a way to reach them \u2014 so a \u201cnot yet\u201d doesn\u2019t have to mean \u201cnever.\u201d' },
    { stage: 'They land on the thank-you page', tag: 'Step 4', what: 'They get instant access to the guide, plus a heads-up that a few helpful emails are on the way.', forYou: 'Delivering right away builds trust immediately. And because they know what\u2019s coming, your emails get opened \u2014 instead of mistaken for spam.' },
    { stage: 'They receive your Welcome Series', tag: 'Step 5 \u00b7 over 10 days', what: 'Five short, friendly emails arrive on their own \u2014 no extra work for you.', forYou: 'Most people don\u2019t buy land the same week they download a guide. These emails keep you top of mind until they are \u2014 automatically.' },
    { stage: 'They book a free conversation', tag: 'Step 6', what: 'When they\u2019re ready to talk, booking time with you takes one click.', forYou: 'This is the moment a curious stranger turns into an actual lead \u2014 someone you can talk to, not just a name on a list.' },
    { stage: 'They become a client \u2014 and stay one', tag: 'Step 7', what: 'The relationship keeps going through the sale, and afterward through your newsletter.', forYou: 'Happy clients refer their friends and come back when they\u2019re ready to buy again. This system is built to keep that relationship alive long after closing day.' },
  ];

  const WEBSITE_BULLETS = ['Build trust quickly', 'Explain who you help', 'Capture leads through the guide', 'Encourage consultations', 'Feel aligned with your brand'];
  const WEBSITE_CHECKLIST = ['Is your contact information correct?', 'Does the copy sound like you?', 'Are your services & offers accurate?', 'Are the images approved?', 'Are the call-to-action buttons correct?', 'Does the site feel aligned with your brand?'];

  const LEAD_MAGNET_BULLETS = ['Gives visitors a reason to share their email', 'Positions you as helpful and knowledgeable', 'Attracts the right kind of leads', 'Starts the relationship before someone is ready to book'];

  const CORE = [
    { n: 1, when: 'Day 0', goal: 'Say hello & deliver the guide', subject: 'Your guide is here', line: 'They get the guide right away, plus a quick word from you about what to expect next. Friendly and to the point \u2014 never a sales pitch.', cta: 'Download your guide' },
    { n: 2, when: 'Day 2', goal: 'Teach one thing well', subject: 'One thing I wish every rural buyer knew', line: 'One genuinely useful lesson about buying rural property (wells, in this case), told simply. This is what gets people thinking of you as the expert to call.', cta: 'Reply with the property you\u2019re eyeing' },
    { n: 3, when: 'Day 4', goal: 'Share what she loves about it', subject: 'What I love most about living here', line: 'An honest, everyday answer to \u201cwhat do you love about North Florida\u201d \u2014 coffee, the springs, the towns. It helps people picture the lifestyle, not just the house.', cta: 'Tell me what you\u2019re picturing' },
    { n: 4, when: 'Day 7', goal: 'Share a weekend\u2019s worth of favorites', subject: 'If you only had one weekend in North Florida\u2026', line: 'A real, mapped-out weekend of springs, small towns, and local favorites. This is what turns \u201cmy real estate agent\u201d into \u201cmy friend who happens to sell real estate.\u201d', cta: 'Tell me the lifestyle you\u2019re after' },
    { n: 5, when: 'Day 10', goal: 'Invite a real conversation', subject: 'I\u2019d love to hear what you\u2019re looking for', line: 'A warm, easy invitation to talk, whenever they\u2019re ready. This is how an interested reader finally becomes a real conversation with you.', cta: 'Book a conversation' },
  ];

  const BEHAVIORAL = [
    {
      trigger: 'Someone downloads the guide but never reaches out', timing: 'Sent automatically, 7 days later',
      forYou: 'If a lead goes quiet after downloading the guide, this gentle check-in keeps the conversation open \u2014 without you having to remember to follow up yourself.',
      subject: 'Did the guide answer your biggest questions?', preview: 'Curious how the search is going so far.',
      blocks: [
        { t: 'p', html: 'Hi {{first_name}},' },
        { t: 'p', html: 'I hope the guide answered some of the bigger questions about buying out here \u2014 wells, septic, picking the right town, what acreage actually looks like day to day.' },
        { t: 'p', html: 'It usually raises a few new ones, too. That\u2019s normal \u2014 there\u2019s a lot to learn when you\u2019re moving from town to country, and most of it just takes someone walking you through it once.' },
        { t: 'p', html: 'So \u2014 what are you picturing? A little acreage outside Newberry, a farmhouse with some land to stretch out on, somewhere with a porch and a view? Hit reply and tell me. I love hearing what people are dreaming up.' },
      ],
      cta: { label: 'Reply and tell me what you\u2019re picturing', href: 'mailto:aimee@northfloridaaimee.com?subject=What%20I%27m%20picturing%20for%20my%20next%20place' },
    },
    {
      trigger: 'Someone books a free consultation', timing: 'Sent automatically, the moment they book',
      forYou: 'This takes the awkwardness out of a first call. Your client shows up relaxed and prepared, and you come across as organized and professional before you\u2019ve even spoken.',
      subject: 'Looking forward to talking with you!', preview: 'Here\u2019s what to expect on our call.',
      blocks: [
        { t: 'p', html: 'Hi {{first_name}},' },
        { t: 'p', html: 'I\u2019m genuinely looking forward to this. Getting to hear what someone\u2019s picturing for their next chapter is one of my favorite parts of the job.' },
        { t: 'p', html: 'Here\u2019s what to expect: a relaxed 15\u201320 minute conversation. I\u2019ll ask about your timeline, your budget range, and the kind of property that\u2019s caught your eye, and we\u2019ll start narrowing in on what makes sense for you.' },
        { t: 'p', html: 'A few things worth mulling over beforehand:' },
        { t: 'list', items: [
          'Roughly when you\u2019re hoping to make a move',
          'A ballpark budget \u2014 even a wide range is plenty',
          'Your must-haves versus your nice-to-haves',
          'Any town or pocket of the area that\u2019s caught your eye',
        ] },
        { t: 'p', html: 'You don\u2019t need to have it all figured out \u2014 that\u2019s what this call is for.' },
        { t: 'p', html: 'Talk soon!' },
      ],
      cta: { label: 'Add to calendar / reschedule', href: 'website.html#contact' },
      ps: 'Need to move the time? Just reply and we\u2019ll find one that works.',
    },
    {
      trigger: 'Someone\u2019s been reading along for a month but hasn\u2019t booked', timing: 'Sent automatically, after 30 days',
      forYou: 'Some people just need more time. This keeps you top of mind a month later, so when they finally are ready, you\u2019re still the first person they think to call.',
      subject: 'Have you found the right place yet?', preview: 'Wanted to see how your search has been going.',
      blocks: [
        { t: 'p', html: 'Hi {{first_name}},' },
        { t: 'p', html: 'I wanted to check in and see how your search has been going. Have you found a town you keep coming back to, or a property that\u2019s stuck with you?' },
        { t: 'p', html: 'Finding the right piece of land takes time \u2014 I\u2019ve had buyers spend a year or two with the idea before it clicked, and it was worth every bit of the wait once it did.' },
        { t: 'p', html: 'If you want to talk through what you\u2019ve seen so far, or just think out loud about timing, I\u2019m an easy reply away.' },
      ],
      cta: { label: 'Reply and let me know how it\u2019s going', href: 'mailto:aimee@northfloridaaimee.com?subject=How%20my%20search%20is%20going' },
    },
  ];

  const SUBJECTS = [
    'The question that saves rural buyers thousands', 'What a well actually costs to own', 'Is the land really yours? (read the survey)', 'Five acres, one dirt road, no signal \u2014 the catch', 'The North Florida towns nobody talks about',
    'How far is \u201ctoo far\u201d from town?', 'What I tell every first-time land buyer', 'Septic, simplified', 'The best months to buy acreage here', 'A slow morning in High Springs',
    'What \u201cagricultural zoning\u201d really means for you', 'Before you fall for the listing photo', 'The hidden costs of country living (and how to plan)', 'Flood zones without the panic', 'Why your budget stretches further out here',
    'A back road worth the detour', 'What to pack for a property tour', 'Usable acres vs. useless acres', 'How buying rural is different \u2014 in plain English', 'When you\u2019re ready, start here',
  ];

  const NEWSLETTER = [
    { group: 'Seasonal & timing', items: ['Best months to house-hunt in North Florida', 'Spring: getting your land garden-ready', 'Summer: the spring-fed swimming holes locals love', 'Fall: farmers markets & u-pick farms', 'Winter: cold snaps, wells & pipes out here'] },
    { group: 'Places & community', items: ['Community spotlight: High Springs', 'Community spotlight: Micanopy', 'Community spotlight: Newberry & Archer', 'A back road worth the detour', 'Small-business love: a shop or caf\u00e9 worth supporting'] },
    { group: 'Rural living, how-to', items: ['Keeping backyard chickens for beginners', 'Fencing basics & what it really costs', 'Private well maintenance, simply', 'Septic care 101', 'Living kindly with Florida critters', 'What \u201cusable acreage\u201d actually means'] },
    { group: 'Buyer & homeowner tips', items: ['The inspections rural homes really need', 'Internet & utilities: what to confirm first', 'Land loans & financing, in plain English', 'Hidden costs of country living \u2014 a yearly check-in', '\u201cIs now a good time?\u201d \u2014 an honest take'] },
    { group: 'Stories & relationship', items: ['Client story: trading the suburbs for five acres', 'A day in the life of owning acreage', 'Reader Q&A: your questions, answered', 'Year in review & a heartfelt thank-you'] },
  ];

  const FINAL_CHECKLIST = ['Brand identity approved', 'Website copy approved', 'Website images approved', 'Lead magnet approved', 'Email sequence approved', 'Contact information correct', 'Booking link correct', 'Social links correct', 'Ready for launch'];

  const NEXT_STEPS = ['Final revisions are completed', 'Domain is connected', 'Email platform is connected', 'Lead magnet form is tested', 'Email automations are tested', 'Booking / contact links are tested', 'Website is published', 'You receive your final links and login information'];

  /* ── SHARED PIECES ────────────────────────────────────────────── */

  function SectionHead({ part, title, sub }) {
    return (
      <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', padding: '0 4px 38px' }}>
        {part && <Eyebrow rule={false}>{part}</Eyebrow>}
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(26px, 4vw, 38px)', lineHeight: 1.1, color: 'var(--text-strong)', margin: '10px 0 0' }}>{title}</h2>
        {sub && <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-muted)', maxWidth: 560, margin: '14px auto 0' }}>{sub}</p>}
      </div>
    );
  }

  function Band({ children, bg }) {
    return (
      <section style={{ background: bg || 'transparent' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: 'clamp(56px, 8vw, 88px) 24px' }}>{children}</div>
      </section>
    );
  }

  function JourneyStep({ step, last }) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--clay-500)', flexShrink: 0, marginTop: 6 }} />
          {!last && <span style={{ flex: 1, width: 2, background: 'var(--border-strong)', margin: '6px 0' }} />}
        </div>
        <div style={{ paddingBottom: last ? 0 : 26 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(19px, 2.6vw, 23px)', color: 'var(--text-strong)' }}>{step.stage}</span>
            <span style={{ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--sage-600)', fontWeight: 700 }}>{step.tag}</span>
          </div>
          <p style={{ margin: '7px 0 0', fontSize: 15, lineHeight: 1.65, color: 'var(--text-body)' }}>{step.what}</p>
          <div style={{ marginTop: 10, paddingLeft: 14, borderLeft: '2px solid var(--sage-300)' }}>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--text-muted)' }}><strong style={{ color: 'var(--clay-600)', fontWeight: 700 }}>What this means for you &middot; </strong>{step.forYou}</p>
          </div>
        </div>
      </div>
    );
  }

  function MiniEmail({ e }) {
    return (
      <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '22px 24px', display: 'flex', gap: 18, alignItems: 'flex-start', boxShadow: 'var(--shadow-sm)' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 34, color: 'var(--clay-500)', lineHeight: 1, minWidth: 34 }}>{String(e.n).padStart(2, '0')}</span>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 7, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{e.when}</span>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--border-strong)' }} />
            <span style={{ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--sage-600)', fontWeight: 700 }}>{e.goal}</span>
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 18.5, color: 'var(--text-strong)', lineHeight: 1.25 }}>{e.subject}</div>
          <p style={{ margin: '6px 0 10px', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)' }}>{e.line}</p>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--brand-deep)' }}>Then we invite them to &middot; {e.cta}</span>
        </div>
      </div>
    );
  }

  function FullEmail({ e }) {
    return (
      <div style={{ marginBottom: 40 }}>
        <div style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 9, flexWrap: 'wrap' }}>
            <Badge tone="clay">When this sends</Badge>
            <span style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--text-strong)' }}>{e.trigger}</span>
          </div>
          <p style={{ margin: '0 0 4px', fontSize: 13.5, color: 'var(--text-muted)' }}>{e.timing}</p>
          <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-body)', background: 'var(--sage-100)', borderRadius: 'var(--radius-sm)', padding: '13px 16px' }}>
            <strong style={{ color: 'var(--brand-deep)' }}>Why this helps you &middot; </strong>{e.forYou}
          </p>
        </div>
        <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '18px 26px', borderBottom: '1px solid var(--border)' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--sage-500)', color: 'var(--cream-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 21, flexShrink: 0 }}>A</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-strong)' }}>Aimee Gayaunt <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>&lt;aimee@northfloridaaimee.com&gt;</span></div>
              <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>to {'{{first_name}}'}</div>
            </div>
          </div>
          <div style={{ padding: '22px 26px 4px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(20px, 2.6vw, 25px)', lineHeight: 1.18, color: 'var(--text-strong)', margin: 0 }}>{e.subject}</h3>
            <p style={{ fontSize: 13.5, color: 'var(--text-muted)', fontStyle: 'italic', margin: '7px 0 0' }}>{e.preview}</p>
          </div>
          <div style={{ padding: '18px 26px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {e.blocks.map(function (b, i) {
              if (b.t === 'p') return <p key={i} style={{ margin: 0, fontSize: 15.5, lineHeight: 1.75, color: 'var(--text-body)' }} dangerouslySetInnerHTML={{ __html: b.html }} />;
              if (b.t === 'list') return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 9, padding: '2px 0 2px 2px' }}>
                  {b.items.map(function (it, j) {
                    return (
                      <div key={j} style={{ display: 'flex', gap: 11, alignItems: 'baseline', fontSize: 15, lineHeight: 1.65, color: 'var(--text-body)' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--clay-500)', flexShrink: 0, transform: 'translateY(-3px)' }} />
                        <span dangerouslySetInnerHTML={{ __html: it }} />
                      </div>
                    );
                  })}
                </div>
              );
              return null;
            })}
            <div style={{ marginTop: 4, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
              <div style={{ fontFamily: 'var(--font-script)', fontSize: 38, color: 'var(--clay-600)', lineHeight: 0.8 }}>Aimee</div>
              <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 6 }}>Aimee Gayaunt &middot; REALTOR&reg; &middot; (352) 555-0148</div>
            </div>
            {e.ps && <p style={{ margin: '2px 0 0', fontSize: 13.5, lineHeight: 1.7, color: 'var(--text-body)' }}><strong style={{ color: 'var(--text-strong)' }}>P.S.</strong> {e.ps}</p>}
            <div style={{ marginTop: 6 }}>
              <Button variant="accent" href={e.cta.href}>{e.cta.label}</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function CheckRow({ label, checked, onToggle }) {
    return (
      <label style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', background: checked ? 'var(--sage-100)' : 'var(--surface-card)', border: '1px solid ' + (checked ? 'var(--sage-300)' : 'var(--border)'), borderRadius: 'var(--radius-sm)', cursor: 'pointer', transition: 'background 160ms ease, border-color 160ms ease' }}>
        <span style={{ width: 22, height: 22, borderRadius: 6, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: checked ? 'var(--sage-500)' : 'transparent', border: '1.6px solid ' + (checked ? 'var(--sage-500)' : 'var(--border-strong)'), color: 'var(--cream-50)', fontSize: 13 }}>{checked ? '\u2713' : ''}</span>
        <span style={{ fontSize: 15, color: 'var(--text-strong)', fontWeight: checked ? 600 : 500 }}>{label}</span>
        <input type="checkbox" checked={checked} onChange={onToggle} style={{ display: 'none' }} />
      </label>
    );
  }

  /* ── SECTION COMPONENTS ───────────────────────────────────────── */

  function TopNav() {
    return (
      <div style={{ position: 'sticky', top: 0, zIndex: 20, background: 'var(--moss-800)', borderBottom: '1px solid rgba(247,242,232,0.12)' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--cream-50)', letterSpacing: '.04em' }}>North Florida Aimee &middot; Client Review &amp; Approval</span>
        </div>
      </div>
    );
  }

  function WelcomeBand() {
    return (
      <header style={{ background: 'var(--moss-800)', color: 'var(--cream-50)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: 'clamp(56px, 8vw, 96px) 28px clamp(48px, 6vw, 80px)', textAlign: 'center' }}>
          <div style={{ fontSize: 12, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--ochre-300)', fontWeight: 600 }}>Prepared for Aimee Gayaunt</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(30px, 5vw, 48px)', lineHeight: 1.1, margin: '16px 0 20px' }}>Welcome to your Client Attraction System</h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, textAlign: 'left' }}>
            <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: 1.75, color: 'var(--sage-300)', margin: 0 }}>
              You&rsquo;re already doing a lot right &mdash; showing up on social media, staying active in the community, earning referrals. But most visitors only look around once before moving on, not because they weren&rsquo;t interested, but because nothing was there yet to keep the conversation going until they were ready.
            </p>
            <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: 1.75, color: 'var(--sage-300)', margin: 0 }}>
              That&rsquo;s exactly what we built together: <strong style={{ color: 'var(--cream-50)' }}>The Client Attraction System</strong> &mdash; a complete, connected set of tools designed to make a strong first impression, earn trust over time, and turn more of your visitors into real conversations. Every piece below was built with a purpose, and they all work together.
            </p>
          </div>

          <div style={{ marginTop: 40, paddingTop: 36, borderTop: '1px solid rgba(247,242,232,0.18)', textAlign: 'left' }}>
            <div style={{ fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--ochre-300)', fontWeight: 600, marginBottom: 20, textAlign: 'center' }}>Here&rsquo;s what you&rsquo;ll find inside</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {WHATS_INSIDE.map(function (item) {
                return (
                  <div key={item.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: 20, lineHeight: 1.4 }}>{item.icon}</span>
                    <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--sage-300)' }}><strong style={{ color: 'var(--cream-50)', fontWeight: 700 }}>{item.label}</strong> &mdash; {item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <p style={{ fontSize: 'clamp(14px, 1.8vw, 16px)', lineHeight: 1.75, color: 'var(--sage-300)', margin: '36px 0 0', textAlign: 'center' }}>
            Take your time exploring each piece below. By the end, you&rsquo;ll see exactly how it all comes together &mdash; and I think you&rsquo;ll be just as excited about it as I am.
          </p>
        </div>
      </header>
    );
  }

  function BrandIdentityBand() {
    return (
      <Band>
        <SectionHead part="Part 1" title="Brand Identity" sub="The look, feel, and voice we&rsquo;ve built everything else on top of." />
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 44 }}>

          {/* logo */}
          <div>
            <div style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--clay-600)', fontWeight: 700, marginBottom: 16 }}>Logo</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, minWidth: 220 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <img src="assets/logo-mark.svg" alt="Logo mark" style={{ height: 36 }} />
                  <window.Wordmark />
                </span>
              </div>
              <div style={{ background: 'var(--moss-800)', borderRadius: 'var(--radius-md)', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, minWidth: 220 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <img src="assets/logo-mark.svg" alt="Logo mark" style={{ height: 36 }} />
                  <window.Wordmark onDark={true} />
                </span>
              </div>
            </div>
            <p style={{ margin: '12px 0 0', fontSize: 13, color: 'var(--text-muted)' }}>The same lockup that appears top-left of every page, on light and dark headers.</p>
          </div>

          {/* colors */}
          <div>
            <div style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--clay-600)', fontWeight: 700, marginBottom: 16 }}>Colors</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 14 }}>
              {COLORS.map(function (c) {
                return (
                  <div key={c.hex} style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--surface-card)' }}>
                    <div style={{ height: 56, background: c.hex }} />
                    <div style={{ padding: '10px 12px' }}>
                      <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--text-strong)' }}>{c.name}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{c.role}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* typography */}
          <div>
            <div style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--clay-600)', fontWeight: 700, marginBottom: 16 }}>Typography</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {FONTS.map(function (f, i) {
                return (
                  <div key={f.name} style={{ display: 'grid', gridTemplateColumns: 'minmax(140px,0.6fr) minmax(0,1.4fr)', gap: 20, alignItems: 'center', padding: '18px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border)' }}>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-strong)' }}>{f.name}</div>
                      <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{f.role}</div>
                    </div>
                    <div style={f.style}>{f.sample}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* buttons */}
          <div>
            <div style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--clay-600)', fontWeight: 700, marginBottom: 16 }}>Buttons</div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
              <Button variant="accent">Accent &middot; main actions</Button>
              <Button variant="primary">Primary &middot; forest pine</Button>
              <Button variant="outline">Outline &middot; secondary</Button>
            </div>
          </div>

          {/* photography */}
          <div>
            <div style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--clay-600)', fontWeight: 700, marginBottom: 16 }}>Photography direction</div>
            <p style={{ margin: '0 0 16px', fontSize: 15, lineHeight: 1.7, color: 'var(--text-body)' }}>Real North Florida land, golden light, and lived-in places &mdash; oak canopies, open pasture, working farmhouses. Nothing stock-photo glossy.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
              {PHOTO_DIRECTION.map(function (src) { return <Photo key={src} h={130} src={src} pos="center" radius="var(--radius-sm)" />; })}
            </div>
          </div>

          {/* personality + voice */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 28 }}>
            <div>
              <div style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--clay-600)', fontWeight: 700, marginBottom: 14 }}>Brand personality</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {TRAITS.map(function (t) { return <Badge key={t} tone="sage">{t}</Badge>; })}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--clay-600)', fontWeight: 700, marginBottom: 14 }}>Voice &amp; tone</div>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: 'var(--text-body)' }}>Conversational, like a knowledgeable friend over coffee &mdash; never corporate, never pushy. <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>&ldquo;If you&rsquo;re dreaming about more space, slower mornings, and a place to truly call home, I&rsquo;d love to help you find it.&rdquo;</span></p>
            </div>
          </div>

          <div style={{ background: 'var(--sage-100)', borderRadius: 'var(--radius-md)', padding: '20px 24px' }}>
            <div style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--sage-600)', fontWeight: 700, marginBottom: 8 }}>Overall mood</div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: 'var(--text-body)' }}>Editorial and warm &mdash; like a well-loved field guide, not a corporate brochure. Generous white space, soft earthy color, and real photography do the talking.</p>
          </div>
        </div>
      </Band>
    );
  }

  function ClientAttractionBand() {
    return (
      <Band bg="var(--cream-100)">
        <SectionHead part="Part 2" title="Your Client Attraction System" sub="The path from first impression to first conversation, mapped out step by step." />
        <div style={{ maxWidth: 720, margin: '0 auto' }}>

          {/* flow diagram */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 48 }}>
            {FLOW.map(function (step, i) {
              return (
                <React.Fragment key={step}>
                  <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-strong)', borderRadius: 999, padding: '14px 28px', fontSize: 15.5, fontWeight: 600, color: 'var(--text-strong)', boxShadow: 'var(--shadow-sm)', textAlign: 'center' }}>{step}</div>
                  {i < FLOW.length - 1 && <div style={{ fontSize: 20, color: 'var(--clay-500)', lineHeight: 1, margin: '6px 0' }}>&darr;</div>}
                </React.Fragment>
              );
            })}
          </div>

          {/* detailed steps */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--clay-600)', fontWeight: 700, marginBottom: 24, textAlign: 'center' }}>Step by step</div>
            {JOURNEY.map(function (s, i) { return <JourneyStep key={i} step={s} last={i === JOURNEY.length - 1} />; })}
          </div>

          {/* CTAs callout */}
          <div style={{ borderTop: '1px solid var(--border-strong)', paddingTop: 40 }}>
            <div style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--clay-600)', fontWeight: 700, marginBottom: 14, textAlign: 'center' }}>Using CTAs to Drive Traffic &amp; Generate Leads</div>
            <p style={{ fontSize: 15.5, lineHeight: 1.75, color: 'var(--text-body)', maxWidth: 600, margin: '0 auto 22px', textAlign: 'center' }}>
              The easiest way to generate more inquiries is to give every social media post a clear next step. Instead of asking people to contact you directly, invite them to your website by offering something valuable first &mdash; your free guide. Whether you&rsquo;re sharing a new listing, a community spotlight, or a quick tip, end the post with one simple call-to-action. A few examples:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 12, maxWidth: 600, margin: '0 auto 22px' }}>
              {SOCIAL_CTAS.map(function (c) {
                return <div key={c} style={{ background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '13px 16px', fontSize: 14.5, color: 'var(--text-strong)', textAlign: 'center' }}>{c}</div>;
              })}
            </div>
            <div style={{ maxWidth: 560, margin: '0 auto', background: 'var(--sage-100)', borderRadius: 'var(--radius-md)', padding: '18px 22px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 18, lineHeight: 1.5 }}>{'\ud83d\udca1'}</span>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-body)' }}><strong style={{ color: 'var(--brand-deep)' }}>CTA Rule:</strong> Every Instagram post, Reel, Story, and Facebook post should end with one clear call-to-action that directs people back to your website.</p>
            </div>
          </div>
        </div>
      </Band>
    );
  }

  function WebsiteReviewBand() {
    return (
      <Band>
        <SectionHead part="Part 3" title="Website Review" sub="Take a look, then make sure everything below reads true to you." />
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          {/* browser mockup */}
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border)', marginBottom: 28 }}>
            <div style={{ background: 'var(--cream-200)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid var(--border)' }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--rose-300)' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--ochre-300)' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--sage-300)' }} />
              <span style={{ marginLeft: 10, fontSize: 12.5, color: 'var(--text-muted)', background: 'var(--surface-card)', borderRadius: 999, padding: '4px 14px' }}>northfloridaaimee.com</span>
            </div>
            <div style={{ position: 'relative', height: 420, overflow: 'hidden', background: 'var(--cream-50)' }}>
              <iframe title="Website preview" src="website.html" style={{ width: 1280, height: 1800, border: 'none', transform: 'scale(0.594)', transformOrigin: 'top left', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 90, background: 'linear-gradient(180deg, rgba(247,242,232,0), var(--cream-50))' }} />
            </div>
          </div>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>Use the banner at the bottom of this page to open the full website preview.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: 32 }}>
            <div>
              <div style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--clay-600)', fontWeight: 700, marginBottom: 14 }}>What it&rsquo;s designed to do</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {WEBSITE_BULLETS.map(function (b) {
                  return (
                    <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 11, fontSize: 14.5, color: 'var(--text-body)' }}>
                      <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--sage-100)', color: 'var(--brand-deep)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, flexShrink: 0 }}>&#10003;</span>
                      <span>{b}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--clay-600)', fontWeight: 700, marginBottom: 14 }}>Please double-check</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {WEBSITE_CHECKLIST.map(function (c) {
                  return (
                    <div key={c} style={{ display: 'flex', alignItems: 'baseline', gap: 10, fontSize: 14.5, color: 'var(--text-body)' }}>
                      <span style={{ color: 'var(--clay-500)' }}>?</span>
                      <span>{c}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Band>
    );
  }

  function LeadMagnetBand() {
    return (
      <Band bg="var(--cream-100)">
        <SectionHead part="Part 4" title="Your Lead Magnet" sub="More than a free download &mdash; it&rsquo;s what turns an anonymous visitor into someone you can actually follow up with." />
        <div style={{ maxWidth: 700, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,0.8fr) minmax(0,1.2fr)', gap: 40, alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '12px -12px -12px 12px', borderRadius: 'var(--radius-md)', background: 'rgba(0,0,0,0.16)', filter: 'blur(3px)' }} />
            <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <Photo h={300} src="farmhouse-oaks.jpg" pos="center 35%" radius="0" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(24,48,30,0.28), rgba(24,48,30,0.64))' }} />
              <div style={{ position: 'absolute', top: 18, left: 0, right: 0, textAlign: 'center', fontSize: 10, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--ochre-300)', fontWeight: 600 }}>North Florida Aimee</div>
              <div style={{ position: 'absolute', left: 20, right: 20, bottom: 18, textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 23, lineHeight: 1.05, color: 'var(--cream-50)' }}>The Rural<br/>Buyer&rsquo;s Guide</div>
            </div>
          </div>
          <div>
            <p style={{ margin: '0 0 16px', fontSize: 15.5, lineHeight: 1.75, color: 'var(--text-body)' }}>A short, genuinely useful guide to buying rural property in North Florida &mdash; wells, septic, hidden costs, the towns worth knowing. Here&rsquo;s what it&rsquo;s really doing for your business:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
              {LEAD_MAGNET_BULLETS.map(function (b) {
                return (
                  <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 11, fontSize: 14.5, color: 'var(--text-body)' }}>
                    <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--sage-100)', color: 'var(--brand-deep)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, flexShrink: 0 }}>&#10003;</span>
                    <span>{b}</span>
                  </div>
                );
              })}
            </div>
            <Button variant="accent" onClick={function () { try { localStorage.setItem('nfa_guide_unlocked', '1'); } catch (e) {} window.location.href = 'guide-spreads.html'; }}>Preview the Guide</Button>
          </div>
        </div>
      </Band>
    );
  }

  function WelcomeSeriesBand() {
    return (
      <Band>
        <SectionHead part="Part 5" title="Your Email Welcome Series" sub="The moment someone downloads your guide, these five emails go out on their own over the next 10 days." />
        <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {CORE.map(function (e) { return <MiniEmail key={e.n} e={e} />; })}
        </div>
        <div style={{ textAlign: 'center', marginTop: 34 }}>
          <Button variant="outline" href="guide-emails.html">Read the full emails, word for word &rarr;</Button>
        </div>
      </Band>
    );
  }

  function FollowUpBand() {
    return (
      <Band bg="var(--cream-100)">
        <SectionHead part="Part 6" title="Smart Follow-Up Automations" sub="A few extra emails that send themselves based on what someone does &mdash; so nobody who&rsquo;s interested ever falls through the cracks." />
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {BEHAVIORAL.map(function (e, i) { return <FullEmail key={i} e={e} />; })}
        </div>
      </Band>
    );
  }

  function ExtrasBand() {
    return (
      <Band>
        <SectionHead title="A Few Extras" sub="More subject lines and a year of newsletter ideas, ready whenever you want them." />
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4px 36px', marginBottom: 48 }}>
          {SUBJECTS.map(function (s, i) {
            return (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'baseline', padding: '11px 0', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 15, color: 'var(--clay-500)', minWidth: 22 }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--text-strong)' }}>{s}</span>
              </div>
            );
          })}
        </div>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 28 }}>
          {NEWSLETTER.map(function (cat, i) {
            return (
              <div key={i}>
                <div style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--clay-600)', fontWeight: 700, marginBottom: 12, paddingBottom: 9, borderBottom: '1px solid var(--border-strong)' }}>{cat.group}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '9px 28px' }}>
                  {cat.items.map(function (it, j) {
                    return (
                      <div key={j} style={{ display: 'flex', gap: 11, alignItems: 'baseline', fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-body)' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--sage-500)', flexShrink: 0, transform: 'translateY(-3px)' }} />
                        <span>{it}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Band>
    );
  }

  function FinalChecklistBand() {
    const [checked, setChecked] = React.useState({});
    const allDone = FINAL_CHECKLIST.every(function (c) { return checked[c]; });
    return (
      <Band bg="var(--cream-100)">
        <SectionHead part="Part 7" title="Final Review Checklist" sub="A place to check things off as you go. Nothing here is submitted anywhere &mdash; it&rsquo;s just for your own peace of mind." />
        <div style={{ maxWidth: 560, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {FINAL_CHECKLIST.map(function (c) {
            return <CheckRow key={c} label={c} checked={!!checked[c]} onToggle={function () { setChecked(function (s) { return Object.assign({}, s, { [c]: !s[c] }); }); }} />;
          })}
        </div>
        {allDone && (
          <p style={{ textAlign: 'center', marginTop: 22, fontSize: 14.5, color: 'var(--sage-600)', fontWeight: 600 }}>Everything&rsquo;s checked off &mdash; looks like you&rsquo;re ready to approve below.</p>
        )}
      </Band>
    );
  }

  function NextStepsBand() {
    return (
      <Band>
        <SectionHead part="Part 8" title="Next Steps to Launch" sub="Once everything is approved, I&rsquo;ll connect the system, test each step, and make sure visitors can move smoothly from website to guide download to email follow-up to booking." />
        <div style={{ maxWidth: 560, margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
          {NEXT_STEPS.map(function (s, i) {
            return (
              <div key={s} style={{ display: 'flex', gap: 18, alignItems: 'baseline', padding: '14px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--clay-500)', minWidth: 28 }}>{i + 1}</span>
                <span style={{ fontSize: 15.5, color: 'var(--text-strong)' }}>{s}</span>
              </div>
            );
          })}
        </div>
      </Band>
    );
  }

  /* ── PAGE ─────────────────────────────────────────────────────── */

  function Page() {
    return (
      <div style={{ background: 'var(--surface-sunken)' }}>
        <TopNav />
        <WelcomeBand />
        <BrandIdentityBand />
        <ClientAttractionBand />
        <WebsiteReviewBand />
        <LeadMagnetBand />
        <WelcomeSeriesBand />
        <FollowUpBand />
        <ExtrasBand />
        <FinalChecklistBand />
        <NextStepsBand />
        <PageToggleBar mode="review" />
      </div>
    );
  }
  window.__render(Page);
})();

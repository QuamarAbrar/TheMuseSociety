import { useState } from "react"

const A = "/assets"

const offerings = [
  {
    numeral: "I",
    image: `${A}/2b612.png`,
    label: "MEMBERSHIP SUBSCRIPTIONS",
    title: "A lasting patronage.",
    body: "Offer monthly or annual memberships. Reward your regulars with premium content, private circles and a closer look at your process.",
    example: "The Inner Circle · £8 / month",
  },
  {
    numeral: "II",
    image: `${A}/eb587.png`,
    label: "ONE-OFF SUPPORT",
    title: "A little applause.",
    body: "Let admirers support a piece, a project or simply the work itself — with a one-off contribution, whenever inspiration strikes.",
    example: "Send a studio bouquet · £5",
  },
  {
    numeral: "III",
    image: `${A}/aa809.png`,
    label: "SPECIAL EDITIONS",
    title: "Something worth opening.",
    body: "Share limited releases, digital editions and thoughtful extras. Make each offering feel considered, personal and entirely yours.",
    example: "The seasonal folio · £18",
  },
]

const clubs = [
  {
    image: `${A}/079c9.png`,
    tag: "BOTANICAL ART",
    name: "The Wildflower Room",
    host: "Clara Finch",
    copy: "Field notes, botanical sketches and a monthly invitation to look more closely.",
    price: "From £8 / month",
    members: "184 members",
  },
  {
    image: `${A}/88c27.png`,
    tag: "POETRY",
    name: "After Hours",
    host: "Amara Ellis",
    copy: "Poems, voice notes and slow Sunday salons for readers who like to linger.",
    price: "From £5 / month",
    members: "206 members",
  },
  {
    image: `${A}/85b0e.png`,
    tag: "CERAMICS",
    name: "The Curious Cabinet",
    host: "Mara Bell",
    copy: "Studio dispatches, small-batch objects and stories from the kiln.",
    price: "From £7 / month",
    members: "129 members",
  },
]

const questions = [
  [
    "Who can start a club?",
    "Anyone with a creative practice and something to share. You don’t need a large following, a finished masterpiece or a formal invitation. Start with a few people who care, and grow from there.",
  ],
  [
    "What does it cost to begin?",
    "It is free to open your doors. An 8% platform fee applies only when you earn, alongside standard payment processing.",
  ],
  [
    "Can I offer free and paid memberships?",
    "Yes. Welcome everyone into a free room, create paid circles, or combine both in a way that suits your practice.",
  ],
  [
    "Do I keep ownership of my work?",
    "Always. Your work remains yours, and you decide what to share, with whom, and for how long.",
  ],
  [
    "Can members cancel their subscription?",
    "Yes. Members can change or cancel at any time, with no awkward forms or hidden conditions.",
  ],
]

function Button({
  children,
  outline = false,
}: {
  children: React.ReactNode
  outline?: boolean
}) {
  return (
    <a className={`button ${outline ? "button--outline" : ""}`} href="#begin">
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>
}

function Seal({ pale = false }: { pale?: boolean }) {
  return (
    <img
      className="seal"
      src={`${A}/${pale ? "b8b48" : "0bbe5"}.svg`}
      alt="The Muse Society monogram"
    />
  )
}

export default function App() {
  const [openQuestion, setOpenQuestion] = useState(0)

  return (
    <main>
      <div className="announcement">
        FOR THE MAKERS, THE DREAMERS, THE BEAUTIFULLY CURIOUS. ✦ YOUR PEOPLE
        AWAIT.
      </div>

      <nav className="nav">
        <a className="brand" href="#">
          <Seal />
          <span>
            <strong>The Muse Society</strong>
            <small>A HOME FOR CREATIVE COMPANY</small>
          </span>
        </a>
        <div className="nav__links">
          <a href="#discover">Discover clubs</a>
          <a href="#creators">For creators</a>
          <a href="#story">Our story</a>
        </div>
        <div className="nav__actions">
          <a href="#footer">Sign in</a>
          <Button>Start your club</Button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero__copy">
          <Eyebrow>Independent minds. Extraordinary company.</Eyebrow>
          <h1 className="hero__title">
            <span>Great work.</span>
            <span>Good company.</span>
          </h1>
          <img className="ornament" src={`${A}/93e7b.svg`} alt="" />
          <p className="hero__lede">
            A club of your own. A living from what you love. Bring your art,
            ideas and people together in a place that feels like you.
          </p>
          <div className="button-row">
            <Button>Create your club</Button>
            <Button outline>Find your people</Button>
          </div>
          <p className="fineprint">
            Free to begin. Yours to make. No invitation required.
          </p>
          <div className="hero__note reveal">
            <img src={`${A}/5059e.png`} alt="A creator at work" />
            <p>
              <span>
                “A corner of the internet that finally feels like mine.”
              </span>
              <small>CLARA FINCH · BOTANICAL ARTIST</small>
            </p>
          </div>
        </div>

        <div className="hero__portrait reveal">
          <div className="portrait-frame image-reveal">
            <img
              className="portrait-image parallax-image"
              src={`${A}/7b0fb.png`}
              alt="Amara Ellis"
            />
            <img className="corner corner--tl" src={`${A}/11376.svg`} alt="" />
            <img className="corner corner--br" src={`${A}/b8eb3.svg`} alt="" />
            <div className="plaque">
              <strong>Amara Ellis</strong>
              <small>POET · HOST OF THE INK ROOM</small>
            </div>
          </div>
          <div className="portrait-caption">
            <span>PORTRAIT OF AN INDEPENDENT SPIRIT</span>
            <span>VOL. I / 2026</span>
          </div>
          <blockquote>“Make room for your kind of magic.”</blockquote>
        </div>
      </section>

      <div className="disciplines" aria-label="Creative disciplines">
        <div className="disciplines__track">
          <span>MANY PURSUITS. ONE SOCIETY.</span>
          {["Writers", "Visual artists", "Makers", "Curious minds"].map(
            (item) => (
              <strong key={item}>
                ✦ <em>{item}</em>
              </strong>
            ),
          )}
          <span aria-hidden="true">MANY PURSUITS. ONE SOCIETY.</span>
          {["Writers", "Visual artists", "Makers", "Curious minds"].map(
            (item) => (
              <strong aria-hidden="true" key={`repeat-${item}`}>
                ✦ <em>{item}</em>
              </strong>
            ),
          )}
        </div>
      </div>

      <section className="manifesto dark" id="story">
        <div className="manifesto__intro sticky">
          <Eyebrow>01 / A more human internet</Eyebrow>
          <Seal pale />
        </div>
        <div className="manifesto__body">
          <h2 className="display reveal">
            The world needs your work.
            <br />
            Not another algorithm.
          </h2>
          <p className="lede reveal">
            We believe a creative life is better in good company. The Muse
            Society gives independent creators a home beyond the endless feed —
            where genuine connection becomes lasting support, and your next
            chapter is yours to write.
          </p>
          <div className="principles">
            {[
              [
                "A room of your own",
                "Your voice, your aesthetic, your rules. Build a club with character, not another profile in a crowd.",
              ],
              [
                "Patrons, not passers-by",
                "Invite people into the process. Turn fleeting attention into conversations, rituals and belonging.",
              ],
              [
                "A livelihood, not a like",
                "Let the people who value your work help sustain it. Earn on your terms, at your own pace.",
              ],
            ].map(([title, body], index) => (
              <article
                className="principle reveal"
                style={{ "--delay": `${index * 90}ms` } as React.CSSProperties}
                key={title}
              >
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="club-section split" id="creators">
        <div className="section-copy">
          <Eyebrow>02 / Your world, your way</Eyebrow>
          <h2 className="display reveal">Your world, with a welcome mat.</h2>
          <p className="lede reveal">
            More than a page. More personal than a platform. Shape a home for
            your work and invite your people inside.
          </p>
          <ul className="benefits">
            <li>
              <span>01</span>
              <strong>Make it unmistakably yours.</strong>
            </li>
            <li>
              <span>02</span>
              <strong>Gather your people close.</strong>
            </li>
            <li>
              <span>03</span>
              <strong>Grow something that lasts.</strong>
            </li>
          </ul>
          <Button outline>See what you can create</Button>
        </div>
        <div className="club-browser reveal">
          <div className="browser-bar">
            <span>thewildflowerroom.com</span>
            <i>•••</i>
          </div>
          <img
            className="club-cover parallax-image"
            src={`${A}/15da5.png`}
            alt="A wildflower artist's studio"
          />
          <div className="club-id">
            <span className="club-monogram">W</span>
            <span>
              <strong>The Wildflower Room</strong>
              <small>WITH CLARA FINCH</small>
            </span>
            <button>Join the club</button>
          </div>
          <div className="club-tabs">
            Journal &nbsp;&nbsp; The drawing room &nbsp;&nbsp; About Clara
          </div>
          <div className="club-content">
            <div>
              <Eyebrow>Latest from the journal · members only</Eyebrow>
              <h3>A field guide to noticing</h3>
              <p>
                This month, we slow down. Come sketch the small, untamed things
                growing just beyond your doorstep.
              </p>
              <a href="#begin">Pull up a chair →</a>
            </div>
            <aside>
              <Eyebrow>The inner circle</Eyebrow>
              <strong>
                £8 <small>/ month</small>
              </strong>
              <p>
                ✦ The full journal archive
                <br />✦ Monthly live sketch salon
                <br />✦ Private community access
              </p>
              <a href="#begin">Become a member ↗</a>
            </aside>
          </div>
        </div>
      </section>

      <section className="offerings">
        <Eyebrow>03 / Make a living, beautifully</Eyebrow>
        <div className="section-heading">
          <h2 className="display reveal">Your craft. Your terms.</h2>
          <p className="lede">
            One club, many ways to be supported. Choose what feels right for
            your work — and the people who love it.
          </p>
        </div>
        <div className="offering-grid">
          {offerings.map((item, index) => (
            <article
              className="offering reveal"
              style={{ "--delay": `${index * 100}ms` } as React.CSSProperties}
              key={item.title}
            >
              <div className="offering__image image-reveal">
                <img className="parallax-image" src={item.image} alt="" />
                <span>{item.numeral}</span>
              </div>
              <Eyebrow>{item.label}</Eyebrow>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <a href="#begin">
                {item.example}
                <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="steps">
        <div>
          <Eyebrow>04 / Begin at the beginning</Eyebrow>
          <h2 className="display reveal">From a spark to a society.</h2>
        </div>
        <Button>Start your club</Button>
        <div className="step-grid">
          {[
            [
              "01",
              "Make it yours.",
              "Choose a name, set the tone and create a home that feels entirely like you.",
            ],
            [
              "02",
              "Set the invitation.",
              "Decide what to share, how often, and whether your rooms are free or paid.",
            ],
            [
              "03",
              "Gather your people.",
              "Open the doors, send the first invitation and let good company do the rest.",
            ],
          ].map(([num, title, body]) => (
            <article className="reveal" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="discover" id="discover">
        <div className="section-heading">
          <div>
            <Eyebrow>05 / Rooms worth entering</Eyebrow>
            <h2 className="display reveal">Find your kind of remarkable.</h2>
          </div>
          <Button outline>Explore all clubs</Button>
        </div>
        <div className="filters">
          <span>All clubs</span>
          <span>Writing</span>
          <span>Art</span>
          <span>Craft</span>
          <span>Food</span>
          <span>More +</span>
        </div>
        <div className="club-grid">
          {clubs.map((club, index) => (
            <article
              className="club-card reveal"
              style={{ "--delay": `${index * 100}ms` } as React.CSSProperties}
              key={club.name}
            >
              <div className="club-card__image image-reveal">
                <img
                  className="parallax-image"
                  src={club.image}
                  alt={`${club.host}, founder of ${club.name}`}
                />
                <span>{club.tag}</span>
              </div>
              <h3>{club.name}</h3>
              <small>WITH {club.host.toUpperCase()}</small>
              <p>{club.copy}</p>
              <div>
                <span>
                  {club.price}
                  <small>{club.members}</small>
                </span>
                <a href="#begin">Visit club ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="story">
        <figure className="reveal">
          <div>
            <img
              className="parallax-image"
              src={`${A}/055eb.png`}
              alt="A group of creators gathered together"
            />
          </div>
          <figcaption>GOOD WORK BEGINS IN GOOD COMPANY.</figcaption>
        </figure>
        <div>
          <Eyebrow>06 / A note from the drawing room</Eyebrow>
          <blockquote className="display reveal">
            “I used to send my poems into the void. Now I share them with people
            who pull up a chair, read slowly and stay.”
          </blockquote>
          <p>
            <strong>Amara Ellis</strong>
            <small>Poet &amp; founder of The Ink Room</small>
          </p>
          <img className="ornament" src={`${A}/a3a46.svg`} alt="" />
        </div>
      </section>

      <section className="faq">
        <div className="faq__intro">
          <Eyebrow>07 / A few particulars</Eyebrow>
          <h2 className="display reveal">Curiosity is always welcome.</h2>
          <p className="lede">
            A few things you might be wondering before you open the doors.
          </p>
          <a href="#footer">Visit the help desk ↗</a>
        </div>
        <div className="faq__list">
          {questions.map(([question, answer], index) => {
            const isOpen = openQuestion === index
            return (
              <div
                className={`faq-item ${isOpen ? "is-open" : ""}`}
                key={question}
              >
                <button
                  onClick={() => setOpenQuestion(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{question}</span>
                  <span>{isOpen ? "−" : "+"}</span>
                </button>
                <div className="faq-answer">
                  <p>{answer}</p>
                </div>
              </div>
            )
          })}
          <p className="fineprint">
            Free to open. An 8% platform fee applies when you earn, plus payment
            processing. No monthly platform charge.
          </p>
        </div>
      </section>

      <section className="final-cta" id="begin">
        <div className="final-cta__inner reveal">
          <Eyebrow>THE DOOR IS OPEN</Eyebrow>
          <h2 className="display">Your next chapter has company.</h2>
          <p>
            Bring your work. Invite your people. Make something that feels like
            home.
          </p>
          <div className="button-row">
            <Button>Create your club</Button>
            <Button outline>Discover creators</Button>
          </div>
          <img src={`${A}/de3b1.svg`} alt="" />
        </div>
      </section>

      <footer id="footer">
        <div className="footer-grid">
          <div className="footer-signature">
            <Seal pale />
            <p>
              For the makers.
              <br />
              For the quietly daring.
              <br />
              In very good company.
            </p>
          </div>
          <div>
            <Eyebrow>THE SOCIETY</Eyebrow>
            <a href="#story">Our story</a>
            <a href="#discover">Discover clubs</a>
            <a href="#footer">Journal</a>
            <a href="#footer">Community guidelines</a>
          </div>
          <div>
            <Eyebrow>FOR CREATORS</Eyebrow>
            <a href="#begin">Start a club</a>
            <a href="#creators">Memberships &amp; earnings</a>
            <a href="#footer">Creator handbook</a>
            <a href="#footer">Help desk</a>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <Eyebrow>LETTERS FROM THE SOCIETY</Eyebrow>
            <p>
              New voices, curious finds and a little inspiration. Delivered
              occasionally, read slowly.
            </p>
            <label>
              <span className="sr-only">Your email address</span>
              <input type="email" placeholder="Your email address" />
              <button>Join ↗</button>
            </label>
            <small>Only good company in your inbox. Unsubscribe anytime.</small>
          </form>
        </div>
        <div className="footer-wordmark">The Muse Society</div>
        <div className="colophon">
          <span>© 2026 The Muse Society. Made for independent spirits.</span>
          <strong>ART IS BETTER IN COMPANY.</strong>
          <span>Privacy &nbsp; Terms &nbsp; Instagram ↗</span>
        </div>
      </footer>
    </main>
  )
}

const features = [
  {
    number: '01',
    title: 'Monochrome confidence',
    text: 'Black, white, and disciplined contrast should lead the brand. It should feel premium, calm, and sharp.',
  },
  {
    number: '02',
    title: 'Logo-led identity',
    text: 'The YB heart mark is strong enough to carry caps, hoodies, tees, packaging, and the homepage itself.',
  },
  {
    number: '03',
    title: 'Less talk, more presence',
    text: 'The strongest version of YB says less, shows more, and lets product, shape, and symbol do the heavy lifting.',
  },
];

const editorialNotes = [
  'Manchester / UK',
  'Premium streetwear',
  'Monochrome direction',
  'Logo-first identity',
];

const products = [
  {
    title: 'Caps',
    text: 'Clean black base, embroidered white mark, minimal extras. Let the logo do the work.',
  },
  {
    title: 'Heavyweight hoodies',
    text: 'Premium blanks, stronger fit, restrained front branding, and thoughtful use of the round seal.',
  },
  {
    title: 'Essential tees',
    text: 'Monochrome core pieces with an instantly recognisable front mark and subtle back detail.',
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="container navInner">
          <div className="brand">
            <div className="brandMark">YB</div>
            <span>YB Company</span>
          </div>
          <div className="navLinks">
            <a href="#identity">Identity</a>
            <a href="#ethos">Ethos</a>
            <a href="#product">Product</a>
            <a href="#connect">Connect</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="heroBackdrop" aria-hidden="true">
          <div className="orb orbOne" />
          <div className="orb orbTwo" />
          <div className="gridGlow" />
        </div>
        <div className="container heroMetaRow">
          <div className="metaLine" />
          <div className="metaItems">
            {editorialNotes.map((note) => (
              <span key={note}>{note}</span>
            ))}
          </div>
        </div>
        <div className="container heroGrid">
          <section className="panel heroPanel">
            <span className="eyebrow">Premium streetwear. Positive identity.</span>
            <div className="headlineBlock">
              <p className="kicker">YB / Editorial direction / Issue 01</p>
              <h1>
                Anything <em>else.</em>
              </h1>
            </div>
            <p className="lead">
              YB Company is a monochrome, logo-led streetwear brand built around identity,
              confidence, and clean design. Strong product, sharp symbolism, and a point of view
              that feels premium without trying too hard.
            </p>
            <div className="heroFootnote">
              <span>Built around the mark.</span>
              <span>Made to feel worn-in, sharp, and recognisable.</span>
            </div>
            <div className="actions">
              <a className="button buttonPrimary" href="https://www.instagram.com/theybcompany?igsh=MThtN2FtMm01NjBldg==" target="_blank" rel="noreferrer">
                View Instagram
              </a>
              <a className="button buttonSecondary" href="#product">Explore direction</a>
            </div>
          </section>

          <aside className="panel logoStage" id="identity">
            <div className="sealWrap">
              <div className="sealPulse" />
              <div className="seal">
                <div className="sealRing">The Y.B. Company</div>
                <div className="sealCenter">
                  <div className="sealMark">YB</div>
                </div>
              </div>
            </div>
            <div className="logoCaptionRow">
              <span>Brand mark</span>
              <span>Monochrome / logo-led / premium</span>
            </div>
            <p className="logoCopy">
              The YB mark is the brand. Clean, recognisable, and strong enough to lead across caps,
              hoodies, tees, packaging, and the homepage without overcomplicating the identity.
            </p>
          </aside>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <h2>Built around the mark.</h2>
              <p>A stronger YB site should feel editorial, product-led, premium, and logo-first.</p>
            </div>
          </div>
          <div className="storyGrid">
            <div className="card">
              <h3>Brand position</h3>
              <p>
                YB should sit closer to premium streetwear editorial than soft lifestyle branding.
                Black and white, sharp silhouettes, stronger hierarchy, and less explanation. The
                logo already carries enough energy.
              </p>
            </div>
            <div className="card quoteCard">
              <p className="quote">The product should feel sharp first. The story should feel editorial.</p>
              <p>That is the right balance for YB.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="ethos">
        <div className="container">
          <div className="sectionHead">
            <div>
              <h2>The ethos</h2>
              <p>Clear identity. Strong product. Minimal noise.</p>
            </div>
          </div>
          <div className="featureGrid">
            {features.map((feature) => (
              <article className="feature" key={feature.title}>
                <div className="featureNumber">{feature.number}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="product">
        <div className="container">
          <div className="sectionHead">
            <div>
              <h2>Product direction</h2>
              <p>Start with the categories that best carry the mark.</p>
            </div>
          </div>
          <div className="productGrid">
            {products.map((product) => (
              <article className="card" key={product.title}>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
              </article>
            ))}
          </div>

          <div className="cta" id="connect">
            <div>
              <h3>Ready for the full build?</h3>
              <p>
                Next step is turning this into a proper ecommerce homepage with logo assets,
                product imagery, collection sections, and a stronger luxury streetwear layout.
              </p>
            </div>
            <a className="button buttonPrimary" href="https://www.instagram.com/theybcompany?igsh=MThtN2FtMm01NjBldg==" target="_blank" rel="noreferrer">
              Follow YB
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerGrid">
          <div>
            <div className="brand footerBrand">
              <div className="brandMark">YB</div>
              <span>YB Company</span>
            </div>
            <p>Premium streetwear built around identity, clarity, and the mark.</p>
          </div>
          <div className="footerLinks">
            <a href="#identity">Identity</a>
            <a href="#ethos">Ethos</a>
            <a href="#product">Product</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

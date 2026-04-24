import {
  ArrowUpRight,
  Brush,
  Layers3,
  Mail,
  PackageCheck,
  Palette,
  Sparkles,
} from 'lucide-react'
import './App.css'

type Project = {
  title: string
  category: string
  year: string
  image: string
  palette: string[]
  description: string
}

const projects: Project[] = [
  {
    title: 'Mori Atelier',
    category: 'Fragrance packaging system',
    year: '2026',
    image: '/projects/mori-atelier.svg',
    palette: ['#111111', '#faf9f7', '#84e7a5'],
    description:
      'A sculptural bottle sleeve and rigid box system for a forest-inspired scent house.',
  },
  {
    title: 'Fable Tea',
    category: 'Retail tea tins and refills',
    year: '2025',
    image: '/projects/fable-tea.svg',
    palette: ['#02492a', '#fbbd41', '#fc7981'],
    description:
      'Color-coded tea families with refill pouches designed for shelf clarity and gifting.',
  },
  {
    title: 'Orbit Skin',
    category: 'Cosmetics launch kit',
    year: '2025',
    image: '/projects/orbit-skin.svg',
    palette: ['#43089f', '#3bd3fd', '#ffffff'],
    description:
      'A lightweight skincare line with lunar naming, tactile labels, and clean batch hierarchy.',
  },
]

const services = [
  {
    icon: PackageCheck,
    title: 'Packaging systems',
    text: 'Boxes, sleeves, labels, pouches, dielines, and launch-ready SKU families.',
  },
  {
    icon: Palette,
    title: 'Brand materiality',
    text: 'Color, typography, finishes, and production notes that survive the printer.',
  },
  {
    icon: Layers3,
    title: 'Retail storytelling',
    text: 'Shelf rhythm, unboxing gestures, and campaign assets built around the object.',
  },
]

function App() {
  return (
    <main>
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Go to top">
          <span>LY</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#studio">Studio</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-action" href="mailto:hello@liuying.design">
          <Mail size={16} />
          <span>Start a brief</span>
        </a>
      </nav>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Brand packaging portfolio</p>
          <h1>Packaging that feels quiet, collectible, and ready for the shelf.</h1>
          <p className="hero-lede">
            I design tactile brand systems for beauty, food, fragrance, and lifestyle
            launches, balancing Apple-like clarity with Clay-like warmth and craft.
          </p>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button button-dark" href="#work">
              View work
              <ArrowUpRight size={17} />
            </a>
            <a className="button button-light" href="#studio">
              Process
              <Brush size={17} />
            </a>
          </div>
        </div>

        <div className="hero-stage" aria-label="Featured packaging mockups">
          <div className="pack pack-a">
            <span>mori</span>
            <small>No. 04 Cedar Mist</small>
          </div>
          <div className="pack pack-b">
            <span>fable</span>
            <small>jasmine tea</small>
          </div>
          <div className="pack pack-c">
            <span>orbit</span>
            <small>daily veil</small>
          </div>
          <div className="stage-note">
            <Sparkles size={16} />
            <span>12 launches shipped across 38 SKUs</span>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Selected capabilities">
        <span>Dielines</span>
        <span>Foil studies</span>
        <span>Retail systems</span>
        <span>Launch kits</span>
        <span>Print production</span>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Material-first case studies.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={`${project.title} packaging mockup`} />
              <div className="project-body">
                <div>
                  <p className="project-meta">
                    {project.category} · {project.year}
                  </p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="swatches" aria-label={`${project.title} palette`}>
                  {project.palette.map((color) => (
                    <span key={color} style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-section" id="studio">
        <div className="studio-panel">
          <p className="eyebrow">Studio method</p>
          <h2>Sharp enough for production, soft enough to be held.</h2>
          <p>
            Every project starts with the object: how it sits in hand, how it appears
            in a cart, how the label survives light, touch, shipping, and repeat purchase.
          </p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <Icon size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Available for Q2 launches</p>
          <h2>Bring a product, a timeline, or just a messy shelf problem.</h2>
        </div>
        <a className="button button-dark contact-button" href="mailto:hello@liuying.design">
          hello@liuying.design
          <ArrowUpRight size={18} />
        </a>
      </section>
    </main>
  )
}

export default App

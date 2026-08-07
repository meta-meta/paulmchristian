import type { ReactNode } from "react";

const featuredProjects = [
  {
    title: "Human Powered Virtual Airship",
    id: "embodied-control",
    year: "2022",
    type: "1:1 VR installation",
    summary:
      "A stationary recumbent bike transformed into a full-body VR airship controller for REM5's ESC 3.0.",
    details:
      "Participants pedaled through a 3D scan of the booth, rose through a collapsed roof into a mountain river world, and steered two virtual propellers with a custom physical control inspired by real human-powered airships.",
    tech: [
      "Unity",
      "Meta Quest",
      "Pi Zero W",
      "Max/MSP",
      "IR rotary encoder",
      "Ultrasonic sensing",
      "3D printing",
      "IK avatars",
    ],
    links: [
      ["Watch documentation", "https://www.youtube.com/watch?v=KXP6xTIVffA&t=7223s"],
      ["REM5 ESC 3.0", "https://youtu.be/gBjCMWLGOWI?si=Dk-wUlWE880AIz2k"],
    ],
    embed: "https://www.youtube.com/embed/KXP6xTIVffA?start=7223",
    accent: "air",
  },
  {
    title: "Musicality VR",
    id: "playable-sound",
    year: "2020-present",
    type: "Mixed reality music platform",
    summary:
      "A sandbox for learning, performing, and exploring alternative instrument layouts and microtonal tuning systems.",
    details:
      "The platform turns abstract musical objects into playful, spatial instruments: Tonneggs for additive synthesis, rhythm wheels synced to a DAW, and a continuous virtual theremin with formant control.",
    tech: [
      "Unity",
      "REAPER",
      "Meta Quest",
      "FAUST",
      "Max/MSP",
      "OSC",
      "Ambisonics",
      "Microtonality",
    ],
    links: [["Visit project", "https://musicality.computer/vr"]],
    embed: "https://www.youtube.com/embed/ssTXCL8vB5Q?start=468",
    accent: "sound",
  },
  {
    title: "Theremin",
    year: "2025-present",
    type: "Standalone Meta Quest app",
    summary:
      "A mixed reality theremin with a linear pitch field, visible note positions, and ghost-hand performance cloning.",
    details:
      "The app preserves the expressive body feel of a real theremin while using mixed reality to make pitch geography visible and multipart performance more approachable.",
    tech: ["Meta Quest", "Mixed reality", "Spatial UI", "Performance looping", "XR instrument design"],
    links: [["Meta Quest store", "https://www.meta.com/experiences/theremin/29752287957695971/"]],
    embed: "https://www.youtube.com/embed/8BfJQr9aNt0",
    accent: "light",
  },
];

const projects = [
  {
    title: "Mandelbrot Muse",
    year: "Web sound toy",
    summary:
      "A fractal explorer that maps Mandelbrot escape-time values to harmonic overtones and sequences them with a Hilbert curve.",
    tech: ["Web audio", "WebMIDI", "Additive synthesis", "Fractals", "Hilbert curves"],
    links: [["Open toy", "https://meta-meta.github.io/aframe-musicality/mandelbrot"]],
    thumbnail: "/mandelbrot-muse.png",
    thumbnailAlt: "Mandelbrot Muse fractal audio interface with colorful pixel bands and circular synth controls",
  },
  {
    title: "Sound Reactive Projections for Xibaba",
    id: "live-worlds",
    year: "Live visuals",
    summary:
      "A rear-projection tarp installation where audience silhouettes merged with sound-reactive visuals across a sidewalk.",
    tech: ["Projection", "Interactive visuals", "Live performance"],
    links: [["Watch video", "https://youtu.be/5gVvaTY_X2E?si=rqtD1hzaUffCVy0T"]],
    thumbnail: "/xibaba-projections.png",
    thumbnailAlt: "Audience silhouettes moving in front of blue sound-reactive Xibaba projections",
  },
  {
    title: "Mike Olson Six Projects Release Show",
    year: "Live visuals",
    summary:
      "A multi-projector Processing environment mapped to analog synthesis, using a virtual camera rig across perpendicular projectors.",
    tech: ["Processing", "Max/MSP", "MIDI mapping", "SpaceNavigator", "Projection design"],
    links: [
      ["Project page", "https://www.mikeolsonmusic.com/six-projects"],
      ["Watch video", "https://www.youtube.com/watch?v=CIiGwP1KylI"],
    ],
    thumbnail: "/mike-olson-six-projects.png",
    thumbnailAlt: "Mike Olson performance setup with large green and orange projection mapped visuals",
  },
  {
    title: "Homebrew Data Glove",
    year: "2014",
    summary:
      "A Razer Hydra-based VR glove with 6DOF tracking, homemade bend sensors, vibrotactile motors, and custom object interaction software.",
    tech: ["Arduino", "Processing", "Oculus Rift DK1", "Haptics", "Bend sensors"],
    links: [["Watch demo", "https://youtu.be/-b9UNLNkYFY?si=eI8d_EZx6vAqUvPo"]],
    thumbnail: "/homebrew-data-glove.png",
    thumbnailAlt: "VR data glove prototype beside monitors showing a virtual hand interaction demo and code",
  },
  {
    title: "Digital Dalang Virtual Light / Shadow Puppets",
    year: "2018",
    summary:
      "Hand-tracked virtual shadow puppets and VFX Graph visuals used as a luminous backlight for Wayang Kulit at Burning Man.",
    tech: ["Unity", "Leap Motion", "VFX Graph", "Hand tracking", "Installation"],
    links: [
      ["Facebook clip", "https://www.facebook.com/share/v/1HDpn9KHUf/"],
      ["Facebook clip", "https://www.facebook.com/share/v/1PraSv1aqR/"],
      [
        "Photo",
        "https://photos.google.com/share/AF1QipOwAUf3r7G_Fdn9NAGs-8XG87pO6_ZboY8dqEW3jonuguKxFEVHkZrq9Pa9V4ZECA/photo/AF1QipMT10PGjYScwdaBKT_LneYvk9TtP1DEm8wTb6ic?key=WWZETmdZMnA1YjNmUjA0YlYyX2wyUVR5UUxCYjJ3",
      ],
      ["Photo album", "https://photos.app.goo.gl/XTKkxqmy9YfWi3kD8"],
    ],
    thumbnail: "/digital-dalang.png",
    thumbnailAlt: "Digital Dalang virtual shadow puppets projected on an ornate Wayang Kulit screen at night",
  },
  {
    title: "Raya and the Last Dragon Crystal Shards",
    year: "2019",
    summary:
      "Magic smoke and crystal shards floated around and followed the puppeteer's hand for a Wayang Kulit shadow puppet version of Disney's Raya and the Last Dragon Little Golden Book. When the puppeteer made a fist, the shards magnetically reassembled and released a burst of magic energy.",
    tech: ["Unity", "Leap Motion", "Hand tracking", "VFX Graph", "Performance systems"],
    links: [],
  },
];

const capabilities = [
  "XR prototyping from concept to embodied install",
  "Sensor, controller, and input-device invention",
  "Spatial audio, synthesis, and instrument design",
  "Realtime visual systems for stages and installations",
  "Playful interfaces for learning complex technical ideas",
];

function LinkPill({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="link-pill" href={href} target="_blank" rel="noreferrer">
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function GitHubIcon() {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.82 1.31 3.51 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.22.69.82.57A12 12 0 0 0 12 .5Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05a3.75 3.75 0 0 1 3.37-1.85c3.61 0 4.27 2.38 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.53V8.98H7.1v11.47ZM22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z"
      />
    </svg>
  );
}

function VideoFrame({ src, title }: { src: string; title: string }) {
  if (!src) {
    return (
      <div className="media-placeholder" aria-label={`${title} visual placeholder`}>
        <div className="pulse-rings" />
        <p>Spatial instrument / installation documentation</p>
      </div>
    );
  }

  return (
    <iframe
      title={`${title} video`}
      src={src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow hero-name">Paul M. Christian</p>
          <h1>Creative technologist working in embodied XR and musical interfaces.</h1>
          <p className="lede">
            A body of work spanning VR installations, mixed reality instruments, homemade controllers,
            hand-tracked puppetry, and live sound-reactive projection systems.
          </p>
          <div className="hero-actions" aria-label="Portfolio navigation">
            <a href="https://github.com/meta-meta" target="_blank" rel="noreferrer">
              <GitHubIcon />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/paul-christian-20114090/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a href="#featured">Featured work</a>
            <a href="#systems">Systems practice</a>
            <a href="#index">Project index</a>
          </div>
        </div>
        <div className="hero-identity">
          <figure className="portrait">
            <img
              src="/paul-christian.png"
              alt="Paul M. Christian inside a mirrored light installation"
            />
          </figure>
          <div className="hero-panel" aria-label="Portfolio focus areas">
            <a href="#embodied-control">
              <span>01</span>
              <strong>Embodied control</strong>
              <p>Bike rigs, custom sensors, data gloves, haptics, and hand tracking.</p>
            </a>
            <a href="#playable-sound">
              <span>02</span>
              <strong>Playable sound</strong>
              <p>XR instruments, additive synthesis, theremin interfaces, and xenharmonic systems.</p>
            </a>
            <a href="#live-worlds">
              <span>03</span>
              <strong>Live worlds</strong>
              <p>Realtime VFX, projection, virtual puppetry, and performance environments.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="section-intro" id="featured">
        <p className="eyebrow">Selected projects</p>
        <h2>Prototype as instrument, installation, and performance.</h2>
      </section>

      <section className="featured-grid" aria-label="Featured portfolio projects">
        {featuredProjects.map((project) => (
          <article className={`feature-card ${project.accent}`} id={project.id} key={project.title}>
            <div className="project-media">
              <VideoFrame src={project.embed} title={project.title} />
            </div>
            <div className="project-copy">
              <div className="project-meta">
                <span>{project.year}</span>
                <span>{project.type}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="summary">{project.summary}</p>
              <p>{project.details}</p>
              <div className="tag-list" aria-label={`${project.title} technologies`}>
                {project.tech.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="links">
                {project.links.map(([label, href]) => (
                  <LinkPill href={href} key={href}>
                    {label}
                  </LinkPill>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="musicality-site" aria-label="Musicality.computer overview">
        <div className="project-media image-media">
          <img
            src="/musicality-computer.png"
            alt="Musicality.computer Lumatone chords alternate notation experiment"
          />
        </div>
        <div className="project-copy">
          <div className="project-meta">
            <span>Research hub</span>
          </div>
          <h3>Musicality.computer</h3>
          <p className="summary">A place for refactoring music.</p>
          <p>
            Musicality.computer is the home for my experiments with exotic approaches to
            working with music theory, alternate notation systems, instrument design, and
            embodied ways of thinking through sound.
          </p>
          <p>
            It acts as a host for prototypes, sketches, and playable research: tools that
            treat theory as something you can touch, move through, retune, and reorganize.
          </p>
          <div className="links">
            <LinkPill href="https://musicality.computer">Visit Musicality.computer</LinkPill>
          </div>
        </div>
      </section>

      <section className="systems" id="systems">
        <div>
          <p className="eyebrow">Systems practice</p>
          <h2>Comfortable at the weird boundary between body, code, and room.</h2>
        </div>
        <div className="capability-list">
          {capabilities.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="section-intro compact" id="index">
        <p className="eyebrow">Project index</p>
        <h2>Additional work</h2>
      </section>

      <section className="project-list">
        {projects.map((project) => (
          <article className="project-row" id={project.id} key={project.title}>
            <div>
              {project.thumbnail && (
                <img
                  className="project-thumbnail"
                  src={project.thumbnail}
                  alt={project.thumbnailAlt}
                />
              )}
              <p className="project-year">{project.year}</p>
              <h3>{project.title}</h3>
            </div>
            <div>
              <p>{project.summary}</p>
              <div className="tag-list small">
                {project.tech.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              {project.links.length > 0 && (
                <div className="links">
                  {project.links.map(([label, href]) => (
                    <LinkPill href={href} key={href}>
                      {label}
                    </LinkPill>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      <footer>
        <a href="#top">Back to top</a>
        <p>Creative technologist portfolio focused on XR, sound, sensing, and realtime performance.</p>
      </footer>
    </main>
  );
}

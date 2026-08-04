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
    embed: "",
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
  },
  {
    title: "Sound Reactive Projections for Xibaba",
    id: "live-worlds",
    year: "Live visuals",
    summary:
      "A rear-projection tarp installation where audience silhouettes merged with sound-reactive visuals across a sidewalk.",
    tech: ["Projection", "Interactive visuals", "Live performance"],
    links: [["Watch video", "https://youtu.be/5gVvaTY_X2E?si=rqtD1hzaUffCVy0T"]],
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
  },
  {
    title: "Homebrew Data Glove",
    year: "2014",
    summary:
      "A Razer Hydra-based VR glove with 6DOF tracking, homemade bend sensors, vibrotactile motors, and custom object interaction software.",
    tech: ["Arduino", "Processing", "Oculus Rift DK1", "Haptics", "Bend sensors"],
    links: [["Watch demo", "https://youtu.be/-b9UNLNkYFY?si=eI8d_EZx6vAqUvPo"]],
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
    ],
  },
  {
    title: "Raya and the Last Dragon Crystal Shards",
    year: "2019",
    summary:
      "Hand-controlled smoke, magnetic crystal shards, and dragon magic effects for a digital Wayang Kulit production.",
    tech: ["Unity", "Hand tracking", "Realtime VFX", "Performance systems"],
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
          <p className="eyebrow">Paul M. Christian</p>
          <h1>Creative technologist for embodied XR and musical interfaces.</h1>
          <p className="lede">
            A body of work spanning VR installations, mixed reality instruments, homemade controllers,
            hand-tracked puppetry, and live sound-reactive projection systems.
          </p>
          <div className="hero-actions" aria-label="Portfolio navigation">
            <a href="https://www.linkedin.com/in/paul-christian-20114090" target="_blank" rel="noreferrer">
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

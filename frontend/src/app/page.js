import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home-page">

      {/* NAVBAR */}
      <nav className="navbar">

        <Link href="/" className="logo">
          <span>&lt;/&gt;</span> CodeConvert
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <a href="#features">Features</a>
          <a href="#about">About</a>

          <Link href="/login" className="login-btn">
            Login
          </Link>

          <Link href="/signup" className="signup-btn">
            Get Started
          </Link>
        </div>

      </nav>


      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-content">

          <div className="badge">
            ⚡ Smart React Code Conversion
          </div>

          <h1>
            Convert Your React Code
            <span> Smarter & Faster.</span>
          </h1>

          <p>
            Transform your React code between different formats,
            technologies and coding styles with a simple and
            developer-friendly platform.
          </p>

          <div className="hero-buttons">

            <Link href="/signup" className="primary-btn">
              Start Converting →
            </Link>

            <a href="#features" className="secondary-btn">
              Explore Features
            </a>

          </div>

          <div className="stats">

            <div>
              <h3>10+</h3>
              <p>Conversion Types</p>
            </div>

            <div>
              <h3>Fast</h3>
              <p>Code Processing</p>
            </div>

            <div>
              <h3>100%</h3>
              <p>Developer Focused</p>
            </div>

          </div>

        </div>


        {/* CODE PREVIEW */}
        <div className="code-card">

          <div className="window-top">

            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>converter.jsx</p>

          </div>

          <div className="code-area">

            <div>
              <span className="purple">const</span>{" "}
              <span className="blue">Button</span> = () =&gt; {"{"}
            </div>

            <div className="indent">
              <span className="purple">return</span> (
            </div>

            <div className="indent2">
              <span className="green">&lt;button</span>{" "}
              className=<span className="orange">"btn"</span>
              <span className="green">&gt;</span>
            </div>

            <div className="indent3">
              Convert Code
            </div>

            <div className="indent2">
              <span className="green">&lt;/button&gt;</span>
            </div>

            <div className="indent">
              )
            </div>

            <div>{"}"}</div>

            <div className="convert-arrow">
              ↓ CONVERT
            </div>

            <div className="converted">
              <span className="green">&lt;Button /&gt;</span>
            </div>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="features" id="features">

        <div className="section-heading">

          <p>FEATURES</p>

          <h2>
            Everything You Need
            <span> To Convert Code</span>
          </h2>

          <div className="heading-line"></div>

        </div>


        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Conversion</h3>
            <p>
              Convert your React code quickly without manually
              rewriting every component.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Multiple Formats</h3>
            <p>
              Convert code between different React development
              formats and technologies.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Developer Friendly</h3>
            <p>
              A clean and simple workspace designed specifically
              for developers.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📋</div>
            <h3>Copy & Download</h3>
            <p>
              Easily copy your converted code or download it
              for your project.
            </p>
          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section className="about" id="about">

        <div>

          <p className="small-title">
            ABOUT PLATFORM
          </p>

          <h2>
            Make Code Conversion
            <span> Simple.</span>
          </h2>

        </div>

        <p>
          CodeConvert helps developers reduce repetitive coding
          work by transforming React code into different formats
          while keeping the code clean, readable and reusable.
        </p>

      </section>


      {/* FOOTER */}
      <footer>

        <Link href="/" className="logo">
          <span>&lt;/&gt;</span> CodeConvert
        </Link>

        <p>
          © 2026 CodeConvert. Built for developers.
        </p>

      </footer>

    </main>
  );
}
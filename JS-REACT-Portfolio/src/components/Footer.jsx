import React from 'react';

/**
 * Toggle behavior:
 * - Build-time:  VITE_SHOW_NPOWER_LOGO=true (Render → Environment → redeploy)
 * - Runtime (optional preview): localStorage.setItem('show_npower_logo','true')
 */
function getShowNpowerLogoFlag() {
  const envFlag = (import.meta.env?.VITE_SHOW_NPOWER_LOGO === 'true');

  // Safe localStorage read (skips SSR / build)
  let runtimeFlag = false;
  try {
    if (typeof window !== 'undefined') {
      runtimeFlag = (localStorage.getItem('show_npower_logo') === 'true');
    }
  } catch (_) {
    /* ignore */
  }

  return envFlag || runtimeFlag;
}

const SHOW_NPOWER_LOGO = getShowNpowerLogoFlag();

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo">
      <div className="footer">
        {/* Row 1 — social + contact */}
        <div className="footer-row social">
          <a
            className="icon-link linkedin"
            href="http://www.linkedin.com/in/jacqueline-"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin" aria-hidden="true" />
          </a>

          {/* Optional: add your GitHub + Email (replace placeholders) */}
          <a
            className="icon-link github"
            href="https://github.com/lbandku"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <i className="fab fa-github" aria-hidden="true" />
          </a>

                    {/* Discord */}
          <a
            className="icon-link discord"
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            title="Discord"
          >
            <i className="fab fa-discord" aria-hidden="true" />
          </a>
        </div>

        {/* Row 2 — NPower badge (env/runtime toggle controls logo) */}
        <div className="footer-row badge-row">
          <a
            className={`badge ${SHOW_NPOWER_LOGO ? 'npower' : ''}`}
            href="https://www.npower.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Trained at NPower"
            title="NPower"
          >
            {SHOW_NPOWER_LOGO ? (
              <>
                <span className="npower-text">Trained at</span>
                {/* Use /assets/npower-logo.svg (if stored at public/assets) or /npower-logo.svg (if at public root) */}
                <img
                  src="/assets/npower-logo.svg"
                  alt=""                 /* decorative; <a> has the accessible name */
                  aria-hidden="true"
                  className="npower-logo"
                />
              </>
            ) : (
              <span>Trained at NPower</span>
            )}
          </a>
        </div>

        {/* Row 3 — copyright */}
        <div className="footer-row copyright">
          Handcrafted by Jax &#169; {year}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

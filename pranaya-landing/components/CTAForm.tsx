'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

declare global {
  interface Window {
    FlodeskObject?: string
    fd?: {
      (...args: unknown[]): void
      q?: unknown[]
    }
  }
}

const formId = '6a0f38dd2e5afde32a2e40f1'
const rootSelector = '.ff-6a0f38dd2e5afde32a2e40f1'

export default function CTAForm() {
  const router = useRouter()
  const rootRef = useRef<HTMLDivElement>(null)
  const redirectedRef = useRef(false)
  const [showCaptchaWarning, setShowCaptchaWarning] = useState(false)
  const [shakeCaptcha, setShakeCaptcha] = useState(false)

  useEffect(() => {
    const loadFlodesk = () => {
      if (!window.fd) {
        window.FlodeskObject = 'fd'
        const fn = (...args: unknown[]) => {
          ;(window.fd!.q = window.fd!.q || []).push(args)
        }
        window.fd = fn

        const firstScript = document.getElementsByTagName('script')[0]
        const version = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60

        const moduleScript = document.createElement('script')
        moduleScript.async = true
        moduleScript.type = 'module'
        moduleScript.src = 'https://assets.flodesk.com/universal.mjs' + version
        firstScript.parentNode?.insertBefore(moduleScript, firstScript)

        const legacyScript = document.createElement('script')
        legacyScript.async = true
        legacyScript.noModule = true
        legacyScript.src = 'https://assets.flodesk.com/universal.js' + version
        firstScript.parentNode?.insertBefore(legacyScript, firstScript)
      }

      window.fd('form:handle', {
        formId,
        rootEl: rootSelector,
      })
    }

    loadFlodesk()

    const root = rootRef.current
    if (!root) return

    const redirectAfterSuccess = () => {
      if (redirectedRef.current) return

      const hasSuccessStage = root.getAttribute('data-ff-stage') === 'success'
      const hasSuccessClass = root.classList.contains('fd-has-success')
      const successMessage = root.querySelector('[data-ff-el="success"]')
      const successVisible = successMessage
        ? window.getComputedStyle(successMessage).display !== 'none'
        : false

      if (hasSuccessStage || hasSuccessClass || successVisible) {
        redirectedRef.current = true
        window.setTimeout(() => router.push('/thanks'), 1800)
      }
    }

    const observer = new MutationObserver(redirectAfterSuccess)
    observer.observe(root, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['class', 'data-ff-stage', 'style'],
    })

    // Intercept form submit to check if captcha is done
    const interceptSubmit = () => {
      const form = root.querySelector('form')
      if (!form) return

      form.addEventListener('submit', (e) => {
        // Check if reCAPTCHA response exists
        const captchaResponse = root.querySelector('textarea[name="g-recaptcha-response"]') as HTMLTextAreaElement | null
        const captchaChecked = captchaResponse && captchaResponse.value && captchaResponse.value.length > 0

        if (!captchaChecked) {
          e.preventDefault()
          e.stopPropagation()
          setShowCaptchaWarning(true)
          setShakeCaptcha(true)
          setTimeout(() => setShakeCaptcha(false), 820)

          // Scroll to the captcha area
          const captchaEl = root.querySelector('iframe[title*="reCAPTCHA"]')
            || root.querySelector('.g-recaptcha')
            || root.querySelector('[data-ff-el="captcha"]')
          if (captchaEl) {
            captchaEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }
        }
      }, true) // capture phase to run before Flodesk's handler
    }

    // Wait for Flodesk to inject the captcha, then set up interception
    const captchaObserver = new MutationObserver(() => {
      const captchaEl = root.querySelector('iframe[title*="reCAPTCHA"]')
        || root.querySelector('.g-recaptcha')
        || root.querySelector('[data-ff-el="captcha"]')
      if (captchaEl) {
        interceptSubmit()
        captchaObserver.disconnect()
      }
    })
    captchaObserver.observe(root, { childList: true, subtree: true })

    // Also try after a delay in case mutation observer misses it
    const timer = setTimeout(interceptSubmit, 3000)

    return () => {
      observer.disconnect()
      captchaObserver.disconnect()
      clearTimeout(timer)
    }
  }, [router])

  return (
    <div id="consultation-form">
      <link rel="preload" href="https://assets.flodesk.com/flodesk-sans.css" as="style" />
      <link rel="stylesheet" href="https://assets.flodesk.com/flodesk-sans.css" />

      {/* Glassmorphism form card with glow */}
      <div className="glow-border rounded-2xl">
        <div className="glass-card rounded-2xl p-6 md:p-8 shadow-2xl">
          {/* Form header */}
          <div className="mb-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15">
              <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
              Book Your FREE Call
            </h2>
            <p className="mt-2 font-body text-sm text-ink/55">
              Fill the form below — we&apos;ll contact you with next steps
            </p>
          </div>

          {/* Flodesk form — ALL data attributes and structure preserved */}
          <div
            ref={rootRef}
            className="ff-6a0f38dd2e5afde32a2e40f1 flodesk-consultation-form"
            data-ff-el="root"
            data-ff-version="3"
            data-ff-type="inline"
            data-ff-name="inlineNoImage"
            data-ff-stage="default"
          >
            <div
              data-ff-el="config"
              data-ff-config="eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJtZXNzYWdlIiwibWVzc2FnZSI6IiIsInJlZGlyZWN0VXJsIjoiIn0sImNvaSI6ZmFsc2UsInNob3dGb3JSZXR1cm5WaXNpdG9ycyI6dHJ1ZSwibm90aWZpY2F0aW9uIjp0cnVlLCJnZHByIjp7ImFjY2VwdHNNYXJrZXRpbmciOmZhbHNlLCJwcml2YWN5UG9saWN5Ijp7ImVuYWJsZWQiOmZhbHNlLCJtYW5kYXRvcnkiOmZhbHNlfX0sInRyYWNraW5nQ29uZmlnIjp7Im1ldGFQaXhlbElkIjoiIiwiY29va2llQmFubmVyRW5hYmxlZCI6ZmFsc2UsImdvb2dsZUFuYWx5dGljc0lkIjoiIn19"
              style={{ display: 'none' }}
            />
            <div className="ff-6a0f38dd2e5afde32a2e40f1__container">
              <div className="ff-6a0f38dd2e5afde32a2e40f1__wrapper">
                <form
                  className="ff-6a0f38dd2e5afde32a2e40f1__form"
                  action="https://form.flodesk.com/forms/6a0f38dd2e5afde32a2e40f1/submit"
                  method="post"
                  data-ff-el="form"
                >
                  {/* Hide the Flodesk default title/subtitle since we have our own header */}
                  <div className="ff-6a0f38dd2e5afde32a2e40f1__title" style={{ display: 'none' }}>
                    <div style={{ wordBreak: 'break-word' }}>
                      <div data-paragraph="true">Free 1:1 Consultation Call</div>
                    </div>
                  </div>
                  <div className="ff-6a0f38dd2e5afde32a2e40f1__subtitle" style={{ display: 'none' }}>
                    <div style={{ wordBreak: 'break-word' }}>
                      <div data-paragraph="true">
                        Book a FREE Digital Marketing consultation call with me and get a
                        customized digital marketing strategy for your business!
                      </div>
                    </div>
                  </div>

                  <div
                    className="ff-6a0f38dd2e5afde32a2e40f1__content fd-form-content"
                    data-ff-el="content"
                  >
                    <div
                      className="ff-6a0f38dd2e5afde32a2e40f1__fields"
                      data-ff-el="fields"
                    >
                      <div className="ff-6a0f38dd2e5afde32a2e40f1__field fd-form-group">
                        <input
                          id="ff-6a0f38dd2e5afde32a2e40f1-email"
                          className="ff-6a0f38dd2e5afde32a2e40f1__control fd-form-control"
                          type="text"
                          maxLength={255}
                          name="email"
                          placeholder="Email address"
                          data-ff-tab="email::firstName"
                          required
                        />
                        <label
                          htmlFor="ff-6a0f38dd2e5afde32a2e40f1-email"
                          className="ff-6a0f38dd2e5afde32a2e40f1__label fd-form-label"
                        >
                          <div>
                            <div>Email address</div>
                          </div>
                        </label>
                      </div>

                      <div className="ff-6a0f38dd2e5afde32a2e40f1__field fd-form-group">
                        <input
                          id="ff-6a0f38dd2e5afde32a2e40f1-firstName"
                          className="ff-6a0f38dd2e5afde32a2e40f1__control fd-form-control"
                          type="text"
                          maxLength={255}
                          name="firstName"
                          placeholder="First name"
                          data-ff-tab="firstName:email:fields.whatsappp"
                        />
                        <label
                          htmlFor="ff-6a0f38dd2e5afde32a2e40f1-firstName"
                          className="ff-6a0f38dd2e5afde32a2e40f1__label fd-form-label"
                        >
                          <div>
                            <div>First name</div>
                          </div>
                        </label>
                      </div>

                      <div className="ff-6a0f38dd2e5afde32a2e40f1__field fd-form-group">
                        <input
                          id="ff-6a0f38dd2e5afde32a2e40f1-phohi5G6de"
                          className="ff-6a0f38dd2e5afde32a2e40f1__control fd-form-control"
                          type="text"
                          maxLength={255}
                          name="fields.whatsappp"
                          placeholder="WhatsApp Number"
                          data-ff-tab="fields.whatsappp:firstName:fields.businessName"
                          required
                        />
                        <label
                          htmlFor="ff-6a0f38dd2e5afde32a2e40f1-phohi5G6de"
                          className="ff-6a0f38dd2e5afde32a2e40f1__label fd-form-label"
                        >
                          <div>
                            <div>WhatsApp Number</div>
                          </div>
                        </label>
                      </div>

                      <div className="ff-6a0f38dd2e5afde32a2e40f1__field fd-form-group">
                        <input
                          id="ff-6a0f38dd2e5afde32a2e40f1-3wgQkEYr28"
                          className="ff-6a0f38dd2e5afde32a2e40f1__control fd-form-control"
                          type="text"
                          maxLength={255}
                          name="fields.businessName"
                          placeholder="Business Name"
                          data-ff-tab="fields.businessName:fields.whatsappp:fields.websiteOrFacebookPageLink"
                          required
                        />
                        <label
                          htmlFor="ff-6a0f38dd2e5afde32a2e40f1-3wgQkEYr28"
                          className="ff-6a0f38dd2e5afde32a2e40f1__label fd-form-label"
                        >
                          <div>
                            <div>Business Name</div>
                          </div>
                        </label>
                      </div>

                      <div className="ff-6a0f38dd2e5afde32a2e40f1__field fd-form-group">
                        <input
                          id="ff-6a0f38dd2e5afde32a2e40f1-e61aHoHa86"
                          className="ff-6a0f38dd2e5afde32a2e40f1__control fd-form-control"
                          type="text"
                          maxLength={255}
                          name="fields.websiteOrFacebookPageLink"
                          placeholder="Website or Facebook Page Link"
                          data-ff-tab="fields.websiteOrFacebookPageLink:fields.businessName:submit"
                        />
                        <label
                          htmlFor="ff-6a0f38dd2e5afde32a2e40f1-e61aHoHa86"
                          className="ff-6a0f38dd2e5afde32a2e40f1__label fd-form-label"
                        >
                          <div>
                            <div>Website or Facebook Page Link</div>
                          </div>
                        </label>
                      </div>

                      <input
                        type="text"
                        maxLength={255}
                        name="confirm_email_address"
                        style={{ display: 'none' }}
                      />
                    </div>

                    {/* ===== CAPTCHA ATTENTION AREA ===== */}
                    <div className={`captcha-attention-wrapper ${shakeCaptcha ? 'captcha-shake' : ''}`}>
                      <div className="captcha-reminder-label">
                        <span className="captcha-arrow">👇</span>
                        <span>Please verify you&apos;re human before submitting</span>
                        <span className="captcha-arrow">👇</span>
                      </div>
                      {/* Flodesk SDK injects reCAPTCHA here automatically */}
                    </div>

                    {/* Warning message when captcha is not completed */}
                    {showCaptchaWarning && (
                      <div className="captcha-warning-banner">
                        <svg className="captcha-warning-icon" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span>⚠️ You must check the &quot;I&apos;m not a robot&quot; box above before submitting!</span>
                      </div>
                    )}

                    <div
                      className="ff-6a0f38dd2e5afde32a2e40f1__footer"
                      data-ff-el="footer"
                    >
                      <button
                        type="submit"
                        className="ff-6a0f38dd2e5afde32a2e40f1__button fd-btn"
                        data-ff-el="submit"
                        data-ff-tab="submit"
                      >
                        <div>
                          <span data-draw-element="editable">Book My FREE Call →</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div
                    className="ff-6a0f38dd2e5afde32a2e40f1__success fd-form-success"
                    data-ff-el="success"
                  >
                    <div className="ff-6a0f38dd2e5afde32a2e40f1__success-message">
                      <div>
                        <div>
                          <div data-paragraph="true">Thank you for subscribing!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ff-6a0f38dd2e5afde32a2e40f1__error fd-form-error"
                    data-ff-el="error"
                  />
                </form>
              </div>
            </div>
          </div>

          {/* Security note */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <svg className="h-3.5 w-3.5 text-ink/30" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <p className="font-body text-xs text-ink/35">
              Your info is secure & never shared
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        [data-ff-el='root'].flodesk-consultation-form,
        [data-ff-el='root'].flodesk-consultation-form *,
        [data-ff-el='root'].flodesk-consultation-form *::before,
        [data-ff-el='root'].flodesk-consultation-form *::after {
          box-sizing: border-box;
        }

        [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__container {
          margin: 0 auto;
          max-width: 620px;
          overflow: hidden;
          position: relative;
          background: transparent;
        }

        [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__wrapper {
          display: flex;
        }

        [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__form {
          color: #1a1a2e;
          width: 100%;
          margin: 0;
          padding: 0;
          font-size: 16px;
          text-align: center;
          font-family: 'DM Sans', FlodeskSans, Helvetica, sans-serif;
          font-weight: 400;
          line-height: 1.6;
          letter-spacing: 0;
        }

        [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__title {
          display: none;
        }

        [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__subtitle {
          display: none;
        }

        [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__fields {
          margin: 0 0 16px;
        }

        [data-ff-el='root'].flodesk-consultation-form .fd-form-group {
          margin: 0 0 12px;
          position: relative;
          text-align: left;
        }

        [data-ff-el='root'].flodesk-consultation-form .fd-form-control {
          width: 100%;
          display: block;
          outline: none;
          position: relative;
          appearance: none;
        }

        [data-ff-el='root'].flodesk-consultation-form .fd-form-control::placeholder {
          color: transparent !important;
          opacity: 0 !important;
        }

        [data-ff-el='root'].flodesk-consultation-form .fd-form-label {
          top: 0;
          left: 0;
          right: 0;
          margin: 0;
          overflow: hidden;
          position: absolute;
          white-space: nowrap;
          text-overflow: ellipsis;
          pointer-events: none;
        }

        [data-ff-el='root'].flodesk-consultation-form .fd-form-control:not(:placeholder-shown) + .fd-form-label {
          opacity: 0;
        }

        [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__control {
          color: #1a1a2e;
          border: 1.5px solid #e8e2d9;
          height: 52px;
          padding: 14px 18px;
          font-size: 15px;
          background: rgba(255,255,255,0.7);
          text-align: left;
          font-family: 'DM Sans', FlodeskSans, Helvetica, sans-serif;
          font-weight: 400;
          line-height: 22px;
          border-radius: 12px;
          letter-spacing: 0;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__label {
          color: rgba(26, 26, 46, 0.45);
          border: 1.5px solid transparent;
          padding: 14px 18px;
          font-size: 15px;
          text-align: left;
          font-family: 'DM Sans', FlodeskSans, Helvetica, sans-serif;
          font-weight: 500;
          line-height: 22px;
          letter-spacing: 0;
        }

        [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__control:focus {
          border-color: #c8922a !important;
          box-shadow: 0 0 0 4px rgba(200, 146, 42, 0.12);
          background: #ffffff;
        }

        [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__button {
          color: #ffffff;
          width: 100%;
          border: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 56px;
          padding: 16px 24px;
          font-size: 17px;
          background: linear-gradient(135deg, #c8922a, #e8b84b);
          text-align: center;
          font-family: 'DM Sans', FlodeskSans, Helvetica, sans-serif;
          font-weight: 700;
          line-height: 22px;
          border-radius: 12px;
          cursor: pointer;
          letter-spacing: 0.3px;
          transition: transform 0.2s ease, box-shadow 0.3s ease, filter 0.2s ease;
          box-shadow: 0 4px 15px rgba(200, 146, 42, 0.3), 0 1px 3px rgba(0,0,0,0.1);
        }

        [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(200, 146, 42, 0.4), 0 2px 6px rgba(0,0,0,0.1);
          filter: brightness(1.05);
        }

        [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__button:active {
          transform: translateY(0);
        }

        [data-ff-el='root'].flodesk-consultation-form .fd-form-success,
        [data-ff-el='root'].flodesk-consultation-form .fd-form-error {
          display: none;
        }

        [data-ff-el='root'].flodesk-consultation-form[data-ff-stage='success'] .fd-form-content,
        [data-ff-el='root'].flodesk-consultation-form.fd-has-success .fd-form-content {
          display: none;
        }

        [data-ff-el='root'].flodesk-consultation-form[data-ff-stage='success'] .fd-form-success,
        [data-ff-el='root'].flodesk-consultation-form.fd-has-success .fd-form-success {
          display: block;
        }

        [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__success-message {
          color: #1a1a2e;
          display: block;
          font-size: 18px;
          text-align: center;
          font-family: 'DM Sans', FlodeskSans, Helvetica, sans-serif;
          font-weight: 600;
          line-height: 1.6;
          padding: 20px 0;
        }

        [data-ff-el='root'].flodesk-consultation-form.fd-has-error .fd-form-error {
          color: #c84e41;
          display: block;
          margin-top: 15px;
          font-family: 'DM Sans', FlodeskSans, Helvetica, sans-serif;
        }

        @media (max-width: 767px) {
          [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__form {
            padding: 0;
            word-break: break-word;
          }
        }

        /* ========== CAPTCHA ATTENTION STYLES ========== */

        /* Wrapper that highlights the captcha area */
        .captcha-attention-wrapper {
          margin: 16px 0;
          padding: 16px;
          border-radius: 12px;
          border: 2px solid #c8922a;
          background: linear-gradient(135deg, rgba(200, 146, 42, 0.06), rgba(232, 184, 75, 0.08));
          position: relative;
          animation: captchaPulseGlow 2.5s ease-in-out infinite;
        }

        /* Pulsing glow animation */
        @keyframes captchaPulseGlow {
          0%, 100% {
            box-shadow: 0 0 8px rgba(200, 146, 42, 0.2), 0 0 0 0 rgba(200, 146, 42, 0);
            border-color: #c8922a;
          }
          50% {
            box-shadow: 0 0 16px rgba(200, 146, 42, 0.35), 0 0 30px rgba(200, 146, 42, 0.15);
            border-color: #e8b84b;
          }
        }

        /* Reminder label above captcha */
        .captcha-reminder-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 12px;
          font-family: 'DM Sans', FlodeskSans, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #c8922a;
          text-align: center;
          letter-spacing: 0.2px;
        }

        .captcha-arrow {
          font-size: 18px;
          animation: captchaBounce 1.5s ease-in-out infinite;
        }

        @keyframes captchaBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }

        /* Shake animation when user tries to submit without captcha */
        .captcha-shake {
          animation: shakeIt 0.8s ease-in-out !important;
        }

        @keyframes shakeIt {
          0%, 100% { transform: translateX(0); }
          10%, 50%, 90% { transform: translateX(-6px); }
          30%, 70% { transform: translateX(6px); }
        }

        /* Warning banner */
        .captcha-warning-banner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin: 12px 0;
          padding: 12px 16px;
          background: linear-gradient(135deg, #fff3cd, #ffe9a0);
          border: 1.5px solid #f0c040;
          border-radius: 10px;
          font-family: 'DM Sans', FlodeskSans, Helvetica, sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          color: #7a5a00;
          text-align: center;
          animation: warningFadeIn 0.4s ease-out;
        }

        .captcha-warning-icon {
          width: 20px;
          height: 20px;
          color: #d4a017;
          flex-shrink: 0;
        }

        @keyframes warningFadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Make the reCAPTCHA iframe more prominent within our wrapper */
        .captcha-attention-wrapper iframe {
          margin: 0 auto;
          display: block;
        }

        .captcha-attention-wrapper .g-recaptcha {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

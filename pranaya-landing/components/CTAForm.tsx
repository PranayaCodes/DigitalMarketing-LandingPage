'use client'

import { useEffect, useRef } from 'react'
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

    return () => observer.disconnect()
  }, [router])

  return (
    <section id="consultation-form" className="bg-cream px-6 py-20 md:py-24">
      <link rel="preload" href="https://assets.flodesk.com/flodesk-sans.css" as="style" />
      <link rel="stylesheet" href="https://assets.flodesk.com/flodesk-sans.css" />

      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Book the Call
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
            Book Your FREE 1:1 Consultation Call
          </h2>
          <p className="mt-4 font-body text-lg text-ink/65">
            Fill up the form below and we will contact you with the next steps.
          </p>
        </div>

        <div className="rounded-lg border border-warm bg-white p-4 shadow-sm md:p-6">
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
                  <div className="ff-6a0f38dd2e5afde32a2e40f1__title">
                    <div style={{ wordBreak: 'break-word' }}>
                      <div data-paragraph="true">Free 1:1 Consultation Call</div>
                    </div>
                  </div>
                  <div className="ff-6a0f38dd2e5afde32a2e40f1__subtitle">
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
                          <span data-draw-element="editable">Subscribe</span>
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
        </div>

        <p className="mt-4 text-center font-body text-sm text-ink/45">
          Your details are submitted through the live Flodesk form, so the email automation can run
          normally.
        </p>
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
          background: #ffffff;
        }

        [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__wrapper {
          display: flex;
        }

        [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__form {
          color: #1a1a2e;
          width: 100%;
          margin: 0;
          padding: 34px;
          font-size: 16px;
          text-align: center;
          font-family: 'DM Sans', FlodeskSans, Helvetica, sans-serif;
          font-weight: 400;
          line-height: 1.6;
          letter-spacing: 0;
        }

        [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__title {
          color: #1a1a2e;
          margin: 0 0 12px;
          display: block;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 34px;
          font-weight: 700;
          line-height: 1.1;
        }

        [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__subtitle {
          color: rgba(26, 26, 46, 0.65);
          margin: 0 0 28px;
          display: block;
          font-size: 16px;
        }

        [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__fields {
          margin: 0 0 18px;
        }

        [data-ff-el='root'].flodesk-consultation-form .fd-form-group {
          margin: 0 0 15px;
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
          border: 1px solid #e8e2d9;
          height: 52px;
          padding: 14px 18px;
          font-size: 15px;
          background: #ffffff;
          text-align: left;
          font-family: 'DM Sans', FlodeskSans, Helvetica, sans-serif;
          font-weight: 400;
          line-height: 22px;
          border-radius: 6px;
          letter-spacing: 0;
        }

        [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__label {
          color: rgba(26, 26, 46, 0.5);
          border: 1px solid transparent;
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
          box-shadow: 0 0 0 3px rgba(200, 146, 42, 0.12);
        }

        [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__button {
          color: #ffffff;
          width: 100%;
          border: 1px solid #c8922a;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          padding: 14px 22px;
          font-size: 16px;
          background: #c8922a;
          text-align: center;
          font-family: 'DM Sans', FlodeskSans, Helvetica, sans-serif;
          font-weight: 700;
          line-height: 22px;
          border-radius: 6px;
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
        }

        [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__button:hover {
          background: #e8b84b;
          box-shadow: 0 16px 30px rgba(200, 146, 42, 0.2);
          transform: translateY(-1px);
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
        }

        [data-ff-el='root'].flodesk-consultation-form.fd-has-error .fd-form-error {
          color: #c84e41;
          display: block;
          margin-top: 15px;
          font-family: 'DM Sans', FlodeskSans, Helvetica, sans-serif;
        }

        @media (max-width: 767px) {
          [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__form {
            padding: 20px;
            word-break: break-word;
          }

          [data-ff-el='root'].flodesk-consultation-form .ff-6a0f38dd2e5afde32a2e40f1__title {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  )
}

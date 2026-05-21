import Link from "next/link";
import {
  LegalLayout,
  Section,
  P,
  SubH,
  UL,
  B,
  Email,
  Table,
  Callout,
  LegalFooter,
} from "@/components/Legal";

export const metadata = {
  title: "Cookie Policy — Cookies & Tracking Technologies",
  description:
    "What cookies GroovyMark WebX uses, why we use them, and how you can manage your preferences. Read alongside our Privacy Policy — GDPR, UK GDPR, and Sri Lankan law compliant.",
  alternates: { canonical: "/cookie-policy" },
  openGraph: {
    type: "article",
    title: "Cookie Policy | GroovyMark WebX",
    description:
      "What cookies we use and how to manage your preferences.",
    url: "/cookie-policy",
  },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 21, 2026";

const SECTIONS = [
  { id: "introduction", title: "Introduction" },
  { id: "what-are-cookies", title: "What Are Cookies?" },
  { id: "cookie-consent", title: "Cookie Consent" },
  { id: "types-of-cookies", title: "Types of Cookies We Use" },
  { id: "third-party-cookies", title: "Third-Party Cookies" },
  { id: "ai-demos", title: "Cookies & AI System Demonstrations" },
  { id: "managing-cookies", title: "Managing & Controlling Cookies" },
  { id: "retention", title: "Cookie Retention Periods" },
  { id: "legal-basis", title: "Legal Basis for Cookie Use" },
  { id: "your-rights", title: "Your Rights" },
  { id: "international-transfers", title: "International Data Transfers" },
  { id: "changes", title: "Changes to This Cookie Policy" },
  { id: "contact-us", title: "Contact Us" },
];

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      slug="cookie-policy"
      breadcrumbLabel="Cookie Policy"
      badge="Legal · Cookies"
      title="Cookie Policy"
      subtitle="Web Development & AI System Automation"
      description="What cookies and similar technologies we use on our website, why we use them, and how you can manage your preferences — read alongside our Privacy Policy."
      lastUpdated={LAST_UPDATED}
      sections={SECTIONS}
    >
      <Section id="introduction" num={1} title="Introduction">
        <P>
          GroovyMark PVT Ltd (trading as "GroovyMark WebX", "we", "us", or
          "our") is committed to being transparent about how we use cookies and
          similar tracking technologies on our website. This Cookie Policy
          explains what cookies are, which cookies we use, why we use them, and
          how you can manage your preferences.
        </P>
        <P>
          This policy should be read alongside our{" "}
          <Link href="/privacy-policy" className="text-brand-700 hover:underline font-semibold">
            Privacy Policy
          </Link>
          , which provides broader information about how we collect, use, and
          protect your personal data in compliance with the General Data
          Protection Regulation (GDPR) (EU) 2016/679, the UK GDPR, and
          applicable data protection laws in Sri Lanka.
        </P>
        <P>
          If you have any questions about this Cookie Policy, please contact us
          at <Email>webx@groovymark.com</Email>.
        </P>
      </Section>

      <Section id="what-are-cookies" num={2} title="What Are Cookies?">
        <P>
          Cookies are small text files placed on your device (computer, tablet,
          or mobile phone) when you visit our website. They allow the website
          to recognize your device across pages and visits, remember your
          preferences, and collect information about how you interact with our
          content.
        </P>
        <P>
          Cookies are not harmful to your device and do not contain personally
          identifiable information on their own. However, when combined with
          other data we collect, they can be used to identify you as a user and
          personalize your experience.
        </P>
        <P>Similar technologies we may use alongside cookies include:</P>
        <UL>
          <li>
            <B>Web beacons / pixels</B> — tiny transparent images embedded in
            pages or emails that track whether content has been viewed
          </li>
          <li>
            <B>Local storage</B> — browser-based storage used to retain session
            data and user preferences
          </li>
          <li>
            <B>Session tokens</B> — short-lived identifiers used to maintain
            secure browsing sessions
          </li>
          <li>
            <B>Analytics scripts</B> — code snippets that collect aggregated
            data on website usage and performance
          </li>
        </UL>
      </Section>

      <Section id="cookie-consent" num={3} title="Cookie Consent">
        <P>
          When you first visit our website, you will be presented with a cookie
          consent banner that allows you to:
        </P>
        <UL>
          <li>
            <B>Accept all cookies</B> — enable all cookie categories including
            analytics, functional, and marketing cookies
          </li>
          <li>
            <B>Reject all non-essential cookies</B> — allow only strictly
            necessary cookies required for the website to function
          </li>
          <li>
            <B>Customize preferences</B> — choose which cookie categories you
            wish to enable or disable
          </li>
        </UL>
        <P>
          You can change or withdraw your cookie preferences at any time by
          clicking the <B>Cookie Settings</B> link in the footer of our
          website. Your preferences will be saved and applied on future visits.
        </P>
        <Callout kind="warning" title="Please Note">
          <P>
            Strictly necessary cookies cannot be disabled as they are essential
            for the website to operate securely and correctly. All other cookie
            categories require your consent before being activated.
          </P>
        </Callout>
      </Section>

      <Section id="types-of-cookies" num={4} title="Types of Cookies We Use">
        <SubH>4.1 Strictly Necessary Cookies</SubH>
        <P>
          These cookies are essential for our website to function and cannot be
          switched off. They do not require your consent under GDPR as they are
          placed solely to provide a service explicitly requested by you. They
          do not store any personally identifiable information.
        </P>
        <Table
          headers={["Purpose", "Examples", "Duration"]}
          rows={[
            ["Maintaining your browsing session across pages", "Session ID cookies", "Session (deleted when browser closes)"],
            ["Storing your cookie consent preferences", "Consent state cookies", "Up to 1 year"],
            ["Security and fraud prevention (CSRF protection)", "Anti-forgery tokens", "Session"],
            ["Load balancing and server routing", "Server affinity cookies", "Session"],
            ["Enabling secure HTTPS connections", "SSL session cookies", "Session"],
          ]}
        />

        <SubH>4.2 Analytics Cookies</SubH>
        <P>
          These cookies help us understand how visitors interact with our
          website by collecting information in an aggregated, anonymous form.
          This data helps us improve website performance, content quality, and
          user experience. These cookies are only placed with your consent.
        </P>
        <Table
          headers={["Purpose", "Examples", "Duration"]}
          rows={[
            ["Counting unique visitors and page views", "Page view counters", "Up to 13 months"],
            ["Tracking traffic sources and referral paths", "Referral source tracking", "Up to 13 months"],
            ["Measuring time spent on pages and navigation flows", "Session duration tracking", "Up to 13 months"],
            ["Identifying popular content and service pages", "Content engagement metrics", "Up to 13 months"],
            ["Monitoring website errors and performance issues", "Error and performance logs", "Up to 13 months"],
          ]}
        />

        <SubH>4.3 Functional Cookies</SubH>
        <P>
          These cookies enable enhanced functionality and personalization on
          our website. They may be set by us or by third-party providers whose
          services we have integrated. If you disable these cookies, some
          features may not work as intended.
        </P>
        <Table
          headers={["Purpose", "Examples", "Duration"]}
          rows={[
            ["Remembering your language or region preferences", "Language selection cookies", "Up to 12 months"],
            ["Pre-filling contact and enquiry forms with saved information", "Form auto-fill preferences", "Up to 12 months"],
            ["Storing display preferences (e.g., light/dark mode)", "UI preference cookies", "Up to 12 months"],
            ["Enabling embedded content (e.g., demo videos, interactive tools)", "Third-party embed cookies", "Up to 12 months"],
          ]}
        />

        <SubH>4.4 Marketing & Tracking Cookies</SubH>
        <P>
          These cookies are used to track visitors across our website to build
          a profile of interests and serve relevant content and enquiry
          follow-ups. They support our lead management and client acquisition
          activities. These cookies are only placed with your explicit consent.
        </P>
        <Table
          headers={["Purpose", "Examples", "Duration"]}
          rows={[
            ["Tracking the source of inbound enquiries (paid, organic, referral)", "Lead source attribution cookies", "Up to 13 months"],
            ["Recording which service pages and case studies a visitor has viewed", "Content engagement tracking", "Up to 13 months"],
            ["Supporting CRM lead scoring based on website behaviour", "Behavioural profile cookies", "Up to 13 months"],
            ["Enabling retargeting campaigns on third-party ad platforms", "Ad platform pixels", "Up to 13 months"],
            ["Measuring the effectiveness of our marketing channels", "Campaign attribution cookies", "Up to 13 months"],
          ]}
        />
      </Section>

      <Section id="third-party-cookies" num={5} title="Third-Party Cookies">
        <P>
          Some cookies on our website are placed by third-party services we
          use to deliver, analyze, and improve our website and business
          operations. These third parties have their own privacy and cookie
          policies, and we encourage you to review them.
        </P>
        <P>Third-party services that may place cookies include:</P>
        <UL>
          <li><B>Analytics platforms</B> (e.g., Google Analytics) — for website traffic and behavior analysis</li>
          <li><B>CRM and marketing tools</B> — for lead tracking and enquiry management</li>
          <li><B>Hosting and infrastructure providers</B> — for performance monitoring and security</li>
          <li><B>Embedded content providers</B> — for video demos, interactive tools, or portfolio showcases</li>
          <li><B>Ad and retargeting platforms</B> — for campaign tracking (only with your consent)</li>
        </UL>
        <Callout kind="info" title="Note on Third-Party Cookies">
          <P>
            We do not control third-party cookies directly. Their behavior is
            governed by the respective third party's cookie policy. If you have
            concerns about a specific third-party cookie, please refer to that
            provider's documentation or opt out through their platform directly.
          </P>
        </Callout>
      </Section>

      <Section id="ai-demos" num={6} title="Cookies & AI System Demonstrations">
        <P>
          Where our website hosts interactive demos, sandbox tools, or previews
          of AI automation systems we have built, additional session-based
          cookies or local storage may be used to:
        </P>
        <UL>
          <li>Maintain the state of an interactive demo during your session</li>
          <li>Record which demo features you have interacted with for analytics purposes</li>
          <li>Prevent duplicate form submissions or repeated trigger events in automation demos</li>
        </UL>
        <P>
          These are either strictly necessary (session-based, no consent
          required) or analytics cookies (subject to your consent preferences).
          No personal data entered into demo tools is stored beyond your active
          session unless you explicitly submit an enquiry or sign-up form.
        </P>
      </Section>

      <Section id="managing-cookies" num={7} title="Managing & Controlling Cookies">
        <P>You have several options for managing how cookies are used when you visit our website:</P>

        <SubH>7.1 Cookie Consent Tool</SubH>
        <P>
          Use the <B>Cookie Settings</B> link in our website footer at any time
          to review or update your consent preferences. Changes take effect
          immediately and are stored for future visits.
        </P>

        <SubH>7.2 Browser Settings</SubH>
        <P>Most browsers allow you to control cookies through their settings. You can typically:</P>
        <UL>
          <li>View cookies currently stored by websites you visit</li>
          <li>Block all cookies or block cookies from specific websites</li>
          <li>Delete existing cookies stored on your device</li>
          <li>Set your browser to notify you before a cookie is placed</li>
        </UL>
        <P>Common browser cookie settings pages:</P>
        <UL>
          <li><B>Google Chrome:</B> Settings → Privacy and Security → Cookies and other site data</li>
          <li><B>Mozilla Firefox:</B> Settings → Privacy & Security → Cookies and Site Data</li>
          <li><B>Safari:</B> Preferences → Privacy → Manage Website Data</li>
          <li><B>Microsoft Edge:</B> Settings → Cookies and site permissions → Cookies and site data</li>
        </UL>
        <Callout kind="warning" title="Important">
          <P>
            Disabling or deleting cookies through your browser settings may
            affect your experience on our website. Strictly necessary cookies
            are required for the site to function correctly. Disabling
            functional or analytics cookies may limit certain features or
            prevent us from improving the service based on usage data.
          </P>
        </Callout>

        <SubH>7.3 Opt-Out of Analytics</SubH>
        <P>
          If you wish to opt out of analytics tracking specifically, you may
          use tools such as the <B>Google Analytics Opt-Out Browser Add-on</B>{" "}
          (available at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline font-semibold">tools.google.com/dlpage/gaoptout</a>) in addition to managing your preferences through our cookie consent tool.
        </P>

        <SubH>7.4 Do Not Track (DNT)</SubH>
        <P>
          Some browsers offer a "Do Not Track" (DNT) signal. Our website
          currently does not alter its behavior in response to DNT signals, as
          there is no consistent industry standard for how they should be
          interpreted. We recommend using our Cookie Settings tool to manage
          your preferences directly.
        </P>
      </Section>

      <Section id="retention" num={8} title="Cookie Retention Periods">
        <P>We retain cookie data only for as long as necessary for the purposes described in this policy:</P>
        <Table
          headers={["Cookie Category", "Maximum Retention Period"]}
          rows={[
            ["Strictly Necessary", "Session or up to 1 year"],
            ["Analytics", "Up to 13 months"],
            ["Functional", "Up to 12 months"],
            ["Marketing & Tracking", "Up to 13 months"],
          ]}
        />
        <P>
          After the retention period expires, cookies are automatically deleted
          or anonymized. You may also delete cookies at any time via your
          browser settings or our Cookie Settings tool.
        </P>
      </Section>

      <Section id="legal-basis" num={9} title="Legal Basis for Cookie Use">
        <P>Under the GDPR, we rely on the following lawful bases for placing cookies:</P>
        <Table
          headers={["Cookie Category", "Legal Basis"]}
          rows={[
            ["Strictly Necessary", <span key="1"><B>Legitimate Interest (Art. 6(1)(f))</B> — essential for the website to operate securely</span>],
            ["Analytics", <span key="2"><B>Consent (Art. 6(1)(a))</B> — placed only with your explicit opt-in</span>],
            ["Functional", <span key="3"><B>Consent (Art. 6(1)(a))</B> — placed only with your explicit opt-in</span>],
            ["Marketing & Tracking", <span key="4"><B>Consent (Art. 6(1)(a))</B> — placed only with your explicit opt-in</span>],
          ]}
        />
        <P>
          You have the right to withdraw consent at any time without affecting
          the lawfulness of processing carried out before withdrawal.
        </P>
      </Section>

      <Section id="your-rights" num={10} title="Your Rights">
        <P>
          If you are located in the EEA, UK, or a jurisdiction with equivalent
          data protection rights, you have the following rights in relation to
          personal data collected through cookies:
        </P>
        <UL>
          <li><B>Right of Access (Art. 15):</B> Request a copy of the personal data we hold about you, including data collected via cookies.</li>
          <li><B>Right to Erasure (Art. 17):</B> Request deletion of personal data associated with your cookie profile.</li>
          <li><B>Right to Restrict Processing (Art. 18):</B> Request that we limit how we use data collected through cookies.</li>
          <li><B>Right to Object (Art. 21):</B> Object to processing of your data for analytics or marketing purposes.</li>
          <li><B>Right to Withdraw Consent (Art. 7(3)):</B> Withdraw your cookie consent at any time via our Cookie Settings tool.</li>
          <li><B>Right to Lodge a Complaint:</B> File a complaint with your local Data Protection Authority (DPA) if you believe your rights have been infringed.</li>
        </UL>
        <P>
          To exercise any of these rights, contact us at{" "}
          <Email>webx@groovymark.com</Email>. We will respond within{" "}
          <B>30 days</B>.
        </P>
      </Section>

      <Section id="international-transfers" num={11} title="International Data Transfers">
        <P>
          Cookie data collected on our website may be processed by third-party
          analytics or marketing platforms located outside the European
          Economic Area (EEA). When such transfers occur, we ensure appropriate
          safeguards are in place, including Standard Contractual Clauses
          (SCCs) approved by the European Commission, in line with GDPR
          Chapter V requirements.
        </P>
      </Section>

      <Section id="changes" num={12} title="Changes to This Cookie Policy">
        <P>
          We may update this Cookie Policy from time to time to reflect changes
          in technology, legal requirements, or our business practices. When
          material changes are made:
        </P>
        <UL>
          <li>We will update the <B>Last Updated</B> date at the top of this policy</li>
          <li>We will display a notice on our website</li>
          <li>Where required, we will request fresh consent for any new cookie categories</li>
        </UL>
        <P>
          We encourage you to review this policy periodically. Continued use of
          our website after changes are posted constitutes your acknowledgment
          of the updated policy.
        </P>
      </Section>

      <Section id="contact-us" num={13} title="Contact Us">
        <P>
          If you have any questions, concerns, or requests regarding this
          Cookie Policy or how we use cookies on our website, please contact us:
        </P>
        <Table
          headers={["Contact Detail", "Information"]}
          rows={[
            ["Data Protection Contact", <Email key="e">webx@groovymark.com</Email>],
            ["Company", "GroovyMark PVT Ltd (trading as GroovyMark WebX)"],
            ["Location", "Colombo, Sri Lanka"],
            ["Services", "Web Development & AI System Automation"],
          ]}
        />
        <P>
          For EU/UK residents, you may also lodge a complaint with your local
          Data Protection Authority (DPA) if you believe your cookie-related
          data protection rights have been infringed.
        </P>
      </Section>

      <LegalFooter effectiveDate={LAST_UPDATED} />
    </LegalLayout>
  );
}

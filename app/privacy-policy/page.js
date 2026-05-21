import {
  LegalLayout,
  Section,
  P,
  SubH,
  UL,
  B,
  Email,
  Table,
  LegalFooter,
} from "@/components/Legal";

export const metadata = {
  title: "Privacy Policy — How We Handle Your Data",
  description:
    "How GroovyMark WebX collects, uses, stores, and protects your personal data — in compliance with the GDPR, UK GDPR, and applicable data protection laws in Sri Lanka. Read our full data practices.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    type: "article",
    title: "Privacy Policy | GroovyMark WebX",
    description:
      "How we collect, use, and protect your personal data — GDPR & UK GDPR compliant.",
    url: "/privacy-policy",
  },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 21, 2026";

const SECTIONS = [
  { id: "introduction", title: "Introduction" },
  { id: "data-controller", title: "Data Controller" },
  { id: "personal-data-we-collect", title: "Personal Data We Collect" },
  { id: "legal-basis", title: "Legal Basis for Processing" },
  { id: "how-we-use-your-data", title: "How We Use Your Personal Data" },
  { id: "data-sharing", title: "Data Sharing & Third Parties" },
  { id: "data-retention", title: "Data Retention" },
  { id: "cookie-policy", title: "Cookie Policy" },
  { id: "your-rights", title: "Your Rights Under GDPR" },
  { id: "data-security", title: "Data Security" },
  { id: "ai-systems", title: "AI Systems, Automation & Data Processing" },
  { id: "automated-decisions", title: "Automated Decision-Making & Profiling" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "third-party-links", title: "Third-Party Links" },
  { id: "changes", title: "Changes to This Privacy Policy" },
  { id: "contact-us", title: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      slug="privacy-policy"
      breadcrumbLabel="Privacy Policy"
      badge="Legal · Data Protection"
      title="Privacy Policy"
      subtitle="Web Development & AI System Automation"
      description="How GroovyMark WebX collects, uses, stores, and protects your personal data — in compliance with the GDPR, UK GDPR, and applicable data protection laws in Sri Lanka."
      lastUpdated={LAST_UPDATED}
      sections={SECTIONS}
    >
      <Section id="introduction" num={1} title="Introduction">
        <P>
          GroovyMark WebX (a division of GroovyMark PVT Ltd; trading as "GroovyMark
          WebX", "we", "us", or "our") is committed to protecting the privacy
          and personal data of our website visitors, clients, project partners,
          and prospective customers. This Privacy Policy explains how we
          collect, use, store, and protect your personal data in compliance with
          the General Data Protection Regulation (GDPR) (EU) 2016/679, the UK
          GDPR, and applicable data protection laws in Sri Lanka.
        </P>
        <P>
          This policy applies to all personal data processed through our
          website, enquiry and project intake forms, CRM system, analytics
          tools, project management platforms, and any other services we
          provide.
        </P>
      </Section>

      <Section id="data-controller" num={2} title="Data Controller">
        <P>The data controller responsible for processing your personal data is:</P>
        <Table
          headers={["Field", "Details"]}
          rows={[
            ["Company Name", "GroovyMark PVT Ltd"],
            ["Division / Trading As", "GroovyMark WebX"],
            ["Registered Address", "GM HQ, Colombo, Sri Lanka"],
            [
              "Data Protection Contact",
              <Email key="e">webx@groovymark.com</Email>,
            ],
            ["Services", "Web Development & AI System Automation"],
          ]}
        />
        <P>
          If you have any questions about this Privacy Policy or our data
          practices, please contact us at <Email>webx@groovymark.com</Email>.
        </P>
      </Section>

      <Section
        id="personal-data-we-collect"
        num={3}
        title="Personal Data We Collect"
      >
        <P>We collect and process the following categories of personal data:</P>

        <SubH>3.1 Data You Provide Directly</SubH>
        <UL>
          <li>Full name, email address, phone number, and company name (via contact, project enquiry, and intake forms)</li>
          <li>Job title, role, business information, and project requirements shared during discovery calls or onboarding</li>
          <li>Technical specifications, design preferences, and content assets submitted as part of project delivery</li>
          <li>Communication records including emails, virtual meetings, messages, project notes, and call recordings</li>
          <li>Payment and billing information where applicable (processed via secure third-party payment providers)</li>
          <li>Any other information you voluntarily submit through our website or service interactions</li>
        </UL>

        <SubH>3.2 Data Collected Automatically</SubH>
        <UL>
          <li>IP address, browser type, operating system, and device information</li>
          <li>Pages visited, time spent on pages, referral source, and navigation paths</li>
          <li>Cookie data and tracking identifiers (see Section 8 for Cookie Policy)</li>
          <li>Technical logs and error reports generated during service delivery</li>
        </UL>

        <SubH>3.3 Project & CRM Data</SubH>
        <UL>
          <li>Client project history, delivery milestones, and feedback records</li>
          <li>Lead and prospect engagement data including content interactions, form submissions, and email opens</li>
          <li>AI automation project details, workflow configurations, and system integration data</li>
          <li>Buyer journey data from first contact to contract and delivery</li>
        </UL>
      </Section>

      <Section id="legal-basis" num={4} title="Legal Basis for Processing">
        <P>Under the GDPR, we process your personal data based on the following lawful bases:</P>
        <Table
          headers={["Lawful Basis", "Purpose", "Examples"]}
          rows={[
            ["Consent (Art. 6(1)(a))", "Processing based on your explicit, freely given consent", "Cookie consent, newsletter subscription, marketing communications"],
            ["Contract (Art. 6(1)(b))", "Processing necessary to perform or prepare a contract with you", "Project delivery, client onboarding, invoicing, technical support"],
            ["Legitimate Interest (Art. 6(1)(f))", "Processing necessary for our legitimate business interests", "Lead management, analytics, website improvement, fraud prevention, service quality monitoring"],
            ["Legal Obligation (Art. 6(1)(c))", "Processing required by applicable law", "Tax records, regulatory compliance, legal proceedings"],
          ]}
        />
      </Section>

      <Section id="how-we-use-your-data" num={5} title="How We Use Your Personal Data">
        <P>We use your personal data for the following purposes:</P>
        <UL>
          <li><B>Project delivery:</B> scoping, designing, developing, testing, and deploying web development and AI automation solutions</li>
          <li><B>Client management:</B> onboarding, account management, project progress tracking, and delivery of performance reports</li>
          <li><B>Lead management:</B> capturing, qualifying, scoring, and prioritizing inbound enquiries through our CRM</li>
          <li><B>Communication:</B> responding to enquiries, sending project updates, and providing after-delivery support</li>
          <li><B>AI system development:</B> processing project specifications and technical requirements to build custom automation workflows</li>
          <li><B>Marketing:</B> sending newsletters, case studies, and service updates (only with your explicit consent)</li>
          <li><B>Analytics:</B> understanding website traffic, optimizing content, and improving our conversion and delivery processes</li>
          <li><B>Business operations:</B> invoicing, internal reporting, subcontractor coordination, and process improvement</li>
          <li><B>Security and fraud prevention:</B> protecting our systems, clients, and data from unauthorized access or misuse</li>
        </UL>
      </Section>

      <Section id="data-sharing" num={6} title="Data Sharing & Third Parties">
        <P>We do not sell, rent, or trade your personal data to any third party. We may share your data with:</P>

        <SubH>6.1 Service Providers (Data Processors)</SubH>
        <UL>
          <li>Our internal CRM system (hosted and managed by GroovyMark WebX)</li>
          <li>Cloud hosting and infrastructure providers for project development environments and data backup</li>
          <li>Project management and collaboration platforms used during delivery (e.g., task tracking, file sharing)</li>
          <li>Email service providers for transactional and marketing communications</li>
          <li>Third-party AI platforms or APIs used in the delivery of AI automation projects (disclosed on a per-project basis)</li>
        </UL>
        <P>All data processors are bound by Data Processing Agreements (DPAs) that ensure GDPR-compliant handling of your data.</P>

        <SubH>6.2 Legal & Regulatory Disclosures</SubH>
        <P>We may disclose your data when required by law, court order, or regulatory authority, or to protect our legal rights and the safety of our clients and staff.</P>

        <SubH>6.3 International Data Transfers</SubH>
        <P>As we are based in Sri Lanka and serve global clients, your data may be transferred to and processed in countries outside the European Economic Area (EEA). When this occurs, we ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) approved by the European Commission, to protect your data in line with GDPR requirements.</P>
      </Section>

      <Section id="data-retention" num={7} title="Data Retention">
        <P>We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy:</P>
        <Table
          headers={["Data Type", "Retention Period"]}
          rows={[
            ["Enquiry / lead data (non-clients)", "24 months from last interaction; then anonymized or deleted"],
            ["Client project data", "Duration of contract plus 6 years to meet legal and accounting obligations"],
            ["AI automation project data & configurations", "Duration of contract plus 3 years, or as specified in the project agreement"],
            ["Analytics and cookie data", "Maximum 13 months from date of collection"],
            ["Marketing consent records", "Active consent period plus 3 years after withdrawal, for audit purposes"],
            ["Financial and billing records", "Minimum 6 years in line with applicable accounting and tax law"],
          ]}
        />
        <P>You may request deletion of your data at any time by contacting <Email>webx@groovymark.com</Email>, subject to our legal retention obligations.</P>
      </Section>

      <Section id="cookie-policy" num={8} title="Cookie Policy">
        <P>Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and support our client and lead management services. We obtain your consent before placing any non-essential cookies on your device.</P>

        <SubH>8.1 What Are Cookies?</SubH>
        <P>Cookies are small text files stored on your device when you visit our website. They help us recognize your device and remember your preferences, actions, and browsing patterns across visits.</P>

        <SubH>8.2 Cookie Consent</SubH>
        <P>When you first visit our website, you will be presented with a cookie consent banner that allows you to:</P>
        <UL>
          <li>Accept all cookies</li>
          <li>Reject all non-essential cookies</li>
          <li>Customize your cookie preferences by category</li>
        </UL>
        <P>You can change your preferences at any time via the cookie settings link in our website footer. Essential cookies cannot be disabled as they are required for the website to function.</P>

        <SubH>8.3 Types of Cookies We Use</SubH>
        <Table
          headers={["Category", "Purpose", "Examples", "Duration"]}
          rows={[
            ["Strictly Necessary", "Essential for website functionality and security", "Session cookies, CSRF tokens, cookie consent preferences", "Session / 1 year"],
            ["Analytics", "Help us understand how visitors use our website", "Page views, traffic sources, navigation paths, time on page", "Up to 13 months"],
            ["Functional", "Remember your preferences and personalize your experience", "Language preference, form auto-fill, display settings", "Up to 12 months"],
            ["Marketing / Tracking", "Track engagement for lead scoring and retargeting", "Lead source tracking, content engagement, CRM behavioral data", "Up to 13 months"],
          ]}
        />

        <SubH>8.4 Managing Cookies</SubH>
        <P>In addition to our cookie consent tool, you can control cookies through your browser settings. Please note that disabling certain cookies may affect website functionality and our ability to deliver personalized project recommendations and relevant content.</P>
      </Section>

      <Section id="your-rights" num={9} title="Your Rights Under GDPR">
        <P>If you are in the EEA, UK, or where applicable law grants similar rights, you have the following rights regarding your personal data:</P>
        <UL>
          <li><B>Right of Access (Art. 15):</B> Request a copy of the personal data we hold about you.</li>
          <li><B>Right to Rectification (Art. 16):</B> Request correction of inaccurate or incomplete data.</li>
          <li><B>Right to Erasure (Art. 17):</B> Request deletion of your personal data ("right to be forgotten").</li>
          <li><B>Right to Restrict Processing (Art. 18):</B> Request that we limit how we process your data in certain circumstances.</li>
          <li><B>Right to Data Portability (Art. 20):</B> Receive your data in a structured, machine-readable format and transfer it to another controller.</li>
          <li><B>Right to Object (Art. 21):</B> Object to processing based on legitimate interests or for direct marketing purposes.</li>
          <li><B>Right to Withdraw Consent (Art. 7(3)):</B> Withdraw consent at any time for consent-based processing, without affecting prior lawful processing.</li>
          <li><B>Right to Lodge a Complaint:</B> File a complaint with a supervisory authority if you believe your data rights have been violated.</li>
        </UL>
        <P>To exercise any of these rights, please contact us at <Email>webx@groovymark.com</Email>. We will respond within <B>30 days</B>. For complex requests requiring additional time (up to 60 days), we will inform you of the extension and reasons.</P>
      </Section>

      <Section id="data-security" num={10} title="Data Security">
        <P>We take the security of your personal data seriously and implement appropriate technical and organizational measures to protect it, including:</P>
        <UL>
          <li>Encryption of data in transit (TLS/SSL) and at rest</li>
          <li>Access controls limiting data access to authorized personnel only</li>
          <li>Secure development environments and code repositories for client projects</li>
          <li>Regular security reviews of internal systems and third-party integrations</li>
          <li>Secure cloud storage with redundancy and backup protocols</li>
          <li>Employee confidentiality agreements and data protection training</li>
          <li>Incident response procedures for data breach detection and notification</li>
        </UL>
        <P>In the event of a personal data breach that poses a risk to your rights, we will notify the relevant supervisory authority within <B>72 hours</B> and inform affected individuals without undue delay, as required by GDPR Articles 33 and 34.</P>
      </Section>

      <Section id="ai-systems" num={11} title="AI Systems, Automation & Data Processing">
        <P>As a provider of AI system automation services, we may process client-supplied data as part of designing, building, and testing automated workflows. In these cases:</P>
        <UL>
          <li>We act as a <B>Data Processor</B> on your behalf and process only the data necessary for the agreed project scope</li>
          <li>Client data used in AI system development is handled under the terms of a Data Processing Agreement (DPA), provided upon request</li>
          <li>We do not use client project data to train our own AI models or share it with third-party AI providers beyond what is necessary for delivery</li>
          <li>Any third-party AI APIs or platforms used in your project will be disclosed in advance and governed by appropriate data protection safeguards</li>
        </UL>
        <P>If your project involves the processing of personal data through automated systems we build for you, we will work with you to ensure your own GDPR compliance obligations are met through appropriate technical and contractual measures.</P>
      </Section>

      <Section id="automated-decisions" num={12} title="Automated Decision-Making & Profiling">
        <P>Our internal lead scoring system uses automated processes to classify enquiries and leads as High, Medium, or Low priority based on behavioral and firmographic data. This profiling helps us allocate resources and tailor our communications.</P>
        <P>This automated scoring does not produce legal effects or similarly significant effects on you. However, under GDPR Article 22, you have the right to:</P>
        <UL>
          <li>Request human review of any automated decision that significantly affects you</li>
          <li>Express your point of view and contest the decision</li>
          <li>Receive an explanation of the logic involved in the scoring process</li>
        </UL>
        <P>To request a review, contact us at <Email>webx@groovymark.com</Email>.</P>
      </Section>

      <Section id="childrens-privacy" num={13} title="Children's Privacy">
        <P>Our services are designed for businesses and professional individuals and are not directed at persons under the age of 16. We do not knowingly collect personal data from children. If we become aware that we have collected data from a child under 16, we will delete it promptly. If you believe a child has provided us with personal data, please contact <Email>webx@groovymark.com</Email> immediately.</P>
      </Section>

      <Section id="third-party-links" num={14} title="Third-Party Links">
        <P>Our website and content may contain links to third-party websites, platforms, or services (such as GitHub, LinkedIn, YouTube, or partner sites). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal data.</P>
      </Section>

      <Section id="changes" num={15} title="Changes to This Privacy Policy">
        <P>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or business operations. When we make material changes:</P>
        <UL>
          <li>We will update the "Last Updated" date at the top of this policy</li>
          <li>We will notify existing clients and active leads via email</li>
          <li>We will display a prominent notice on our website</li>
        </UL>
        <P>We encourage you to review this policy periodically. Continued use of our website and services after changes are posted constitutes your acknowledgment of the updated policy.</P>
      </Section>

      <Section id="contact-us" num={16} title="Contact Us">
        <P>If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please contact us:</P>
        <Table
          headers={["Contact Detail", "Information"]}
          rows={[
            ["Data Protection Contact", <Email key="e">webx@groovymark.com</Email>],
            ["Company", "GroovyMark PVT Ltd (trading as GroovyMark WebX)"],
            ["Location", "Sri Lanka"],
            ["Services", "Web Development & AI System Automation"],
          ]}
        />
        <P>For EU/UK residents, you may also lodge a complaint with your local Data Protection Authority (DPA) if you believe your data protection rights have been infringed.</P>
      </Section>

      <LegalFooter effectiveDate={LAST_UPDATED} />
    </LegalLayout>
  );
}

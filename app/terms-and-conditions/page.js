import {
  LegalLayout,
  Section,
  PartDivider,
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
  title: "Terms and Conditions — Service Agreement",
  description:
    "The legally binding agreement governing all services from GroovyMark WebX — project terms, payments, IP, confidentiality, liability, and dispute resolution. Governed by the laws of Sri Lanka.",
  alternates: { canonical: "/terms-and-conditions" },
  openGraph: {
    type: "article",
    title: "Terms and Conditions | GroovyMark WebX",
    description:
      "The legally binding service agreement for all GroovyMark WebX engagements.",
    url: "/terms-and-conditions",
  },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "May 21, 2026";

const SECTIONS = [
  { id: "introduction", title: "Introduction" },
  { id: "definitions", title: "Definitions" },
  // PART A
  { id: "discovery", title: "Discovery & Pre-Development Phase", partLabel: "A" },
  { id: "client-materials", title: "Client-Provided Materials & Access", partLabel: "A" },
  { id: "collaboration", title: "Client Collaboration & Timely Feedback", partLabel: "A" },
  { id: "timelines", title: "Timelines & Delays", partLabel: "A" },
  { id: "scope", title: "Scope of Work & Revisions", partLabel: "A" },
  { id: "communication", title: "Communication & Professional Conduct", partLabel: "A" },
  // PART B
  { id: "payment-structure", title: "Development Project Payment Structure", partLabel: "B" },
  { id: "domain-hosting", title: "Domain & Hosting", partLabel: "B" },
  { id: "bug-guarantee", title: "Bug-Free Lifetime Guarantee", partLabel: "B" },
  { id: "third-party-costs", title: "Third-Party Costs, Subscriptions & APIs", partLabel: "B" },
  { id: "retainers", title: "Monthly Retainer Projects", partLabel: "B" },
  { id: "payment-methods", title: "Payment Methods & Currencies", partLabel: "B" },
  { id: "refunds", title: "Refund & Cancellation Policy", partLabel: "B" },
  { id: "ip", title: "Ownership & Intellectual Property", partLabel: "B" },
  // General clauses
  { id: "confidentiality", title: "Confidentiality" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "termination", title: "Termination" },
  { id: "disputes", title: "Dispute Resolution" },
  { id: "governing-law", title: "Governing Law" },
  { id: "amendments", title: "Amendments & Modifications" },
  { id: "severability", title: "Severability" },
  { id: "entire-agreement", title: "Entire Agreement" },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalLayout
      slug="terms-and-conditions"
      breadcrumbLabel="Terms and Conditions"
      badge="Legal · Terms of Service"
      title="Terms and Conditions"
      subtitle="Web Development & AI System Automation"
      description="The legally binding agreement that governs all services we provide — covering project terms, payments, IP, confidentiality, and dispute resolution."
      lastUpdated={EFFECTIVE_DATE}
      sections={SECTIONS}
    >
      <Section id="introduction" num={1} title="Introduction">
        <P>
          These Terms and Conditions ("Agreement") constitute a legally binding
          contract between GroovyMark PVT Ltd, trading as GroovyMark WebX
          ("Company", "we", "us", or "our"), and the individual or entity
          engaging our services ("Client", "you", or "your"). By signing a
          service agreement, submitting a project intake form, or making a
          payment to GroovyMark WebX, you agree to be bound by these Terms and
          Conditions in their entirety.
        </P>
        <P>
          This Agreement governs all services provided by the Company,
          including but not limited to website design and development, web
          application development, AI system automation, workflow integration,
          API development, CRM builds, and any related technical consulting or
          support work.
        </P>
      </Section>

      <Section id="definitions" num={2} title="Definitions">
        <UL>
          <li><B>"Services"</B> refers to all deliverables, tasks, and activities performed by the Company as outlined in the Client's service agreement or project proposal.</li>
          <li><B>"Project"</B> refers to a defined scope of work agreed upon by both parties, including timelines, milestones, and deliverables.</li>
          <li><B>"Development Project"</B> refers to website builds, web application development, AI automation systems, API integrations, CRM builds, or other technical projects.</li>
          <li><B>"Retainer"</B> refers to recurring monthly service engagements for ongoing maintenance, support, or continuous development.</li>
          <li><B>"Deliverables"</B> refers to all outputs including designs, code, databases, automation workflows, documentation, and other materials produced by the Company for the Client.</li>
          <li><B>"Working Days"</B> refers to Monday through Friday, excluding public holidays observed in Sri Lanka.</li>
          <li><B>"Client Portal"</B> refers to our online system for project status, invoices, payments, and communications.</li>
          <li><B>"Effective Date"</B> means the date on which the first confirmed payment is received by the Company.</li>
          <li><B>"Advance Payment"</B> refers to the mandatory upfront payment required before any work commences.</li>
          <li><B>"Handover"</B> refers to the formal transfer of project files, credentials, and access to the Client upon full payment.</li>
          <li><B>"Third-Party Costs"</B> refers to expenses for external platforms, APIs, subscriptions, payment gateways, hosting renewals, and software licenses not included in the project fee.</li>
        </UL>
      </Section>

      <PartDivider label="Part A" title="Project Terms" />

      <Section id="discovery" num={3} title="Discovery & Pre-Development Phase">
        <P>
          Before any design or development begins, the Company requires a
          minimum of <B>ten (10) working days</B> for discovery and
          pre-development activities. This mandatory phase ensures all work
          aligns with the Client's business objectives, technical requirements,
          and brand identity. No design or development work will commence until
          this phase is completed and written Client approval is obtained.
        </P>

        <SubH>3.1 Pre-Development Activities</SubH>
        <Table
          headers={["Phase", "Activities", "Client Involvement"]}
          rows={[
            ["Days 1–2", "Requirements gathering, technical scoping, platform & stack selection, competitor review", "Provide brief, business goals, brand assets, and existing system access"],
            ["Days 3–5", "Sitemap / architecture design, wireframe creation, UX flow planning", "Review wireframes and provide feedback within 2 working days"],
            ["Days 6–8", "Visual design direction, UI mockups for key pages, brand application", "Approve design direction and mockups"],
            ["Days 9–10", "Final scope confirmation, project timeline setup, development environment preparation, written Client sign-off", "Provide written approval to commence development"],
          ]}
        />
        <P>
          The pre-development timeline may be extended if Client feedback or
          approvals are delayed. The Company is not responsible for project
          delays caused by late Client responses during this phase.
        </P>

        <SubH>3.2 Development Commencement</SubH>
        <P>
          Development will begin only after the Client has provided written
          approval of all pre-development materials including wireframes, UI
          mockups, and the agreed project scope. Verbal approvals are not
          accepted as sign-off for development commencement.
        </P>
      </Section>

      <Section id="client-materials" num={4} title="Client-Provided Materials & Access">
        <P>
          To ensure accurate, brand-consistent, and timely delivery, the Client
          must provide the following before development commences:
        </P>
        <UL>
          <li>Brand logo in high-resolution format (PNG, SVG, or AI file with transparent background preferred)</li>
          <li>Company name, tagline, brand description, and all content for website pages (text, images, video assets)</li>
          <li>Contact information including email address, phone number, and social media links</li>
          <li>Brand color palette with hex codes and typography guidelines (if available)</li>
          <li>Access credentials for existing hosting, domain registrar, CMS, or third-party platforms where integration is required</li>
          <li>Any existing brand guidelines, design systems, or technical documentation</li>
          <li>Product or service imagery and media assets relevant to the project</li>
        </UL>
        <Callout kind="warning" title="Material Provision Deadline">
          <P>
            If required materials are not provided within <B>five (5) working days</B>{" "}
            of the project start date, the Company reserves the right to pause
            the project until all materials are received. This pause does not
            extend agreed deadlines or reduce the project fee.
          </P>
        </Callout>
      </Section>

      <Section id="collaboration" num={5} title="Client Collaboration & Timely Feedback">
        <P>Successful project delivery depends on active Client collaboration. The Client agrees to:</P>
        <UL>
          <li>Provide timely feedback, approvals, and content for all deliverables as requested by the Company</li>
          <li>Respond to review requests within <B>two (2) working days</B> unless a different timeline is agreed in writing</li>
          <li>Designate a single primary point of contact authorized to provide approvals and make binding decisions</li>
          <li>Attend scheduled calls, design reviews, and milestone meetings as agreed in the project plan</li>
          <li>Provide all requested content, credentials, and data in a timely manner to maintain the development schedule</li>
        </UL>
        <Callout kind="warning" title="Important: Feedback Delays">
          <P>
            If the Client fails to provide feedback, approvals, or required
            materials within agreed timeframes, the Company reserves the right
            to proceed based on professional judgment, pause the project, or
            adjust the delivery timeline. In no case shall such delays entitle
            the Client to a refund, discount, or penalty against the Company.
          </P>
        </Callout>
      </Section>

      <Section id="timelines" num={6} title="Timelines & Delays">
        <SubH>6.1 Working Days Definition</SubH>
        <P>
          All timelines referenced in this Agreement are expressed in working
          days: Monday through Friday, excluding all public holidays officially
          observed in Sri Lanka. Weekends are not counted as working days.
        </P>

        <SubH>6.2 Agreed Timelines</SubH>
        <UL>
          <li>All project timelines will be mutually agreed at project initiation and documented in the project proposal or service agreement.</li>
          <li>The Company will make commercially reasonable efforts to meet all agreed delivery dates.</li>
          <li>If the Company foresees a delay on its part, it will notify the Client in advance with a revised schedule.</li>
        </UL>

        <SubH>6.3 Client-Caused Delays</SubH>
        <P>
          Delays caused by the Client, including delayed feedback, slow
          approvals, late provision of content or credentials, unavailability
          for calls, or failure to make scheduled milestone payments, may
          extend the delivery timeline. Such delays:
        </P>
        <UL>
          <li>Do not entitle the Client to any refund, discount, or compensation</li>
          <li>Do not constitute a breach of this Agreement by the Company</li>
          <li>May result in rescheduling to the next available development slot</li>
          <li>If exceeding ten (10) working days cumulatively, may require a revised timeline and potentially adjusted scope or fees</li>
        </UL>

        <SubH>6.4 Force Majeure</SubH>
        <P>
          Neither party shall be held liable for delays arising from
          circumstances beyond their reasonable control, including natural
          disasters, pandemics, government actions, internet or power outages,
          acts of war, or civil unrest. The affected party shall notify the
          other as soon as reasonably practicable, and timelines will be
          adjusted accordingly.
        </P>
      </Section>

      <Section id="scope" num={7} title="Scope of Work & Revisions">
        <SubH>7.1 Defined Scope</SubH>
        <P>
          The project scope, deliverables, technical stack, and specifications
          will be clearly defined and documented in the project proposal
          before initiation. Both parties must agree on scope in writing before
          any work begins. The documented scope is the single source of truth
          for what is included in the project fee.
        </P>

        <SubH>7.2 Revision Rounds</SubH>
        <UL>
          <li>Each project includes a defined number of revision rounds as specified in the project proposal (typically two (2) rounds for standard deliverables).</li>
          <li>Revisions must be submitted as a single, consolidated set of feedback per revision round. Piecemeal or contradictory feedback may be treated as additional revision rounds.</li>
          <li>Revisions must remain within the original scope and specifications. Requests to change fundamental direction, redesign completed sections, or alter core functionality after development has commenced are considered scope changes, not revisions.</li>
        </UL>

        <SubH>7.3 Out-of-Scope Work & Additional Charges</SubH>
        <UL>
          <li>Any work requested beyond the agreed scope — including additional features, extra pages, new integrations, or additional revision rounds — will be treated as out-of-scope and quoted separately.</li>
          <li>Out-of-scope work will commence only after the Client approves the additional cost in writing.</li>
          <li>Refunds will not be issued based on subjective preferences if work delivered meets the agreed scope and documented standards.</li>
        </UL>

        <SubH>7.4 Scope Creep Protection</SubH>
        <P>
          Any verbal discussions about changes or additions to the project
          scope must be formalized in writing via email or the Client Portal
          before being acted upon. The Company is not obligated to deliver
          verbally discussed but undocumented scope changes.
        </P>
      </Section>

      <Section id="communication" num={8} title="Communication & Professional Conduct">
        <Callout kind="warning" title="Critical: Official Communication Channels Only">
          <P>
            All project-related communications, approvals, and payment
            instructions must go through official channels: the Client Portal,
            official company email addresses, or the designated communication
            channel set up during onboarding. The Company is not responsible
            for agreements, promises, or commitments made through personal or
            unofficial channels.
          </P>
        </Callout>

        <SubH>8.1 Authorized Communication</SubH>
        <P>
          All project discussions, approvals, feedback, and binding decisions
          must be communicated through the Client Portal, official Company
          email, or designated project management channel. The Client's
          primary contact and the Company's assigned project manager are the
          only authorized parties for binding decisions.
        </P>

        <SubH>8.2 Unauthorized Personal Engagement</SubH>
        <P>
          The Company shall not be held responsible or liable for any
          agreements, promises, discounts, or commitments made through personal
          or unofficial channels between the Client and individual team
          members. This includes:
        </P>
        <UL>
          <li>Side agreements on pricing or scope made with individual staff members</li>
          <li>Additional work requested through personal messages, calls, or social media</li>
          <li>Payment arrangements made outside the Client Portal or official invoicing system</li>
          <li>Confidential information shared with individual team members outside secure official channels</li>
        </UL>

        <SubH>8.3 Payments Through Official Channels Only</SubH>
        <P>
          All payments must be made exclusively through the official Client
          Portal payment gateway or via bank transfer to the Company's official
          business account as detailed in Section 14. The Company will not
          honor payments made to individual employees, personal accounts, or
          through any unofficial method.
        </P>
      </Section>

      <PartDivider label="Part B" title="Payment Terms" />

      <Section id="payment-structure" num={9} title="Development Project Payment Structure">
        <P>
          All development projects — including website builds, web application
          development, AI automation systems, and technical integrations —
          follow a three-milestone payment structure:
        </P>
        <Table
          headers={["Milestone", "Payment %", "When Due", "Condition"]}
          rows={[
            [<B key="a">Advance</B>, "50% of total project fee", "Before any work begins", "Non-refundable once work commences. Covers planning, discovery, design, resource allocation, and environment setup."],
            [<B key="b">Pre-Final Revision</B>, "25% of total project fee", "Before the final revision round is delivered", "Triggered when the Company notifies the Client that the project is ready for final review. Work on final revisions begins only upon confirmed receipt."],
            [<B key="c">Delivery</B>, "25% of total project fee", "Before live deployment and Handover", "Due before final files, source code, and domain/hosting connection are handed to the Client."],
          ]}
        />
        <Callout kind="info" title="Payment Summary">
          <P>
            50% to start → 25% before final revision → 25% before delivery.{" "}
            <B>Total = 100% before Handover.</B>
          </P>
        </Callout>

        <SubH>9.1 Advance Payment Requirement</SubH>
        <P>
          The Company will not begin any project work — including wireframing,
          design, coding, or configuration — without confirmed receipt of the
          50% advance payment. This advance covers initial planning, discovery,
          team assignment, environment setup, and early-stage development.
        </P>

        <SubH>9.2 Pre-Final Revision Payment</SubH>
        <P>
          When the project reaches a stage where the final revision round is
          ready to be initiated, the Company will notify the Client. The 25%
          pre-final revision payment must be received and confirmed before the
          Company proceeds with incorporating final revision feedback and
          preparing for delivery.
        </P>

        <SubH>9.3 Final Payment & Project Delivery</SubH>
        <P>
          The remaining 25% of the total project fee is due prior to live
          deployment, domain connection, and Handover of all project files,
          source code, databases, and credentials. No Handover will occur
          until this payment is confirmed.
        </P>
        <Callout kind="warning" title="No Handover Without Full Payment">
          <P>
            Domain connection, live deployment, source code release, and
            credential handover will only be executed after 100% of the total
            project fee has been received and confirmed. The Company reserves
            the right to withhold all deliverables until payment obligations
            are fully met.
          </P>
        </Callout>

        <SubH>9.4 Project Completion & Full Payment Obligation</SubH>
        <P>
          If <B>ninety percent (90%)</B> or more of the total development scope
          has been completed by the Company, the Client is obligated to pay
          the full project fee, even if the Client decides to cancel or
          discontinue the project. This clause exists because the vast
          majority of resources, time, and effort will already have been
          invested.
        </P>

        <SubH>9.5 Demo Links & Staging Environments</SubH>
        <UL>
          <li>All project previews, demos, and staging versions will be provided exclusively through the Company's own staging environments and demo links.</li>
          <li>The Client's production domain and live hosting environment will only be connected after 100% of the project fee has been received.</li>
          <li>Demo links are provided for review and approval purposes only. The Client shall not publicly share, distribute, or use demo links as production environments.</li>
        </UL>
      </Section>

      <Section id="domain-hosting" num={10} title="Domain & Hosting">
        <SubH>10.1 First Year Complimentary</SubH>
        <P>
          The Company will provide domain registration and web hosting for a
          period of <B>twelve (12) months</B> from the project Effective Date
          at no additional charge to the Client. This complimentary provision
          covers:
        </P>
        <UL>
          <li>Domain name registration for one (1) domain as agreed in the project scope</li>
          <li>Web hosting on an appropriate server plan for the project requirements</li>
          <li>Basic SSL certificate (HTTPS) for the duration of the first year</li>
        </UL>

        <SubH>10.2 Renewal Responsibility</SubH>
        <Callout kind="info" title="Client Responsibility from Year 2 Onwards">
          <P>
            From the second year onwards, all domain registration renewals,
            hosting plan renewals, and SSL certificate renewals are the sole
            financial responsibility of the Client. The Company will issue a
            renewal reminder at least <B>thirty (30) days</B> before the expiry
            date. Failure to renew may result in website downtime, loss of
            domain, or loss of data, for which the Company bears no liability.
          </P>
        </Callout>
        <UL>
          <li>The Company will provide the Client with all necessary account credentials and transfer access to domain/hosting accounts as part of the Handover process.</li>
          <li>If the Client requests the Company to manage renewals on their behalf, this will be billed as an additional service under a separate Maintenance Retainer agreement.</li>
          <li>The Company is not liable for any website downtime, data loss, or domain expiry resulting from the Client's failure to renew hosting or domain services after the complimentary period.</li>
        </UL>

        <SubH>10.3 Hosting Transfer</SubH>
        <P>
          If the Client wishes to migrate to a different hosting provider
          after the first year, the Company will assist with migration at a
          fixed or hourly fee to be agreed separately. All migration costs,
          including the new hosting provider's fees, are the Client's
          responsibility.
        </P>
      </Section>

      <Section id="bug-guarantee" num={11} title="Bug-Free Lifetime Guarantee">
        <SubH>11.1 Guarantee Terms</SubH>
        <P>
          GroovyMark WebX provides a lifetime bug-free guarantee on all
          websites and web systems developed and delivered by the Company.
          This means:
        </P>
        <UL>
          <li>Any bugs, technical errors, or broken functionality arising from the Company's own code or development work will be identified and resolved at no additional cost to the Client.</li>
          <li>This guarantee applies to functional defects: issues where features built by the Company do not perform as specified in the agreed project scope.</li>
          <li>Bug reports must be submitted through the Client Portal or official email at <Email>webx@groovymark.com</Email>, with a clear description of the issue and steps to reproduce it.</li>
          <li>The Company will acknowledge bug reports within <B>two (2) working days</B> and provide a resolution timeline.</li>
        </UL>

        <SubH>11.2 Guarantee Conditions & Exclusions</SubH>
        <Callout kind="warning" title="Guarantee Void Upon Client-Side Access">
          <P>
            The lifetime bug-free guarantee is immediately and permanently
            void if the Client, or any third party acting on the Client's
            behalf, gains access to and modifies, edits, or alters the
            website's codebase, database, server configuration, plugins,
            themes, or any other core system component without the Company's
            written consent. Once third-party modifications are made, the
            Company cannot guarantee the integrity of the system and bears no
            responsibility for any resulting issues, defects, or failures.
          </P>
        </Callout>
        <P>The guarantee does not cover the following:</P>
        <UL>
          <li>Issues arising from changes made by the Client or any third party to the codebase, database, or server configuration</li>
          <li>Compatibility issues caused by third-party plugin, theme, or platform updates performed outside Company management</li>
          <li>Issues resulting from expired hosting, domain, or SSL certificates (see Section 10)</li>
          <li>Performance degradation caused by Client-uploaded content, excessive data, or unapproved third-party integrations</li>
          <li>Issues arising from the Client's failure to follow the Company's post-Handover maintenance recommendations</li>
          <li>Feature requests or design changes — these are classified as scope changes, not bugs</li>
        </UL>

        <SubH>11.3 Post-Handover Maintenance</SubH>
        <P>
          Following project Handover, the Client is strongly advised to engage
          the Company's ongoing Maintenance Retainer service to ensure
          continued system integrity, security updates, and performance
          monitoring. Once the Client takes full independent control of the
          website, the Company's ability to guarantee system behaviour is
          limited to issues attributable solely to the original delivered code.
        </P>
      </Section>

      <Section id="third-party-costs" num={12} title="Third-Party Costs, Subscriptions & APIs">
        <Callout kind="info" title="Client Financial Responsibility">
          <P>
            The Company's project fee covers design, development, and delivery
            of the agreed system only. All costs associated with third-party
            platforms, services, APIs, and subscriptions are the sole financial
            responsibility of the Client and are not included in the project
            fee.
          </P>
        </Callout>
        <P>
          The following costs are explicitly excluded from all project fees
          and must be purchased, subscribed to, and maintained by the Client:
        </P>

        <SubH>12.1 Payment Gateways</SubH>
        <UL>
          <li>Merchant account and payment gateway setup fees (e.g., Stripe, PayPal, PayHere, Payoneer, or any local payment processor)</li>
          <li>Transaction fees, processing fees, and monthly subscription costs charged by payment gateway providers</li>
          <li>Any PCI-DSS compliance or additional verification costs required by the payment provider</li>
        </UL>

        <SubH>12.2 Third-Party Software & Subscriptions</SubH>
        <UL>
          <li>CMS premium themes, plugins, or extensions not included in the agreed development scope</li>
          <li>Software-as-a-Service (SaaS) platform subscriptions required for the system (e.g., CRM platforms, email marketing tools, analytics platforms)</li>
          <li>License fees for commercial fonts, stock imagery, stock video, or other media not provided by the Client</li>
          <li>CDN (Content Delivery Network) services beyond what is included in the agreed hosting plan</li>
        </UL>

        <SubH>12.3 AI & Automation APIs</SubH>
        <UL>
          <li>API usage costs for AI and machine learning platforms (e.g., OpenAI, Google AI, AWS AI services, or similar)</li>
          <li>Monthly or per-call charges for any third-party automation platform APIs used within the delivered AI system</li>
          <li>Webhook, integration, and data pipeline service subscription costs (e.g., Zapier, Make, n8n cloud)</li>
          <li>Cloud compute or serverless function costs for AI workloads hosted on AWS, GCP, Azure, or similar platforms</li>
        </UL>

        <SubH>12.4 Other External Services</SubH>
        <UL>
          <li>Business email hosting and professional email account services</li>
          <li>SMS gateway or communication API costs (e.g., Twilio, Vonage)</li>
          <li>Map or geolocation API costs (e.g., Google Maps Platform)</li>
          <li>Any government, regulatory, or compliance-related registration fees for online businesses or digital services</li>
        </UL>
        <P>
          The Company will clearly identify all anticipated third-party costs
          in the project proposal so the Client can budget accordingly.
          However, the Company makes no representations or warranties regarding
          third-party pricing, availability, or terms, as these are controlled
          by external providers.
        </P>
      </Section>

      <Section id="retainers" num={13} title="Monthly Retainer Projects">
        <SubH>13.1 Payment Schedule</SubH>
        <P>
          For ongoing monthly retainer engagements (such as maintenance,
          support, or continuous development), the full monthly fee must be
          received and confirmed within the first <B>seven (7) calendar days</B>{" "}
          of each month to ensure uninterrupted service delivery.
        </P>

        <SubH>13.2 New Retainer Activation</SubH>
        <P>
          New Clients must pay the full monthly retainer fee before any
          retainer work begins. The retainer will be activated only upon
          confirmed receipt of the first monthly payment.
        </P>

        <SubH>13.3 Late Payment Consequences</SubH>
        <UL>
          <li>If payment is not received by the 7th calendar day, the Company reserves the right to pause all active retainer work.</li>
          <li>A late payment fee of <B>5% of the outstanding invoice amount</B> will be applied for each additional week of delay.</li>
          <li>If payment remains outstanding for more than thirty (30) calendar days, the Company may terminate the retainer agreement.</li>
          <li>Paused services will resume within two (2) working days of receiving the overdue amount plus applicable late fees.</li>
        </UL>
      </Section>

      <Section id="payment-methods" num={14} title="Payment Methods & Currencies">
        <SubH>14.1 Accepted Currencies</SubH>
        <Table
          headers={["Currency", "Code", "Notes"]}
          rows={[
            ["United States Dollar", "USD", "Primary billing currency for international clients"],
            ["Australian Dollar", "AUD", "Accepted for Australian clients"],
            ["Sri Lankan Rupee", "LKR", "Accepted for local Sri Lankan clients at prevailing exchange rate at time of invoicing"],
          ]}
        />

        <SubH>14.2 Online Payment Gateway</SubH>
        <UL>
          <li>Clients may pay via our secure online payment gateway accessible through the Client Portal.</li>
          <li>A payment processing fee of <B>3%</B> will be charged on all gateway transactions, clearly itemized on the invoice.</li>
          <li>This fee covers third-party payment processor charges and is non-negotiable.</li>
        </UL>

        <SubH>14.3 Bank Transfer</SubH>
        <UL>
          <li>Direct bank transfers to the Company's official business account are accepted at no additional charge.</li>
          <li>Bank transfer details will be provided on each invoice. The Client is responsible for their own bank's wire transfer fees. The Company must receive the full invoiced amount net of any banking fees.</li>
          <li>Bank transfers may take 2–5 business days to clear.</li>
        </UL>

        <SubH>14.4 Invoice Access & Records</SubH>
        <UL>
          <li>All invoices are accessible via the Client Portal at any time.</li>
          <li>Invoices are issued at the beginning of each billing cycle (retainers) or at project milestones (development projects).</li>
          <li>The Company retains invoice records for a minimum of six (6) years in compliance with applicable tax regulations.</li>
        </UL>
      </Section>

      <Section id="refunds" num={15} title="Refund & Cancellation Policy">
        <SubH>15.1 No Refund on Advance Payments</SubH>
        <P>
          Once the project has commenced and the advance payment has been
          made, this amount is non-refundable. The advance covers time invested
          in discovery, planning, team allocation, environment setup, and
          early-stage development that cannot be reversed.
        </P>

        <SubH>15.2 Monthly Retainer Refunds</SubH>
        <UL>
          <li>Monthly retainer fees are non-refundable once the billing month has begun and work has been performed.</li>
          <li>To cancel a retainer, written notice must be provided at least <B>fifteen (15) working days</B> before the start of the next billing month.</li>
          <li>Cancellation without proper notice does not entitle the Client to a refund for the current month.</li>
        </UL>

        <SubH>15.3 Company-Initiated Cancellation</SubH>
        <P>
          If the Company is unable to deliver the project due to internal
          reasons, a fair refund will be issued based on:
        </P>
        <UL>
          <li>The percentage of deliverables completed and delivered</li>
          <li>Time and resources already invested by the Company</li>
          <li>Any third-party costs incurred on behalf of the Client</li>
        </UL>
        <P>
          A detailed breakdown and refund calculation will be provided within
          ten (10) working days of the cancellation decision.
        </P>

        <SubH>15.4 Subjective Dissatisfaction</SubH>
        <P>
          Refunds will not be issued based on subjective preferences, personal
          taste, or aesthetic disagreements if the work delivered meets the
          agreed scope, specifications, and documented standards.
        </P>
      </Section>

      <Section id="ip" num={16} title="Ownership & Intellectual Property">
        <SubH>16.1 Transfer of Ownership</SubH>
        <P>
          Full ownership and intellectual property rights of all project
          deliverables — including source code, design assets, databases, and
          automation scripts — will be transferred to the Client upon receipt
          of <B>100% of the total project fee</B>. Until full payment is
          received, all deliverables remain the exclusive property of
          GroovyMark PVT Ltd.
        </P>

        <SubH>16.2 Non-Payment & Early Termination</SubH>
        <UL>
          <li>In the event of early termination or non-payment, the Company is not obligated to release any partial work, source code, design files, or credentials.</li>
          <li>The Company reserves the right to disable, remove, or restrict access to any delivered work if payment obligations are not met within thirty (30) calendar days of the due date.</li>
        </UL>

        <SubH>16.3 Abandoned Projects</SubH>
        <Callout kind="warning" title="Abandoned Project Policy">
          <P>
            Projects paused or stopped by the Client and inactive for{" "}
            <B>three (3) months</B> or more may be repurposed, resold, or
            reused by the Company, unless the Client formally requests in
            writing that the work not be reused. Such a request must be made
            before the 3-month period expires and is only valid if all
            outstanding payments are fully settled.
          </P>
        </Callout>

        <SubH>16.4 Company Portfolio Rights</SubH>
        <P>
          Unless explicitly restricted in writing by the Client, the Company
          retains the right to showcase completed work in its portfolio, case
          studies, and marketing materials. Client names and logos may be used
          in the Company's client list. Confidential business data and
          proprietary information will never be shared without explicit Client
          consent.
        </P>

        <SubH>16.5 Third-Party Assets</SubH>
        <P>
          Deliverables may include third-party assets such as licensed stock
          imagery, fonts, icon libraries, or open-source software components.
          The Client is responsible for maintaining required licenses for such
          assets after Handover. The Company will clearly identify all
          third-party assets and their license terms upon project delivery.
        </P>
      </Section>

      <Section id="confidentiality" num={17} title="Confidentiality">
        <P>
          Both parties agree to maintain strict confidentiality regarding all
          proprietary information exchanged during the engagement, including
          business strategies, financial data, system architecture, trade
          secrets, and any information marked as confidential.
        </P>
        <UL>
          <li>Confidential information shall not be disclosed to any third party without prior written consent.</li>
          <li>Confidentiality obligations survive the termination of this Agreement for a period of <B>two (2) years</B>.</li>
          <li>This clause does not apply to information that is publicly available, already known to the receiving party, independently developed, or required to be disclosed by law.</li>
        </UL>
      </Section>

      <Section id="liability" num={18} title="Limitation of Liability">
        <UL>
          <li>The Company's total liability under this Agreement shall not exceed the total fees paid by the Client for the specific project giving rise to the claim.</li>
          <li>The Company shall not be liable for any indirect, incidental, consequential, or punitive damages, including lost profits, business interruption, data loss, or loss of revenue.</li>
          <li>The Company is not responsible for the performance, availability, or pricing changes of third-party platforms, APIs, or services used within the delivered system.</li>
          <li>The Company does not guarantee specific business outcomes such as traffic volumes, conversion rates, lead generation results, or revenue growth unless explicitly stated in a separate performance guarantee agreement.</li>
          <li>The Company bears no liability for issues, data loss, or system failures arising after the Client or a third party modifies the delivered codebase or system configuration.</li>
        </UL>
      </Section>

      <Section id="termination" num={19} title="Termination">
        <SubH>19.1 Client Termination</SubH>
        <P>
          The Client may terminate this Agreement by providing{" "}
          <B>fifteen (15) working days'</B> written notice via official email
          or the Client Portal. Termination does not relieve the Client of
          payment obligations for work already completed or in progress.
        </P>

        <SubH>19.2 Company Termination</SubH>
        <P>The Company may terminate this Agreement immediately if:</P>
        <UL>
          <li>The Client fails to make payment within thirty (30) calendar days of the invoice due date</li>
          <li>The Client breaches any material term of this Agreement and fails to remedy it within ten (10) working days of written notice</li>
          <li>The Client engages in abusive, threatening, or unprofessional conduct toward Company team members</li>
          <li>Continued service would require the Company to act in violation of applicable laws or regulations</li>
        </UL>

        <SubH>19.3 Post-Termination</SubH>
        <UL>
          <li>The Company will provide all completed deliverables for which full payment has been received within ten (10) working days of termination.</li>
          <li>All Company access to Client accounts and systems will be revoked within five (5) working days.</li>
          <li>Outstanding invoices remain due and payable regardless of termination.</li>
          <li>Data retention and deletion will be handled in accordance with our Privacy Policy and applicable data protection laws.</li>
        </UL>
      </Section>

      <Section id="disputes" num={20} title="Dispute Resolution">
        <UL>
          <li>Both parties agree to attempt resolution of any disputes through good-faith negotiation before pursuing formal proceedings.</li>
          <li>If negotiation fails within thirty (30) calendar days, the dispute shall be referred to mediation by a mutually agreed mediator.</li>
          <li>If mediation fails, the dispute shall be resolved under the laws of Sri Lanka, and the courts of Sri Lanka shall have exclusive jurisdiction.</li>
          <li>Each party shall bear its own costs for dispute resolution unless otherwise ordered by a court or arbitrator.</li>
        </UL>
      </Section>

      <Section id="governing-law" num={21} title="Governing Law">
        <P>
          This Agreement shall be governed by and construed in accordance with
          the laws of the Democratic Socialist Republic of Sri Lanka. Both
          parties submit to the exclusive jurisdiction of the courts of Sri
          Lanka for any legal proceedings arising out of or relating to this
          Agreement.
        </P>
      </Section>

      <Section id="amendments" num={22} title="Amendments & Modifications">
        <P>
          The Company reserves the right to update these Terms and Conditions
          at any time. When material changes are made:
        </P>
        <UL>
          <li>The Company will notify active Clients via email at least fifteen (15) working days before changes take effect.</li>
          <li>Updated terms will be published on the Company website and Client Portal.</li>
          <li>Continued use of services after the effective date constitutes acceptance of the updated terms.</li>
          <li>Clients who do not agree with amended terms may terminate the Agreement in accordance with Section 19.</li>
        </UL>
      </Section>

      <Section id="severability" num={23} title="Severability">
        <P>
          If any provision of this Agreement is found to be invalid, illegal,
          or unenforceable, the remaining provisions shall continue in full
          force and effect. The invalid provision shall be modified to the
          minimum extent necessary to make it valid while preserving the
          original intent.
        </P>
      </Section>

      <Section id="entire-agreement" num={24} title="Entire Agreement">
        <P>
          This Agreement, together with any signed service agreements, project
          proposals, and statements of work, constitutes the entire agreement
          between the parties and supersedes all prior negotiations,
          representations, and understandings, whether written or oral. No oral
          representation by either party's employees or agents that is not
          contained herein shall be binding.
        </P>
        <Callout kind="info" title="Acknowledgment">
          <P>
            <i>
              By engaging our services, making a payment, or signing a service
              agreement with GroovyMark PVT Ltd (trading as GroovyMark WebX),
              the Client acknowledges that they have read, understood, and
              agree to be bound by these Terms and Conditions in their
              entirety.
            </i>
          </P>
          <P>
            <B>Contact:</B> <Email>webx@groovymark.com</Email>
          </P>
        </Callout>
      </Section>

      <LegalFooter effectiveDate={EFFECTIVE_DATE} />
    </LegalLayout>
  );
}

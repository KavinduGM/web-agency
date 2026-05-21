// Case studies — long-form articles linked from the portfolio.

// Default inline CTAs used across all case studies. Each case study reuses
// these unless it provides its own `sectionCTAs` array as an override.
export const DEFAULT_SECTION_CTAS = [
  {
    badge: "Free Audit",
    title: "Is your website bleeding customers every second it loads?",
  },
  {
    badge: "Speed Audit",
    title: "Your competitor's site loads in 1.2s. How long does yours take?",
  },
  {
    badge: "Strategy Call",
    title: "What's secretly killing 53% of your mobile visitors?",
  },
];

export const CASE_STUDIES = [
  // ─────────────────────────────────────────────────────────────────────
  //  YT Automation — YouTube Publishing System for an Australian Agency
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "yt-automation",
    title:
      "How we built a fully automated YouTube video publishing system for an Australian content agency",
    subtitle:
      "And eliminated the overhead of social media managers, project managers, and manual scheduling entirely",
    headline:
      "YT Automation — an end-to-end YouTube content production system that takes a video from raw footage upload through editorial workflow, thumbnail matching, AI-generated metadata, approval, scheduling, and channel publishing without manual coordination at any stage.",
    client: "Australian YouTube Content Production Agency",
    industry: "YouTube Content Creation & Video Production",
    location: "Australia",
    clientType: "B2B Content Agency",
    projectType: "End-to-End YouTube Publishing Automation",
    timeline: "1 week",
    cover: "/portfolio/yt-tool/cover-5.png",
    category: "AI & Automation",
    tags: [
      "YouTube Automation",
      "Google Drive",
      "AI Metadata",
      "Scheduled Publishing",
      "Mobile Companion App",
    ],
    metrics: [
      { value: "End-to-end", label: "Pipeline automated" },
      { value: "Auto", label: "Metadata + scheduling" },
      { value: "Mobile", label: "Companion app" },
      { value: "Multi-channel", label: "From one dashboard" },
    ],
    shortDescription:
      "An Australian YouTube content agency was running three client channels with two project managers, editors, designers, and constant manual coordination. We built YT Automation — raw footage in, published video out, full mobile oversight, zero manual scheduling.",
    testimonial: {
      quote:
        "We were managing three client channels, a team of editors, designers, and two project managers just to keep everything moving. The bottleneck wasn't the creative work — it was everything around it. Tracking footage, assigning tasks, chasing thumbnails, manually scheduling uploads. GroovyMark looked at our workflow and built something that just handles all of it. Raw footage goes in, published video comes out, and the dashboard tells me exactly where everything is at any moment. The mobile app means I can approve a video from anywhere without holding up the whole schedule. We've reduced our coordination overhead significantly and the team is actually focused on making better content now. I'd recommend GroovyMark to any agency doing serious volume on YouTube.",
      name: "Liam Hartley",
      role: "Founder",
      flag: "🇦🇺",
    },

    problemIntro:
      "YouTube content creation at volume is an entirely different operational challenge from running a single channel. When your agency is producing long-form educational videos and short-form content simultaneously across multiple client channels — universities, edutainment brands, professional education platforms — the complexity compounds with every channel you add and every video you produce. Our Australian client had built an impressive content production capability. Their team understood video. They understood educational content. They understood what YouTube audiences respond to. But the infrastructure holding all of that creative work together was entirely manual — and it was beginning to buckle under the weight of their own growth.",
    problems: [
      {
        title: "Mass production demands a system, not a team",
        text: "Producing YouTube content at scale for multiple client channels is not a workflow that can be managed sustainably through spreadsheets, shared folders, WhatsApp messages, and calendar reminders. The agency needed social media managers to track what had been filmed, what was in editing, what was ready to publish, and what was scheduled. They needed project managers to coordinate between raw footage arriving, editors completing work, designers submitting thumbnails, and approvals being granted. Every person added to this coordination layer was a person not directly producing content — and a cost that grew with every new client channel.",
      },
      {
        title: "The raw footage handoff was a constant bottleneck",
        text: "Client channels uploaded raw video footage to shared storage. From that moment, a chain of manual steps began: someone had to notice the footage had arrived, someone had to assign it to a video editor, someone had to track whether the editor had started, and someone had to follow up if the deadline was approaching. There was no automated detection, no automatic task creation, and no system visibility into where any piece of content sat in the pipeline at any given moment.",
      },
      {
        title: "Thumbnail and final video matching was manual and error-prone",
        text: "Once editors completed final video files and designers completed thumbnails, both assets needed to be matched to the correct video, reviewed together, and approved before scheduling. Without an automated matching system, this process relied on consistent file naming conventions, human attention, and manual cross-referencing — all of which introduced the risk of mismatches, missed files, and approval delays that pushed scheduled publish dates.",
      },
      {
        title: "Metadata creation was consuming significant production time",
        text: "Every YouTube video requires a title, description, tags, hashtags, and captions before it can be published. For an agency producing high volumes of educational content, writing this metadata manually for every video was a significant and recurring time cost — particularly for long-form educational content where descriptions need to be comprehensive, structured, and optimised for search discovery to serve the university and edutainment audiences the client's channels were targeting.",
      },
      {
        title: "Scheduling across multiple channels lacked structure and visibility",
        text: "Managing publish schedules across multiple YouTube channels — each with its own content calendar, its own publishing cadence, and its own mix of long-form and short-form content — required constant human coordination. There was no centralised schedule view, no automated slot assignment, and no system that automatically consumed the next available scheduling slot when a video was ready to publish. The result was scheduling delays, inconsistent publishing cadences, and missed optimal publish windows that affected channel algorithm performance.",
      },
      {
        title: "Channel management and workflow monitoring had no mobile access",
        text: "The agency's principals and managers needed to monitor workflow status, check upcoming publishes, and respond to approval requests while away from their desks. Without a mobile-accessible system, staying informed about production status required being at a computer — creating response delays on approvals and reducing the management team's ability to maintain oversight while in meetings, on location, or out of the office.",
      },
    ],
    problemCallout:
      "Is your content agency still relying on social media managers and project managers to track raw footage, chase editors, match thumbnails, and manually schedule videos across multiple client channels? That coordination overhead isn't a people problem — it's a systems problem. Every hour your team spends tracking what should happen next is an hour not spent creating the content your clients are paying for.",

    solutionIntro:
      "GroovyMark Web X designed and developed YT Automation — a fully custom, end-to-end YouTube content production and publishing automation system that takes a video from raw footage upload through editorial workflow, thumbnail matching, metadata generation, approval, scheduling, and channel publishing without requiring manual coordination at any stage of the pipeline. The system integrates directly with Google Drive (where raw footage and completed assets are stored), Google Sheets (for content calendar management), and the YouTube API (for direct channel connection and scheduled publishing) — creating a single automated pipeline that connects every stage of the agency's production workflow. A companion mobile application gives the agency's principals and managers complete workflow visibility and approval capability from any device, anywhere. The platform was built across five integrated operational layers.",
    pillars: [
      {
        title: "Live Production Dashboard with Full Workflow Visibility",
        intro:
          "The Overview Dashboard is the command centre of the entire operation — a live snapshot of everything happening across all connected client channels at any given moment. Rather than asking a project manager to compile a status update, the dashboard provides instant answers to every production status question. The Upcoming Publishes section shows the confirmed publish queue in chronological order. The Recent Activity log captures every automated system action in real time — raw footage archived, videos moved to the published folder, YouTube scheduling confirmed with videoId — a complete audit trail of every automated step the system takes, timestamped and logged without any manual entry.",
        featuresLabel: "Status tiles at a glance",
        features: [
          "Pending Approval — videos awaiting final sign-off before scheduling",
          "Scheduled — videos confirmed in the publish queue with dates/times",
          "Published This Month — confirmed live videos for the current month",
          "Failed — any videos that encountered a publishing error",
          "Editor: Pending — raw footage waiting to be assigned",
          "Editor: Ongoing — videos currently in active editing",
          "Editor: In Review — completed edits awaiting review",
          "Revision Needed — videos sent back to editors for changes",
          "Planned (Waiting Raw) — scheduled slots awaiting raw footage arrival",
          "Channels — total connected YouTube channels under management",
        ],
        images: [
          {
            src: "/portfolio/yt-tool/1.png",
            alt: "YT Automation Overview Dashboard",
            caption:
              "YT Automation Overview Dashboard: Live production snapshot showing status tiles for Pending Approval (0), Scheduled (3, shown in teal), Published This Month (1, shown in green), Failed (0), Editor Pending (0), Editor Ongoing (0, shown in orange), Editor In Review (0), Revision Needed (0), Planned Waiting Raw (0), and Channels (1). Upcoming Publishes section shows three scheduled long-question format videos with titles including Anatomy & Physiology, HR Technology, and HESI A2 content, all with scheduled status. Recent Activity log shows automated actions: raw_archived, moved, and scheduled events with YouTube videoId confirmation.",
          },
        ],
      },
      {
        title: "Channel Management with Google Drive & Sheets Integration",
        intro:
          "Each client YouTube channel is connected to the system individually — with its own configuration controlling how the automation behaves for that channel's specific content requirements. Google Drive and Google Sheets integration is configured at the platform level and shared across all channels — connecting the system directly to the folder structure where raw footage arrives, where completed assets are stored, and where content calendar data is maintained. Drive folders are managed per month through monthly folder structures, keeping every channel's assets organised by production period. When raw footage lands in the configured Drive folder matching a channel's filename prefix, the system detects it automatically — no human needs to notice, log, or action the arrival. The automation pipeline begins immediately.",
        featuresLabel: "Per-channel configuration",
        features: [
          "Name — internal identifier for the channel",
          "Filename prefix — naming convention used to automatically match raw footage, finals, and thumbnails to the correct channel",
          "Publishes — content type toggles per channel: Long Question, Long Animation, Shorts",
          "Google Drive folder monitoring for raw footage detection",
          "Google Sheets content calendar synchronisation",
          "YouTube channel ID linked for direct publishing",
          "Monthly folder structures keep assets organised by production period",
          "'Add channel' to connect additional client channels in seconds",
        ],
        images: [
          {
            src: "/portfolio/yt-tool/2.png",
            alt: "Channel Configuration Screen",
            caption:
              "Channel Configuration Screen: The Channels management panel showing Google Drive + Sheets connection status at the top with Reconnect option. Channels (1) section showing the connected YouTube channel with Name field ('K'), Filename prefix field ('KT'), and Publishes toggles — Long question (checked), Long animation (unchecked), Shorts (checked). YouTube channel ID visible below the channel name. 'Add channel' button for connecting additional client channels. Note at bottom: 'Drive folders are managed per month on Monthly folders.'",
          },
        ],
      },
      {
        title: "Automated Editorial Workflow with Metadata Management",
        intro:
          "Once raw footage is detected by the system, the automated editorial workflow begins — progressing the video through each production stage without manual coordination between team members. The system creates editor tasks automatically when raw footage arrives. Editors receive their assignments through the platform, complete the edit, and upload the final video file to the designated Drive folder. Designers complete thumbnails and upload them to the corresponding location. The system detects both assets, matches them using the channel filename prefix convention, and advances the item to the approval stage. Captions and hashtags are generated automatically by the system, eliminating the manual metadata writing process that was previously consuming significant production time.",
        featuresLabel: "Metadata profile carried by every workflow item",
        features: [
          "Filename — source file identifier linking all assets together",
          "Scheduled date — timezone-aware confirmed publish date and time",
          "Drive video — direct link to the final video file in Drive",
          "Drive thumb — direct link to the completed thumbnail in Drive",
          "YouTube link — the live YouTube URL generated upon upload",
          "Uploaded at — automated timestamp of when the system uploaded to YouTube",
          "Approved by — approval record with authorising team member and timestamp",
          "Title with character-limit enforcement and AI-generated structured description",
          "Auto-generated captions and hashtags ready for review",
        ],
        images: [
          {
            src: "/portfolio/yt-tool/3.png",
            alt: "Video Item Detail View",
            caption:
              "Video Item Detail View: The inbox item detail for a HESI A2 exam preparation video showing Scheduled status, Filename, Scheduled date (May 19, America/New_York timezone), Drive video and thumbnail links, YouTube URL (youtube.com/watch?v=D1LyXuDdQ20), Upload timestamp, and Approved by field. Metadata section below shows the Title field (HESI A2 Questions...) and Description panel with structured content including Study Guide links, Free Practice Quiz links, Free Timed Exam links, and premium tutor CTA — all pre-populated and ready for final review.",
          },
        ],
      },
      {
        title: "Intelligent Scheduling System with Bulk Slot Management",
        intro:
          "The Schedule module is the operational backbone of the agency's publishing cadence — a pre-fill scheduling system that defines exactly when content publishes across every connected channel, then automatically consumes those slots as videos move through the production pipeline and become ready to publish. The slot-based scheduling model works on a simple but powerful principle: the agency defines the publishing schedule in advance (which days, which times, which content types), and as raw videos arrive and complete the editorial pipeline, the system automatically assigns them to the next available matching slot. No manual scheduling. No missed windows. No inconsistent publishing cadence.",
        featuresLabel: "Bulk slot creation & schedule capabilities",
        features: [
          "Bulk slot creation for an entire month in one action",
          "Channel selector + month picker for targeted scheduling",
          "Content type (long/short) and format (e.g. question, animation)",
          "Publish times as 24h comma-separated entries (e.g. 11:00, 15:00)",
          "Weekday checkboxes for fine-grained day-of-week control",
          "'Duplicate to next month' replicates the entire schedule forward",
          "Slots view shows time, type, format, status, and assigned channel",
          "ASSIGNED badge when a video is matched to a slot automatically",
        ],
        images: [
          {
            src: "/portfolio/yt-tool/4.png",
            alt: "Schedule Management Interface",
            caption:
              "Schedule Management Interface: The Schedule module showing Channel and Month (2026-05) selectors with 'Duplicate to 2026-06' button. Bulk add slots panel with Type (long), Long format (pick), Slot name (Morning long), Start date, End date, Times (11:00, 15:00), and Weekdays checkboxes (all days selected Sun through Sat). 'Add slots' action button. Slots in 2026-05 section below showing 4 total slots, with a 2026-05-18 slot visible at 9:00 AM, type long, format question, status ASSIGNED (blue badge), assigned to channel K.",
          },
        ],
      },
      {
        title: "Complete Activity Audit Log & Companion Mobile Application",
        intro:
          "Every automated action the system takes is recorded in a timestamped activity log — providing complete pipeline transparency and a full audit trail for every video from raw footage detection through to confirmed YouTube publication. The companion mobile application extends this visibility beyond the desktop — giving the agency's owners, founders, and managers the ability to monitor live dashboard status, review upcoming publish schedules, check workflow item status, and respond to approval requests from any mobile device. For an agency managing mass production for multiple university and edutainment clients, mobile oversight means the production pipeline never stops moving waiting for someone to get back to their desk.",
        featuresLabel: "Activity event types logged",
        features: [
          "matched — Drive file detected and matched to correct channel/slot",
          "edited — item metadata edited within the platform",
          "approved — final approval granted with authorising actor recorded",
          "scheduled — YouTube scheduling confirmed with videoId reference",
          "moved — asset moved to published folder in Drive",
          "raw_archived — raw footage and documentation archived after publication",
          "Each entry: When (timestamp), Type, Actor, Message (with file refs and YouTube videoIds)",
          "Companion mobile app for live dashboard, schedule review, and approvals from any device",
        ],
        images: [
          {
            src: "/portfolio/yt-tool/5.png",
            alt: "Activity Log Detail View",
            caption:
              "Activity Log Detail View: The video item activity panel showing the Scheduled publish time (19/05/2026, 07:30) and full Activity table with 7 logged events all timestamped to May 19 — raw_archived (Moved raw + docs to archive folder), moved (Moved to published folder with thumb reference), scheduled (YouTube videoId=D1LyXuDdQ20 confirmed), approved (Approved), edited (Item edited, x2), and matched (Drive file matched: KT prefix) — complete automated pipeline audit trail from file detection to live publication.",
          },
        ],
      },
    ],

    results: [
      { label: "Full pipeline automated", text: "Raw footage detection through YouTube publication handled automatically — no manual coordination." },
      { label: "Editor tasks auto-created", text: "System detects raw footage arrival and creates editor assignments without human intervention." },
      { label: "Metadata auto-generated", text: "Captions, hashtags, and structured descriptions generated automatically for every video." },
      { label: "Scheduling automated", text: "Slot-based publish scheduling consumes the next available slot automatically as videos complete." },
      { label: "Multi-channel management", text: "Multiple client YouTube channels managed from one system with per-channel configuration." },
      { label: "Google Drive integrated", text: "Native Drive folder monitoring for raw footage, final video, and thumbnail asset management." },
      { label: "Content calendar synced", text: "Google Sheets content calendar updated automatically as videos are scheduled and published." },
      { label: "Complete audit trail", text: "Every automated pipeline action logged with timestamp, actor, and asset references." },
      { label: "Mobile app delivered", text: "Companion mobile application for live workflow monitoring and approval management on any device." },
      { label: "Bulk schedule creation", text: "Entire month's publishing slots created in one action with one-click duplication to next month." },
      { label: "Coordination overhead cut", text: "Social media manager and project manager coordination workload significantly reduced." },
    ],

    techDelivered: [
      "Custom full-stack YouTube publishing automation web application",
      "Google Drive API integration for automated file detection and management",
      "Google Sheets API integration for content calendar synchronisation",
      "YouTube Data API integration for direct channel publishing and scheduling",
      "Automated filename prefix matching for multi-channel asset organisation",
      "End-to-end editorial workflow automation (raw → edit → review → approve → publish)",
      "AI-powered automated metadata generation (captions, hashtags, descriptions)",
      "Slot-based intelligent scheduling system with bulk creation and duplication",
      "Per-channel content type configuration (Long Question, Long Animation, Shorts)",
      "Complete activity audit logging with timestamped pipeline event tracking",
      "Approval workflow with actor attribution and timestamp recording",
      "Companion mobile application for remote workflow monitoring and approvals",
      "Timezone-aware scheduling (America/New_York and configurable per channel)",
      "Monthly folder management structure for organised Drive asset storage",
      "Dark and light theme professional UI for agency operational use",
    ],

    closing: {
      lede:
        "The content agencies that will dominate YouTube production services over the coming years will not necessarily be the ones with the most talented editors or the most experienced social media managers. They will be the ones that have built automated production infrastructure capable of handling volume without handling every individual step manually. The mathematics of content automation are straightforward. Every video that moves from raw footage to published without requiring a human to track, assign, match, schedule, or follow up represents recovered capacity. Multiply that across every video your agency produces every week, across every client channel you manage, and the compounding operational value of automation becomes the agency's most significant competitive asset.",
      punchline: "Your team is hired to create. Your system should handle everything else.",
      cta:
        "If your content production agency is currently relying on project managers and social media managers to coordinate between footage upload, editing, thumbnail creation, and scheduling — manually writing titles, descriptions, hashtags, and captions for every video — managing client channel publishing schedules through spreadsheets and calendar reminders rather than an automated slot system — unable to monitor production workflow status from a mobile device — facing scheduling inconsistencies that affect client channel algorithm performance — then the system GroovyMark Web X built for this agency was engineered for exactly the production model you're running.",
      callout:
        "Your editors are hired to edit. Your designers are hired to design. Your strategists are hired to think. Every system you build that handles the coordination between them automatically is a system that gives every member of your team more time to do the work only they can do. That's not just an efficiency gain — it's a quality gain. And your clients notice both.",
    },

    finalCta: {
      heading:
        "Ready to automate your YouTube content pipeline from raw footage to published video — without the coordination overhead?",
      intro:
        "At GroovyMark Web X, we build custom automation systems that solve the operational problems that generic tools and manual workflows were never designed to handle at production scale. YT Automation was built for one agency's specific production model, channel portfolio, and client requirements. The system we build for your agency will be built for yours.",
      tiredOf: [
        "Automate the entire pipeline from footage upload to YouTube publication",
        "Eliminate manual editor task creation, thumbnail matching, and scheduling",
        "Generate video metadata automatically without manual writing at every upload",
        "Monitor your entire production operation from a mobile app in real time",
        "Maintain consistent publishing cadences across every client channel without manual calendar management",
      ],
      tiredOfOutro: "Then it's time to talk to GroovyMark Web X.",
      finalLine:
        "Less coordination overhead. More content excellence. Let's build the pipeline that makes the difference.",
    },

    about: {
      intro:
        "GroovyMark Web X is a specialist custom web development and AI web systems agency delivering results-driven digital platforms for businesses that demand more than off-the-shelf software and manual workarounds. From YouTube content automation systems to AI-powered CRM platforms and private analytics dashboards, we engineer solutions that solve the real operational problems holding your business back — and build the infrastructure that lets your team focus entirely on the work that generates value.",
      services: [
        "Custom Web Application Development",
        "AI-Powered Web System Development",
        "Content Production Pipeline Automation",
        "YouTube & Social Media Automation Systems",
        "AI CRM & Lead Management System Development",
        "Private Analytics & Intelligence Platform Development",
        "Business Process Automation via Web Systems",
        "SEO-Optimised Web Development",
        "Digital Platform Architecture & Engineering",
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────
  //  Self-Hosted Demo Deployment Platform — for a Canadian UI/UX Agency
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "demo-host-platform",
    title:
      "How we cut a Canadian UI/UX agency's deployment workload by 45% with a custom self-hosted demo platform",
    subtitle:
      "And eliminated the subdomain chaos slowing down their entire design review process",
    headline:
      "A purpose-built, self-hosted demo deployment and tenant management platform — one-click Git deploy, automated build pipeline, and multi-tenant design comparison — that reclaimed 45% of an agency's deployment workload and returned that time to their designers.",
    client: "Canadian UI/UX Design Agency",
    industry: "UI/UX Design Agency",
    location: "Canada",
    clientType: "Professional Design Studio",
    projectType: "Self-Hosted Demo Deployment & Tenant Platform",
    timeline: "1 week",
    cover: "/portfolio/web-host/cover-4.png",
    category: "Web Development",
    tags: [
      "Self-Hosted",
      "One-Click Deploy",
      "Multi-Tenant",
      "Build Pipeline",
      "Agency Workflow",
    ],
    metrics: [
      { value: "−45%", label: "Deployment workload" },
      { value: "1-click", label: "Git → live demo" },
      { value: "Zero", label: "VPS/cPanel/Docker" },
      { value: "∞", label: "Tenants per demo" },
    ],
    shortDescription:
      "A Canadian UI/UX agency was drowning in subdomain sprawl and manual deployment work. We built a custom self-hosted demo platform with one-click Git deploy and a multi-tenant comparison system — cutting deployment workload 45% and returning hours of creative capacity to the team.",
    testimonial: {
      quote:
        "We were managing client demos across a mess of subdomains, separate repos, and hosting accounts. Every time a client wanted a revision we were either overwriting the original or spinning up another environment. It was eating our designers' time. GroovyMark built us something that just works — push to Git, one click, live demo link. The tenant system for handling revisions was the thing nobody asked for but now nobody could work without. We cut our deployment workload by 45% and our designers are actually designing again.",
      name: "Sophie Renaud",
      role: "CTO",
      flag: "🇨🇦",
    },

    problemIntro:
      "When your agency employs over ten professional UI designers and your clients are the tech startups and SaaS businesses that define how modern software looks and feels, the quality of your work is never the issue. The issue is the infrastructure that sits between your finished design and your client's screen. Our Canadian client is an experienced, high-calibre UI/UX design agency specialising in delivering animations, modern interactive effects, and conversion-focused interface design for technology businesses. Their design process — centred on Figma and industry-leading design tooling — was mature, polished, and capable of producing work that consistently impressed clients. But the moment a design was finished and needed to be demonstrated to a client for review, the process fell apart.",
    problems: [
      {
        title: "Subdomain sprawl: one demo site for every client, forever",
        text: "The agency's standard workflow for client design review was to convert each Figma design into a functioning demo website and host it on a subdomain or dedicated demo domain. One client engagement meant one subdomain. Ten active clients meant ten subdomains. Fifty projects across the agency's history meant fifty deployment environments to manage. Each subdomain carried its own Git repository, its own deployment configuration, its own hosting record, and its own maintenance overhead — and the cumulative weight grew with every new client.",
      },
      {
        title: "Revision cycles doubling the deployment workload",
        text: "Client design review is rarely a single-pass process. A client reviews the demo, requests changes — a navigation adjustment here, a colour palette shift there, an animation tweak on the hero — and the agency returns to design, revises, and deploys again. Under the previous subdomain model, every revision meant either re-deploying to the same subdomain and losing the previous version, or creating an entirely new subdomain. There was no clean way to show a client the original alongside the revised version for direct comparison.",
      },
      {
        title: "Dependency on shared hosting, VPS, and cPanel",
        text: "Maintaining multiple demo environments across subdomains meant the agency was dependent on shared hosting environments, VPS configurations, and cPanel management for what were ultimately temporary demonstration sites. The technical overhead was pulling designer attention away from design work — or requiring a dedicated technical resource whose time was being consumed by deployment administration rather than billable creative work. The agency needed deployment to be as simple as pushing code to a repository.",
      },
      {
        title: "No scalable system for unlimited demo environments",
        text: "As the agency grew its client roster, the subdomain model was not scaling. Each new client engagement added infrastructure debt. There was no centralised place to see all active demos, manage their status, rebuild them when needed, or disable them when a project concluded. The agency lacked a single source of truth for their entire demonstration environment portfolio.",
      },
      {
        title: "Design-to-deploy friction consuming billable hours",
        text: "The time between completing a design and having a live, shareable demo link in a client's hands was longer than it needed to be. Every step of the deployment process — repository setup, hosting configuration, subdomain creation, DNS management, build pipeline setup — was manual, technical, and time-consuming. For an agency whose value is created in the design phase, every hour spent on deployment infrastructure is an hour not spent designing. At agency billing rates, this friction had a measurable and recurring cost.",
      },
    ],
    problemCallout:
      "Is your design agency still spinning up a new subdomain every time you need to show a client a functioning demo? Every deployment you do manually is time your designers aren't designing. The best UI/UX agencies in the world don't have better designers than their competitors — they have better systems supporting them.",

    solutionIntro:
      "GroovyMark Web X designed and built a bespoke, self-hosted demo website deployment and management platform — a purpose-engineered internal tool that takes the entire technical burden of demo deployment off the agency's designers and places it inside an automated system that handles everything from Git repository connection through to live demo link generation. The platform requires no VPS management, no shared hosting configuration, no Docker setup, and no cPanel dependency. A designer completes their work, connects the repository once, and the system handles the rest — automatically pulling the code, running the build pipeline, and generating a live demo link under a custom slug, ready to share with clients. The platform was built around three integrated operational capabilities.",
    pillars: [
      {
        title: "One-Click Demo Creation with Automated Build Pipeline",
        intro:
          "The New Demo creation interface is the platform's primary entry point — and its simplicity is the product of deliberate engineering decisions made to eliminate every unnecessary step from the designer's workflow. The designer clicks 'Create & build.' The system clones the repository, executes the build pipeline, captures the output directory, and serves the static files at the generated demo URL — all automatically, without any hosting configuration, DNS management, or server administration required. One repository. One click. One live demo link.",
        featuresLabel: "Fields required to spin up a demo",
        features: [
          "Name — project or client identifier for internal reference",
          "Slug — URL path that generates the public demo link (/your-slug/)",
          "Git URL — HTTPS public repo, or SSH with a configured deploy key",
          "Branch — specific branch to build from for multi-iteration workflows",
          "Output dir — where the build writes static files (dist for Vite, build for CRA — pre-configured)",
          "Build command — pre-filled as 'npm ci && npm run build' as the standard default",
        ],
        images: [
          {
            src: "/portfolio/web-host/1.png",
            alt: "New Demo Creation Interface",
            caption:
              "New Demo Creation Interface: The 'New demo' form showing the complete demo setup screen with fields for Name, Slug (with public URL preview showing /your-slug/ format), Git URL (HTTPS .git repository URL pre-filled), Branch, Output directory (set to 'dist' by default), and Build command (npm ci && npm run build pre-filled). 'Create & build' and Cancel action buttons at the bottom. Dark-theme interface within the Demo Host platform.",
          },
        ],
      },
      {
        title: "Centralised Demo Management Dashboard",
        intro:
          "The Demos dashboard gives the agency a single, centralised view of every demo environment currently under management — replacing the scattered subdomain portfolio with one organised workspace. The Rebuild function allows the agency to re-deploy any demo with a single click — picking up the latest commits from the connected repository without any manual configuration. The Disable function takes demos offline for concluded projects without permanently deleting the configuration, preserving the ability to reactivate when needed. Any number of demo environments can be managed simultaneously within the same interface — the system scales without adding infrastructure complexity, without additional hosting costs per demo, and without any manual environment setup.",
        featuresLabel: "Per-demo controls at a glance",
        features: [
          "Name — project identifier for immediate recognition",
          "Slug — URL identifier used to generate the demo link",
          "Status — live build status (READY in green for all active demos)",
          "Demo URL — the live, shareable link ready to send to clients",
          "Updated — last build timestamp for tracking recent deployments",
          "Rebuild — re-deploy on one click, pulling latest commits",
          "Disable — take a demo offline without losing the configuration",
          "Delete — permanently remove a demo when no longer needed",
        ],
        images: [
          {
            src: "/portfolio/web-host/2.png",
            alt: "Demo Management Dashboard",
            caption:
              "Demo Management Dashboard: The 'Demos' overview showing 4 active demo entries, all with green 'READY' status badges. Each entry displays Name, Slug, live Demo URL, last Updated timestamp (ranging from May to 2026 dates), and action buttons for Rebuild, Disable, and Delete. '+ New demo' button in the top right for creating additional demo environments. Clean dark-theme table layout providing instant visibility across all active client demo environments.",
          },
        ],
      },
      {
        title: "Multi-Tenant Design Comparison System",
        intro:
          "The tenant system is the capability that most directly addresses the agency's client revision workflow — and the one that transformed how they handle design iteration feedback. When a client reviews a demo and requests changes, the previous model forced the agency to either overwrite the existing demo (losing the original) or create an entirely new subdomain deployment (adding overhead). Neither approach enabled the clean side-by-side comparison that makes revision conversations productive. The tenant system solves this by allowing the agency to create multiple isolated versions of any demo — each with its own branding configuration, URL slug, colour scheme, logo, and copy — all built from the same underlying template, without touching the original design. No re-deployment of the original. No subdomain creation. No Git repository duplication. One platform managing unlimited versioned design comparisons.",
        featuresLabel: "Per-tenant configuration",
        features: [
          "Display name — client or version identifier",
          "URL slug — unique path for this version's public URL (/slug/)",
          "Template — select the base demo template; the template provides HTML/CSS/JS while the tenant overrides only branding & copy",
          "Tagline — client-specific positioning text per tenant",
          "Logo — upload or paste URL for the brand logo",
          "Favicon — upload or paste URL for the browser tab icon",
          "Colours — Primary (#003d7a), Accent (#f7b500), Primary text (#000000) individually configurable",
          "Clients can review original and revised versions simultaneously",
        ],
        images: [
          {
            src: "/portfolio/web-host/3.png",
            alt: "New Tenant Creation Interface",
            caption:
              "New Tenant Creation Interface: The 'New tenant' screen showing the Basics section (Display name, URL Slug with /slug/ public URL preview, and Template dropdown showing 'Novatec (novatec)' selection with note: 'The template provides the HTML/CSS/JS. Tenant overrides only branding & copy'). Company section below shows Tagline, Logo upload/URL field, and Favicon upload/URL field. Colours section at the bottom shows Primary colour (#003d7a blue), Accent colour (#f7b500 yellow), and Primary Text (#000000 black) — all individually configurable per tenant.",
          },
        ],
        outro:
          "The result: when a client requests a colour palette change, a logo update, or a copy revision, the agency creates a new tenant in minutes — producing a clean, live URL for the revised version that exists alongside the original. The client can review both versions simultaneously, give precise comparison feedback, and approve changes with confidence.",
      },
    ],

    results: [
      { label: "45% workload reduction", text: "Deployment-related workload cut by 45% through full automation of the design-to-deploy pipeline." },
      { label: "One-click deployment", text: "Complete demo environment live from Git push to shareable URL in one action — no configuration needed." },
      { label: "Zero infrastructure deps", text: "No VPS management, no shared hosting, no Docker, no cPanel — entirely self-contained and automated." },
      { label: "Centralised management", text: "All demo environments visible and manageable from one dashboard — Rebuild, Disable, Delete in one click." },
      { label: "Unlimited demo sites", text: "Any number of demo environments under one system without additional hosting costs or setup overhead." },
      { label: "Multi-tenant versioning", text: "Create isolated design versions for revision comparison without touching the original deployment." },
      { label: "Side-by-side comparison", text: "Clients can review original vs. revised design simultaneously — improving feedback quality and reducing approval cycles." },
      { label: "Designer focus restored", text: "Technical deployment burden removed from designer workflow — creative capacity returned to design work." },
      { label: "Custom slug control", text: "Every demo lives under a clean, custom URL path — professional presentation to clients." },
      { label: "AI integration roadmap", text: "AI-powered design insights and brainstorming automation currently in active development." },
    ],

    techDelivered: [
      "Custom self-hosted web application deployment platform",
      "Automated Git repository connection and build pipeline execution",
      "One-click demo creation with automated static site generation",
      "Support for Vite (dist) and CRA (build) output configurations",
      "Custom slug-based public URL generation for every demo",
      "Centralised demo management dashboard with full lifecycle controls",
      "Rebuild, Disable, and Delete operations from single interface",
      "Multi-tenant architecture for isolated design version management",
      "Per-tenant branding configuration (logo, favicon, colours, tagline, copy)",
      "Template-based tenant system — HTML/CSS/JS at template level, branding overrides at tenant level",
      "Branch-specific deployment support for multi-iteration workflows",
      "Dark-theme professional UI optimised for agency internal use",
      "Fully self-hosted — no dependency on third-party hosting services",
      "AI-powered UI/UX design insights integration (in development)",
    ],

    closing: {
      lede:
        "The design agencies that operate at the highest level share a characteristic that goes beyond the quality of their visual output: they have built systems that protect and amplify their designers' creative capacity. They have eliminated the operational friction that turns great design talent into deployment administrators. The business case is straightforward. If your agency is converting designs into demo websites and delivering them to clients for review, every part of that process that isn't the design itself is overhead. When overhead consumes 45% of a workflow, eliminating it doesn't just save time — it restructures what the agency is capable of.",
      punchline: "Sometimes it's the 45% they got back.",
      cta:
        "If your design agency is currently managing client demos across scattered subdomains and separate repositories, spending designer time on deployment tasks that could be automated, losing design versions when clients request revisions, unable to show clients clean side-by-side comparisons, dependent on shared hosting or VPS for temporary demo environments, or looking for scalable demo infrastructure that grows with your client roster — then the system GroovyMark Web X built for this agency was designed for exactly the workflow you're running.",
      callout:
        "Your designers didn't join your agency to manage deployment infrastructure. They joined to create interfaces that define how people experience technology. Every system you put in place that gets that creative work in front of clients faster, with less friction and better comparison tools, is a direct investment in the quality and volume of work your agency can produce.",
    },

    finalCta: {
      heading:
        "Ready to automate your design-to-demo pipeline and give your designers back the time that deployment is currently consuming?",
      intro:
        "At GroovyMark Web X, we build custom web systems that solve the operational problems that generic tools were never designed to address — especially for specialist agencies where the quality of the work depends on the quality of the infrastructure supporting it. The demo hosting platform built for this agency was engineered around their specific workflow, their revision process, and their client communication model. The system we build for your agency will be engineered around yours.",
      tiredOf: [
        "Replace scattered subdomains with one centralised demo management system",
        "Deploy functioning demo sites from Git to live URL in one click",
        "Give clients clean, organised design comparison without deployment overhead",
        "Eliminate VPS, shared hosting, and cPanel dependencies from your demo workflow",
        "Scale your demo environment capacity without scaling infrastructure costs",
      ],
      tiredOfOutro: "Then it's time to talk to GroovyMark Web X.",
      finalLine:
        "Less deployment overhead. More design excellence. Let's build the system that makes the difference.",
    },

    about: {
      intro:
        "GroovyMark Web X is a specialist custom web development and AI web systems agency delivering results-driven digital platforms for businesses that demand more than off-the-shelf software and generic workarounds. From self-hosted deployment automation platforms to AI-powered CRM systems and private analytics dashboards, we engineer solutions that solve the real problems holding your business back — and build the infrastructure that lets your team focus on what they do best.",
      services: [
        "Custom Web Application Development",
        "AI-Powered Web System Development",
        "Agency Workflow Automation Systems",
        "Self-Hosted Platform Engineering",
        "Private Analytics & Intelligence Platform Development",
        "AI CRM & Lead Management System Development",
        "SEO-Optimised Web Development",
        "Digital Platform Architecture & Engineering",
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────
  //  Private AI Social Media Analytics Platform — for a USA Agency
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "private-social-analytics",
    title:
      "How we built a private AI-powered social media analytics platform for a USA agency",
    subtitle: "And eliminated third-party data exposure forever",
    headline:
      "A privacy-first social media analytics platform — with a fine-tuned, encrypted internal AI engine — that lets a USA agency manage YouTube and LinkedIn channels for multiple clients without sending a single byte of channel intelligence to a third-party tool.",
    client: "USA-based Social Media Management & Content Strategy Agency",
    industry: "Social Media Management & Content Strategy",
    location: "United States",
    clientType: "B2B Agency",
    projectType: "Private AI Social Media Analytics Platform",
    timeline: "1 week",
    cover: "/portfolio/social-tool/cover-3.png",
    category: "AI & Automation",
    tags: [
      "Privacy-First",
      "Social Analytics",
      "Encrypted AI",
      "YouTube + LinkedIn",
      "Automated Reporting",
    ],
    metrics: [
      { value: "Zero", label: "Third-party exposure" },
      { value: "Encrypted", label: "Internal AI engine" },
      { value: "5", label: "Channels connected" },
      { value: "Auto", label: "Monthly PDF reports" },
    ],
    shortDescription:
      "A USA social media agency was leaking client YouTube & LinkedIn data through third-party analytics tools. We built a private, AI-powered analytics platform with a fully internal encrypted AI engine — no client data ever leaves their environment.",
    testimonial: {
      quote:
        "The privacy issue was what kept me up at night. We had clients trusting us with access to their YouTube channels — channels they'd spent years building — and I genuinely couldn't guarantee their data wasn't being used somewhere I couldn't see. GroovyMark solved that completely. Everything runs inside our own system, the AI never phones home, and I can look any client in the eye and tell them their data doesn't leave our environment. The automated monthly reports alone saved us probably two full days of work every month. It's the best infrastructure decision we've made.",
      name: "Derek Holloway",
      role: "Co-Founder",
      flag: "🇺🇸",
    },

    problemIntro:
      "If you're running a social media management agency in 2025, you already know the paradox: the tools that are powerful enough to manage your clients properly are expensive, bloated with features you'll never use, and — most critically — built by companies that treat your clients' data as a resource to be mined, not a trust to be protected. Our USA-based client had reached a point where the tools available on the market were not just inconvenient — they were becoming a liability.",
    problems: [
      {
        title: "Feature mismatch: paying for what you don't need",
        text: "The social media analytics tool market is dominated by platforms built for the broadest possible audience. Hootsuite, Sprout Social, Brandwatch, Tube Analytics — each carries extensive feature sets designed for enterprise marketing departments, e-commerce brands, and individual creators simultaneously. For a focused social media agency managing YouTube and LinkedIn channels for a defined client portfolio, this meant paying premium subscription prices for platforms where the majority of features were irrelevant. The agency needed a clean, minimal, purpose-built system — not a complex platform requiring constant navigation around capabilities they would never touch.",
      },
      {
        title: "Scaling costs that punish success",
        text: "The subscription model used by leading social media analytics platforms is designed to extract maximum revenue as agencies grow. Adding new clients, connecting additional channels, accessing advanced analytics, and generating automated reports — each of these operational necessities triggers an upgrade to the next subscription tier. For a growing agency, this creates a direct and punishing relationship between business success and software cost. Every new client won means a higher monthly bill, eroding margins precisely when the business is scaling.",
      },
      {
        title: "The privacy crisis: third-party tools selling client data",
        text: "The agency had become aware of a widespread and largely undisclosed practice within the social media analytics tool industry: third-party platforms connected to client YouTube and LinkedIn channels were harvesting channel performance data, content strategy signals, audience intelligence, and growth trend information — and selling or licensing this data to training companies, research firms, and competitive intelligence services. Their clients had no idea their strategic performance data was flowing through third-party systems beyond the agency's control. For an agency whose entire value proposition rests on client trust, this was an existential risk.",
      },
      {
        title: "No multi-channel competitive comparison in one view",
        text: "Understanding how different client channels are performing relative to each other — and over time — requires side-by-side comparative analysis. The tools available either didn't offer this capability in a useful form, locked it behind enterprise pricing tiers, or presented it in interfaces too complex to use efficiently in client review meetings.",
      },
      {
        title: "Manual monthly reporting consuming billable hours",
        text: "Every month, the agency's team was manually pulling analytics data, building PDF reports for each client channel, and sending them via email. Multiply this across five clients each with one or more channels, and the process was consuming significant billable time every single month — time that wasn't being charged to clients and wasn't generating revenue. The entire process needed to be automated from data collection through to email delivery.",
      },
      {
        title: "No AI-powered growth insights or channel predictions",
        text: "Raw analytics data — views, watch time, subscriber counts — tells you what happened. What growing agencies need to offer their clients is intelligence: why it happened, what it means, what should happen next. No tool on the market offered genuinely useful AI-powered channel growth predictions and strategic insights in a form that could be privately deployed without sending client channel data to external AI processing services.",
      },
    ],
    problemCallout:
      "Is your social media agency using third-party analytics tools connected to your clients' YouTube and LinkedIn channels? Do you know with certainty where that data goes after it leaves your dashboard? The tool you're paying for to serve your clients may be quietly profiting from their strategies. Client trust, once broken by a data exposure, doesn't come back.",

    solutionIntro:
      "GroovyMark Web X designed and developed a fully custom, privacy-first social media analytics and reporting platform — an internal system owned entirely by the agency, hosted under their control, and engineered so that no client channel data ever leaves their environment to a third-party service. At the core of the platform is a fine-tuned, encrypted AI model that operates entirely within the system. Unlike third-party AI analytics tools that send channel data to external processing services for insight generation, this AI engine runs inside the platform — generating channel growth predictions, content performance insights, and strategic recommendations without any data leaving the agency's controlled environment. The platform was built across five integrated capability layers.",
    pillars: [
      {
        title: "Multi-Channel Comparative Analytics Engine",
        intro:
          "The Compare module is the platform's most used operational feature — allowing the agency to plot performance analytics for multiple client YouTube channels side-by-side across any chosen time period. The result is a single screen that answers the agency's most important strategic question at any given moment: how are all of our client channels performing relative to each other, right now? This capability transforms monthly client review meetings from data-gathering exercises into strategic conversations — with every channel's trajectory visible simultaneously, trends identified at a glance, and growth anomalies immediately apparent without manual data compilation.",
        featuresLabel: "Comparative analytics capabilities",
        features: [
          "Side-by-side plotting of multiple client YouTube channels in one view",
          "Time windows: 7 days, 28 days, 90 days, 6 months, 12 months, All",
          "Metrics: Views, Watch Time, Subscribers, and all key YouTube indicators",
          "Dropdown-driven metric switching for instant comparative visualisation",
          "Distinct colour lines per channel for immediate visual differentiation",
          "Strategic-conversation-ready visuals for client review meetings",
        ],
        images: [
          {
            src: "/portfolio/social-tool/1.png",
            alt: "Multi-Channel Views Comparison",
            caption:
              "Multi-Channel Views Comparison: The Compare module displaying a 90-day views-over-time chart for 5 connected client channels simultaneously — AI Exam Support, GroovyMark, Ultimate MRCEM, OA Guides, and OA Practice. OA Practice leads with 72.7K total views (red line), OA Guides at 25.4K (orange line), with the remaining three channels tracked in blue, teal, and green. The time-series line chart spans February 21 through April 28, showing individual channel performance trajectories in distinct colours for immediate visual differentiation.",
          },
          {
            src: "/portfolio/social-tool/2.png",
            alt: "Watch Time Comparison (6-Month View)",
            caption:
              "Watch Time Comparison (6-Month View): The Compare module switched to Watch Time (minutes) metric over a 6-month window (November 24 through April 24), comparing OA Guides and OA Practice channels. OA Practice leads with 1.3M total watch minutes (light blue line showing strong consistent growth trend). OA Guides at 268.9K total watch minutes (purple line, showing steady upward trajectory). The 6-month comparative view reveals which channel is generating the deeper audience engagement — critical intelligence for content strategy decisions.",
          },
        ],
      },
      {
        title: "Client Profile Management System",
        intro:
          "The platform's Clients module allows the agency to create and manage individual client profiles, each with their own associated channels, contact details, industry classification, and operational notes — all within a single organised environment. Creating a new client takes seconds. Once created, one or more YouTube channels and LinkedIn accounts can be attached to the client profile, with all associated analytics data automatically organised under that client. This structure means the agency has a clean, organised workspace where every client's channels, performance data, and reports are contained together — eliminating the scattered, multi-tab experience of working across generic analytics tools.",
        featuresLabel: "Client profile fields & capabilities",
        features: [
          "Client Name with auto-generated URL slug",
          "Description and operational notes per client",
          "Contact Name and Contact Email",
          "Industry classification (SaaS, Fashion, Media, Education, etc.)",
          "Multiple YouTube and LinkedIn accounts per client",
          "Automatic organisation of analytics data under each client profile",
        ],
        images: [
          {
            src: "/portfolio/social-tool/3.png",
            alt: "New Client Creation Interface",
            caption:
              "New Client Creation Interface: The 'New Client' modal overlay showing the client profile creation form with fields for Name (with auto-slug generation), Description, Contact Name, Contact Email, Industry (with example tags: SaaS, Fashion, Media), and a Notes field for internal context. Clean dark-theme interface within the Clients module, with Cancel and 'Create client' action buttons.",
          },
        ],
      },
      {
        title:
          "Multi-Platform Channel Connection with Privacy-First Architecture",
        intro:
          "The Channels module provides a centralised view of every YouTube channel and LinkedIn account connected across all client profiles — with connection status, last sync timestamp, and direct channel access in one place. Five channels are currently connected and actively syncing: Ultimate MRCEM, GroovyMark, OA Guides, OA Practice, and AI Exam Support — all confirmed Connected. Critically, the channel connection process is engineered for privacy. Channels are connected through a streamlined authorisation flow that pulls only the analytics data required for performance monitoring — with no content data, private channel settings, subscriber personal information, or strategic metadata transmitted to or stored by any third-party service. Everything stays inside the agency's system.",
        featuresLabel: "Channel connection capabilities",
        features: [
          "Centralised dashboard for all YouTube and LinkedIn connections",
          "Per-channel connection status with live sync timestamps",
          "Manual 'Sync Now' and 'View Data' controls per channel",
          "Privacy-first authorisation flow — only analytics data is pulled",
          "No content, channel settings, or subscriber PII stored",
          "Search and filter by name, handle, or client",
          "LinkedIn-ready architecture for future channel types",
        ],
        images: [
          {
            src: "/portfolio/social-tool/4.png",
            alt: "Channels Overview Dashboard",
            caption:
              "Channels Overview Dashboard: The Channels module showing all 5 connected YouTube channels in a clean table view with columns for Channel name/handle, Platform, Client association, Connection Status (all showing green 'Connected' badges), and Last Sync timestamp. Total Channels: 5, YouTube: 5, LinkedIn: 0. Filter tabs allow switching between All, YouTube, and LinkedIn views. Search bar for quick channel lookup by name, handle, or client.",
          },
          {
            src: "/portfolio/social-tool/5.png",
            alt: "Individual Client Channel Management",
            caption:
              "Individual Client Channel Management: The OA Guides client profile page showing the attached YouTube channel (@oaguides, Education industry). The channel card displays YouTube platform badge, Connected status, last sync timestamp (26 days ago), with 'Sync now' and 'View data' action buttons. 'Connect YouTube' and 'Add manually' options allow additional channels to be attached to the client profile. Complete channel lifecycle management in one screen.",
          },
        ],
      },
      {
        title: "Encrypted AI Insights Engine (Fully Internal)",
        intro:
          "The platform's AI capability is the feature that most fundamentally separates it from every tool available on the market — not just in what it does, but in how it does it. Most social media analytics platforms that offer AI-powered insights do so by sending channel data to external AI processing services — OpenAI, Google Gemini, or proprietary third-party AI APIs. Every time those services process a client's channel data, that data enters an external environment outside the agency's control. It may be used for model training. It may be retained. It may inform competitors. The AI engine built into this platform is fundamentally different. It is a fine-tuned model, encrypted and deployed entirely within the platform's own infrastructure. When the AI analyses a client channel's performance data and generates growth predictions, content recommendations, or strategic insights, that entire process happens inside the system. No data leaves. No third-party API call is made.",
        featuresLabel: "Encrypted internal AI capabilities",
        features: [
          "Fine-tuned AI model deployed inside the agency's own infrastructure",
          "Zero third-party API calls — no OpenAI, Gemini, or external services",
          "Encrypted at rest and in motion within the platform",
          "Channel growth predictions generated entirely internally",
          "Content performance insights and strategic recommendations",
          "AI-powered insights with zero privacy compromise",
          "No risk of client data informing competitor models",
        ],
        images: [],
        outro:
          "Does your analytics platform use AI to generate insights from your clients' channel data? Ask the provider: where exactly does that data go when the AI processes it? The answer most agencies receive — if they ask at all — is not one they'd be comfortable sharing with their clients.",
      },
      {
        title:
          "Automated Monthly PDF Analytics Reports with Scheduled Email Delivery",
        intro:
          "The Reports module automates the most time-consuming recurring task in any social media management agency's workflow: monthly client reporting. The system automatically generates comprehensive 6-month analytics PDF reports for every connected client channel. Reports are built using the previous calendar month's data and delivered automatically to configured email recipients — scheduled to send on the 28th of every month (UTC) without any manual intervention required. The agency also has the option to generate and send reports on-demand at any time via the 'Generate & email' button available for each client — essential for ad-hoc client review meetings, campaign milestone reports, or new client onboarding.",
        featuresLabel: "Reporting & delivery capabilities",
        features: [
          "Automated 6-month analytics PDF generation per client channel",
          "Scheduled monthly delivery on the 28th (UTC)",
          "Configurable email recipients per client",
          "Per-client 'Generate & email' on-demand button",
          "Previous calendar month's data baked into each report",
          "Delivery history audit log — last 50 report runs across all clients",
          "Scheduler settings configurable from the dashboard",
        ],
        images: [
          {
            src: "/portfolio/social-tool/6.png",
            alt: "Automated Reports Dashboard",
            caption:
              "Automated Reports Dashboard: The Reports module showing 1 configured recipient, 5 clients with channels, and per-client 'Generate & email' buttons for AI Exam, GroovyMark, MRCEM, OA Guides, and OA Practice. Header confirms automated 6-month analytics PDFs are delivered by email, with the scheduler set to send on the 28th of every month (UTC). Delivery history section at bottom tracks all report runs with Scheduler Settings controls.",
          },
        ],
        outro:
          "This automation alone reclaims hours of billable time every month — time that was previously consumed by manual data compilation, PDF formatting, and individual email sending for each client.",
      },
    ],

    results: [
      { label: "Zero data exposure", text: "All client channel data stays fully within the agency's own private system — no third-party access." },
      { label: "Encrypted AI engine", text: "Fine-tuned AI model operates entirely internally, generating insights with zero external data transmission." },
      { label: "5 channels connected", text: "YouTube channels for 5 clients actively syncing with real-time status monitoring." },
      { label: "Multi-channel comparison", text: "Side-by-side analytics comparison across all client channels with 7d/28d/90d/6mo/12mo/All time windows." },
      { label: "Automated reporting", text: "Monthly 6-month PDF reports generated and emailed automatically on the 28th — zero manual effort." },
      { label: "On-demand reports", text: "Per-client 'Generate & email' for ad-hoc reporting at any time without rebuilding dashboards." },
      { label: "Subscription eliminated", text: "Zero monthly subscription cost to third-party analytics platforms — complete ownership." },
      { label: "LinkedIn ready", text: "Platform architecture supports LinkedIn account connection alongside YouTube as the agency scales." },
      { label: "Client trust protected", text: "Agency can credibly guarantee to every client that their channel data never leaves a controlled environment." },
      { label: "Hours reclaimed", text: "Manual monthly reporting process fully automated, reclaiming significant billable time every month." },
    ],

    techDelivered: [
      "Custom full-stack social media analytics web application",
      "Privacy-first data architecture — zero third-party data transmission",
      "Fine-tuned, encrypted internal AI insights and prediction engine",
      "YouTube channel connection and analytics sync integration",
      "LinkedIn account connection capability (architecture ready)",
      "Multi-channel side-by-side performance comparison engine",
      "Time-series analytics visualisation (Views, Watch Time, and all key metrics)",
      "Client profile management system with channel association",
      "Automated 6-month PDF analytics report generation",
      "Scheduled monthly email report delivery system (28th of each month)",
      "On-demand per-client report generation and email sending",
      "Delivery history audit logging",
      "Dark-theme professional UI optimised for agency operational workflows",
      "Responsive design for Desktop and Mobile access",
    ],

    closing: {
      lede:
        "The social media management agencies that will command premium rates and maintain long-term client relationships over the next decade share one characteristic: their clients trust them not just with results, but with responsibility. Results are table stakes. Every agency promises results. What separates the agencies that retain clients for years from those constantly replacing churned accounts is something more fundamental: the confidence clients feel that their digital assets, their strategies, and their competitive intelligence are genuinely safe in their agency's hands.",
      punchline: "Trust is the only product agencies actually sell.",
      cta:
        "If your agency is currently using third-party analytics tools connected to client YouTube and LinkedIn channels without being certain where that data flows, paying $200-500 per month for a platform where half the features are irrelevant, manually building PDF reports every month, unable to compare client channel performance in a single view, and upgrading subscription tiers every time you win a new client — then your agency is carrying a risk and a cost that a purpose-built private system would eliminate entirely. The agencies that will win the next five years in social media management are building their own infrastructure — not to be different, but because the tools available were never built with their clients' trust as the primary design principle.",
      callout:
        "Your clients gave you access to their YouTube channels and LinkedIn accounts because they trust you. The analytics tool sitting between you and their data may not deserve the same trust. You built your agency on your reputation. The infrastructure you use to serve your clients should be built on the same foundation.",
    },

    finalCta: {
      heading:
        "Ready to build a private analytics platform your clients can trust and your competitors can't replicate?",
      intro:
        "At GroovyMark Web X, we build custom AI-powered web systems that solve the problems generic SaaS tools were never designed to fix — especially when those problems involve the privacy, trust, and competitive intelligence of the clients who depend on you. This platform was engineered for one agency's specific operational and privacy requirements. The system we build for your agency will be engineered for yours — not adapted, not configured, not templated. Built from the ground up to match your workflow, protect your clients' data, and give you capabilities no off-the-shelf tool will ever offer.",
      tiredOf: [
        "Stop sending client channel data through third-party analytics platforms",
        "Eliminate monthly subscription costs that grow with every client you win",
        "Automate your monthly reporting entirely",
        "Access AI-powered channel insights with zero privacy compromise",
        "Offer your clients a data privacy guarantee no competitor can match",
      ],
      tiredOfOutro: "Then it's time to talk to GroovyMark Web X.",
      finalLine:
        "The best agencies don't just manage their clients' social media. They protect it. Let's build the system that proves it.",
    },

    about: {
      intro:
        "GroovyMark Web X is a specialist custom web development and AI web systems agency delivering results-driven digital platforms for businesses that demand more than off-the-shelf software and third-party workarounds. From privacy-first AI analytics platforms to custom CRM systems, we engineer solutions that solve the real problems holding your business back — and build the infrastructure that lets you scale with confidence, without compromising the trust your clients have placed in you.",
      services: [
        "Custom AI-Powered Web Application Development",
        "Private Analytics & Intelligence Platform Development",
        "Social Media Analytics System Engineering",
        "AI CRM & Lead Management System Development",
        "Business Process Automation via AI Web Systems",
        "Automated Reporting & Client Intelligence Systems",
        "SEO-Optimised Web Development",
        "Digital Platform Architecture & Engineering",
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────
  //  LeadIQ CRM — AI-Powered CRM for a UK Marketing Agency
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "leadiq-crm",
    title:
      "How we built an AI-powered CRM that replaced an entire sales team for a UK marketing agency",
    subtitle: "And automated lead management 24/7",
    headline:
      "LeadIQ CRM — a custom AI-powered lead intelligence platform that classifies every submission, eliminates spam automatically, responds in seconds, and replaced the agency's sales team, call centre, and customer support function with one integrated system.",
    client: "UK-based Marketing & Campaign Management Agency",
    industry: "Digital Marketing & Campaign Management",
    location: "United Kingdom",
    clientType: "B2B Marketing Agency",
    projectType: "AI-Powered CRM (LeadIQ)",
    timeline: "1 week",
    cover: "/portfolio/crm/cover-2.png",
    category: "AI & Automation",
    tags: [
      "AI CRM",
      "Lead Intelligence",
      "Spam Detection",
      "Sales Automation",
      "Form Builder",
    ],
    metrics: [
      { value: "Sales team", label: "Fully replaced" },
      { value: "24/7", label: "Lead response" },
      { value: "AI-filtered", label: "Spam elimination" },
      { value: "5", label: "Capability layers" },
    ],
    shortDescription:
      "Replaced a UK marketing agency's sales team, call centre, and customer support function with LeadIQ CRM — AI-powered lead intelligence that classifies, scores, and responds to every lead 24/7.",
    testimonial: {
      quote:
        "We were paying for three separate tools, running a small sales team on top of that, and still missing leads that came in after hours. The AI spam filtering was the first thing that made me realise this was different — it doesn't just flag obvious junk, it reads the submission and explains exactly why it classified it the way it did. Within the first month we had replaced our entire manual follow-up process. Our response time went from hours to seconds. GroovyMark didn't just build us a CRM, they built us a system that genuinely runs itself.",
      name: "James Calloway",
      role: "CEO",
      flag: "🇬🇧",
    },

    problemIntro:
      "Every growing marketing agency reaches the same painful inflection point: you're managing more client campaigns, capturing more leads, and suddenly your team is spending more time sorting through contact form submissions than actually closing deals. Spam fills your inbox. Genuine leads go cold because nobody followed up fast enough. And the sales team you're paying full-time salaries to is spending half their day doing work that should be automated. This is exactly where our UK-based marketing agency client found themselves. They weren't failing. They were growing — and their tools were failing to grow with them. The CRM software market is enormous. Salesforce, HubSpot, Zoho, Pipedrive — the options are endless. But here's what none of the sales brochures tell you: these platforms are built for the average business, not for your specific operational reality. Our client had already evaluated the leading tools and hit the same wall every time.",
    problems: [
      {
        title: "Feature bloat without the right features",
        text: "Every major CRM on the market came loaded with features the agency would never use — complex pipeline views, enterprise reporting suites, territory management modules. Meanwhile, the specific capabilities their campaigns actually needed either didn't exist or required expensive third-party add-ons and complex integrations to achieve.",
      },
      {
        title: "No intelligent lead filtering or AI decision-making",
        text: "The agency's contact forms were attracting a significant volume of spam — fake inquiries, mass marketing blast emails, bot submissions. Every spam lead that entered the pipeline consumed human time: someone had to open it, read it, decide it was worthless, and delete it. Multiply that by hundreds of form submissions across multiple client campaigns per month, and you have a serious productivity drain that no off-the-shelf CRM was solving intelligently.",
      },
      {
        title: "Lead follow-up gaps costing real revenue",
        text: "Research consistently shows that leads contacted within the first five minutes of submitting a form are dramatically more likely to convert than those contacted an hour later. The agency's human sales team simply could not respond at that speed, at scale, across every client campaign simultaneously. Hot leads were going cold. Revenue was being lost at the follow-up stage — not because the marketing wasn't working, but because the response infrastructure couldn't keep up.",
      },
      {
        title: "Unsustainable operational costs",
        text: "Running a dedicated sales team, a call centre operation, and a customer support function to manage leads across multiple client campaigns was a significant fixed cost. As the agency won new clients and launched new campaigns, that cost would only increase. They needed a solution that could scale without scaling headcount.",
      },
      {
        title: "Disconnected tools, disconnected workflows",
        text: "Lead capture forms on client websites, campaign tracking, lead scoring, follow-up automation, and reporting all lived in separate tools. There was no single source of truth. Campaign performance data and lead quality data lived in different places, making it nearly impossible to accurately measure ROI and make intelligent decisions about where to invest campaign budget.",
      },
      {
        title: "No ability to create custom lead magnets or sales widgets",
        text: "The agency needed to deploy high-converting lead magnets and sales widgets on client websites as part of their campaign strategies. Generic form builders lacked the intelligence and customisation to serve as true conversion tools within their AI-driven system.",
      },
    ],
    problemCallout:
      "Is your agency manually sorting through contact form submissions looking for real leads buried under spam? Every minute your team spends on a fake inquiry is a minute they're not spending on the prospect that was ready to buy. The agencies dominating their market aren't working harder — they're working with smarter systems.",

    solutionIntro:
      "GroovyMark Web X engineered LeadIQ CRM — a fully custom, AI-integrated lead management and campaign intelligence platform built precisely around the agency's operational model. Not adapted from a template. Not a customised version of an existing tool. Built from the ground up. The system is designed around one central principle: every genuine lead that enters the pipeline should be identified, scored, prioritised, and responded to automatically — with the precision of an expert sales team and the availability of a 24/7 automated system. The platform was built across five integrated capability layers.",
    pillars: [
      {
        title: "Intelligent Form Builder with Three Form Types",
        intro:
          "The foundation of any lead generation system is the capture form. LeadIQ CRM includes a built-in, fully customisable form builder that allows the agency to create and deploy any type of lead capture form directly onto client websites — without needing external form tools, developers, or third-party integrations.",
        featuresLabel: "Three distinct form types available",
        features: [
          "Standard Form — Traditional, fully configurable lead capture forms with custom fields, branding, company logo, primary colour matching, and optional descriptions",
          "AI Powered Form — A conversational AI-driven form experience that dynamically adjusts questions based on the respondent's previous answers, creating a guided, personalised inquiry flow",
          "Pricing Lead Form — Pricing-page lead capture where prospects select a service package directly, qualifying themselves as high-intent leads before they submit",
          "Custom fields, branding, and primary colour matching per form",
          "Higher completion rates from guided AI-driven inquiry flows",
          "Immediate AI prioritisation of high-value pricing-page leads",
        ],
        images: [
          {
            src: "/portfolio/crm/1.png",
            alt: "LeadIQ CRM Form Builder Interface",
            caption:
              "LeadIQ CRM Form Builder Interface: The New Form creation screen showing the three form-type options — Standard Form, AI Powered Form, and Pricing Lead Form. General settings panel allows form naming, description, primary colour customisation (#3b6ef0 shown), and company logo upload. Clean, professional interface within the LeadIQ CRM Businesses module.",
          },
        ],
      },
      {
        title: "Embeddable Lead Forms Deployed on Client Websites",
        intro:
          "Forms built inside LeadIQ CRM generate embeddable code that deploys directly on any client website with consistent, pixel-perfect rendering across all devices. The client demonstrated this capability by deploying the contact form system on a nursing exam support platform (nursingexamsupport.com) — a real-world client website where students and professionals submit exam-related inquiries. The deployed form captures Full Name, Email Address, Phone Number, Exam Category (dropdown), and a detailed Message field — all feeding directly into the LeadIQ CRM pipeline where AI analysis begins immediately upon submission. The form is designed to render seamlessly both as a full-page embedded experience on the client website and as a standalone hosted form page — giving maximum flexibility for different campaign and landing page configurations.",
        featuresLabel: "Deployment & capture capabilities",
        features: [
          "Embed code generation for any client website",
          "Pixel-perfect rendering across all devices",
          "Full-page embedded form experience on-site",
          "Standalone hosted form page URL for campaigns",
          "Custom field configuration per campaign",
          "Direct pipeline feed into LeadIQ CRM AI analysis on submission",
        ],
        images: [
          {
            src: "/portfolio/crm/2.png",
            alt: "Client Website Form Deployment",
            caption:
              "Client Website Form Deployment: The contact form deployed on the Nursing Exam Support website (nursingexamsupport.com) showing the full-page embedded form with fields for Full Name, Email Address, Phone Number, Exam Category selection, and Message. Professional dark navy branding with 'Send Message' CTA button. Navigation shows Home, About Us, View All Exams, Video Lessons, and social channel links.",
          },
          {
            src: "/portfolio/crm/3.png",
            alt: "Standalone Hosted Form View",
            caption:
              "Standalone Hosted Form View: The same Nursing Exam Support contact form rendered as a standalone hosted form page, with a Contact Us sidebar panel displaying the support email address (contact@nursingexamsupport.com). Demonstrates the platform's dual deployment capability — embedded on-site or hosted as a standalone URL for campaigns.",
          },
        ],
      },
      {
        title:
          "AI-Powered Lead Intelligence: Genuine vs Spam Detection",
        intro:
          "This is the system's most transformational capability — and the one that directly replaced the agency's manual lead review process. Every submission that enters LeadIQ CRM is immediately analysed by the integrated AI engine. The AI reads the full submission content, cross-references it against the stated service category, evaluates language patterns, sender behaviour signals, and contextual consistency to make an autonomous classification decision. The AI doesn't just flag spam — it generates a detailed written analysis explaining precisely why a submission was classified as spam or genuine, giving the agency complete transparency and auditability on every decision.",
        featuresLabel: "Classification outcomes",
        features: [
          "Genuine Lead — A real person with a legitimate inquiry relevant to the service they selected, routed immediately into the active pipeline",
          "Spam — A fraudulent, irrelevant, or mass-marketing submission, automatically flagged, isolated, and removed without any human review",
          "High Score — Highest-priority genuine leads demonstrating strong purchase-intent signals, escalated immediately for priority handling",
          "Full AI written analysis explaining every classification decision",
          "Auditable AI reasoning logged for every submission",
          "Zero human review needed for spam filtering",
        ],
        images: [
          {
            src: "/portfolio/crm/4.png",
            alt: "Genuine Lead Dashboard View",
            caption:
              "Genuine Lead Dashboard View: The LeadIQ submissions panel showing a real genuine lead from 'Jhon' (jhon@gmail.com) who submitted an inquiry for TEAS exam support under the Nursing Entrance category (TEAS, HESI A2, HESI A2CT). Dashboard metrics show: 2 Total submissions, 1 Genuine, 1 Spam, 0 High Score. Filter tabs allow sorting by Genuine Leads, Spam, and lead priority scoring (All / High / Medium / Low).",
          },
          {
            src: "/portfolio/crm/5.png",
            alt: "Spam Detection in Action",
            caption:
              "Spam Detection in Action: The submissions panel switched to Spam view, showing a submission from Denis Berger (denisberger.web@gmail.com) automatically classified as Spam. Submission was categorised under Health Information (CPC, RHIT) but contains generic SEO/marketing promotion content — immediately detected as irrelevant by the AI. Red spam badge and red left border visually distinguish it from genuine leads in the interface.",
          },
          {
            src: "/portfolio/crm/6.png",
            alt: "AI Analysis Detail Modal",
            caption:
              "AI Analysis Detail Modal: Full submission detail view for the Denis Berger spam entry, showing the complete message content and the AI Analysis panel below. The AI correctly identified the submission as a classic spam/marketing blast email promoting SEO and web traffic services — completely irrelevant to the Health Information service category selected. The AI's written reasoning is displayed in full, providing complete transparency on the classification decision and ensuring the agency can audit every automated call the system makes.",
          },
        ],
        outro:
          "Is your sales team spending hours every week reading and deleting spam from your contact forms? That's not a people problem — it's a systems problem. Every hour spent reviewing irrelevant submissions is an hour your best people aren't spending on prospects who are actually ready to buy.",
      },
      {
        title: "AI-Powered Lead Magnets and Sales Widgets",
        intro:
          "Beyond standard contact forms, the agency needed a system that could deploy high-converting lead magnets and sales conversion widgets across client campaigns. LeadIQ CRM includes a built-in suite of campaign conversion tools designed to capture hot leads at peak intent moments. The Pricing Lead Widget is a dark-theme, high-urgency sales conversion widget deployed on campaign landing pages with built-in countdown timer, package selection, social proof indicators, and a performance guarantee mechanism. Lead Magnet Download Forms are gated content lead capture forms that distribute free resources (case studies, guides, reports) in exchange for contact details — building the agency's client email list while delivering genuine value to prospects.",
        featuresLabel: "Conversion tools built into the platform",
        features: [
          "Pricing Lead Widget — dark-theme, high-urgency conversion widget for landing pages",
          "Three-tier package selection with one-click pre-qualification by budget and intent",
          "Live countdown timer creating genuine urgency without false scarcity",
          "Performance guarantee messaging with refund promise",
          "Scarcity indicator showing spots remaining per campaign",
          "Lead Magnet Download Forms — gated content for free resources (case studies, guides, reports)",
          "Sales conversion popup widget with trust badges",
          "All submissions feed directly into the LeadIQ CRM AI pipeline for instant scoring",
        ],
        images: [
          {
            src: "/portfolio/crm/7.png",
            alt: "Pricing Lead Form Deployment",
            caption:
              "Pricing Lead Form Deployment: The LeadIQ-powered Transparent Monthly Pricing form deployed for the GroovyMark marketing campaign, showing the three package options (Starter $2,497/mo, Growth $3,997/mo, Scale $5,997/mo) alongside a Contact Us sidebar with WhatsApp quick connect and LinkedIn. Full Name, Email, Phone Number, Company Name, and 'How did you hear about us?' fields visible. All leads from this form enter LeadIQ CRM with package selection pre-attached for immediate AI scoring.",
          },
          {
            src: "/portfolio/crm/8.png",
            alt: "Sales Conversion Widget",
            caption:
              "Sales Conversion Widget: The high-urgency sales popup widget deployed for the GroovyMark EdTech YouTube campaign. Features: countdown timer (11 days, 20 hours, 44 minutes remaining), $750 founding offer price (reduced from $1,670), comprehensive deliverables checklist, performance guarantee with refund promise, scarcity indicator (2 of 5 spots taken), and a prominent 'Claim My Pilot Spot' CTA. Trust badges at the bottom ('No spam / Safe with GroovyMark / Cancel anytime') eliminate objections at the point of conversion.",
          },
          {
            src: "/portfolio/crm/9.png",
            alt: "Lead Magnet Form",
            caption:
              "Lead Magnet Form: The LeadIQ-powered gated content download form for 'How We Turned YouTube Into a Lead Machine for a USA EdTech Brand' — a free case study lead magnet. Orange-branded left panel with compelling headline and positioning copy drives form completion. Right panel captures Full Name, Company, Work Email, and Mobile Number, with a 'Download Now' CTA. Instant delivery and privacy assurance messaging reduces submission friction. All captured leads feed directly into the LeadIQ AI pipeline.",
          },
        ],
      },
      {
        title:
          "Autonomous 24/7 Lead Management: AI Call Assistance & Chat Agents",
        intro:
          "The platform's most operationally transformative capability is its fully autonomous lead management layer — the component that allowed the agency to replace its call centre, sales team, and customer support function with a single integrated AI system. Once a lead enters the pipeline and passes AI classification as genuine, the system takes over end-to-end.",
        featuresLabel: "What happens once a lead is classified as genuine",
        features: [
          "Instant AI Response — Responds to the lead automatically within seconds, 24/7/365, with no human delay, no business hours limitation, no timezone gaps",
          "AI Chat Agent — Engages the lead in contextually intelligent conversation, answers service questions, qualifies further, and guides them to the next step",
          "AI Call Assistance — Handles outbound contact for high-score leads, including qualification conversations and appointment setting, without requiring a human sales rep",
          "Continuous Lead Nurturing — Leads that don't convert immediately are enrolled in automated nurture sequences, keeping client offerings top-of-mind",
          "Complete Audit Trail — Every interaction, classification decision, and follow-up action is logged within the CRM with full visibility into the lifecycle",
        ],
        images: [],
        outro:
          "The result: one integrated AI system replaces three traditional cost centres — sales, support, and call centre — while operating with quality and consistency that scales effortlessly across every client campaign.",
      },
    ],

    results: [
      { label: "Sales team replaced", text: "AI handles all lead responses, qualification, and follow-up — 24 hours a day, 7 days a week." },
      { label: "Call centre replaced", text: "AI call assistance manages high-score lead outreach without human operators." },
      { label: "Customer support replaced", text: "AI chat agents handle inquiries across all client campaigns automatically." },
      { label: "Spam auto-filtered", text: "AI classifies every submission — genuine leads reach the pipeline instantly, spam never does." },
      { label: "Instant lead response", text: "Sub-second response time to every submission vs industry average of 47+ hours." },
      { label: "Three form types", text: "Standard, AI Powered, and Pricing Lead forms deployable on any client website." },
      { label: "Multi-campaign management", text: "Single platform manages leads across all client campaigns simultaneously." },
      { label: "Lead magnet capability", text: "Gated content forms, pricing widgets, and sales popups all built into one system." },
      { label: "Full AI audit trail", text: "Every classification decision documented with AI reasoning for complete transparency." },
      { label: "Zero tool fragmentation", text: "One system replaces CRM, form builder, lead scoring, sales automation, and support tools." },
    ],

    techDelivered: [
      "Custom full-stack CRM web application development",
      "Integrated AI lead analysis and classification engine",
      "AI-powered conversational form technology",
      "Automated lead scoring (High / Medium / Low priority)",
      "Real-time spam detection with AI written reasoning",
      "AI chat agent integration for autonomous lead engagement",
      "AI call assistance for high-intent lead outreach",
      "Multi-form builder (Standard / AI Powered / Pricing Lead)",
      "Embeddable form generation for client website deployment",
      "Hosted standalone form page capability",
      "Pricing lead widget with countdown timer and scarcity mechanics",
      "Lead magnet gated content download forms",
      "Sales conversion popup widget development",
      "Multi-client, multi-campaign management from one dashboard",
      "Automated lead nurture sequence infrastructure",
      "Complete lead lifecycle audit logging",
      "Responsive design for Desktop and Mobile access",
    ],

    closing: {
      lede:
        "The marketing agencies that grew fastest over the last five years shared one characteristic: they systematised their lead management before their growth demanded it. They didn't wait until they were overwhelmed with leads to build the systems to handle them. They built the infrastructure first — and then growth became a feature, not a crisis. The agencies struggling right now share a different characteristic: they're still treating lead management as a human process in a world that has already moved to AI-driven systems.",
      punchline: "The cost of not automating is not neutral. It's compounding.",
      cta:
        "If your agency is still manually reviewing contact form submissions, losing hot leads because follow-up happened hours too late, paying for a sales team to do work AI handles better and faster, or stitching together HubSpot, Typeform, Calendly and three other tools to build a workflow that still requires constant human supervision — then your agency is not competing on a level playing field with those that have already deployed AI-powered lead management systems. The question isn't whether AI will replace manual lead management in your industry. That shift is already underway. The question is whether you build the system before your competitors do — or after.",
      callout:
        "Your next high-value client may have already submitted a form on a competitor's website and received an intelligent, personalised response within 30 seconds. While they're booking a call with your competitor, their inquiry in your inbox is still waiting for someone to open it on Monday morning.",
    },

    finalCta: {
      heading:
        "Ready to replace your manual lead management with an AI system that never sleeps, never misses a lead, and never lets spam waste your team's time?",
      intro:
        "At GroovyMark Web X, we build custom AI-powered web systems that solve the real operational problems that generic SaaS tools were never designed to fix. LeadIQ CRM was built for one agency's specific operational reality. The next system we build will be built for yours — not adapted, not configured, not templated. Engineered from the ground up around exactly how your business works, exactly what your clients need, and exactly the competitive edge your campaigns require.",
      tiredOf: [
        "Stop paying for a sales team to do work AI handles better",
        "Respond to every lead in seconds instead of hours",
        "Automatically eliminate spam before it reaches your pipeline",
        "Deploy intelligent lead magnets and sales widgets across client campaigns",
        "Run a 24/7 lead management operation without 24/7 staffing costs",
      ],
      tiredOfOutro: "Then it's time to talk to GroovyMark Web X.",
      finalLine:
        "The agencies winning the next decade aren't hiring bigger teams. They're building smarter systems. Let's build yours.",
    },

    about: {
      intro:
        "GroovyMark Web X is a specialist custom web development and AI web systems agency delivering results-driven digital platforms for businesses that demand more than off-the-shelf software and generic integrations. From AI-powered CRM systems to custom web analytics platforms, we engineer solutions that solve the real problems holding your business back — and build the infrastructure that lets you scale without limits.",
      services: [
        "Custom AI-Powered Web Application Development",
        "AI CRM & Lead Management System Development",
        "Business Process Automation via AI Web Systems",
        "Lead Magnet & Sales Funnel Engineering",
        "Custom Web Analytics & Intelligence Platform Development",
        "SEO-Optimised Web Development",
        "Digital Platform Architecture & Engineering",
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────
  //  Web Intelligence Platform — for a USA-based SEO Agency
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "web-analytics-platform",
    title:
      "How we built a unified Web Intelligence Platform for a USA based SEO agency",
    subtitle:
      "And replaced three expensive tools with one custom system",
    headline:
      "A unified Web Intelligence Platform — replacing Google Analytics, an uptime monitor, and a link-tracking tool — engineered from scratch for a USA-based SEO agency managing multiple client websites.",
    client: "USA-based SEO & Digital Marketing Agency",
    industry: "SEO & Digital Marketing Agency",
    location: "United States",
    clientType: "B2B Agency",
    projectType: "Custom Web Analytics & Monitoring Dashboard",
    timeline: "1 week",
    cover: "/portfolio/web-analytics-tool/cover-1.png",
    category: "Web Development",
    tags: ["Web Analytics", "SaaS Platform", "Uptime Monitoring", "Link Tracking", "Real-time Data"],
    metrics: [
      { value: "3 → 1", label: "Tools replaced" },
      { value: "100%", label: "Monitored uptime" },
      { value: "<200ms", label: "Avg. response time" },
      { value: "21", label: "Countries tracked" },
    ],
    shortDescription:
      "Replaced Google Analytics, a separate uptime monitor, and a link-tracking tool with one custom-built platform — real-time data, automated alerts, and zero lag.",
    testimonial: {
      quote:
        "Before GroovyMark built this for us, I was juggling Google Analytics, a separate uptime tool, and another link tracker — three dashboards, three bills, and still waiting two weeks for data to mean anything. Now everything is in one place and I'm seeing what's happening on my clients' sites in real time. The uptime alerts alone have saved us from some very uncomfortable client conversations. If you're running an SEO agency and still stitching tools together, you're wasting money and time you don't have.",
      name: "Marcus Webb",
      role: "Founder",
      flag: "🇺🇸",
    },

    problemIntro:
      "Are you running a digital agency and spending hours every week jumping between Google Analytics, UptimeRobot, Bitly, and multiple spreadsheets just to get a clear picture of your clients' website performance? You're not alone — and this is exactly the broken workflow our client was trapped in. Our client, a growing SEO agency based in the United States managing multiple client websites, faced a critical operational bottleneck that most agencies quietly accept as \"just how things work.\"",
    problems: [
      {
        title: "Data latency disaster",
        text: "Traditional tools like Google Analytics and Google Search Console take anywhere from 7 to 14 days to reflect real website data. In the fast-moving world of SEO and digital marketing, that's not a reporting delay — that's a business liability. Campaigns can fail, rankings can drop, and traffic can crash while your analytics dashboard is still showing last week's picture.",
      },
      {
        title: "Tool fragmentation overhead",
        text: "To do their job properly, the agency was forced to use three separate third-party platforms: Google Analytics (website traffic and visitor behavior), a separate uptime monitoring tool (website availability tracking), and a separate link tracking tool (campaign and referral link performance). Three logins. Three dashboards. Three billing cycles. Three sets of limitations.",
      },
      {
        title: "Subscription cost inefficiency",
        text: "Each of these tools operated on a monthly subscription model. The free tiers were not sufficient for managing multiple client websites at a professional level. To unlock essential Pro features, the agency would need to pay for three separate Pro-tier subscriptions simultaneously — a significant and recurring operational cost.",
      },
      {
        title: "Missing features, unwanted features",
        text: "Generic tools are built for the mass market, not for your specific workflow. The agency had features they didn't need taking up screen space, and critical features they did need that simply didn't exist in the tools they were using. There was no single platform that matched their exact operational requirements.",
      },
      {
        title: "No real-time alerting for client website downtime",
        text: "If a client's website went down at 2:00 AM, the agency had no way of knowing until someone manually checked — or worse, until the client called to complain. In an industry where uptime equals revenue, this was an unacceptable gap.",
      },
    ],
    problemCallout:
      "Is your agency still duct-taping three different tools together to monitor your clients' websites? Every hour you spend switching between dashboards is an hour you're not spending growing your business. There's a better way.",

    solutionIntro:
      "GroovyMark Web X designed and developed a fully custom, unified Web Intelligence Platform tailored precisely to this agency's operational needs. Built from the ground up, the system replaced three third-party subscriptions with a single integrated platform featuring real-time data, automated alerts, and advanced analytics — all in one dashboard. The platform was architected around three core pillars.",
    pillars: [
      {
        title: "Real-time Web Analytics Engine",
        intro:
          "Unlike Google Analytics which processes data in batches with multi-day delays, the custom analytics engine captures and displays website data in real time. Client websites are connected via a single one-step verification method — no complex tag manager setups, no developer dependency, no waiting period.",
        featuresLabel: "Key analytics capabilities built into the platform",
        features: [
          "Total Page Views tracking with time-series visualisation",
          "Unique Visitor identification and trend analysis",
          "Geographic reach — visitors tracked across countries worldwide",
          "Traffic Source attribution (organic, referral, direct, social)",
          "Top Pages performance ranking to identify high-value content",
          "Top Referrers analysis — knowing exactly where traffic comes from",
          "Traffic by Hour heat mapping — understanding peak engagement windows",
          "Device breakdown: Desktop, Mobile, Tablet split",
          "Browser distribution analysis (Chrome, Safari, Firefox, Edge, etc.)",
          "Operating System segmentation (Windows, macOS, iOS, Android, Linux)",
          "UTM Campaign tracking for paid and organic campaign performance",
        ],
        images: [
          {
            src: "/portfolio/web-analytics-tool/1.png",
            alt: "Web Analytics Dashboard — real-time overview",
            caption:
              "Web Analytics Dashboard: Real-time overview showing 3,053 total page views, 905 unique visitors, traffic from 21 countries, and 15 traffic sources, with a 30-day traffic trend line chart showing growth patterns from April 24 through May 19.",
          },
          {
            src: "/portfolio/web-analytics-tool/2.png",
            alt: "Geographic & device intelligence",
            caption:
              "Geographic & Device Intelligence: World map showing visitor distribution with the United States leading at 2,636 views, followed by Sri Lanka (284), Germany (28), Singapore (23), Canada (18), UAE (14), South Korea (8), and Japan (7). Device breakdown shows 71.7% desktop, 27.5% mobile, 0.8% tablet. Browser chart shows Chrome dominating at 47%.",
          },
          {
            src: "/portfolio/web-analytics-tool/3.png",
            alt: "Traffic intelligence detail view",
            caption:
              "Traffic Intelligence Detail View: Top Pages report showing /contact page leading with 420 views, homepage at 272, and content pages driving steady traffic. Top Referrers panel showing YouTube as the second largest traffic source (796 views), confirming multi-channel audience reach. Traffic by Hour bar chart showing activity peaks at midnight–1 AM and again at 6 PM–9 PM — critical intelligence for content scheduling and campaign timing.",
          },
        ],
      },
      {
        title: "Real-time Website Uptime Monitoring",
        intro:
          "Every minute a client's website is down is revenue, trust, and rankings lost. The platform's built-in uptime monitoring system runs automated checks every hour with deep daily scans that actively look for broken pages — not just server availability, but actual page-level health.",
        featuresLabel: "Key uptime monitoring capabilities",
        features: [
          "Multi-URL monitoring across all client websites from one dashboard",
          "HTTP Status Code verification (200 OK confirmation for every page)",
          "Response time tracking in milliseconds for performance benchmarking",
          "24-hour uptime percentage with 7-day historical uptime records",
          "Instant automated email alerts the moment any website or page goes down",
          "Daily deep scans specifically targeting broken pages and dead links",
          "Zero-downtime record tracking — measurable reliability reporting for clients",
        ],
        outro:
          "This level of uptime visibility means the agency can proactively notify clients of any issues before clients even notice — transforming a reactive support model into a proactive service differentiator.",
        images: [
          {
            src: "/portfolio/web-analytics-tool/4.png",
            alt: "Uptime monitor dashboard",
            caption:
              "Uptime Monitor Dashboard: All 4 monitored URLs showing 100% uptime across both 24-hour and 7-day windows. Response times are lightning-fast: All Exams page at 59 ms, About Us at 63 ms, Contact Page at 19 ms, and Home Page at 166 ms. Last check confirmed at May 19, 07:42 PM with HTTP 200 status on all pages.",
          },
        ],
      },
      {
        title: "Intelligent Link Tracking System",
        intro:
          "Understanding how visitors navigate from external touchpoints — YouTube videos, social posts, email campaigns, partnerships — to client websites is essential for proving ROI and optimising campaign performance. The platform includes a built-in smart link tracking system that eliminates the need for third-party URL shorteners or standalone link management tools.",
        featuresLabel: "Key link tracking capabilities",
        features: [
          "Custom short link generation with branded domain support",
          "Total click and unique click differentiation for accurate engagement metrics",
          "Geographic click data — knowing which countries are engaging with each link",
          "Traffic source attribution per link",
          "Time-series click behaviour charts showing engagement momentum",
          "Real-time recent clicks log with timestamp, country, browser, and device",
          "UTM campaign layer for granular campaign-level performance tracking",
        ],
        images: [
          {
            src: "/portfolio/web-analytics-tool/5.png",
            alt: "YouTube contact link tracker",
            caption:
              "YouTube Contact Link Tracker: 30-day performance view of a YouTube campaign link showing 14 total clicks, 11 unique clicks, reaching visitors from 5 countries through 1 traffic source. Time-series chart shows click spike on April 28, followed by a sustained engagement tail — indicating strong initial campaign push with ongoing organic discovery.",
          },
          {
            src: "/portfolio/web-analytics-tool/6.png",
            alt: "Link tracker detail panel",
            caption:
              "Link Tracker Detail Panel: Referrer source confirmed as YouTube (3 direct referrals), Chrome browser dominating at 70%, Desktop at 78.6% and Mobile at 21.4%. Recent clicks log shows verified engagement from United States, Croatia, France, and Sri Lanka — confirming international audience reach of the YouTube campaign.",
          },
        ],
      },
    ],

    results: [
      { label: "Real-time data", text: "Zero-delay analytics vs. 7–14 day lag with traditional tools." },
      { label: "3 tools → 1 system", text: "Consolidated web analytics, uptime monitoring & link tracking into a single unified platform." },
      { label: "Cost efficiency", text: "Eliminated three separate Pro-tier subscription costs." },
      { label: "100% uptime", text: "All monitored client pages maintaining perfect uptime with sub-200 ms response times." },
      { label: "Global reach visible", text: "Website traffic tracked across 21 countries in real time." },
      { label: "Instant alerts", text: "Automated email notifications for any downtime event — no manual checking required." },
      { label: "Campaign intelligence", text: "YouTube-driven traffic confirmed and tracked with click-level geographic detail." },
      { label: "One-step onboarding", text: "New client websites connected in minutes, not days." },
    ],

    techDelivered: [
      "Custom full-stack web application development",
      "Real-time data pipeline architecture",
      "One-step website verification and connection system",
      "Advanced web analytics engine (custom-built, no third-party dependency)",
      "Automated uptime monitoring with hourly checks and deep daily scans",
      "Intelligent link tracking and campaign attribution system",
      "Automated email alert system for downtime events",
      "Multi-client, multi-website management from a single dashboard",
      "Responsive design supporting Desktop and Mobile access",
      "Secure client data isolation and management",
    ],

    closing: {
      lede: "The digital marketing industry is moving faster than legacy tools were designed to handle. If you're still relying on disconnected platforms with delayed data, fragmented workflows, and mounting subscription costs, you're operating at a structural disadvantage compared to agencies with purpose-built systems.",
      punchline: "The problem isn't your team. The problem is your tools.",
      cta:
        "A custom-built web intelligence platform isn't a luxury — it's the operational infrastructure that lets you serve more clients, retain them longer, and prove your value with real-time data they can see and trust.",
      callout:
        "Does your agency still lack a real-time window into your clients' website health? Every agency that switches from disconnected tools to a unified custom platform reports the same thing: they wish they'd done it sooner. Don't let outdated tools be the ceiling on your agency's growth.",
    },

    finalCta: {
      heading:
        "Ready to replace your fragmented tool stack with one powerful system?",
      intro:
        "At GroovyMark Web X, we build custom web systems that solve real operational problems for agencies, businesses, and platforms — not off-the-shelf solutions forced to fit your workflow, but purpose-engineered systems built around exactly how you work.",
      tiredOf: [
        "Waiting 14 days for analytics data to appear",
        "Paying for three tools when you need one",
        "Finding out a client's website was down hours after it happened",
        "Using tools built for someone else's business",
      ],
      tiredOfOutro:
        "Then it's time to talk to GroovyMark Web X.",
      finalLine:
        "Stop firefighting. Start leading. The agencies winning in 2025 aren't using more tools — they're using smarter ones. Let's build yours.",
    },

    about: {
      intro:
        "GroovyMark Web X is a specialist web development and AI web systems agency delivering results-driven digital platforms for businesses that demand more than templates and third-party workarounds. From custom analytics dashboards to AI-powered web applications, we engineer solutions that solve the real problems holding your business back.",
      services: [
        "Custom Web Application Development",
        "AI-Powered Web System Development",
        "Business Process Automation via Web Systems",
        "Digital Platform Architecture & Engineering",
        "SEO-Optimised Web Development",
        "Web Analytics & Intelligence Platform Development",
      ],
    },
  },
];

export const getCaseStudyBySlug = (slug) =>
  CASE_STUDIES.find((c) => c.slug === slug);

export const ALL_CASE_STUDY_SLUGS = CASE_STUDIES.map((c) => c.slug);

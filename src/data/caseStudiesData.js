import case1 from '../assets/images/case1.webp';
import case2 from '../assets/images/case2.webp';
import case3 from '../assets/images/case3.webp';
import case4 from '../assets/images/case4.webp';

export const caseStudies = [
  {
    id: 'rocken-saas-app',
    image: case1,
    title: 'NodeJS Development, Security',
    subtitle: 'Rocken SaaS App',
    intro: 'We helped Rocken overhaul their legacy backend into a high-performance, secure, and scalable NodeJS-powered SaaS platform tailored for the real estate industry.',
    content: [
      'Rocken, a growing SaaS provider in the real estate industry, faced serious performance issues due to their outdated monolithic backend. Their system struggled under traffic surges, and lacked role-based access and auditing, which led to compliance risks. The client reached out to us with the goal of rebuilding their backend infrastructure while enhancing security and scalability.',
      'We began by conducting a full audit of their architecture, followed by designing a scalable microservices-based backend using Node.js, Express, and MongoDB. For authentication, we introduced JWT-based access control along with fine-grained RBAC (role-based access control) to protect sensitive tenant data. We also integrated audit trails and alerting for critical actions, ensuring traceability and compliance readiness.',
      'Post-deployment, Rocken saw a 40% improvement in backend performance and over 99.95% uptime. Additionally, their support ticket volume dropped by 25%, and they successfully onboarded two new enterprise clients within the first month. Server costs were reduced by nearly 30% due to better resource management and containerization with Docker. This transformation positioned Rocken to scale confidently and meet enterprise compliance standards such as ISO 27001 and GDPR.'
    ]
  },
  {
    id: 'startup-platform-ui',
    image: case2,
    title: 'ReactJS, UI/UX Design',
    subtitle: 'Startup Platform',
    intro: 'Designed and built a full-featured startup platform using ReactJS with a strong focus on performance, intuitive UI/UX, and seamless onboarding for founders and mentors.',
    content: [
      'Our client envisioned a digital ecosystem where early-stage founders could connect with mentors, investors, and incubators—all within one unified platform. They needed a responsive and scalable frontend with visually engaging UI components to attract both startups and stakeholders.',
      'We delivered a single-page application (SPA) built on ReactJS, using TailwindCSS for rapid styling and Framer Motion for micro animations that enhance interactivity. The platform featured multi-step onboarding, profile creation, video pitch uploads, mentor matching, and Stripe-powered payment integration for funding applications.',
      'We also incorporated analytics to track user engagement and A/B tested different onboarding flows. Over 800 startups signed up within the first quarter. The intuitive design and frictionless navigation led to an 89% completion rate on onboarding and a 5-minute average session duration. Investors and VCs praised the user interface for clarity and actionable insights.'
    ]
  },
  {
    id: 'enterprise-security-suite',
    image: case3,
    title: 'Security Audit, Backend',
    subtitle: 'Enterprise Security Suite',
    intro: 'Led a full-scale security audit and backend refactoring for an enterprise-grade B2B security software used by government and defense clients.',
    content: [
      'The client, a leading B2B security software vendor, engaged us to perform a comprehensive security assessment after facing concerns about GDPR readiness and SOC 2 compliance. Their legacy backend used outdated libraries and lacked essential features such as token rotation, IP whitelisting, and audit logging.',
      'We initiated a deep security audit, uncovering vulnerabilities in their API endpoints, S3 file storage, and token management. Using NestJS and PostgreSQL, we rearchitected the entire backend with a modular structure, secure middleware, and asynchronous job queues. We implemented MFA (multi-factor authentication), token rotation, and encrypted logging with daily rollovers.',
      'After deployment, the platform passed an external SOC 2 Type II audit and met GDPR and HIPAA compliance standards. Their team received in-depth secure development training from us, and the overall breach risk level dropped by 78% according to an independent risk analysis. This case became a benchmark for secure SaaS transformation in high-compliance industries.'
    ]
  },
  {
    id: 'ecommerce-revamp',
    image: case4,
    title: 'Fullstack Development',
    subtitle: 'Ecommerce Revamp',
    intro: 'We reengineered a struggling eCommerce site to support traffic spikes, optimize performance, and increase conversion rates through modern full-stack technologies.',
    content: [
      'An established fashion retailer approached us after their legacy site repeatedly crashed during flash sales. They were also dealing with slow load times, high cart abandonment rates, and outdated payment integration. Our task was to rebuild their platform from the ground up with a fullstack approach that prioritized speed, scalability, and mobile responsiveness.',
      'We rebuilt the frontend using Next.js for server-side rendering and improved SEO, while the backend used Node.js and MongoDB for high performance and flexibility. We integrated a robust product management system, real-time inventory syncing, and a custom checkout flow. For analytics and A/B testing, we used Google Tag Manager and a custom dashboard built with Chart.js. We also created marketing automation tools like cart recovery emails and personalized product suggestions.',
      'The result was a massive improvement: Google Lighthouse scores jumped from 47 to 92, page load times dropped below 2 seconds, and monthly sales increased by 22%. Mobile conversions increased by 31% due to improved UX and better CTAs. With the new stack and modular architecture, the client can now scale to handle 10x traffic without performance degradation.'
    ]
  }
];

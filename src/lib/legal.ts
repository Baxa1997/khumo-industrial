/**
 * Privacy Policy and Terms & Conditions (English source; translated through the i18n dictionaries).
 * Placeholders: {legalName}, {phone}, {telegram}, {instagram}.
 * Have a lawyer review this text before relying on it.
 */

export type LegalSection = { title: string; paragraphs: string[]; list?: string[] };

export const legalUpdated = "2026-10-04";

export const privacySections: LegalSection[] = [
  {
    title: "Who we are",
    paragraphs: [
      "This website is operated by {legalName} (“Khumo Industrial”, “we”, “us”), the official Cyklop partner in Uzbekistan. We supply, set up and service product marking equipment.",
      "This Privacy Policy explains what personal data we collect through this website, why we collect it and how we protect it.",
    ],
  },
  {
    title: "What data we collect",
    paragraphs: ["We only collect the data you give us and the minimum technical data needed to run the website:"],
    list: [
      "Contact and request details you enter in our forms: name, phone number, company, email (optional), region and city, product of interest and your message.",
      "Messages you send us by phone, Telegram or Instagram.",
      "Technical data collected automatically when you visit the website: IP address, browser and device type, pages visited and the time of the visit.",
    ],
  },
  {
    title: "Why we use your data",
    paragraphs: ["We use your personal data to:"],
    list: [
      "Respond to your requests and prepare quotes.",
      "Supply, install and service equipment and consumables you order.",
      "Keep the website secure and working properly.",
      "Measure and improve our website and advertising.",
      "Meet our obligations under the law.",
    ],
  },
  {
    title: "Legal basis",
    paragraphs: [
      "We process personal data in accordance with the Law of the Republic of Uzbekistan “On Personal Data”. When you submit a form you give your consent to the processing of your data for the purposes described in this policy. You can withdraw your consent at any time.",
    ],
  },
  {
    title: "Sharing your data",
    paragraphs: ["We do not sell your personal data. We share it only when necessary:"],
    list: [
      "With service providers that help us run the website and receive requests (hosting, messaging services such as Telegram, advertising and analytics platforms).",
      "With the equipment manufacturer, when this is needed to fulfil your request, for example for warranty or technical support.",
      "With government authorities, when we are required to do so by law.",
    ],
  },
  {
    title: "Cookies and advertising",
    paragraphs: [
      "The website uses a cookie to remember the language you selected.",
      "We may use analytics and advertising tools (for example Google, Meta or Yandex) to understand how visitors find us and to measure the results of our advertising. These tools may set their own cookies and collect data about your visit. You can block or delete cookies in your browser settings.",
    ],
  },
  {
    title: "How long we keep data",
    paragraphs: [
      "We keep personal data only for as long as it is needed to handle your request and our business relationship, or for as long as the law requires. After that it is deleted or anonymized.",
    ],
  },
  {
    title: "How we protect data",
    paragraphs: [
      "We take reasonable technical and organizational measures to protect your data against loss, misuse and unauthorized access. Only employees who need the data for their work have access to it.",
    ],
  },
  {
    title: "Your rights",
    paragraphs: ["You have the right to:"],
    list: [
      "Find out what personal data we hold about you.",
      "Ask us to correct inaccurate data.",
      "Ask us to delete your data.",
      "Withdraw your consent to processing.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: ["We may update this Privacy Policy from time to time. The current version is always published on this page with the date of the last update."],
  },
  {
    title: "Contact",
    paragraphs: ["For any questions about your personal data or to exercise your rights, contact us by phone {phone}, on Telegram {telegram} or on Instagram {instagram}."],
  },
];

export const termsSections: LegalSection[] = [
  {
    title: "About these terms",
    paragraphs: [
      "These Terms & Conditions apply to the use of this website, operated by {legalName} (“Khumo Industrial”, “we”, “us”). By using the website you agree to these terms.",
    ],
  },
  {
    title: "Information on the website",
    paragraphs: [
      "Product descriptions, specifications and images on this website are provided for general information. Images may be illustrative and equipment specifications may change. The exact configuration, price and delivery time are confirmed in a quote.",
    ],
  },
  {
    title: "No public offer",
    paragraphs: [
      "Information on this website is not a public offer. A contract for the supply of equipment, consumables or services is concluded only on the basis of a separate written agreement or a confirmed quote and invoice.",
    ],
  },
  {
    title: "Quotes, delivery and warranty",
    paragraphs: [
      "Prices, payment, delivery, installation and warranty terms are set out in each quote and contract. Quotes are valid for the period stated in them.",
    ],
  },
  {
    title: "Trademarks and content",
    paragraphs: [
      "Texts, images and design of this website belong to Khumo Industrial or its partners. Cyklop and other brand names and logos are trademarks of their respective owners and are used to identify their products. Copying website content without our written permission is not allowed.",
    ],
  },
  {
    title: "Using the website",
    paragraphs: ["When using the website you agree not to:"],
    list: [
      "Use the website for any unlawful purpose.",
      "Send false information, spam or harmful content through our forms.",
      "Attempt to disrupt the website or gain unauthorized access to it.",
    ],
  },
  {
    title: "Links to other websites",
    paragraphs: [
      "The website contains links to third-party services such as Instagram and Telegram. We are not responsible for their content or privacy practices.",
    ],
  },
  {
    title: "Limitation of liability",
    paragraphs: [
      "We make every effort to keep the information on the website accurate and up to date, but the website is provided “as is”. To the extent permitted by law, we are not liable for any loss arising from the use of the website or from relying on its content.",
    ],
  },
  {
    title: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of the Republic of Uzbekistan. Disputes are resolved by negotiation and, if no agreement is reached, by the competent courts of the Republic of Uzbekistan.",
    ],
  },
  {
    title: "Changes to these terms",
    paragraphs: ["We may update these terms from time to time. The current version is always published on this page."],
  },
  {
    title: "Contact",
    paragraphs: ["Questions about these terms? Call us at {phone} or write to us on Telegram {telegram}."],
  },
];

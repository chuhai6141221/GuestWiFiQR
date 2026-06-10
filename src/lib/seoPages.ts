export type FAQItem = {
  question: string;
  answer: string;
};

export type SeoSection = {
  heading: string;
  body: string;
};

export type SeoPageConfig = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: SeoSection[];
  faq: FAQItem[];
};

export const SITE_URL = "https://guestwifiqr.com";
export const SITE_NAME = "GuestWiFiQR";

export const homeFaq: FAQItem[] = [
  {
    question: "How do I create a WiFi QR code for Airbnb?",
    answer:
      "Enter your guest WiFi network name and password, choose a printable template, then download the sign as a PNG or PDF. Guests can scan the QR code to join the network without typing the password."
  },
  {
    question: "Can iPhone and Android scan WiFi QR codes?",
    answer:
      "Yes. Modern iPhone and Android camera apps can recognize standard WiFi QR codes and prompt guests to join the network."
  },
  {
    question: "Is it safe to print my WiFi password?",
    answer:
      "For vacation rentals, it is best to create a separate guest WiFi network and print only that guest network password."
  },
  {
    question: "Does the QR code expire?",
    answer:
      "No. The QR code contains your WiFi details directly, so it works until you change the network name, password, or security type."
  },
  {
    question: "Can I download a PDF?",
    answer:
      "Yes. GuestWiFiQR can export a printable PDF using the paper size you choose."
  },
  {
    question: "Can I use this for Vrbo or vacation rentals?",
    answer:
      "Yes. The sign is suitable for Airbnb, Vrbo, Booking.com stays, cabins, beach houses, guest suites, and other vacation rentals."
  }
];

export const seoPages: SeoPageConfig[] = [
  {
    slug: "airbnb-wifi-qr-code-generator",
    title: "Airbnb WiFi QR Code Generator - Guest Sign Template",
    description:
      "Generate a printable Airbnb WiFi QR code sign. Add your network name, password, property details, and download a guest-friendly PNG or PDF.",
    h1: "Airbnb WiFi QR Code Generator",
    intro:
      "Create a polished WiFi sign for your Airbnb so guests can scan once and connect without typing a password.",
    sections: [
      {
        heading: "Make Check-In Easier for Guests",
        body:
          "A clear WiFi QR sign reduces repeated messages from guests and makes the first few minutes of every stay feel smoother."
      },
      {
        heading: "Printable Airbnb WiFi Templates",
        body:
          "Choose from simple, hotel-inspired, coastal, cabin, and family-friendly layouts made for short-term rental spaces."
      },
      {
        heading: "Private by Design",
        body:
          "Your WiFi name and password are processed in your browser only, so the generator does not upload or store your WiFi details."
      }
    ],
    faq: [
      {
        question: "What should an Airbnb WiFi sign include?",
        answer:
          "Include a welcome message, WiFi network name, password if you want it visible, QR code, and a short instruction such as scan to connect."
      },
      {
        question: "Can guests join WiFi by scanning the QR code?",
        answer:
          "Yes. The QR code uses the standard WiFi format supported by most modern iPhone and Android camera apps."
      },
      {
        question: "Should I use my main home WiFi?",
        answer:
          "For Airbnb hosting, a separate guest network is recommended before you print and share the QR code."
      }
    ]
  },
  {
    slug: "guest-wifi-qr-code-generator",
    title: "Guest WiFi QR Code Generator - Printable Sign",
    description:
      "Create a guest WiFi QR code sign for visitors, rentals, offices, and hospitality spaces. Download a printable sign in minutes.",
    h1: "Guest WiFi QR Code Generator",
    intro:
      "Turn your guest WiFi details into a clean QR code sign that visitors can scan from their phone camera.",
    sections: [
      {
        heading: "Fast Guest Access",
        body:
          "Guests do not need to ask for the password or copy it from a message. They can scan the sign and connect instantly."
      },
      {
        heading: "Works for Homes and Rentals",
        body:
          "Use the generator for guest rooms, short-term rentals, lobbies, studios, salons, and small offices."
      },
      {
        heading: "No Account Required",
        body:
          "The tool opens directly to the generator. No login, database, or saved guest WiFi record is needed."
      }
    ],
    faq: [
      {
        question: "Is this guest WiFi QR code free?",
        answer:
          "You can generate, preview, and download a watermarked PNG for free. Pro download options are planned for a later release."
      },
      {
        question: "Can I hide the password on the sign?",
        answer:
          "Yes. You can choose whether the printed sign shows the password text while the QR code still contains the WiFi details."
      },
      {
        question: "Does this work with no-password WiFi?",
        answer:
          "Yes. Select No password and the generator will create a nopass WiFi QR code."
      }
    ]
  },
  {
    slug: "wifi-password-sign-generator",
    title: "WiFi Password Sign Generator - Printable QR Template",
    description:
      "Design a printable WiFi password sign with a scannable QR code for guests. Choose templates and export PNG or PDF.",
    h1: "WiFi Password Sign Generator",
    intro:
      "Create a tidy WiFi password sign that looks intentional on a welcome table, nightstand, or entry console.",
    sections: [
      {
        heading: "Printable Password Display",
        body:
          "Show the network name and password clearly, or keep the password hidden and let the QR code handle connection."
      },
      {
        heading: "Made for Real Guest Rooms",
        body:
          "Each sign includes welcome text, scan instructions, WiFi details, optional property name, host contact, and a closing note."
      },
      {
        heading: "Choose the Right Size",
        body:
          "Export common print sizes including 4x6, 5x7, A4, and US Letter for frames, stands, and printed welcome folders."
      }
    ],
    faq: [
      {
        question: "Can I print the WiFi password on the sign?",
        answer:
          "Yes. Turn on Show password to display it below the QR code, or turn it off for a cleaner sign."
      },
      {
        question: "What if my password has punctuation?",
        answer:
          "GuestWiFiQR escapes special characters such as semicolons, commas, colons, quotes, and backslashes for WiFi QR compatibility."
      },
      {
        question: "Can I export a PDF for printing?",
        answer:
          "Yes. The PDF export uses the selected paper size so you can print the sign more easily."
      }
    ]
  },
  {
    slug: "vacation-rental-wifi-sign",
    title: "Vacation Rental WiFi Sign - Printable QR Code Maker",
    description:
      "Make a vacation rental WiFi sign with a scannable QR code for guests. Perfect for cabins, beach houses, suites, and short stays.",
    h1: "Vacation Rental WiFi Sign",
    intro:
      "Give guests a clear, attractive WiFi sign that fits the style of your rental and cuts down on check-in friction.",
    sections: [
      {
        heading: "Built for Vacation Rentals",
        body:
          "The templates work for beach houses, cabins, apartments, guest suites, and serviced rentals."
      },
      {
        heading: "Helpful Details in One Place",
        body:
          "Add property name, host contact, welcome copy, and WiFi access details so guests know exactly what to scan."
      },
      {
        heading: "Ready for Frames and Welcome Books",
        body:
          "Download a printable sign that can be framed, placed in a stand, or inserted into a printed welcome guide."
      }
    ],
    faq: [
      {
        question: "Where should I place a vacation rental WiFi sign?",
        answer:
          "Common spots include the entry table, kitchen counter, TV console, nightstand, and inside the guest welcome book."
      },
      {
        question: "Can I use this for multiple properties?",
        answer:
          "Yes. Generate a separate sign for each property using that rental's guest WiFi name and password."
      },
      {
        question: "Does GuestWiFiQR store my rental WiFi details?",
        answer:
          "No. The WiFi details are processed locally in your browser and are not uploaded or saved."
      }
    ]
  },
  {
    slug: "vrbo-wifi-sign-template",
    title: "Vrbo WiFi Sign Template - Printable QR Code Sign",
    description:
      "Create a Vrbo WiFi sign template with QR code, network name, and optional password. Download a printable PNG or PDF.",
    h1: "Vrbo WiFi Sign Template",
    intro:
      "Make a guest-ready WiFi sign for your Vrbo property with templates that are simple to scan and easy to print.",
    sections: [
      {
        heading: "Simple Vrbo Guest Access",
        body:
          "A visible QR sign gives arriving guests a clear way to connect without searching through messages or house manuals."
      },
      {
        heading: "Customize the Sign",
        body:
          "Add your property name, host contact, welcome text, security type, and preferred printable size."
      },
      {
        heading: "Works Alongside Welcome Guides",
        body:
          "Use the downloaded WiFi sign as a standalone frame or as one page inside your guest welcome materials."
      }
    ],
    faq: [
      {
        question: "Is this tool affiliated with Vrbo?",
        answer:
          "No. GuestWiFiQR is an independent tool and is not affiliated with Vrbo, Airbnb, or Booking.com."
      },
      {
        question: "Can I make a Vrbo WiFi QR sign without logging in?",
        answer:
          "Yes. The generator is available immediately and does not require an account."
      },
      {
        question: "Can I download a sign for a 5x7 frame?",
        answer:
          "Yes. Choose 5x7 inch as the paper size before exporting."
      }
    ]
  },
  {
    slug: "airbnb-wifi-sign-template",
    title: "Airbnb WiFi Sign Template - Printable Guest QR Sign",
    description:
      "Design an Airbnb WiFi sign template with a QR code guests can scan to connect. Add welcome text and download for printing.",
    h1: "Airbnb WiFi Sign Template",
    intro:
      "Create a print-friendly Airbnb WiFi sign that looks at home in your rental instead of feeling like a plain password note.",
    sections: [
      {
        heading: "Template Styles for Hosts",
        body:
          "Pick a style that matches your space, from minimal white to luxury black, beach house, cabin, or boho."
      },
      {
        heading: "Clear Guest Instructions",
        body:
          "Every template includes scan instructions, the WiFi QR code, network name, optional password, and a friendly closing line."
      },
      {
        heading: "Easy to Update",
        body:
          "When your WiFi password changes, return to the generator, enter the new details, and download an updated sign."
      }
    ],
    faq: [
      {
        question: "Can I customize the Airbnb WiFi sign text?",
        answer:
          "Yes. You can edit the welcome text, property name, host contact, network name, and password visibility."
      },
      {
        question: "Which Airbnb WiFi template is free?",
        answer:
          "Minimal White, Modern Gray, and Simple Print are free templates in the MVP."
      },
      {
        question: "Will the QR code work after printing?",
        answer:
          "Yes. The QR code is generated into the printable PNG or PDF so guests can scan it from the printed sign."
      }
    ]
  },
  {
    slug: "wifi-qr-code-for-guests",
    title: "WiFi QR Code for Guests - Scan to Connect Sign",
    description:
      "Create a WiFi QR code for guests to scan and connect instantly. Add it to a printable welcome sign for rentals or visitor spaces.",
    h1: "WiFi QR Code for Guests",
    intro:
      "Make guest WiFi access feel effortless with a scannable sign that keeps the network details clear and easy to find.",
    sections: [
      {
        heading: "Fewer Password Typos",
        body:
          "Guests can scan the QR code instead of typing a long or complex WiFi password by hand."
      },
      {
        heading: "Local Browser Generation",
        body:
          "The QR code is created in the browser from the details you enter. No backend is needed to save or process the WiFi password."
      },
      {
        heading: "Good for Hospitality Spaces",
        body:
          "Use it for rentals, waiting rooms, studios, event spaces, small offices, and guest suites."
      }
    ],
    faq: [
      {
        question: "What format does the guest WiFi QR code use?",
        answer:
          "It uses the standard WIFI:T:... format recognized by many mobile camera apps."
      },
      {
        question: "Can I use WPA or WEP?",
        answer:
          "Yes. Choose WPA/WPA2, WEP, or No password from the security type selector."
      },
      {
        question: "Will guests see the password?",
        answer:
          "Only if you choose to show it on the printed sign. The QR code itself contains the connection details."
      }
    ]
  },
  {
    slug: "printable-wifi-sign",
    title: "Printable WiFi Sign - QR Code Template for Guests",
    description:
      "Make a printable WiFi sign with a QR code, network name, and optional password. Download PNG or PDF for guest spaces.",
    h1: "Printable WiFi Sign",
    intro:
      "Design a printable WiFi sign that guests can scan from a frame, stand, welcome book, or wall display.",
    sections: [
      {
        heading: "Designed for Printing",
        body:
          "Choose standard paper sizes and template styles that stay readable when printed for a room or welcome area."
      },
      {
        heading: "Watermarked Free Download",
        body:
          "The MVP includes a free watermarked PNG export so you can test the sign immediately."
      },
      {
        heading: "Simple and Editable",
        body:
          "Change the network name, password, template, welcome message, or paper size and the preview updates in real time."
      }
    ],
    faq: [
      {
        question: "Can I print this WiFi sign at home?",
        answer:
          "Yes. Download the sign and print it on common paper sizes such as 4x6, 5x7, A4, or US Letter."
      },
      {
        question: "Can I use a frame?",
        answer:
          "Yes. 4x6 and 5x7 are convenient sizes for small desk frames and countertop stands."
      },
      {
        question: "Can I preview premium templates?",
        answer:
          "Yes. Premium templates can be previewed in the MVP. Pro downloads will be added later."
      }
    ]
  }
];

export function getSeoPageBySlug(slug: string): SeoPageConfig | undefined {
  return seoPages.find((page) => page.slug === slug);
}

export function faqJsonLd(faq: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

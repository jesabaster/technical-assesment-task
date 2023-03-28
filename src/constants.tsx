import { IconDiscord, IconInstagram, IconLocation, IconMail, IconPhone, IconTwitter } from "icons";

// Mock data for demo

export const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const PHONE_NUMBER_PATTERN = /^\d{10}$/;

export const contacts = [
  {
    id: '1',
    icon: <IconPhone />,
    text: '+1012 3456 789'
  },
  {
    id: '2',
    icon: <IconMail />,
    text: 'demo@gmail.com'
  },
  {
    id: '3',
    icon: <IconLocation />,
    text: '132 Dartmouth Street Boston, Massachusetts 02156 United States',
  }
];

export const socialNetworks = [
  {
    id: '1',
    icon: IconTwitter,
    link: 'https://twitter.com/',
  },
  {
    id: '2',
    icon: IconInstagram,
    link: 'https://www.instagram.com/',
  },
  {
    id: '3',
    icon: IconDiscord,
    link: 'https://discord.com/',
  }
];

export const footerLinksGroups = [
  {
    id: '1',
    title: 'Reach us',
    items: contacts,
  },
  {
    id: '2',
    title: 'Company',
    items: [{ text: 'About', id: '1' }, { text: 'Contact', id: '2' }, { text: 'Blogs', id: '3' }],
  },
  {
    id: '3',
    title: 'Legal',
    items: [
      {
        text: 'Privacy Policy', id: '1'
      },
      {
        text: 'Terms & Services',
        id: '2'
      },
      {
        text: 'Terms of Use',
        id: '3'
      },
      {
        text: 'Refund policy',
        id: '4'
      }
    ],
  },
  {
    id: '4',
    title: 'Quick links',
    items: [{ text: 'Techlabz Keybox', id: '1' }, { text: 'Downloads', id: '2' }, { text: 'Forum', id: '3' }]
  }
];
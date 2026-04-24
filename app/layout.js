export const metadata = {
  title: 'YB Company | Anything Else',
  description:
    'YB Company is a premium streetwear label built around identity, positivity, and clean monochrome design.',
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "Shriram Contact Center",
  description: "Financial Services Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

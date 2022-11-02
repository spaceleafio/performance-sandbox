import './globals.css';

type LayoutTypes = {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: LayoutTypes) {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  )
}

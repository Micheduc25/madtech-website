import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GUMUH - Empowering Africa's Digital Future",
  description:
    "GUMUH is a leading Cameroonian tech startup providing cutting-edge software solutions to drive digital transformation across Africa.",
  keywords:
    "Cameroon tech startup, digital innovation, tech solutions, digital literacy, tech talent, Cameroonian tech professionals, AI solutions, machine learning, digital transformation, tech business, tech services, tech projects, digital growth, tech training, tech internships",
  author: "GUMUH",
  robots: "index, follow",
  openGraph: {
    title: "GUMUH - Empowering Africa's Digital Future",
    description:
      "GUMUH is a leading Cameroonian tech startup providing cutting-edge software solutions to drive digital transformation across Africa.",
    type: "website",
    url: "https://www.gumuh.com",
    image: "https://www.gumuh.com/images/bg1.jpg",
  },

  twitter: {
    card: "summary_large_image",
    site: "@gumuhtech",
    title: "GUMUH - Empowering Africa's Digital Future",
    description:
      "GUMUH is a leading Cameroonian tech startup providing cutting-edge software solutions to drive digital transformation across Africa.",
    image: "https://www.gumuh.com/images/twitter-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.gumuh.com" />
        <meta name="msvalidate.01" content="51B301548E48430DA3B98E022CD18ECC" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        {/* <meta property="og:title" content={metadata.openGraph.title} /> */}
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

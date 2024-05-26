import "./assets/scss/globals.scss";
import "./assets/scss/theme.scss";
import "simplebar-react/dist/simplebar.min.css";
import "flatpickr/dist/themes/light.css";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import TanstackProvider from "@/provider/providers.client";
import Providers from "@/provider/providers";
import AuthProvider from "@/provider/auth.provider";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <TanstackProvider>
            <Providers>{children}</Providers>
          </TanstackProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

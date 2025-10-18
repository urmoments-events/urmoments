import { loadConfig } from "@/lib/config";
import AboutPageClient from "./AboutPageClient";

export default function AboutPage() {
  const config = loadConfig();
  return <AboutPageClient config={config} />;
}

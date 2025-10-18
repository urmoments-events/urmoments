import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - urmoments",
  description: "Learn more about urmoments, our mission, and our commitment to creating beautiful event decorations.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


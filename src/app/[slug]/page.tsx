import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SegmentArticle } from "@/components/SegmentArticle";
import {
  SEGMENT_PAGES,
  getSegmentPage,
  type SegmentSlug,
} from "@/lib/seo-segmentos";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SEGMENT_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getSegmentPage(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function SegmentSlugPage({ params }: Props) {
  const { slug } = await params;
  const page = getSegmentPage(slug as SegmentSlug);
  if (!page) notFound();
  return <SegmentArticle page={page} />;
}

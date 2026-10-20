import { notFound } from "next/navigation";

import CoursePage from "@/components/CoursePage";
import { COURSES, findCourse } from "@/content/courses";

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

// `output: 'export'` requires any dynamic route to pre-declare every slug via
// generateStaticParams; nothing outside that list is reachable at runtime.
export const dynamicParams = false;

export default async function CourseRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = findCourse(slug);
  if (!course) notFound();
  return <CoursePage course={course} />;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = findCourse(slug);
  if (!course) return { title: "Course not found" };
  return {
    title: `${course.title} — ${course.theme.client}`,
    description: course.description,
  };
}

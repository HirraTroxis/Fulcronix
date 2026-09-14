import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="bg-ink-900 flex flex-1 flex-col items-center justify-center gap-4 py-24 text-center">
      <h1 className="font-serif text-3xl text-white">Page not found</h1>
      <p className="max-w-md text-lg text-slate-400">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <ButtonLink href="/" variant="primary" withIcon>
        Back to home
      </ButtonLink>
    </Container>
  );
}

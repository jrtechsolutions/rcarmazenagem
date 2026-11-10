import { isSiteUnderConstruction } from "@/lib/construction";

export function ConstructionBanner() {
  if (!isSiteUnderConstruction()) return null;

  return (
    <div className="construction-banner" role="status">
      Site em desenvolvimento. Por enquanto só a página inicial está disponível.
    </div>
  );
}

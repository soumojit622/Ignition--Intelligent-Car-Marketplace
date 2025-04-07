import { Skeleton } from "@/components/ui/skeleton";

const CarListingsLoading = () => {
  return (
    <div className="space-y-8">
      {/* Header Skeleton */}
      <Skeleton className="h-8 w-44 rounded-md bg-muted dark:bg-zinc-800" />

      {/* Car Card Skeletons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-muted shadow-sm dark:border-zinc-700 overflow-hidden bg-background dark:bg-zinc-900 transition-all"
            >
              {/* Image skeleton */}
              <Skeleton className="h-48 w-full rounded-t-xl bg-muted dark:bg-zinc-800" />

              {/* Content skeleton */}
              <div className="p-5 space-y-4">
                <Skeleton className="h-5 w-2/3 rounded bg-muted dark:bg-zinc-700" />
                <Skeleton className="h-4 w-1/2 rounded bg-muted dark:bg-zinc-700" />

                <div className="space-y-2 pt-2">
                  <Skeleton className="h-4 w-4/5 rounded bg-muted dark:bg-zinc-700" />
                  <Skeleton className="h-4 w-3/5 rounded bg-muted dark:bg-zinc-700" />
                </div>

                {/* Buttons skeleton */}
                <div className="pt-4 flex gap-3">
                  <Skeleton className="h-10 flex-1 rounded-md bg-muted dark:bg-zinc-800" />
                  <Skeleton className="h-10 flex-1 rounded-md bg-muted dark:bg-zinc-800" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CarListingsLoading;

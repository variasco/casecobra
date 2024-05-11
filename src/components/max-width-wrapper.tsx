import { cn } from "@/lib/utils";
import { ClassnameProp } from "@/types/classname";

export default function MaxWidthWrapper(
  props: React.PropsWithChildren<ClassnameProp>
) {
  const { children, className } = props;

  return (
    <div
      className={cn(
        "size-full mx-auto max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}

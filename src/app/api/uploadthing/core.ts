import { createUploadthing, type FileRouter } from "uploadthing/next";
import { z } from "zod";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .input(z.object({ configId: z.string().optional() }))
    .middleware(async ({ input }) => ({ input }))
    .onUploadComplete(async ({ metadata }) => ({
      configId: metadata.input.configId,
    })),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

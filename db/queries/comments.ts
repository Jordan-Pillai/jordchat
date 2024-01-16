import type { Comment } from "@prisma/client";
import { cache } from "react";
import prisma from "@/db/prisma";

export type CommentWithAuthor = Comment & {
  user: { name: string | null; image: string | null };
};

export const fetchCommentsByPostId = cache(
  (postId: string): Promise<CommentWithAuthor[]> => {
    return prisma.comment.findMany({
      where: {
        postId,
      },
      include: {
        user: { select: { name: true, image: true } },
      },
    });
  }
);

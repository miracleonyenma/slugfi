import { useGenerateSlug } from "../../composables/useGenerateSlug";
const { generateSlug } = useGenerateSlug();

export default defineEventHandler((event) => {
  try {
    const query = getQuery(event);
    const { text, useUnderScore } = query;

    const slug = generateSlug(text as string, {
      useUnderScore: Boolean(useUnderScore),
    });

    return {
      slug,
    };
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: "Something went wrong!",
      message: error.message,
    });
  }
});

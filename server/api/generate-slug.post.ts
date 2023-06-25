import { useGenerateSlug } from "../../composables/useGenerateSlug";
const { generateSlug } = useGenerateSlug();

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { text, useUnderScore } = body;

    const slug = generateSlug(text, {
      useUnderScore,
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

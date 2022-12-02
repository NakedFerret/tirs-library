import type { PageServerLoad } from './$types';


export async function load({ params }: PageServerLoad) {
  return {
    post: {
      title: `Title for ${params.slug} goes here`,
      content: `Content for ${params.slug} goes here`
    }
  };
}

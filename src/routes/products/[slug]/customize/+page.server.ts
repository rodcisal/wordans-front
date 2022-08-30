import { error } from '@sveltejs/kit';
import { api, base } from '../../../api';
import type { PageServerLoad, Action } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  console.log(params.slug)
  const productId = params.slug;
	// locals.userid comes from src/hooks.js
	const response = await fetch(`${base}/products/${productId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const data = await response.json()

  return {
    product: data,
		...data
  }

	// if (response.status === 404) {
		// user hasn't created a todo list.
		// start with an empty array
	// 	return {
	// 		todos: [] as Todo[]
	// 	};
	// }

	// if (response.status === 200) {
	// 	return {
	// 		todos: (await response.json()) as Todo[]
	// 	};
	// }

	throw error(response.status);
};

// export const POST: Action = async ({ request, locals }) => {
// 	const form = await request.formData();

// 	await api('POST', `todos/${locals.userid}`, {
// 		text: form.get('text')
// 	});
// };

// export const PATCH: Action = async ({ request, locals }) => {
// 	const form = await request.formData();

// 	await api('PATCH', `todos/${locals.userid}/${form.get('uid')}`, {
// 		text: form.has('text') ? form.get('text') : undefined,
// 		done: form.has('done') ? !!form.get('done') : undefined
// 	});
// };

// export const DELETE: Action = async ({ request, locals }) => {
// 	const form = await request.formData();

// 	await api('DELETE', `todos/${locals.userid}/${form.get('uid')}`);
// };

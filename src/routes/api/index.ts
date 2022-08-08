import prisma from '$prisma';
import type { RequestEvent, RequestHandlerOutput } from '@sveltejs/kit';

export async function GET({}: RequestEvent): Promise<RequestHandlerOutput<void>> {

	return {
		status: 200
	};
}

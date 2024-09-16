'use server';

import { fetchProgrammings , fetchTools} from '@utils/getDatasFromCms'

export async function fetchProgrammingsFn() {
    const programmings = await fetchProgrammings();
    return programmings
}

export async function fetchToolsFn() {
    const tools = await fetchTools();
    return tools
}
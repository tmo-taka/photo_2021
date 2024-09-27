import { fetchSingleWork } from '@utils/getDatasFromCms'

export default async function Work({ params }: {params: {slug: ApiField.WorkType['slug']}}) {
    const {slug} = params
    const workData = await fetchSingleWork(slug);
    console.log(workData);

    return (
        <div>
            yあー
        </div>
    )
}
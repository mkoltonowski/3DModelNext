import { Post } from '@/components/posts/post'

type PostProps = {
    params: {
        id: number
    }
}

export default function Posts({ params }: PostProps) {
    return (
        <div className={'flex flex-col h-full'}>
            {[0, 1, 2].map(id => <Post key={id} id={(+params.id + id)} />)}
        </div>
    )
}

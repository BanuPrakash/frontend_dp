type Post = {
    id: number,
    title: string,
    content: string,
    user: {
        id: number,
        name: string
    };
};

type PostCardProps = {
    post: Post
}


export default function PostCard({ post }: PostCardProps) {
    return (
        <div className='flex w-[300px] flex-row gap-2 rounded-md'>
            <h2 className='text-lg font-semibold'>{post.title}</h2>
            <p>{post.content}</p>
            <p className='text-sm text-neutral-400'>
                {post.user.name}
            </p>
            <div className='flex flex-row gap-2'>
                <button>Read more</button>
                <button>Comments</button>
            </div>
        </div>
    )
}



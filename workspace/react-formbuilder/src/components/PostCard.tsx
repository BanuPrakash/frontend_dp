import { createContext, ReactNode, useContext } from "react";

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
    children: ReactNode,
    post: Post
}

type PostCardContextType = {
    post: Post
}

let PostCardContext = createContext<PostCardContextType | undefined>(undefined);

const usePostCardContext = () => {
    let context = useContext(PostCardContext);
    if (!context) {
        throw new Error('Component used outside of Context');
    }
    return context;
}

export default function PostCard({ children, post }: PostCardProps) {
    return (
        
            <div className='flex w-[300px] flex-row gap-2 rounded-md'>
                <p>{post.content}</p>
                <PostCardContext.Provider value={{ post }}>
                {children}
                </PostCardContext.Provider>
               

            </div>
      

    )
}

PostCard.Title = function PostCardTitle() {
     //let context = useContext(PostCardContext);
    let context = usePostCardContext();
    return <h2 className='text-lg font-semibold'>{context.post.title}</h2>
}

PostCard.User = function PostCardUser() {
    let context = useContext(PostCardContext);
    return <p className='text-sm text-neutral-400'>
        {context!.post.user.name}
    </p>
}


PostCard.Buttons = function PostCardButton() {
    let context = useContext(PostCardContext);
    return <div className='flex flex-row gap-2'>
        <button>Read more</button>
        <button>Comments</button>
    </div>
}

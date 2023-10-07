import React from 'react'

export const Post: React.FC<{ id: number }> = ({ id }) => {
    return (
        <div
            className={'flex h-1/ w-3/4 border-r-white p-10 border-2 box-border justify-center items-center rounded-3xl mb-8 bg-'}>
            <h2>Post: {id}</h2>
        </div>
    )
}

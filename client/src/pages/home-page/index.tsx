import React from 'react'
import Left from './Left'
import Right from './Right'
import PostCard from '@/features/post/components/PostCard'

const HomePage = () => {
  return (
    <div className="flex items-start gap-6">
      <Left />
      <section className="flex-1 max-w-xl mx-auto">
        {/* posts */}
        <div className="space-y-6">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </section>
      <Right />
    </div>
  )
}

export default HomePage

import Left from './Left'
import Right from './Right'
import PostCard from '@/features/post/components/PostCard'
import StoryCard from '@/features/story/components/StoryCard'
import StoryCardButton from '@/features/story/components/StoryCardButton'
import WrapperComponent from '@/components/layout/WrapperComponent'
import PostCardButton from '@/features/post/components/PostCardButton'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useStoryStore } from '@/features/story/stores/story.store'
import { useQuery } from '@tanstack/react-query'
import { usePostStore } from '@/features/post/stores/post.store'

const HomePage = () => {
  const { getAll: getStories, datas: stories } = useStoryStore()
  const getStoriesResult = useQuery({
    queryKey: ['stories'],
    queryFn: async () => await getStories(),
  })
  const { getAll: getPosts, datas: posts } = usePostStore()
  const getPostsResult = useQuery({
    queryKey: ['posts'],
    queryFn: async () => await getPosts(),
  })
  return (
    <WrapperComponent className="flex items-start gap-6">
      <Left />
      <section className="flex-1 max-w-xl mx-auto space-y-6 overflow-hidden">
        {/* stories */}
        <Swiper
          spaceBetween={8}
          slidesPerView={3}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide>
            <StoryCardButton />
          </SwiperSlide>
          {stories.map((item) => (
            <SwiperSlide key={item._id}>
              <StoryCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <PostCardButton />
        {/* posts */}
        <div className="space-y-4">
          {posts.map((item) => (
            <PostCard key={item._id} data={item} />
          ))}
        </div>
      </section>
      <Right />
    </WrapperComponent>
  )
}

export default HomePage

import Left from './Left'
import Right from './Right'
import PostCard from '@/features/post/components/PostCard'
import StoryCard from '@/features/story/components/StoryCard'
import StoryCardButton from '@/features/story/components/StoryCardButton'
import WrapperComponent from '@/components/layout/WrapperComponent'
import PostCardButton from '@/features/post/components/PostCardButton'
import { Swiper, SwiperSlide } from 'swiper/react'

const HomePage = () => {
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
          {Array.from({ length: 10 }).map((item, idx) => (
            <SwiperSlide key={idx}>
              <StoryCard />
            </SwiperSlide>
          ))}
        </Swiper>

        <PostCardButton />
        {/* posts */}
        <div className="space-y-4">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </section>
      <Right />
    </WrapperComponent>
  )
}

export default HomePage

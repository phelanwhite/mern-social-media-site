import { Button } from '@/components/ui/button'
import { IMAGE_NOTFOUND } from '@/constants/image.constant'
import { postGetUserIdApi, postGetUserIdPhotoApi } from '@/services/post.api'
import { userGetIdApi } from '@/services/user.api'
import { useQuery } from '@tanstack/react-query'
import React, { useMemo } from 'react'
import { FaBirthdayCake } from 'react-icons/fa'
import {
  MdDateRange,
  MdEmail,
  MdLocationOn,
  MdOutlineWork,
} from 'react-icons/md'
import { CgArrowsExchangeV } from 'react-icons/cg'
import { GiGraduateCap } from 'react-icons/gi'
import { useParams } from 'react-router-dom'
import PostCard from '@/features/post/components/PostCard'
import PostCardButton from '@/features/post/components/PostCardButton'

const ProfileIdPage = () => {
  const { id } = useParams()
  const getUserGetIdResult = useQuery({
    queryKey: ['profile', id],
    queryFn: async () => await userGetIdApi(id as string),
    enabled: !!id,
  })
  const getPostGetUserIdPhotoResult = useQuery({
    queryKey: ['photo', id],
    queryFn: async () => await postGetUserIdPhotoApi(id as string, '_limit=9'),
    enabled: !!id,
  })
  const getPostGetUserIdResult = useQuery({
    queryKey: ['post', id],
    queryFn: async () => await postGetUserIdApi(id as string),
    enabled: !!id,
  })

  // custom data
  const userData = getUserGetIdResult.data?.data
  const introData = useMemo(() => {
    if (!userData) return []
    return [
      { label: 'Email', value: userData.email, icon: <MdEmail /> },
      { label: 'Address', value: userData.address, icon: <MdLocationOn /> },
      {
        label: 'Birthday',
        value: userData.birthday && new Date(userData.birthday).toDateString(),
        icon: <FaBirthdayCake />,
      },
      { label: 'Gender', value: userData.gender, icon: <CgArrowsExchangeV /> },
      {
        label: 'Education',
        value: userData.education,
        icon: <GiGraduateCap />,
      },
      {
        label: 'Work',
        value: userData.work,
        icon: <MdOutlineWork />,
      },
      {
        label: 'Join',
        value:
          userData.createdAt && new Date(userData.createdAt).toDateString(),
        icon: <MdDateRange />,
      },
    ]
  }, [userData])
  return (
    <div>
      {/* banner */}
      <div className="bg-bgColorBox">
        <div className="max-h-[400px] max-w-[1096px] w-full aspect-video mx-auto rounded-lg overflow-hidden">
          <img
            src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/481248403_2078956425883353_3743163190464826134_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=nrn3fIjSFVwQ7kNvgG3pdX-&_nc_oc=AdnUY3_m8X1fYz9xOxoLmMKs4peu_5vJs0Jt4fbnKFX-ptvXl8zxbOlwNXPA-NyWS7Y&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=WmrC0grtJdGQw_FFqp8nKQ&oh=00_AYFXDiZdnra79zs-mv3_NhRprHff4pHmx5M3BMrI_WmQfw&oe=67E2F897"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="max-w-[1032px] w-full mx-auto flex flex-col items-center relative">
          {/* avatar */}
          <div className="absolute top-0 -translate-y-[50%] p-1 w-max rounded-full overflow-hidden bg-bgColorBox">
            <div className="w-44 aspect-square overflow-hidden rounded-full">
              <img
                src={userData?.avatar || IMAGE_NOTFOUND.AVATAR_NOTFOUND}
                alt={userData?.avatar || IMAGE_NOTFOUND.AVATAR_NOTFOUND}
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-20 space-y-4 py-4">
            {/* info */}
            <div className=" text-center">
              <h3>
                <span className="font-bold">{userData?.name}</span>
                <span>({userData?.nickName})</span>
              </h3>
              <p>4.4K friends</p>
            </div>
            {/* actions */}
            <div className="space-x-4">
              <Button>Add friend</Button>
              <Button>Message</Button>
            </div>
          </div>
        </div>
      </div>
      {/* posts */}
      <div className="mt-6 max-w-[1032px] w-full mx-auto flex items-start gap-6">
        {/* left */}
        <div className="max-w-xs w-full space-y-4">
          {/* intro */}
          <div className="bg-bgColorBox p-3 rounded-lg">
            <h4 className="mb-2">Intro</h4>
            <div
              className="whitespace-break-spaces text-center border-b pb-2"
              dangerouslySetInnerHTML={{ __html: userData?.bio || '' }}
            ></div>
            <ul className="mt-4 space-y-2">
              {introData.map(({ label, value, icon }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="text-base">{icon}</span>
                  <p className="flex-1">
                    <span className="font-medium">{label}: </span>
                    {value}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          {/* photo */}
          <div className="bg-bgColorBox p-3 rounded-lg">
            <h4 className="mb-2">Photo</h4>
            <ul className="grid gap-2 grid-cols-3">
              {getPostGetUserIdPhotoResult.data?.data.results.map((item) => (
                <li
                  key={item._id}
                  className="w-full aspect-square overflow-hidden rounded"
                >
                  <img src={item.file_url} alt={item.file_url} loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* right */}
        <div className="flex-1 space-y-4">
          <PostCardButton />
          {getPostGetUserIdResult.data?.data.results.map((item) => (
            <PostCard key={item._id} data={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileIdPage

import { Avatar, AvatarProps } from '@radix-ui/react-avatar'

import { FC } from 'react'
import { AvatarFallback } from './ui/Avatar'
import Image from 'next/image'
import { Icons } from './Icons'
import { User } from 'next-auth'


interface UserAvatarProps extends AvatarProps {
    user: Pick<User, 'name' | 'image'>
}

const UserAvatar: FC<UserAvatarProps> = ({user, ...props}) => {
    console.log(user.image)
  return (
    <Avatar {...props}>
      {/* {user.image ? (
        <div className='relative aspect-square h-full w-full'>
          <Image
            fill
            src={user.image}
            alt='profile picture'
            referrerPolicy='no-referrer'
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className='sr-only'>{user?.name}</span>
          <Icons.user className='h-4 w-4' />
        </AvatarFallback>
      )} */}
      <AvatarFallback>
        <span className='sr-only'>{user?.name}</span>
        <Icons.user className='h-6 w-6' />
      </AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar
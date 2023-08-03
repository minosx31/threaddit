import { Avatar, AvatarProps } from '@radix-ui/react-avatar'

import { FC } from 'react'
import { AvatarFallback, AvatarImage } from './ui/Avatar'
import { Icons } from './Icons'
import { User } from 'next-auth'

interface UserAvatarProps extends AvatarProps {
    user: Pick<User, 'name' | 'image'>
}

const UserAvatar: FC<UserAvatarProps> = ({user, ...props}) => {
  return (
    <Avatar>
      {user.image ? (
        <AvatarImage {...props} src={user.image} alt='profile picture' />
      ) : null}
      <AvatarFallback delayMs={600}>
        <span className='sr-only'>{user?.name}</span>
        <Icons.user className='h-6 w-6' />
      </AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar
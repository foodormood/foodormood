import React from 'react';
import Image from 'next/image';
import { BellIcon,
        ChatIcon,
        ChevronDownIcon,
        HomeIcon,
        UserGroupIcon,
        ViewGridIcon
     } from '@heroicons/react/solid';
import { FlagIcon,
         PlayIcon,
         SearchIcon,
         ShoppingCartIcon
    } from '@heroicons/react/outline';

import HeaderIcon from './HeaderIcon';
import { auth } from '../app/firebaseApp';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';

function Header() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-1 lg:px-5 shadow-md">
        {/* Left */}
       <div className="flex items-center">
           <Image src="https://links.papareact.com/5me" width={40} height={40} layout="fixed"/>
           <div className="flex ml-2 items-center rounded-full bg-gray-100">
            <SearchIcon className="h-5 text-gray-600 ml-2"/>
            <input className="h-10 hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
             placeholder='Search Food'></input>
          </div>
       </div>

       {/* Center */}
       <div className="flex justify-center flex-grow">
            <div className="hidden md:inline-flex space-x-6 md:space-x-2">
                <HeaderIcon active Icon={HomeIcon}/>
                <HeaderIcon Icon={FlagIcon}/>
                <HeaderIcon Icon={PlayIcon}/>
                <HeaderIcon Icon={ShoppingCartIcon}/>
                <HeaderIcon Icon={UserGroupIcon}/>
            </div>
       </div>
       
       {/* Right */}
       <div className="flex items-center sm:space-x-2 justify-end">
           {auth && auth.currentUser && 
           <div className="flex items-center cursor-pointer rounded-full hover:bg-gray-200">
                <Image src={auth.currentUser.photoURL} width={40} height={40} layout="fixed" className="rounded-full"/>
                <p className="whitespace-nowrap font-semibold pr-3 ml-2">{auth.currentUser.displayName}</p>
           </div>
           }
           <ViewGridIcon className="icon"/>
           <BellIcon className="icon"/>
           {auth && auth.currentUser && <ChevronDownIcon className="icon" onClick={() => {
                  auth.signOut();
                  router.push('/login');
                  }}/>}
       </div>
    </div>
  )
}

export default Header;
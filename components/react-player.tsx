import dynamic from 'next/dynamic'

// Workaround for https://github.com/cookpete/react-player/issues/1428#issuecomment-1107908096
export const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

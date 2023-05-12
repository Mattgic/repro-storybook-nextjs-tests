import { useRouter } from 'next/router'

const MyComp = () => {
  const { path } = useRouter()
  console.log('path', path)
  return <div>Path : {path}</div>
}
export default {
  component: MyComp,
  parameters: {
    // Param for @storybook/nextjs framework
    nextjs: {
      router: {
        path: '/toto1',
      },
    },
    // Param for storybook-addon-next-router addon
    nextRouter: {
      path: '/toto2',
    },
  },
}
export const Default = {}

'use client';

import { useRouter } from 'next/navigation';
import { RouterProvider as AriaRouterProvider } from 'react-aria-components';

declare module 'react-aria-components' {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>['push']>[1]
    >;
  }
}

type AppRouterProviderProps = {
  children: React.ReactNode;
};

const AppRouterProvider = ({ children }: AppRouterProviderProps) => {
  const router = useRouter();

  return (
    <AriaRouterProvider navigate={router.push}>{children}</AriaRouterProvider>
  );
};

export { AppRouterProvider };
export type { AppRouterProviderProps };

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/root'
import { Route as postsPostsImport } from './routes/posts/posts'
import { Route as layoutFirstLayoutImport } from './routes/layout/first-layout'
import { Route as homeImport } from './routes/home'
import { Route as postsPostsDetailImport } from './routes/posts/posts-detail'
import { Route as layoutSecondLayoutImport } from './routes/layout/second-layout'
import { Route as postsPostsHomeImport } from './routes/posts/posts-home'
import { Route as ClassicHelloRouteImport } from './routes/file-based-subtree/hello/route'
import { Route as ClassicHelloIndexImport } from './routes/file-based-subtree/hello/index'
import { Route as ClassicHelloWorldImport } from './routes/file-based-subtree/hello/world'
import { Route as ClassicHelloUniverseImport } from './routes/file-based-subtree/hello/universe'
import { Route as bImport } from './routes/b'
import { Route as aImport } from './routes/a'

// Create/Update Routes

const postsPostsRoute = postsPostsImport.update({
  id: '/posts',
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)

const layoutFirstLayoutRoute = layoutFirstLayoutImport.update({
  id: '/_first',
  getParentRoute: () => rootRoute,
} as any)

const homeRoute = homeImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const postsPostsDetailRoute = postsPostsDetailImport.update({
  id: '/$postId',
  path: '/$postId',
  getParentRoute: () => postsPostsRoute,
} as any)

const layoutSecondLayoutRoute = layoutSecondLayoutImport.update({
  id: '/_second',
  getParentRoute: () => layoutFirstLayoutRoute,
} as any)

const postsPostsHomeRoute = postsPostsHomeImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => postsPostsRoute,
} as any)

const ClassicHelloRouteRoute = ClassicHelloRouteImport.update({
  id: '/classic/hello',
  path: '/classic/hello',
  getParentRoute: () => rootRoute,
} as any)

const ClassicHelloIndexRoute = ClassicHelloIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => ClassicHelloRouteRoute,
} as any)

const ClassicHelloWorldRoute = ClassicHelloWorldImport.update({
  id: '/world',
  path: '/world',
  getParentRoute: () => ClassicHelloRouteRoute,
} as any)

const ClassicHelloUniverseRoute = ClassicHelloUniverseImport.update({
  id: '/universe',
  path: '/universe',
  getParentRoute: () => ClassicHelloRouteRoute,
} as any)

const bRoute = bImport.update({
  id: '/layout-b',
  path: '/layout-b',
  getParentRoute: () => layoutSecondLayoutRoute,
} as any)

const aRoute = aImport.update({
  id: '/layout-a',
  path: '/layout-a',
  getParentRoute: () => layoutSecondLayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/solid-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof homeImport
      parentRoute: typeof rootRoute
    }
    '/_first': {
      id: '/_first'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof layoutFirstLayoutImport
      parentRoute: typeof rootRoute
    }
    '/posts': {
      id: '/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof postsPostsImport
      parentRoute: typeof rootRoute
    }
    '/classic/hello': {
      id: '/classic/hello'
      path: '/classic/hello'
      fullPath: '/classic/hello'
      preLoaderRoute: typeof ClassicHelloRouteImport
      parentRoute: typeof rootRoute
    }
    '/posts/': {
      id: '/posts/'
      path: '/'
      fullPath: '/posts/'
      preLoaderRoute: typeof postsPostsHomeImport
      parentRoute: typeof postsPostsImport
    }
    '/_first/_second': {
      id: '/_first/_second'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof layoutSecondLayoutImport
      parentRoute: typeof layoutFirstLayoutImport
    }
    '/posts/$postId': {
      id: '/posts/$postId'
      path: '/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof postsPostsDetailImport
      parentRoute: typeof postsPostsImport
    }
    '/_first/_second/layout-a': {
      id: '/_first/_second/layout-a'
      path: '/layout-a'
      fullPath: '/layout-a'
      preLoaderRoute: typeof aImport
      parentRoute: typeof layoutSecondLayoutImport
    }
    '/_first/_second/layout-b': {
      id: '/_first/_second/layout-b'
      path: '/layout-b'
      fullPath: '/layout-b'
      preLoaderRoute: typeof bImport
      parentRoute: typeof layoutSecondLayoutImport
    }
    '/classic/hello/universe': {
      id: '/classic/hello/universe'
      path: '/universe'
      fullPath: '/classic/hello/universe'
      preLoaderRoute: typeof ClassicHelloUniverseImport
      parentRoute: typeof ClassicHelloRouteImport
    }
    '/classic/hello/world': {
      id: '/classic/hello/world'
      path: '/world'
      fullPath: '/classic/hello/world'
      preLoaderRoute: typeof ClassicHelloWorldImport
      parentRoute: typeof ClassicHelloRouteImport
    }
    '/classic/hello/': {
      id: '/classic/hello/'
      path: '/'
      fullPath: '/classic/hello/'
      preLoaderRoute: typeof ClassicHelloIndexImport
      parentRoute: typeof ClassicHelloRouteImport
    }
  }
}

// Create and export the route tree

interface layoutSecondLayoutRouteChildren {
  aRoute: typeof aRoute
  bRoute: typeof bRoute
}

const layoutSecondLayoutRouteChildren: layoutSecondLayoutRouteChildren = {
  aRoute: aRoute,
  bRoute: bRoute,
}

const layoutSecondLayoutRouteWithChildren =
  layoutSecondLayoutRoute._addFileChildren(layoutSecondLayoutRouteChildren)

interface layoutFirstLayoutRouteChildren {
  layoutSecondLayoutRoute: typeof layoutSecondLayoutRouteWithChildren
}

const layoutFirstLayoutRouteChildren: layoutFirstLayoutRouteChildren = {
  layoutSecondLayoutRoute: layoutSecondLayoutRouteWithChildren,
}

const layoutFirstLayoutRouteWithChildren =
  layoutFirstLayoutRoute._addFileChildren(layoutFirstLayoutRouteChildren)

interface postsPostsRouteChildren {
  postsPostsHomeRoute: typeof postsPostsHomeRoute
  postsPostsDetailRoute: typeof postsPostsDetailRoute
}

const postsPostsRouteChildren: postsPostsRouteChildren = {
  postsPostsHomeRoute: postsPostsHomeRoute,
  postsPostsDetailRoute: postsPostsDetailRoute,
}

const postsPostsRouteWithChildren = postsPostsRoute._addFileChildren(
  postsPostsRouteChildren,
)

interface ClassicHelloRouteRouteChildren {
  ClassicHelloUniverseRoute: typeof ClassicHelloUniverseRoute
  ClassicHelloWorldRoute: typeof ClassicHelloWorldRoute
  ClassicHelloIndexRoute: typeof ClassicHelloIndexRoute
}

const ClassicHelloRouteRouteChildren: ClassicHelloRouteRouteChildren = {
  ClassicHelloUniverseRoute: ClassicHelloUniverseRoute,
  ClassicHelloWorldRoute: ClassicHelloWorldRoute,
  ClassicHelloIndexRoute: ClassicHelloIndexRoute,
}

const ClassicHelloRouteRouteWithChildren =
  ClassicHelloRouteRoute._addFileChildren(ClassicHelloRouteRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof homeRoute
  '': typeof layoutSecondLayoutRouteWithChildren
  '/posts': typeof postsPostsRouteWithChildren
  '/classic/hello': typeof ClassicHelloRouteRouteWithChildren
  '/posts/': typeof postsPostsHomeRoute
  '/posts/$postId': typeof postsPostsDetailRoute
  '/layout-a': typeof aRoute
  '/layout-b': typeof bRoute
  '/classic/hello/universe': typeof ClassicHelloUniverseRoute
  '/classic/hello/world': typeof ClassicHelloWorldRoute
  '/classic/hello/': typeof ClassicHelloIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof homeRoute
  '': typeof layoutSecondLayoutRouteWithChildren
  '/posts': typeof postsPostsHomeRoute
  '/posts/$postId': typeof postsPostsDetailRoute
  '/layout-a': typeof aRoute
  '/layout-b': typeof bRoute
  '/classic/hello/universe': typeof ClassicHelloUniverseRoute
  '/classic/hello/world': typeof ClassicHelloWorldRoute
  '/classic/hello': typeof ClassicHelloIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof homeRoute
  '/_first': typeof layoutFirstLayoutRouteWithChildren
  '/posts': typeof postsPostsRouteWithChildren
  '/classic/hello': typeof ClassicHelloRouteRouteWithChildren
  '/posts/': typeof postsPostsHomeRoute
  '/_first/_second': typeof layoutSecondLayoutRouteWithChildren
  '/posts/$postId': typeof postsPostsDetailRoute
  '/_first/_second/layout-a': typeof aRoute
  '/_first/_second/layout-b': typeof bRoute
  '/classic/hello/universe': typeof ClassicHelloUniverseRoute
  '/classic/hello/world': typeof ClassicHelloWorldRoute
  '/classic/hello/': typeof ClassicHelloIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/posts'
    | '/classic/hello'
    | '/posts/'
    | '/posts/$postId'
    | '/layout-a'
    | '/layout-b'
    | '/classic/hello/universe'
    | '/classic/hello/world'
    | '/classic/hello/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/posts'
    | '/posts/$postId'
    | '/layout-a'
    | '/layout-b'
    | '/classic/hello/universe'
    | '/classic/hello/world'
    | '/classic/hello'
  id:
    | '__root__'
    | '/'
    | '/_first'
    | '/posts'
    | '/classic/hello'
    | '/posts/'
    | '/_first/_second'
    | '/posts/$postId'
    | '/_first/_second/layout-a'
    | '/_first/_second/layout-b'
    | '/classic/hello/universe'
    | '/classic/hello/world'
    | '/classic/hello/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  homeRoute: typeof homeRoute
  layoutFirstLayoutRoute: typeof layoutFirstLayoutRouteWithChildren
  postsPostsRoute: typeof postsPostsRouteWithChildren
  ClassicHelloRouteRoute: typeof ClassicHelloRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  homeRoute: homeRoute,
  layoutFirstLayoutRoute: layoutFirstLayoutRouteWithChildren,
  postsPostsRoute: postsPostsRouteWithChildren,
  ClassicHelloRouteRoute: ClassicHelloRouteRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* eslint-disable */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as AboutRouteImport } from './routes/about'
import { Route as ContactRouteImport } from './routes/contact'
import { Route as ServicesWebDevRouteImport } from './routes/services/web-development'
import { Route as ServicesAIRouteImport } from './routes/services/ai-integration'
import { Route as ServicesAutomationRouteImport } from './routes/services/process-automation'
import { Route as ServicesIntegrationRouteImport } from './routes/services/systems-integration'
import { Route as ServicesAdsRouteImport } from './routes/services/meta-google-ads'
import { Route as ServicesGTMRouteImport } from './routes/services/gtm-engineering'

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

const AboutRoute = AboutRouteImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRouteImport,
} as any)

const ContactRoute = ContactRouteImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRouteImport,
} as any)

const ServicesWebDevRoute = ServicesWebDevRouteImport.update({
  id: '/services/web-development',
  path: '/services/web-development',
  getParentRoute: () => rootRouteImport,
} as any)

const ServicesAIRoute = ServicesAIRouteImport.update({
  id: '/services/ai-integration',
  path: '/services/ai-integration',
  getParentRoute: () => rootRouteImport,
} as any)

const ServicesAutomationRoute = ServicesAutomationRouteImport.update({
  id: '/services/process-automation',
  path: '/services/process-automation',
  getParentRoute: () => rootRouteImport,
} as any)

const ServicesIntegrationRoute = ServicesIntegrationRouteImport.update({
  id: '/services/systems-integration',
  path: '/services/systems-integration',
  getParentRoute: () => rootRouteImport,
} as any)

const ServicesAdsRoute = ServicesAdsRouteImport.update({
  id: '/services/meta-google-ads',
  path: '/services/meta-google-ads',
  getParentRoute: () => rootRouteImport,
} as any)

const ServicesGTMRoute = ServicesGTMRouteImport.update({
  id: '/services/gtm-engineering',
  path: '/services/gtm-engineering',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/services/web-development': typeof ServicesWebDevRoute
  '/services/ai-integration': typeof ServicesAIRoute
  '/services/process-automation': typeof ServicesAutomationRoute
  '/services/systems-integration': typeof ServicesIntegrationRoute
  '/services/meta-google-ads': typeof ServicesAdsRoute
  '/services/gtm-engineering': typeof ServicesGTMRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/services/web-development': typeof ServicesWebDevRoute
  '/services/ai-integration': typeof ServicesAIRoute
  '/services/process-automation': typeof ServicesAutomationRoute
  '/services/systems-integration': typeof ServicesIntegrationRoute
  '/services/meta-google-ads': typeof ServicesAdsRoute
  '/services/gtm-engineering': typeof ServicesGTMRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/services/web-development': typeof ServicesWebDevRoute
  '/services/ai-integration': typeof ServicesAIRoute
  '/services/process-automation': typeof ServicesAutomationRoute
  '/services/systems-integration': typeof ServicesIntegrationRoute
  '/services/meta-google-ads': typeof ServicesAdsRoute
  '/services/gtm-engineering': typeof ServicesGTMRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/contact' | '/services/web-development' | '/services/ai-integration' | '/services/process-automation' | '/services/systems-integration' | '/services/meta-google-ads' | '/services/gtm-engineering'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/contact' | '/services/web-development' | '/services/ai-integration' | '/services/process-automation' | '/services/systems-integration' | '/services/meta-google-ads' | '/services/gtm-engineering'
  id: '__root__' | '/' | '/about' | '/contact' | '/services/web-development' | '/services/ai-integration' | '/services/process-automation' | '/services/systems-integration' | '/services/meta-google-ads' | '/services/gtm-engineering'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  ContactRoute: typeof ContactRoute
  ServicesWebDevRoute: typeof ServicesWebDevRoute
  ServicesAIRoute: typeof ServicesAIRoute
  ServicesAutomationRoute: typeof ServicesAutomationRoute
  ServicesIntegrationRoute: typeof ServicesIntegrationRoute
  ServicesAdsRoute: typeof ServicesAdsRoute
  ServicesGTMRoute: typeof ServicesGTMRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/services/web-development': {
      id: '/services/web-development'
      path: '/services/web-development'
      fullPath: '/services/web-development'
      preLoaderRoute: typeof ServicesWebDevRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/services/ai-integration': {
      id: '/services/ai-integration'
      path: '/services/ai-integration'
      fullPath: '/services/ai-integration'
      preLoaderRoute: typeof ServicesAIRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/services/process-automation': {
      id: '/services/process-automation'
      path: '/services/process-automation'
      fullPath: '/services/process-automation'
      preLoaderRoute: typeof ServicesAutomationRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/services/systems-integration': {
      id: '/services/systems-integration'
      path: '/services/systems-integration'
      fullPath: '/services/systems-integration'
      preLoaderRoute: typeof ServicesIntegrationRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/services/meta-google-ads': {
      id: '/services/meta-google-ads'
      path: '/services/meta-google-ads'
      fullPath: '/services/meta-google-ads'
      preLoaderRoute: typeof ServicesAdsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/services/gtm-engineering': {
      id: '/services/gtm-engineering'
      path: '/services/gtm-engineering'
      fullPath: '/services/gtm-engineering'
      preLoaderRoute: typeof ServicesGTMRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  ServicesWebDevRoute,
  ServicesAIRoute,
  ServicesAutomationRoute,
  ServicesIntegrationRoute,
  ServicesAdsRoute,
  ServicesGTMRoute,
}

export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

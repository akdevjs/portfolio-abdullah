declare module 'react-router-dom' {
  import * as React from 'react';

  export interface BrowserRouterProps {
    basename?: string;
    children?: React.ReactNode;
    window?: Window;
  }

  export interface SwitchProps {
    children?: React.ReactNode;
    location?: any;
  }

  export interface RouteProps {
    path?: string | string[];
    exact?: boolean;
    sensitive?: boolean;
    strict?: boolean;
    component?: React.ComponentType<any>;
    render?: (props: any) => React.ReactNode;
    children?: React.ReactNode | ((props: any) => React.ReactNode);
    location?: any;
  }

  export interface LinkProps {
    to: string | any;
    replace?: boolean;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
  }

  export interface RouteComponentProps<P = {}> {
    history: any;
    location: any;
    match: {
      params: P;
      isExact: boolean;
      path: string;
      url: string;
    };
  }

  export class BrowserRouter extends React.Component<BrowserRouterProps> {}
  export class Switch extends React.Component<SwitchProps> {}
  export class Route extends React.Component<RouteProps> {}
  export class Link extends React.Component<LinkProps> {}

  export function useParams<T = {}>(): T;
  export function useHistory(): any;
  export function useLocation(): any;
  export function useRouteMatch(): any;
}

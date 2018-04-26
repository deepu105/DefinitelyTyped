import { CSSModule } from '../index';

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  tag?: string;
  className?: string;
  cssModule?: CSSModule;
  [others: string]: any;
}

declare const Breadcrumb: React.StatelessComponent<BreadcrumbProps>;
export default Breadcrumb;

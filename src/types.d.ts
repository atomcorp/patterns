export type routesType = {
  [key: string]: {
    path: string;
    name: string;
    component: React.FC;
  };
};

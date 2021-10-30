import { TruthOrLieProvider } from './truth_or_lie_provider';

type TylerAuerProviderPropsType = {
  children: React.ReactNode;
};

export const TylerAuerProvider = ({ children }: TylerAuerProviderPropsType) => (
  <TruthOrLieProvider>{children}</TruthOrLieProvider>
);

import { createConfig } from 'wagmi';
import { http } from 'viem';
import { mainnet, optimism, base, baseSepolia } from 'viem/chains';

export const config = createConfig({
  chains: [baseSepolia],
  multiInjectedProviderDiscovery: false,
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [optimism.id]: http(),
    [base.id]: http(),
  },
});

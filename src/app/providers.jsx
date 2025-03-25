"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

{
	/* Global wrapper to include react query in all parts of the site */
}
export default function Providers({ children }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 1000 * 60 * 5, // Cache data for 5 mins
						gcTime: 1000 * 60 * 10, // Keep inactive queries in cache for 10 mins
						refetchOnWindowFocus: false, // Don't automatically refetch on window focus
					},
				},
			})
	);
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
}

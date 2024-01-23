import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Header from './Components/Header/Header'
import './Utils/helpers/i18/i18n'
import Home from './Views/Home/Home'
import './index.css'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<RecoilRoot>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route element={<Header />}>
						<Route index element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	</RecoilRoot>
)

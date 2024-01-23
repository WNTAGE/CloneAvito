import { useTranslation } from 'react-i18next'
import Container from '../../сomponents/Container/Container'

const Home = () => {
	const { t } = useTranslation()
	return <Container>{t('example')}</Container>
}

export default Home

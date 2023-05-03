import type { PageContextBuiltIn } from 'vite-plugin-ssr/types'
import { RenderErrorPage } from 'vite-plugin-ssr/RenderErrorPage'
import { faker } from '@faker-js/faker';
export { onBeforeRender }
export { prerender }

const generateRandomNfts = () => {
    return Array(10).fill(1).map((item, index) => ({
        id: index + 1,
        name: faker.internet.domainName(),
    }))
}

const nfts = generateRandomNfts();

async function onBeforeRender(pageContext: PageContextBuiltIn) {
    const { name } = pageContext.routeParams
    if (name !== 'anonymous' && !nfts.find((item) => item.id === Number(name))) {
        const errorInfo = `Unknown name: ${name}.`
        throw RenderErrorPage({ pageContext: { pageProps: { errorInfo } } })
    }
    const pageProps = { name }
    
    return {
        pageContext: {
            pageProps
        }
    }
}

function prerender(): string[] {
    return ['/detail', ...nfts.map((name) => `/detail/${name}`)]
}

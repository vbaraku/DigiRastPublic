// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBrandChrome, IconHelp, IconSitemap, IconWriting, IconAd2, IconChartLine } from '@tabler/icons';

// constant
const icons = {
    IconBrandChrome,
    IconWriting,
    IconAd2,
    IconHelp,
    IconSitemap,
    IconChartLine
};
const language = localStorage.getItem('language') || 'en';
// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: language === 'gr' ? 'Σελίδα εγγραφής' : language === 'it' ? 'Pagina di registrazione' : language === 'pl'? 'Strona rejestracji' : 'Registration page',
            type: 'item',
            url: '/registration',
            icon: icons.IconWriting,
            breadcrumbs: false
        },
        {
            id: 'documentation',
            title: language === 'gr' ? 'Ερωτηματολόγιο αυτοαξιολόγησης' : language === 'it' ? 'Questionario di autovalutazione' : language === 'pl'? 'Kwestionariusz samooceny' : 'Self-assessment questionnaire',
            type: 'item',
            url: '/selfassess',
            icon: icons.IconAd2,
            breadcrumbs: false
        },
        {
            id: 'roadmap',
            title: language === 'gr' ? 'Γραφήματα και γραφήματα' : language === 'it' ? 'Grafici e diagrammi' : language === 'pl'? 'Wykresy i diagramy' : 'Graphs and charts',
            type: 'item',
            url: '/graphs',
            icon: icons.IconChartLine,
            breadcrumbs: false
        }
    ]
};

export default other;

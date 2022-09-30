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

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: <FormattedMessage id="sample-page" />,
            type: 'item',
            url: '/registration',
            icon: icons.IconWriting,
            breadcrumbs: false
        },
        {
            id: 'documentation',
            title: <FormattedMessage id="documentation" />,
            type: 'item',
            url: '/selfassess',
            icon: icons.IconAd2,
            breadcrumbs: false
        },
        {
            id: 'roadmap',
            title: <FormattedMessage id="graphs" />,
            type: 'item',
            url: '/graphs',
            icon: icons.IconChartLine,
            breadcrumbs: false
        }
    ]
};

export default other;

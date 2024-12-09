import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';
import MyCustomApps from './fetch-my-custom-apps.setting.graphql';
import { OrganizationResponse } from './types/organization';
import { useApplicationContext, useMcQuery } from '@commercetools-frontend/application-shell-connectors';
import { MyCustomApplication } from './types/app';

export const useOrganization = () => {

    const { applicationId } = useApplicationContext(context => context.environment);

    const {
        data: myAppsData,
    } = useMcQuery<{
        myCustomApplications: MyCustomApplication[];
    }>(MyCustomApps, {
        context: {
            target: GRAPHQL_TARGETS.SETTINGS_SERVICE,
        },
    });

    const myApp = myAppsData?.myCustomApplications.find((app) => app.id === applicationId);

    return {
        organizationId: myApp?.organizationId,
    };
};
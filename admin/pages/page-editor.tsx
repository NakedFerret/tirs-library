import React from 'react';
import { PageContainer } from '@keystone-6/core/admin-ui/components';
import { Heading } from '@keystone-ui/core';

export default function CustomPage () {
    return (
        <PageContainer header={<Heading type="h3">Custom Page</Heading>}>
            <h1>Create a Page</h1>
            <p>It can be accessed via the route <a href="/custom-page">/custom-page</a></p>
        </PageContainer>
    )
}
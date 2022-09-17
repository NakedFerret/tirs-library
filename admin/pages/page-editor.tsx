import React, { useEffect } from 'react';
import { PageContainer } from '@keystone-6/core/admin-ui/components';
import { Heading } from '@keystone-ui/core';
import { Counter } from 'tirs-widgets';

const SVELTE_TARGET = 'svelte-render-targe';

export default function CustomPage () {

    useEffect(() => {
        const target = document.querySelector(`#${SVELTE_TARGET}`);
        const app = new Counter({target: target});
        console.log('Render counter', app);
    }, []);

    return (
        <PageContainer header={<Heading type="h3">Custom Page</Heading>}>
            <h1>Create a Page</h1>
            <p>It can be accessed via the route <a href="/custom-page">/custom-page</a></p>
            <div id={SVELTE_TARGET}/>
        </PageContainer>
    )
}
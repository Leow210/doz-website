// src/components/withSiteContent.jsx
import React from 'react';
import { siteContent } from '../data/staticContent';

export const withSiteContent = (WrappedComponent) => {
    return function WithSiteContentComponent(props) {
        return <WrappedComponent {...props} content={siteContent} />;
    };
};

export const useSiteContent = () => {
    return { content: siteContent };
};

export default withSiteContent;
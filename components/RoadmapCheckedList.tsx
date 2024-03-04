
import { useEffect, useState } from 'react';


const features: { name: string; checked: boolean }[] = [
    { name: "Individual configuration", checked: true },
    { name: "No setup, or hidden fees", checked: true },
    { name: "Team size: 1 developer", checked: true },
    { name: "Premium support: 6 months", checked: true },
    { name: "Free updates: 6 months", checked: false }
];

class FeatureManager {
    private features: { name: string; checked: boolean }[];

    constructor(features: { name: string; checked: boolean }[]) {
        this.features = features;
    }

    toggleFeature(name: string): void {
        const feature = this.features.find(feature => feature.name === name);
        if (feature) {
            feature.checked = !feature.checked;
        }
    }

    getFeatures(): { name: string; checked: boolean }[] {
        return this.features;
    }
}

const featureManager = new FeatureManager(features);

export const Features = () => {
    const [featureManager, setFeatureManager] = useState(null);

    useEffect(() => {
        setFeatureManager(new FeatureManager(features));
    }, []);

    const toggleFeature = (name) => {
        if (featureManager) {
            featureManager.toggleFeature(name);
        }
    };

    const renderFeatures = () => {
        if (!featureManager) {
            return null;
        }

        return featureManager.getFeatures().map((feature, index) => (
            <li key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                {feature.checked ? (
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                ) : (
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-gray-500 dark:text-gray-400 rounded-sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <rect width="18" height="18" x="3" y="3" fill="none" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                )}
                <span>{feature.name}</span>
            </li>
        ));
    };

    return (
        <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
            {renderFeatures()}
        </ul>
    );
};
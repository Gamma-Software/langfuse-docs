import { useEffect, useState } from 'react';
import { useLocalizedMessages } from '@/lib/ParseLang';

class FeatureManager {
    private features: { name: string; checked: boolean }[];

    constructor(features: { name: string; checked: boolean }[] = []) {
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

    setFeatures(features: { name: string; checked: boolean }[]): void {
        this.features = features;
    }
}

export const Features = () => {
    const [featureManager, setFeatureManager] = useState(null);
    const messages = useLocalizedMessages();

    useEffect(() => {
        if (messages && messages.roadmap && messages.roadmap.features) {
            setFeatureManager(new FeatureManager(messages.roadmap.features));
        }
    }, [messages]); // Ensure useEffect runs whenever messages change

    const toggleFeature = (name) => {
        if (featureManager) {
            featureManager.toggleFeature(name);
        }
    };

    if (!messages) return null;

    const renderFeatures = (isChecked) => {
        if (!featureManager) {
            return null;
        }

        return featureManager.getFeatures().map((feature, index) => {
            if (feature.checked === isChecked) {
                return (
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
                );
            }
        });
    };

    return (
        <div className="flex">
            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                {renderFeatures(true)}
            </ul>
            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                {renderFeatures(false)}
            </ul>
        </div>
    );
};
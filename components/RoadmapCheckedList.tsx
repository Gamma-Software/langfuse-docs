
import { useEffect, useState } from 'react';


const features: { name: string; checked: boolean }[] = [
    { name: "Faciliter l’installation et la désinstallation", checked: true },
    { name: "Mettre en place la base de la déclaration", checked: true },
    { name: "Mise en place du système d’inventaire", checked: true },
    { name: "Récupération des ressources à distance (Artifactory / Nexus)", checked: true },
    { name: "Mise en cache des ressources distantes", checked: true },
    { name: "Dézipper une ressource", checked: true },
    { name: "Vérification de l’intégrité des ressources installée d’Artifactory et de Nexus", checked: true },
    { name: "Générer un PDF à partir d'un fichier Markdown", checked: true },
    { name: "Rendre configurable tous les paramètres du playbook", checked: true },
    { name: "Ignorer des fichiers du playbook à partir du fichier .amlignore", checked: true },
    { name: "Générer un résumé du package (version aiop, version du playbook, mouvements aiop, changements post-build)", checked: true },
    { name: "Mise en place du principe d’étapes de construction (lint, pre-build, build, post-build, seal, deploy) ", checked: true },
    { name: "Validation de la cible du package", checked: true },
    { name: "Interface en ligne de commande (CLI) sur Windows", checked: true },
    { name: "Interface en ligne de commande (CLI) sur Linux", checked: true },
    { name: "Interface en ligne de commande (CLI) sur MacOS", checked: true },
    { name: "Mise en place du système de logging", checked: true },
    { name: "Mise en place du système de Licensing", checked: true },
    { name: "Mise en place du système de Tâches personnalisées", checked: true },
    { name: "Mise en place du système de Plugin", checked: true },
    { name: "Améliorer l'intégration VSCode avec un schéma de validation de déclaration intégré", checked: true },
    // Todo: Add more features
    { name: "Comparer deux packages par commit et/ou cible", checked: false },
    { name: "Faire de Pydantic la base du typing pour toute l’application", checked: false },
    { name: "Ajout de l’auto-complétion de la CLI", checked: false },
    { name: "Obtenir la liste des systèmes cibles et les paramètres par command et en auto-complétion", checked: false },
    { name: "Faire un `dry-run` de la génération de build", checked: false },
    { name: "Stocker les logs en disque", checked: false },
    { name: "Upload du package dans les dépôts", checked: false },
    { name: "Créer des installeurs EXE (windows)", checked: false },
    { name: "Créer des installeurs TAR.GZ ou RPM (linux)", checked: false },
    { name: "Créer des installeurs DMG (macos)", checked: false },
    { name: "Créer des installeurs d’update partiels EXE (windows)", checked: false },
    { name: "Créer des installeurs d’update partiels TAR.GZ ou RPM (linux)", checked: false },
    { name: "Créer des installeurs d’update partiels DMG (macos)", checked: false },
    { name: "Traçabilité des packages par app cloud", checked: false },
    { name: "Ajout de statistiques locales", checked: false },
    { name: "Ajout de statistiques distantes", checked: false },
    { name: "Remonter automatiquement des erreurs vers Gitlab", checked: false },
    { name: "Utiliser pyinstaller pour le package en tant qu'exécutable autonome", checked: false },
    { name: "Créer une extension vscode avec AIOP et un schéma", checked: false },
    { name: "Core en Rust pour améliorer la rapidité", checked: false },
    { name: "AI: Pré-fixer les erreurs remonté par Aiop via de l’Intelligence Artificiel", checked: false },
    { name: "AI: Interagir avec un Chatbot pour manipuler les déclarations et aider à la génération des déclarations", checked: false },
    { name: "Créer des alias personnalisés dans les déclarations pour éviter de répéter des arguments", checked: false },
    { name: "CI: 🐳 Dockeriser Aiop", checked: false },
    { name: "CI: Faciliter l’intégration de Aiop dans la CI", checked: false },
    { name: "CI: Dockerfile base avec Aiop", checked: false },
    { name: "CLI: Manipulation des configurations via la CLI", checked: false },
    { name: "GUI: Windows", checked: false },
    { name: "GUI: Linux", checked: false },
    { name: "GUI: MacOS", checked: false },
    { name: "Cache des packages entiers", checked: false },
    { name: "Gestion des dépendances et versions", checked: false },
    { name: "CLI-GUI: Intégration de notification", checked: false },
    { name: "CLI-GUI: Gérer le multi-langue", checked: false },
    { name: "Hub: Créer un hub d’exemples de Playbook", checked: false },
    { name: "Hub: Créer un hub d’exemples de tâches personnalisées", checked: false },
    { name: "Hub: Créer un hub d’exemples de déclarations à mettre directement dans les playbook", checked: false },
    { name: "Cloud: Gestion des rôles et autorisation des équipes", checked: false },
    { name: "Cloud: Gestion personnelle de son compte", checked: false },
    { name: "Cloud: Gestion personnelle de son compte", checked: false },
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